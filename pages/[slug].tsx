import { useState } from "react";
import { useTranslations } from "next-intl";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

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
  Typography,
  useMediaQuery,
} from "@mui/material";

import gameList from "../src/data/gameList";

import GameEngine from "../src/components/GameEngine";
import { GameInformation } from "../src/interfaces/Game";
import Head from "next/head";
import Image from "next/image";
import withPathsLocales from "../src/utils/withPathsLocales";

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const paths = gameList.map((game) => ({
    params: { slug: game.slug },
  }));

  return {
    paths: withPathsLocales(paths, locales || []),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const slug = ctx.params?.slug as string;
  const gameInformation = gameList.find(
    (game) => game.slug === slug
  ) as GameInformation;

  return {
    props: {
      gameInformation,
      messages: (await import(`../messages/${ctx.locale}`)).default,
    },
  };
};

interface GamePageProps {
  gameInformation: GameInformation;
}

const GamePage: NextPage<GamePageProps> = ({ gameInformation }) => {
  const t = useTranslations("GamePage");

  const isTablet = useMediaQuery("(max-width:660px)");
  const isMobile = useMediaQuery("(max-width:440px)");

  const [startedGame, setStartedGame] = useState(false);
  const [quantityRounds, setQuantityRounds] = useState(10);

  const optionsRounds: number[] = Array(26)
    .fill(0)
    .map((currentRound, index) => currentRound + (index + 5));

  return (
    <>
      <Head>
        <title>{gameInformation.name} | GeoPractice</title>
      </Head>

      <Container maxWidth="md" sx={{ mt: 3 }}>
        {!startedGame && (
          <Card>
            <CardContent>
              <Stack
                direction={isTablet ? "column" : "row"}
                gap={isTablet ? 1 : 4}
                alignItems="center"
              >
                <Box
                  flex={1}
                  borderRadius="50%"
                  overflow="hidden"
                  boxShadow={2}
                  border={2}
                  borderColor="primary.main"
                  sx={{ aspectRatio: "1/1", width: isTablet ? 200 : undefined }}
                  position="relative"
                >
                  <Image
                    src={gameInformation.image}
                    alt={t("gameImage", {
                      gameName: gameInformation.name,
                    })}
                    layout="fill"
                    objectFit="cover"
                  />
                </Box>

                <Box flex={2}>
                  <Typography variant="h5" fontWeight={600} gutterBottom>
                    {gameInformation.name}
                  </Typography>

                  <Typography variant="body1" color="text.secondary">
                    {gameInformation.description}
                  </Typography>

                  <Divider sx={{ my: isTablet ? 3 : 2 }} />

                  <Stack
                    direction={isMobile ? "column" : "row"}
                    alignItems="center"
                    justifyContent="space-between"
                    flexWrap="wrap"
                    gap={1}
                  >
                    <FormControl
                      sx={{ minWidth: 250 }}
                      fullWidth={isMobile}
                      size="small"
                    >
                      <InputLabel id="number-of-rounds-label">
                        {t("numberOfRoundsLabel")}
                      </InputLabel>
                      <Select
                        label={t("numberOfRoundsLabel")}
                        labelId="number-of-rounds-label"
                        id="number-of-rounds-label"
                        MenuProps={{
                          sx: {
                            maxHeight: "50vh",
                          },
                        }}
                        value={quantityRounds}
                        onChange={(e) =>
                          setQuantityRounds(Number(e.target.value))
                        }
                      >
                        {optionsRounds.map((round) => (
                          <MenuItem value={round} key={round}>
                            {round}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <Button
                      fullWidth={isMobile}
                      variant="contained"
                      onClick={() => setStartedGame(true)}
                    >
                      {t("startQuestionnaire")}
                    </Button>
                  </Stack>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        )}

        {startedGame && (
          <GameEngine
            quantity={quantityRounds}
            dataGame={gameInformation.data}
            title={gameInformation.name}
          />
        )}
      </Container>
    </>
  );
};

export default GamePage;
