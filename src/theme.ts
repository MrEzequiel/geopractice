import { darkScrollbar } from "@mui/material";
import { createTheme } from "@mui/material/styles";

const fontFamilyTitle = ["IBM Plex Mono", "monospace"].join(",");

// Create a theme instance.
const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: (themeParam) => ({
        body: themeParam.palette.mode === "dark" ? darkScrollbar() : null,
      }),
    },
  },

  transitions: {
    easing: {
      easeIn: "cubic-bezier(0.075, 0.82, 0.165, 1)",
      easeInOut: "cubic-bezier(0.075, 0.82, 0.165, 1)",
      easeOut: "cubic-bezier(0.075, 0.82, 0.165, 1)",
      sharp: "cubic-bezier(0.075, 0.82, 0.165, 1)",
    },
  },

  palette: {
    mode: "dark",
    primary: {
      main: "#8c5cff",
    },
  },

  typography: {
    h1: {
      fontFamily: fontFamilyTitle,
    },
    h2: {
      fontFamily: fontFamilyTitle,
    },
    h3: {
      fontFamily: fontFamilyTitle,
    },
    h4: {
      fontFamily: fontFamilyTitle,
    },
    h5: {
      fontFamily: fontFamilyTitle,
    },
    h6: {
      fontFamily: fontFamilyTitle,
    },
  },
});

export default theme;
