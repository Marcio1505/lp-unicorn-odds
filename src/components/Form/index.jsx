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

function Form() {
  const [value, setValue] = React.useState("");

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <Container
      sx={{
        borderRadius: "15px",
        bgcolor: "#2A2E4A",
        color: "#ffffff",
        // maxWidth: "90%",
        padding: "1.5rem 1rem",
        margin: "3rem 3rem 3rem 3rem",
      }}
    >
      <Box>
        <Box
          sx={{
            display: "flex", 
          }}>
          <Typography component="p">GARANTA JÁ </Typography>
          <Typography component="p"
            sx={{
              fontWeight: "bold",
              paddingLeft:"0.3rem",
            }}>
          $600 + 200 RODADAS</Typography>
        </Box>
        <Typography
          sx={{
            color: "#f6f6f6",
            padding: "1rem 0rem",
          }}>
          Reivindique grátis ativando seu e-mail ou telefone.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            sx={{
              fontWeight: "bold",
              backgroundColor: "#F6F6F6",
              borderRadius: "15px"
            }}
            hiddenLabel
            id="filled-hidden-label-normal"
            placeholder="Fist name"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            sx={{
              fontWeight: "bold",
              backgroundColor: "#F6F6F6",
              borderRadius: "15px"
            }}
            hiddenLabel
            id="filled-hidden-label-normal"
            placeholder="Last name"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <MuiTelInput
            sx={{
              fontWeight: "bold",
              backgroundColor: "#F6F6F6",
              borderRadius: "15px"
            }}
            value={value}
            onChange={handleChange}
            fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField
            sx={{
              fontWeight: "bold",
              backgroundColor: "#F6F6F6",
              borderRadius: "15px"
            }}
            hiddenLabel
            id="filled-hidden-label-normal"
            placeholder="Email"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            sx={{
              display: "flex",
              flexDirection: "row-reverse",
              paddingLeft: "1rem",
              justifyContent: "space-between",
              color: "#7E7A7A",
            }}
            required
            control={<Checkbox />}
            label="Tenho mais de 18 anos e aceito os termos e condições do contrato na moeda escolhida"
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            fullWidth
            sx={{
              borderRadius: "12px",
              backgroundColor: "#FAB42F",
              color: "#027027",
              fontWeight: "bold",
              paddingTop: "10px",
            }}
          >
            GARANTIR RODADAS GRATIS
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Form;