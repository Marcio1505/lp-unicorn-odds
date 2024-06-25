import * as React from "react";
// import FormControl from "@mui/material/FormControl";
// import OutlinedInput from "@mui/material/OutlinedInput";
import { MuiTelInput } from "mui-tel-input";
import {
  Box,
  Container,
  TextField,
  Grid,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
  // FormGroup,
} from "@mui/material";

function Faq() {
  const [value, setValue] = React.useState("");

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <Container
      sx={{
        borderRadius: "15px",
        bgcolor: "#2A2E4A",
        color:"#ffffff",
        // maxWidth: "90%",
        padding: "2rem 3.5rem",
        margin: "3rem 3rem 0rem 3rem",

      }}
    >
      <Box>
        <Typography component="h2">Perguntas Frequentes</Typography>
        <Typography>
        Como  resgatar meu dinheiro?  
        </Typography>
      </Box>
      <Grid container spacing={2}>
      <div>
      
      </div>
      </Grid>
    </Container>
  );
}

export default Faq