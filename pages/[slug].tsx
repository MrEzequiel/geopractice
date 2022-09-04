import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import useGameListData, {
  availableSlugs,
} from "../src/hooks/data/useGameListData";

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
  Link as LinkMUI,
} from "@mui/material";

import GameEngine from "../src/components/GameEngine";
import { GameInformation, GameListSlugs } from "../src/interfaces/Game";
import withPathsLocales from "../src/utils/withPathsLocales";
import useContinents from "../src/hooks/data/useContinents";
import filterGameByContinent from "../src/utils/filterGameByContinent";
import { SlugContinents } from "../src/data/continents";
import Link from "next/link";
import { KeyboardBackspace } from "@mui/icons-material";

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const paths = availableSlugs.map((gameSlug) => ({
    params: { slug: gameSlug },
  }));

  return {
    paths: withPathsLocales(paths, locales || []),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const slug = ctx.params?.slug as GameListSlugs;

  if (!availableSlugs.includes(slug)) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      slugGame: slug,
      messages: (await import(`../messages/${ctx.locale}`)).default,
    },
  };
};

interface GamePageProps {
  slugGame: string;
}

const GamePage: NextPage<GamePageProps> = ({ slugGame }) => {
  const t = useTranslations("GamePage");

  const continents = useContinents();
  const [filterContinent, setFilterContinent] = useState<
    SlugContinents | "all"
  >("all");
  const selectContinent = useMemo(() => {
    return continents.find((continent) => continent.slug === filterContinent);
  }, [filterContinent, continents]);

  const gameList = useGameListData();
  const gameInformation = gameList.find(
    (game) => game.slug === slugGame
  ) as GameInformation;
  const gameDataByContinent = !selectContinent
    ? gameInformation.data
    : filterGameByContinent(
        gameInformation.data,
        selectContinent.countriesCode
      );

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
        <meta name="description" content={gameInformation.description} />
      </Head>

      <Container maxWidth="md">
        {!startedGame && (
          <>
            <LinkMUI component={Link} href="/">
              <Button variant="outlined" size="small">
                <KeyboardBackspace />
              </Button>
            </LinkMUI>

            <Card sx={{ mt: 1 }}>
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
                    sx={{
                      aspectRatio: "1/1",
                      width: isTablet ? 200 : undefined,
                    }}
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

                    <Divider sx={{ my: isTablet ? 3 : 2 }}>
                      {t("gameSettings")}
                    </Divider>

                    <Stack
                      direction={isMobile ? "column" : "row"}
                      alignItems="center"
                      justifyContent="space-between"
                      flexWrap="wrap"
                      gap={1}
                    >
                      <FormControl
                        sx={{ flex: 1 }}
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

                      <FormControl
                        sx={{ flex: 1 }}
                        fullWidth={isMobile}
                        size="small"
                      >
                        <InputLabel>{t("selectContinent")}</InputLabel>
                        <Select
                          value={filterContinent}
                          onChange={(e) =>
                            setFilterContinent(
                              e.target.value as SlugContinents | "all"
                            )
                          }
                          label={t("selectContinent")}
                          MenuProps={{
                            sx: {
                              maxHeight: "50vh",
                            },
                          }}
                        >
                          <MenuItem value="all">{t("allContinent")}</MenuItem>

                          {continents.map((continent) => (
                            <MenuItem
                              value={continent.slug}
                              key={continent.slug}
                            >
                              {continent.label}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Stack>

                    <Button
                      sx={{ mt: 1 }}
                      fullWidth
                      variant="contained"
                      onClick={() => setStartedGame(true)}
                    >
                      {t("startQuestionnaire")}
                    </Button>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </>
        )}

        {startedGame && (
          <GameEngine
            quantity={quantityRounds}
            dataGame={gameDataByContinent}
            title={gameInformation.name}
            continentSlug={filterContinent}
            onResetGame={() => setStartedGame(false)}
          />
        )}
      </Container>
    </>
  );
};

export default GamePage;
