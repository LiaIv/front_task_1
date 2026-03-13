import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#7c9cff",
    },
    secondary: {
      main: "#34d399",
    },
    background: {
      default: "#07111f",
      paper: "rgba(16, 24, 39, 0.86)",
    },
    text: {
      primary: "#f8fafc",
      secondary: "#bfd0ff",
    },
  },
  shape: {
    borderRadius: 4,
  },
  typography: {
    fontFamily: '"Manrope", "Segoe UI", sans-serif',
    h1: {
      fontSize: "2.5rem",
      fontWeight: 800,
      lineHeight: 1,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 700,
    },
    h3: {
      fontSize: "1.25rem",
      fontWeight: 700,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backdropFilter: "blur(16px)",
          backgroundImage: "none",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 999,
        },
      },
    },
  },
});
