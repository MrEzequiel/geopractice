import { GpsFixed } from "@mui/icons-material"
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
  Typography,
  Zoom
} from "@mui/material"
import Image from "next/image"
import { FC, FormEvent, useEffect, useRef, useState } from "react"
import { QuestionCarType } from "../../../pages/car"
import countries, { CountryType } from "../../data/countries"

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "85vw",
  bgcolor: "background.paper",
  boxShadow: 24,
  img: {
    width: "100%",
    height: "100%",
    objectFit: "contain"
  }
}

interface CarCardProps {
  questionCar: QuestionCarType
  quantity: number
  currentQuestion: number
  onSubmit: (city: CountryType) => void
  onNextQuestion: () => void
}

const CarCard: FC<CarCardProps> = ({
  questionCar,
  currentQuestion,
  quantity,
  onSubmit,
  onNextQuestion
}) => {
  const [zoomImage, setZoomImage] = useState(false)
  const [loadingImage, setLoadingImage] = useState(false)

  const inputRef = useRef<HTMLInputElement>()
  const [selectedCity, setSelectedCity] = useState<CountryType | null>(
    questionCar.cityResponse
  )
  const [inputValue, setInputValue] = useState("")

  const clearAutoComplete = () => {
    setInputValue("")
    setSelectedCity(null)
  }

  useEffect(() => {
    if (!inputRef.current || questionCar.revealed) return
    inputRef.current?.focus()
  }, [questionCar])

  const handleSubmit = () => {
    if (!selectedCity) return
    onSubmit(selectedCity)
  }

  useEffect(() => {
    if (!questionCar.revealed) return

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        e.preventDefault()
        clearAutoComplete()
        onNextQuestion()
      }
    }

    window.addEventListener("keypress", handleKeyPress)

    return () => {
      window.removeEventListener("keypress", handleKeyPress)
    }
  }, [questionCar])

  return (
    <Card sx={{ position: "relative", mb: 2 }}>
      <Box
        zIndex={8}
        position="absolute"
        top={0}
        left={0}
        bgcolor="primary.main"
        p={1}
      >
        {currentQuestion + 1}/{quantity}
      </Box>

      <Stack
        position="relative"
        height="60vh"
        alignItems="center"
        justifyContent="center"
      >
        <Image
          src={questionCar.image}
          layout="fill"
          objectFit="contain"
          quality={90}
          placeholder="empty"
          style={{ cursor: "zoom-in" }}
          onClick={() => setZoomImage(true)}
          onLoad={() => {
            setLoadingImage(true)
          }}
          onLoadingComplete={() => {
            setLoadingImage(false)
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
          setZoomImage(false)
        }}
      >
        <Box sx={style}>
          <img src={questionCar.image} />
        </Box>
      </Modal>

      <Divider />

      <CardContent>
        <Collapse in={questionCar.revealed}>
          <Box mb={3} hidden={!questionCar.revealed}>
            <Stack direction="row" alignItems="center" gap={1} mt={1}>
              <Typography
                color={questionCar.correct ? "success.main" : "error.main"}
              >
                {questionCar.correct ? "Você acertou" : "Você errou"}
              </Typography>
              <Divider orientation="vertical" flexItem />
              <img
                width={40}
                height={30}
                loading="lazy"
                src={`https://flagcdn.com/w40/${questionCar.city.code.toLowerCase()}.png`}
              />{" "}
              {questionCar.city.label}
              <Link
                href={questionCar.localization}
                target="_blank"
                sx={{ ml: 1 }}
              >
                <IconButton>
                  <GpsFixed />
                </IconButton>
              </Link>
            </Stack>

            {questionCar.hint && (
              <Box
                p={2}
                border={1}
                borderColor="divider"
                bgcolor="background.paper"
                mt={1}
                borderRadius={1}
              >
                <Typography variant="body1">{questionCar.hint}</Typography>
              </Box>
            )}

            <Button
              variant="contained"
              fullWidth
              sx={{ mt: 2 }}
              onClick={() => {
                clearAutoComplete()
                onNextQuestion()
              }}
            >
              Próxima
            </Button>
          </Box>
        </Collapse>

        <Stack
          direction="row"
          gap={1}
          component="form"
          onSubmit={(e: FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            handleSubmit()
          }}
        >
          <Autocomplete
            id="country-select-demo"
            options={countries}
            fullWidth
            autoHighlight
            disabled={questionCar.revealed}
            value={selectedCity}
            onChange={(_, newValue: CountryType | null) =>
              setSelectedCity(newValue)
            }
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue)
            }}
            getOptionLabel={option => option.label}
            renderOption={(props, option) => (
              <Box
                component="li"
                sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                {...props}
              >
                <img
                  loading="lazy"
                  width="20"
                  src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                  srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                  alt=""
                />
                {option.label}
              </Box>
            )}
            renderInput={params => (
              <TextField
                {...params}
                inputRef={inputRef}
                label="Selecione o país"
                fullWidth
                autoFocus
                inputProps={{
                  ...params.inputProps,
                  autoCorrect: "false",
                  autoComplete: "off" // disable autocomplete and autofill
                }}
              />
            )}
          />

          <Button
            variant="contained"
            type="submit"
            disabled={questionCar.revealed || !selectedCity}
          >
            Enviar
          </Button>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default CarCard
