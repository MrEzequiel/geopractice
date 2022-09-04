import { FC, useCallback, useEffect, useMemo, useState } from "react";

import { Box, Stack, Typography, Button } from "@mui/material";

import { CountryType } from "../../data/countries";
import { SlugContinents } from "../../data/continents";

import QuestionCard from "../QuestionCard";
import GameFinished from "../GameFinished";
import { GameData, GameListSlugs, GameQuestion } from "../../interfaces/Game";
import { KeyboardBackspace } from "@mui/icons-material";

const getRandomGamesQuestions = (
  dataGame: GameData[],
  quantity = 10
): GameQuestion[] => {
  const quantityQuestions = dataGame.length;
  const randomQuestionsIndexs: number[] = [];

  const getNumberRandom = () => Math.floor(Math.random() * quantityQuestions);

  while (randomQuestionsIndexs.length !== quantity) {
    let random = getNumberRandom();

    while (randomQuestionsIndexs.some((index) => index === random)) {
      random = getNumberRandom();
    }

    randomQuestionsIndexs.push(random);
  }

  return randomQuestionsIndexs.map((index) => ({
    ...dataGame[index],
    correct: false,
    revealed: false,
    cityResponse: null,
  }));
};

interface CarGameProps {
  quantity: number;
  dataGame: GameData[];
  title: string;
  continentSlug: SlugContinents | "all";
  onResetGame: () => void;
}

const GameEngine: FC<CarGameProps> = ({
  quantity,
  dataGame,
  title,
  continentSlug,
  onResetGame,
}) => {
  quantity = quantity >= dataGame.length ? dataGame.length : quantity;
  const [gameQuestions, setGameQuestions] = useState(() =>
    getRandomGamesQuestions(dataGame, quantity)
  );
  const [finishedGame, setFinishedGame] = useState(false);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = useMemo(
    () => gameQuestions[currentQuestionIndex],
    [currentQuestionIndex, gameQuestions]
  );

  const onSubmitQuestion = (city: CountryType) => {
    const correct = currentQuestion.city.code === city.code;

    setGameQuestions((prevGameQuestions) =>
      prevGameQuestions.map((gameQuestion, index) => {
        if (index === currentQuestionIndex) {
          return {
            ...gameQuestion,
            cityResponse: city,
            revealed: true,
            correct,
          };
        }
        return gameQuestion;
      })
    );
  };

  const nextQuestion = () => {
    const nextQuestion = gameQuestions[currentQuestionIndex + 1];

    if (!nextQuestion) {
      setFinishedGame(true);
      return;
    }

    setCurrentQuestionIndex((prev) => prev + 1);
  };

  const restartGame = () => {
    setCurrentQuestionIndex(0);
    setGameQuestions(getRandomGamesQuestions(dataGame, quantity));
    setFinishedGame(false);
  };

  const handleChangeDataGame = useCallback(() => {
    setGameQuestions((prevGameQuestions) => {
      return prevGameQuestions.map((gameQuestion) => ({
        ...gameQuestion,
        hint: dataGame.find(
          (data) => data.localization === gameQuestion.localization
        )!.hint,
      }));
    });
  }, [dataGame]);

  useEffect(handleChangeDataGame, [dataGame, handleChangeDataGame]);

  return (
    <Box>
      <Stack direction="row" gap={1} alignItems="center" mb={1}>
        <Button variant="outlined" onClick={onResetGame} size="small">
          <KeyboardBackspace />
        </Button>

        <Typography variant="h6">{title}</Typography>
      </Stack>

      {!finishedGame && (
        <QuestionCard
          gameQuestion={currentQuestion}
          currentQuestionIndex={currentQuestionIndex}
          quantity={quantity}
          onSubmit={onSubmitQuestion}
          onNextQuestion={nextQuestion}
          continentSlug={continentSlug}
        />
      )}

      {finishedGame && (
        <GameFinished
          gameQuestions={gameQuestions}
          onRestartGame={restartGame}
          quantityGames={quantity}
        />
      )}
    </Box>
  );
};

export default GameEngine;
