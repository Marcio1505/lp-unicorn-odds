import logo from "./asstes/imgs/logo.svg";
import Winers from "./components/Winers";
import Faq from "./components/Faq";
import Form from "./components/Form";
import Footer from "./components/Footer";
import theme from "./utils/theme";
import { ThemeProvider } from "@mui/material/styles";
import {
  Button,
  Paper,
} from "@mui/material";
import React, { useRef } from "react";

function App() {
  const anchorRef = useRef(null);

  const handleButtonClick = () => {
    anchorRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="resgatar-bonus">
          <div>
            <h3>
              RECEBA JA $600 EM
              <br></br>
              BONUS + 200 GIROS
            </h3>
            <h3 className="gratis">GRATIS !</h3>
            <Button onClick={handleButtonClick} variant="contained" color="primary">
              RESGATAR BONUS
            </Button>
          </div>
        </div>
        <div className="boxes">
          <Faq />
          <Paper
            sx={{
              width: "100vw",
            }}
          >
            <Winers />
          </Paper>
          <Form />
          <div ref={anchorRef}></div>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
