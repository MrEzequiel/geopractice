import { FC, FormEvent, useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

import { Close, GpsFixed } from "@mui/icons-material";
import {
  Autocomplete,
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Collapse,
  Divider,
  IconButton,
  Link,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
  Zoom,
} from "@mui/material";
import { green, red } from "@mui/material/colors";
import Image from "next/image";

import { CountryType } from "../../data/countries";
import CountryFlag from "../CountryFlag";
import { filterCountriesByContinent } from "../../utils/filterGameByContinent";

import { GameQuestion } from "../../interfaces/Game";
import { SlugContinents } from "../../data/continents";

const modalZoomImageStyles = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  height: "90vh",
  bgcolor: "background.paper",
  boxShadow: 24,
  img: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
};

interface QuestionCardProps {
  gameQuestion: GameQuestion;
  currentQuestionIndex: number;
  quantity: number;
  onSubmit: (city: CountryType) => void;
  onNextQuestion: () => void;
  continentSlug: SlugContinents | "all";
}

const QuestionCard: FC<QuestionCardProps> = ({
  gameQuestion,
  currentQuestionIndex,
  quantity,
  onSubmit,
  onNextQuestion,
  continentSlug,
}) => {
  const filterCountries = filterCountriesByContinent(continentSlug);
  const t = useTranslations("Games");

  const [zoomImage, setZoomImage] = useState(false);
  const [loadingImage, setLoadingImage] = useState(false);

  const inputRef = useRef<HTMLInputElement>();
  const [selectedCity, setSelectedCity] = useState<CountryType | null>(
    gameQuestion.cityResponse
  );
  const [inputValue, setInputValue] = useState("");

  const clearAutoComplete = () => {
    setInputValue("");
    setSelectedCity(null);
  };

  useEffect(() => {
    if (!inputRef.current || gameQuestion.revealed) return;
    inputRef.current?.focus();
  }, [gameQuestion]);

  const handleSubmit = () => {
    if (!selectedCity) return;
    onSubmit(selectedCity);
  };

  useEffect(() => {
    if (!gameQuestion.revealed) return;

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === "Space" || e.code === "Enter") {
        e.preventDefault();
        clearAutoComplete();
        onNextQuestion();
      }
    };

    window.addEventListener("keypress", handleKeyPress);

    return () => {
      window.removeEventListener("keypress", handleKeyPress);
    };
  }, [gameQuestion, onNextQuestion]);

  return (
    <Card
      sx={{
        position: "relative",
        mb: 2,
        boxShadow: gameQuestion.revealed
          ? `0px 0px 100px -60px ${
              gameQuestion.correct ? green[900] : red[900]
            }`
          : undefined,
      }}
    >
      <Box
        zIndex={8}
        position="absolute"
        top={0}
        left={0}
        bgcolor="primary.main"
        p={1}
      >
        {currentQuestionIndex + 1}/{quantity}
      </Box>

      <Stack
        position="relative"
        height="60vh"
        alignItems="center"
        justifyContent="center"
      >
        <Image
          src={gameQuestion.image}
          layout="fill"
          objectFit="contain"
          quality={90}
          alt={t("questionImage")}
          placeholder="empty"
          style={{ cursor: "zoom-in" }}
          onClick={() => setZoomImage(true)}
          onLoad={() => {
            setLoadingImage(true);
          }}
          onLoadingComplete={() => {
            setLoadingImage(false);
          }}
        />

        {loadingImage && (
          <Zoom in={loadingImage} timeout={1000}>
            <CircularProgress />
          </Zoom>
        )}
      </Stack>

      <Modal
        keepMounted
        open={zoomImage}
        onClose={() => {
          setZoomImage(false);
        }}
      >
        <Box sx={modalZoomImageStyles} onClick={() => setZoomImage(false)}>
          <IconButton
            onClick={() => setZoomImage(false)}
            sx={{ position: "absolute", top: 8, right: 8, zIndex: 9 }}
          >
            <Close />
          </IconButton>
          <Image
            src={gameQuestion.image}
            layout="fill"
            objectFit="contain"
            quality={90}
            alt={t("questionImage")}
            placeholder="empty"
            style={{ cursor: "zoom-out" }}
          />
        </Box>
      </Modal>

      <Divider />

      <CardContent>
        <Collapse in={gameQuestion.revealed}>
          <Box mb={3} hidden={!gameQuestion.revealed}>
            <Stack direction="row" alignItems="center" gap={1} mt={1}>
              <Typography
                color={gameQuestion.correct ? "success.main" : "error.main"}
              >
                {gameQuestion.correct ? t("rightAnswer") : t("wrongAnswer")}
              </Typography>

              <Divider orientation="vertical" flexItem />

              <>
                <CountryFlag
                  code={gameQuestion.city.code}
                  size="1x"
                  flagQuality="w160"
                />{" "}
                {gameQuestion.city.label}
              </>

              {!!gameQuestion.localization && (
                <Tooltip title={t("seeLocation")}>
                  <Link
                    href={gameQuestion.localization}
                    target="_blank"
                    sx={{ ml: 1 }}
                  >
                    <IconButton size="small">
                      <GpsFixed fontSize="small" />
                    </IconButton>
                  </Link>
                </Tooltip>
              )}
            </Stack>

            {gameQuestion.hint && (
              <Box
                p={2}
                border={1}
                borderColor="divider"
                bgcolor="background.paper"
                mt={1}
                borderRadius={1}
              >
                <Typography variant="body1">{gameQuestion.hint}</Typography>
              </Box>
            )}

            <Button
              variant="contained"
              fullWidth
              sx={{ mt: 2 }}
              onClick={() => {
                clearAutoComplete();
                onNextQuestion();
              }}
            >
              {t("nextQuestion")}
            </Button>
          </Box>
        </Collapse>

        <Stack
          direction="row"
          gap={1}
          component="form"
          onSubmit={(e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <Autocomplete
            id="country-select-demo"
            options={filterCountries}
            fullWidth
            autoHighlight
            disabled={gameQuestion.revealed}
            value={selectedCity}
            onChange={(_, newValue: CountryType | null) =>
              setSelectedCity(newValue)
            }
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            getOptionLabel={(option) => option.label}
            renderOption={(props, option) => (
              <Box component="li" {...props}>
                <CountryFlag
                  code={option.code}
                  size="1x"
                  flagQuality="w40"
                  sx={{ mr: 2 }}
                />
                {option.label}
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                inputRef={inputRef}
                label={t("selectCountry")}
                fullWidth
                autoFocus
                inputProps={{
                  ...params.inputProps,
                  autoCorrect: "false",
                  autoComplete: "off", // disable autocomplete and autofill
                }}
              />
            )}
          />

          <Button
            variant="contained"
            type="submit"
            disabled={gameQuestion.revealed || !selectedCity}
          >
            {t("answerQuestion")}
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default QuestionCard;
