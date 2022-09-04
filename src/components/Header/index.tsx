import { FC } from "react";
import {
  AppBar,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Link as LinkMui,
} from "@mui/material";
import { GitHub } from "@mui/icons-material";

import Logo from "../Logo";
import LocaleSwitcher from "../LocaleSwitcher";

const Header: FC = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ justifyContent: "space-between", gap: 2 }}
        >
          <Logo />

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
