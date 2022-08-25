import type { GetStaticProps, NextPage } from "next"

import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import { Box } from "@mui/material"

import { Game } from "../src/interfaces/Game"
import GameCard from "../src/components/GameCard"

export const games: Game[] = [
  {
    description:
      "Em diversas coberturas do google maps é possível ver um padrão de carros, sabendo disso é possível saber instantaneamente em qual região ou país você está localizado. Esse jogo consiste em você treinar seu reconhecimento.",
    image:
      "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/google-car.jpg",
    name: "Google Car",
    slug: "car"
  }
]

const Home: NextPage = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 3 }}>
      <Typography variant="h4" component="h1">
        Games
      </Typography>

      <Box
        display="grid"
        gap={2}
        my={2}
        gridTemplateColumns="repeat(auto-fill, minmax(220px, 1fr))"
      >
        {games.map(game => (
          <GameCard game={game} key={game.slug} />
        ))}
      </Box>
    </Container>
  )
}

export default Home
