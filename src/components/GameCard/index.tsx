import { FC, useState } from "react";
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";

import {
  Card,
  CardContent,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { PlayArrow, Room } from "@mui/icons-material";
import { green, grey } from "@mui/material/colors";

import { GameInformation } from "../../interfaces/Game";

interface GameCardProps {
  game: GameInformation;
}

const GameCard: FC<GameCardProps> = ({ game }) => {
  const t = useTranslations("Games");
  const router = useRouter();
  const [readMore, setReadMore] = useState(false);

  return (
    <Card sx={{ height: "min-content" }}>
      <Stack
        justifyContent="end"
        height={140}
        sx={{
          background: `url(${game.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
          "&::after": {
            content: "''",
            position: "absolute",
            bottom: 0,
            left: 0,
            height: 140 / 2,
            width: "100%",
            background: `linear-gradient(to top, ${grey[900]}, transparent)`,
          },
        }}
      >
        <Stack
          zIndex={1}
          direction="row"
          position="relative"
          px={2}
          alignItems="center"
          justifyContent="space-between"
          bottom={-20}
        >
          <Typography variant="h5" fontWeight={600} component="div">
            {game.name}
          </Typography>

          <IconButton
            sx={{
              background: green[500],
              "&:hover": {
                background: green[600],
              },
              width: 40,
              height: 40,
            }}
            onClick={() => router.push(`/${game.slug}`)}
          >
            <PlayArrow />
          </IconButton>
        </Stack>
      </Stack>

      <CardContent sx={{ pt: 4 }}>
        <Typography variant="body2" color="text.secondary">
          {game.description.length >= 100 && !readMore
            ? `${game.description.substring(0, 100)}...`
            : game.description}{" "}
          {!readMore && game.description.length >= 100 && (
            <Typography
              component="span"
              variant="body2"
              fontWeight="bold"
              sx={{ cursor: "pointer" }}
              onClick={() => setReadMore(true)}
            >
              {t("more")}
            </Typography>
          )}
        </Typography>

        <Stack direction="row" gap={1} justifyContent="space-between" mt={2}>
          <Tooltip title={t("localizationLabel")} arrow placement="top">
            <Stack alignItems="center">
              <Room color="primary" />
              <Typography color="text.secondary" variant="body1">
                {game.data.length}
              </Typography>
            </Stack>
          </Tooltip>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default GameCard;
