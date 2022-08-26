import { FC, useMemo, useState } from "react"
import { useRouter } from "next/router"

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
import { Replay } from "@mui/icons-material"
import { GameQuestion } from "../../interfaces/Game"

interface GameFinishedProps {
  gameQuestions: GameQuestion[]
  quantityGames: number
  onRestartGame: () => void
}

const GameFinished: FC<GameFinishedProps> = ({
  gameQuestions,
  onRestartGame,
  quantityGames
}) => {
  const router = useRouter()
  const correctQuestions = useMemo(() => {
    return gameQuestions.reduce(
      (acc, item) => (item.correct ? acc + 1 : acc),
      0
    )
  }, [gameQuestions])

  const [showResult, setShowResult] = useState(false)
  const isMajorityCertain = correctQuestions >= Math.ceil(quantityGames / 2)

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
                borderColor={
                  gameQuestion.correct ? "success.main" : "error.main"
                }
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
                    src={`https://flagcdn.com/w40/${gameQuestion.city.code.toLowerCase()}.png`}
                  />{" "}
                  {gameQuestion.city.label}
                </Stack>

                <Stack border={1} borderColor="divider">
                  <img
                    src={gameQuestion.image}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain"
                    }}
                  />
                </Stack>

                {!gameQuestion.correct && gameQuestion.cityResponse && (
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
                      src={`https://flagcdn.com/w40/${gameQuestion.cityResponse.code.toLowerCase()}.png`}
                    />{" "}
                    {gameQuestion.cityResponse.label}
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
