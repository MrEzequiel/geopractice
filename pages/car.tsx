import { useState } from "react"
import { NextPage } from "next"

import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography
} from "@mui/material"

import { CountryType } from "../src/data/countries"
import cars, { CarType } from "../src/data/car"
import CarGame from "../src/components/CarGame"
import { games } from "."
import { Game } from "../src/interfaces/Game"

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
  const gameCar = games.find(game => game.slug === "car") as Game

  const [startedGame, setStartedGame] = useState(false)
  const [quantityRounds, setQuantityRounds] = useState(10)

  const optionsRounds: number[] = Array(26)
    .fill(0)
    .map((salve, index) => salve + (index + 5))

  return (
    <>
      <Container maxWidth="md" sx={{ mt: 3 }}>
        {!startedGame && (
          <Card>
            <CardContent>
              <Stack direction="row" gap={4} alignItems="center">
                <Box
                  flex={1}
                  borderRadius="50%"
                  overflow="hidden"
                  boxShadow={2}
                  border={2}
                  borderColor="primary.main"
                  sx={{ aspectRatio: "1/1" }}
                >
                  <img
                    src={gameCar.image}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }}
                  />
                </Box>

                <Box flex={2}>
                  <Typography variant="h5" fontWeight={600} gutterBottom>
                    {gameCar.name}
                  </Typography>

                  <Typography variant="body1" color="text.secondary">
                    {gameCar.description}
                  </Typography>

                  <Divider sx={{ my: 2 }} />

                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <FormControl sx={{ minWidth: 250 }}>
                      <InputLabel>Quantidade de rodadas</InputLabel>
                      <Select
                        MenuProps={{
                          sx: {
                            maxHeight: "50vh"
                          }
                        }}
                        value={quantityRounds}
                        onChange={e =>
                          setQuantityRounds(Number(e.target.value))
                        }
                      >
                        {optionsRounds.map(round => (
                          <MenuItem value={round} key={round}>
                            {round}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <Button
                      variant="contained"
                      onClick={() => setStartedGame(true)}
                    >
                      Começar
                    </Button>
                  </Stack>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        )}

        {startedGame && <CarGame quantity={quantityRounds} />}
      </Container>
    </>
  )
}

export default Car
