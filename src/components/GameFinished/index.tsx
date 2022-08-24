import { Replay } from "@mui/icons-material"
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Stack,
  Typography
} from "@mui/material"
import { useRouter } from "next/router"
import { FC, useMemo, useState } from "react"
import { QuestionCarType } from "../../../pages/car"

interface GameFinishedProps {
  cars: QuestionCarType[]
  onRestartGame: () => void
}

const GameFinished: FC<GameFinishedProps> = ({ cars, onRestartGame }) => {
  const router = useRouter()
  const correctQuestions = useMemo(() => {
    return cars.reduce((acc, item) => (item.correct ? acc + 1 : acc), 0)
  }, [cars])

  const [showResult, setShowResult] = useState(false)

  return (
    <>
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

          <Stack alignItems="center" mt={2}>
            <Button variant="contained" onClick={() => setShowResult(true)}>
              Ver resultados
            </Button>
          </Stack>
        </CardContent>

        <CardActions>
          <Button
            variant="outlined"
            startIcon={<Replay />}
            onClick={onRestartGame}
          >
            Reiniciar
          </Button>
          <Button onClick={() => router.push("/")}>Voltar</Button>
        </CardActions>
      </Card>

      <Dialog
        open={showResult}
        onClose={() => setShowResult(false)}
        maxWidth="md"
        fullWidth
        scroll="body"
      >
        <DialogTitle>Seus resultados</DialogTitle>

        <DialogContent dividers>
          <Box display="grid" gap={3} gridTemplateColumns="1fr 1fr">
            {cars.map((car, index) => (
              <Box
                key={index}
                bgcolor="background.paper"
                border={1}
                borderColor={car.correct ? "success.main" : "error.main"}
              >
                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  gap={1}
                  p={1}
                >
                  <Typography>Era: </Typography>
                  <img
                    height={20}
                    loading="lazy"
                    src={`https://flagcdn.com/w40/${car.city.code.toLowerCase()}.png`}
                  />{" "}
                  {car.city.label}
                </Stack>

                <Stack border={1} borderColor="divider">
                  <img
                    src={car.image}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain"
                    }}
                  />
                </Stack>

                {!car.correct && car.cityResponse && (
                  <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    gap={1}
                    p={1}
                  >
                    <Typography>Você marcou: </Typography>
                    <img
                      height={20}
                      loading="lazy"
                      src={`https://flagcdn.com/w40/${car.cityResponse.code.toLowerCase()}.png`}
                    />{" "}
                    {car.cityResponse.label}
                  </Stack>
                )}
              </Box>
            ))}
          </Box>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default GameFinished
