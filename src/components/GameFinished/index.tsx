import { FC, useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";

import Image from "next/image";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { Close, Replay } from "@mui/icons-material";
import { green, red } from "@mui/material/colors";

import { GameQuestion } from "../../interfaces/Game";
import RenderCountry from "../RenderCountry";

interface GameFinishedProps {
  gameQuestions: GameQuestion[];
  quantityGames: number;
  onRestartGame: () => void;
}

const GameFinished: FC<GameFinishedProps> = ({
  gameQuestions,
  onRestartGame,
  quantityGames,
}) => {
  const t = useTranslations("Games");

  const router = useRouter();
  const correctQuestions = useMemo(() => {
    return gameQuestions.reduce(
      (acc, item) => (item.correct ? acc + 1 : acc),
      0
    );
  }, [gameQuestions]);

  const [showResult, setShowResult] = useState(false);
  const isMajorityCertain = correctQuestions >= Math.ceil(quantityGames / 2);

  return (
    <>
      <Card sx={{ position: "relative", mb: 2 }}>
        <CardContent>
          <Typography variant="h5" textAlign="center">
            {t("finishedGameTitle")}
          </Typography>

          <Stack direction="row" alignItems="center" justifyContent="center">
            <Typography
              variant="h3"
              color={isMajorityCertain ? "success.main" : "error.main"}
            >
              {correctQuestions}
              <Typography component="span" variant="h3" color="GrayText">
                {" "}
                / {gameQuestions.length}
              </Typography>
            </Typography>
          </Stack>

          <Stack alignItems="center" mt={2}>
            <Button variant="contained" onClick={() => setShowResult(true)}>
              {t("seeResult")}
            </Button>
          </Stack>
        </CardContent>

        <CardActions>
          <Button
            variant="outlined"
            startIcon={<Replay />}
            onClick={onRestartGame}
          >
            {t("restart")}
          </Button>
          <Button onClick={() => router.push("/")}>{t("back")}</Button>
        </CardActions>
      </Card>

      <Dialog
        open={showResult}
        onClose={() => setShowResult(false)}
        maxWidth="md"
        fullWidth
        scroll="body"
      >
        <DialogTitle>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            {t("yourResults")}

            <IconButton onClick={() => setShowResult(false)}>
              <Close />
            </IconButton>
          </Stack>
        </DialogTitle>

        <DialogContent dividers>
          <Box
            display="grid"
            gap={3}
            gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))"
          >
            {gameQuestions.map((gameQuestion, index) => (
              <Box
                key={index}
                bgcolor="background.paper"
                border={1}
                height="min-content"
                borderColor={gameQuestion.correct ? green[800] : red[900]}
              >
                <RenderCountry
                  label={t("was")}
                  city={gameQuestion.city}
                  p={1}
                />

                <Stack
                  border={1}
                  borderColor="divider"
                  position="relative"
                  height={300}
                >
                  <Image
                    src={gameQuestion.image}
                    quality={20}
                    alt={t("questionImage")}
                    layout="fill"
                    objectFit="contain"
                  />
                </Stack>

                {!gameQuestion.correct && gameQuestion.cityResponse && (
                  <RenderCountry
                    p={1}
                    label={t("youScored")}
                    city={gameQuestion.cityResponse}
                  />
                )}
              </Box>
            ))}
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GameFinished;
