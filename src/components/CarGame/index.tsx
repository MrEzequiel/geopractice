import { FC, useState } from "react"

import { Box, Typography } from "@mui/material"

import { QuestionCarType } from "../../../pages/car"
import cars from "../../data/car"
import { CountryType } from "../../data/countries"
import CarCard from "../CarCard"
import GameFinished from "../GameFinished"

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

interface CarGameProps {
  quantity: number
}

const CarGame: FC<CarGameProps> = ({ quantity }) => {
  const [cars, setCars] = useState(() => getRandomCars(quantity))

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
    setCars(getRandomCars(quantity))
    setFinishedGame(false)
  }

  return (
    <Box>
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
        <GameFinished
          cars={cars}
          onRestartGame={restartGame}
          quantityGames={quantity}
        />
      )}
    </Box>
  )
}

export default CarGame
