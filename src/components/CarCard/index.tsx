import {
  Autocomplete,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Collapse,
  Divider,
  Grow,
  Modal,
  Stack,
  TextField,
  Typography
} from "@mui/material"
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

  const inputRef = useRef<HTMLInputElement>()
  const [selectedCity, setSelectedCity] = useState<CountryType | null>(
    questionCar.cityResponse
  )

  useEffect(() => {
    if (!inputRef.current || questionCar.revealed) return
    inputRef.current?.focus()
  }, [questionCar])

  const handleSubmit = () => {
    if (!selectedCity) return
    onSubmit(selectedCity)
    window.scrollTo(0, document.body.scrollHeight)
  }

  return (
    <Card sx={{ position: "relative", mb: 2 }}>
      <Box position="absolute" top={0} left={0} bgcolor="primary.main" p={1}>
        {currentQuestion + 1}/{quantity}
      </Box>

      <CardMedia
        component="img"
        sx={{ objectFit: "contain", height: "60vh", cursor: "zoom-in" }}
        image={questionCar.image}
        onClick={() => setZoomImage(true)}
      />

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
            <Stack direction="row" gap={1} mt={1}>
              <Typography
                color={questionCar.correct ? "success.main" : "error.main"}
              >
                {questionCar.correct ? "Você acertou" : "Você errou"}
              </Typography>
              <Divider orientation="vertical" flexItem />
              <img
                width={40}
                loading="lazy"
                src={`https://flagcdn.com/w40/${questionCar.city.code.toLowerCase()}.png`}
              />{" "}
              {questionCar.city.label}
            </Stack>

            <Button
              variant="contained"
              fullWidth
              sx={{ mt: 2 }}
              onClick={() => {
                setSelectedCity(null)
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
