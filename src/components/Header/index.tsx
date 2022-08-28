import { FC } from "react";
import {
  AppBar,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  Link as LinkMui,
} from "@mui/material";
import Link from "next/link";
import LocaleSwitcher from "../LocaleSwitcher";
import { GitHub } from "@mui/icons-material";

const Header: FC = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Link href="/" passHref>
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                fontFamily: "monospace",
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              GeoPractice
            </Typography>
          </Link>

          <Stack direction="row" alignItems="center" gap={1}>
            <LinkMui
              href="https://github.com/MrEzequiel/geopractice"
              target="_blank"
            >
              <IconButton>
                <GitHub />
              </IconButton>
            </LinkMui>

            <LocaleSwitcher />
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
