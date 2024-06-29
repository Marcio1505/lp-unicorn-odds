import { createTheme } from "@mui/material/styles";
import Montserrat from "../asstes/fonts/Montserrat-variable.ttf"

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
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Montserrat';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Montserrat'), local('Montserrat-Regular'), url(${Montserrat}) format('ttf');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
    fontFamily: 'Montserrat, "Helvetica", "Arial", sans-serif',
    fontSize: 15,
    color: "#ffffff",
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {

          "& .MuiFormHelperText-root":{
            color: "#fff"
          },
          "& .MuiOutlinedInput-root": {
            fontWeight: "bold",
            backgroundColor: "#F6F6F6",

            borderRadius: "15px",
            border: "none",
            "& .Mui-error fieldset": {
              borderRadius: "15px",
              borderColor: "transparent", // Modifique aqui a cor da borda quando focado
            },
            
          },
        },
      },
    },
    
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
