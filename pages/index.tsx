import type { NextPage } from "next";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Box, Stack } from "@mui/material";

import gameList from "../src/data/gameList";
import GameCard from "../src/components/GameCard";
import continents from "../src/data/continents";
import RenderCountry from "../src/components/RenderCountry";
import getCountryByCode from "../src/utils/getCountryByCode";

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

      {continents.map((continent) => (
        <Box key={continent.slug} mb={2}>
          <Typography>{continent.label}</Typography>
          <Stack gap={1}>
            {continent.countriesCode.map((code) => (
              <RenderCountry
                justifyContent="start"
                key={code}
                city={getCountryByCode(code)}
                label=""
              />
            ))}
          </Stack>
        </Box>
      ))}
    </Container>
  );
};

export default Home;
