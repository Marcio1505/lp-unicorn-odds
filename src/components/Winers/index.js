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

function Winers() {
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
        <Typography component="h2">GARANTA JÁ $600 + 200 RODADAS</Typography>
        <Typography>
          Reivindique grátis ativando seu e-mail ou telefone.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            hiddenLabel
            id="filled-hidden-label-normal"
            defaultValue="Normal"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            hiddenLabel
            id="filled-hidden-label-normal"
            defaultValue="Fist name"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <MuiTelInput value={value} onChange={handleChange} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField
            hiddenLabel
            id="filled-hidden-label-normal"
            defaultValue="Normal"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            required
            control={<Checkbox />}
            label="Tenho mais de 18 anos e aceito os termos e condições do contrato na moeda escolhida"
          />
        </Grid>

      </Grid>
    </Container>
  );
}

export default Winers