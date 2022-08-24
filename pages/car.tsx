import { useMemo, useState } from "react"
import { NextPage } from "next"
import { useRouter } from "next/router"

import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Typography,
  Stack
} from "@mui/material"
import { Replay } from "@mui/icons-material"

import CarCard from "../src/components/CarCard"
import { CountryType } from "../src/data/countries"
import cars, { CarType } from "../src/data/car"

export interface QuestionCarType extends CarType {
  cityResponse: CountryType | null
  correct: boolean
  revealed: boolean
}

const getRandomCars = (quantity = 10): QuestionCarType[] => {
  const quantityCars = cars.length
  const randomCarsIndexs: number[] = []

  const getNumberRandom = () => Math.floor(Math.random() * quantityCars)

  while (randomCarsIndexs.length !== quantity) {
    let random = getNumberRandom()

    while (randomCarsIndexs.some(index => index === random)) {
      random = getNumberRandom()
    }

    randomCarsIndexs.push(random)
  }

  return randomCarsIndexs.map(index => ({
    ...cars[index],
    correct: false,
    revealed: false,
    cityResponse: null
  }))
}

const Car: NextPage = () => {
  const router = useRouter()

  const [cars, setCars] = useState(() => getRandomCars())
  const correctQuestions = useMemo(() => {
    return cars.reduce((acc, item) => (item.correct ? acc + 1 : acc), 0)
  }, [cars])

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [finishedGame, setFinishedGame] = useState(false)

  const onSubmitQuestion = (city: CountryType) => {
    const currentCarQuestion = cars[currentQuestion]

    const correct = currentCarQuestion.city.code === city.code
    setCars(prevCars =>
      prevCars.map((car, index) => {
        if (index === currentQuestion) {
          return {
            ...car,
            cityResponse: city,
            revealed: true,
            correct
          }
        }
        return car
      })
    )
  }

  const nextQuestion = () => {
    const nextQuestion = cars[currentQuestion + 1]

    if (!nextQuestion) {
      setFinishedGame(true)
      return
    }

    setCurrentQuestion(prev => prev + 1)
  }

  const restartGame = () => {
    setCurrentQuestion(0)
    setCars(getRandomCars())
    setFinishedGame(false)
  }

  return (
    <Container maxWidth="md" sx={{ mt: 3 }}>
      <Typography variant="h6" gutterBottom>
        Google Cars
      </Typography>

      {!finishedGame && (
        <CarCard
          questionCar={cars[currentQuestion]}
          currentQuestion={currentQuestion}
          quantity={cars.length}
          onSubmit={onSubmitQuestion}
          onNextQuestion={nextQuestion}
        />
      )}

      {finishedGame && (
        <Card sx={{ position: "relative", mb: 2 }}>
          <CardContent>
            <Typography variant="h5" textAlign="center">
              Jogo finalizado
            </Typography>

            <Stack direction="row" alignItems="center" justifyContent="center">
              <Typography
                variant="h3"
                color={correctQuestions >= 7 ? "success.main" : "error.main"}
              >
                {correctQuestions}
                <Typography component="span" variant="h3" color="GrayText">
                  {" "}
                  / {cars.length}
                </Typography>
              </Typography>
            </Stack>
          </CardContent>

          <CardActions>
            <Button
              variant="contained"
              startIcon={<Replay />}
              onClick={restartGame}
            >
              Reiniciar
            </Button>
            <Button onClick={() => router.push("/")}>Voltar</Button>
          </CardActions>
        </Card>
      )}
    </Container>
  )
}

export default Car
