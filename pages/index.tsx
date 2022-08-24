import type { GetStaticProps, NextPage } from "next"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import { Game } from "../src/interfaces/Game"
import { Grid } from "@mui/material"
import GameCard from "../src/components/GameCard"

const games: Game[] = [
  {
    description:
      "Carros comuns e raros que estão na cobertura oficial do google.",
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

      <Grid container spacing={2} mt={2}>
        {games.map(game => (
          <Grid item xs={4} key={game.slug}>
            <GameCard game={game} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Home
