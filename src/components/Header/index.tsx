import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import { FC } from "react";

const Header: FC = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
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
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
