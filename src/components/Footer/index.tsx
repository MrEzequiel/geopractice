import { FC } from "react";
import {
  Box,
  Container,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Logo from "../Logo";
import { useTranslations } from "next-intl";

const Footer: FC = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery("(max-width:650px)");
  const t = useTranslations("Footer");

  return (
    <Box
      bgcolor={theme.palette.common.black}
      component="footer"
      py={3}
      mt="auto"
    >
      <Container
        maxWidth="xl"
        sx={{
          display: "grid",
          gridTemplateColumns: isTablet ? "1fr" : "1fr 1fr 1fr",
          gap: 4,
        }}
      >
        <Box>
          <Logo />
          <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
            {t("description")}
          </Typography>
        </Box>

        <Box>
          <Typography variant="h5" fontWeight={600} fontSize="16px">
            {t("reference")}
          </Typography>

          <ul>
            <li>
              <Link href="https://geotips.net" target="_blank">
                GeoTips
              </Link>
            </li>
            <li>
              <Link href="https://geohints.com" target="_blank">
                GeoHints
              </Link>
            </li>
          </ul>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
