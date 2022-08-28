import type { NextPage } from "next";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

import gameList from "../src/data/gameList";
import GameCard from "../src/components/GameCard";

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
        {gameList.map((game) => (
          <GameCard game={game} key={game.slug} />
        ))}
      </Box>
    </Container>
  );
};

export default Home;
