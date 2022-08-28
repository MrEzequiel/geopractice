import type { GetStaticProps, NextPage } from "next";
import { useTranslations } from "next-intl";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

import gameList from "../src/data/gameList";
import GameCard from "../src/components/GameCard";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: (await import(`../messages/${locale}`)).default,
    },
  };
};

const Home: NextPage = () => {
  const t = useTranslations("Index");

  return (
    <Container maxWidth="lg" sx={{ mt: 3 }}>
      <Typography variant="h4" fontWeight={600} component="h1">
        {t("title")}
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
