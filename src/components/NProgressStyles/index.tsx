import { FC } from "react";
import { GlobalStyles, useTheme } from "@mui/material";

const NProgressStyles: FC = () => {
  const theme = useTheme();

  return (
    <GlobalStyles
      styles={{
        "#__next": {
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        },
        "#nprogress": {
          pointerEvents: "none",
        },
        "#nprogress .bar": {
          background: theme.palette.primary.main,
          position: "fixed",
          zIndex: theme.zIndex.tooltip,
          top: 0,
          left: 0,
          width: "100%",
          height: "2px",
        },
        "#nprogress .peg": {
          display: "block",
          position: "absolute",
          right: 0,
          width: "100px",
          height: "100%",
          boxShadow: `0 0 10px ${theme.palette.primary.main}, 0 0 5px ${theme.palette.secondary.main}`,
          opacity: 1,
          transform: "rotate(3deg) translate(0px, -4px)",
        },
        ".nprogress-custom-parent": {
          overflow: "hidden",
          position: "relative",
        },
        ".nprogress-custom-parent #nprogress .spinner, .nprogress-custom-parent #nprogress .bar":
          {
            position: "absolute",
          },
      }}
    />
  );
};

export default NProgressStyles;
