import { createTheme } from "@mui/material/styles";

const fontFamilyTitle = ["IBM Plex Mono", "monospace"].join(",");

// Create a theme instance.
const theme = createTheme({
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
