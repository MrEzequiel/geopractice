import { FC } from "react";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

const Logo: FC = () => (
  <Box position="relative" width="min-content">
    <Link href="/" passHref>
      <Typography
        variant="h6"
        noWrap
        component="a"
        sx={{
          fontWeight: 700,
          color: "inherit",
          textDecoration: "none",
        }}
      >
        GeoPractice
      </Typography>
    </Link>

    <Typography
      variant="body2"
      sx={{
        pl: 0.5,
        bgcolor: "primary.main",
        position: "absolute",
        top: 0,
        right: -40,
        textTransform: "uppercase",
        letterSpacing: "4px",
        fontWeight: "bold",
        fontFamily: "IBM Plex Mono",
        fontSize: "0.5em",
      }}
    >
      beta
    </Typography>
  </Box>
);

export default Logo;
