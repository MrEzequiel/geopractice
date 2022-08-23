import type { NextPage } from "next"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"

const Home: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1">
        Hello World
      </Typography>
    </Container>
  )
}

export default Home
