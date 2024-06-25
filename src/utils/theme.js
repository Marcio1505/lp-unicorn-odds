import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2A2E4A",
    },
    secondary: {
      main: "#dc004e",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 16,
    color: "#fff",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          backgroundColor: "#FAB42F",
          color: "#027027",
          fontWeight: "bold",
          paddingTop: "10px",
          "&:hover": {
            backgroundColor: "#FAB42F",
            filter: "brightness(0.8)",
          },
        },
      },
    },
  },
});

export default theme;
