import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";

export const getCustomTheme = (primary?: string, secondary?: string) => {
  const theme = responsiveFontSizes(
    createTheme({
      spacing: 4,
      palette: {
        primary: {
          main: primary || "#E769A6",
        },
        secondary: {
          main: secondary || "#2B37D4",
        },
        error: {
          main: "#D72A2A",
        },
        text: {
          primary: "#000000",
          secondary: "#FFFFFF",
        },
      },
    }),
  );

  theme.overrides = {
    MuiTypography: {
      h1: {
        color: theme.palette.primary.main,
        fontSize: 32,
      },
      h2: {
        color: theme.palette.primary.main,
        fontSize: 20,
      },
      body1: {
        fontSize: 16,
        color: theme.palette.primary.main,
        letterSpacing: 0,
      },
      body2: {
        fontSize: 14,
        color: theme.palette.primary.main,
        letterSpacing: 0,
      },
    },
  };

  return theme;
};
