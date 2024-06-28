
import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { MuiTelInput, matchIsValidTel } from "mui-tel-input";
import {
  Box,
  Container,
  TextField,
  Grid,
  Button,
  Typography,
  Checkbox,
  FormGroup,
  FormControlLabel,
  FormHelperText,
  FormControl,
} from "@mui/material";


function Form() {
  const { handleSubmit, control, formState: { errors } } = useForm();
  const [country, setCountry] = useState("us");
 

  useEffect(() => {
    fetch("https://ipinfo.io/json?token=df26bb0f8ce15c", { headers: { "Accept": "application/json" } })
      .then((resp) => resp.json())
      .catch(() => ({ country: "us" }))
      .then((resp) => {
        setCountry(resp.country.toUpperCase());
      });
  }, []);

  const onSubmit = async (formData) => {
    
    try {
      const response = await fetch("https://hooks.zapier.com/hooks/catch/3217841/ff4wgw/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          url: window.location.href,
          sid: "MS001",
          cas: "Dunder",
          date: new Date().toISOString(),
        }),
      });
      
      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      // Implementar qualquer lógica adicional após o envio bem-sucedido

    } catch (error) {
      console.error("Error submitting form:", error);
      // Implementar lógica de tratamento de erro, se necessário
    }
  };
  return (
    <Container
      sx={{
        borderRadius: "15px",
        bgcolor: "#2A2E4A",
        color: "#ffffff",
        padding: "1.5rem 1rem",
        margin: "3rem 3rem 3rem 3rem",
      }}
    >
      <Box>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Typography component="p">GARANTA JÁ </Typography>
          <Typography
            component="p"
            sx={{
              fontWeight: "bold",
              paddingLeft: "0.3rem",
            }}
          >
            $600 + 200 RODADAS
          </Typography>
        </Box>
        <Typography
          sx={{
            padding: "1rem 0rem",
          }}
        >
          Reivindique grátis ativando seu e-mail ou telefone.
        </Typography>
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Controller
              name="first_name"
              control={control}
              defaultValue=""
              rules={{ required: "First name is required" }}
              render={({ field }) => (
                <TextField
                  {...field}
                  hiddenLabel
                  placeholder="First name"
                  fullWidth
                  error={!!errors.first_name}
                  helperText={errors.first_name ? errors.first_name.message : ""}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="last_name"
              control={control}
              defaultValue=""
              rules={{ required: "Last name is required" }}
              render={({ field }) => (
                <TextField
                  {...field}
                  hiddenLabel
                  placeholder="Last name"
                  fullWidth
                  error={!!errors.last_name}
                  helperText={errors.last_name ? errors.last_name.message : ""}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="phone"
              control={control}
              defaultValue=""
              rules={{
                required: "Phone number is required",
                validate: matchIsValidTel
              }}
              render={({ field }) => (
                <MuiTelInput
                  {...field}
                  defaultCountry={country}
                  fullWidth
                  error={!!errors.phone}
                  helperText={errors.phone ? "Invalid phone number" : ""}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "Invalid email address"
                }
              }}
              render={({ field }) => (
                <TextField
                  {...field}
            
                  hiddenLabel
                  placeholder="Email"
                  fullWidth
                  error={!!errors.email}
                  helperText={errors.email ? errors.email.message : ""}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="terms"
              control={control}
              rules={{ required: "Para prosseguir confirme que tens 18 anos" }}
              render={({ field }) => (
                <FormControl
                required
                fullWidth
                error={!!errors.terms}
                component="fieldset"
                sx={{ m: 3 }}
                variant="standard"
              > <FormGroup> <FormControlLabel
                {...field} 
                  sx={{
                    display: "flex",
                    flexDirection: "row-reverse",
                    justifyContent: "space-between",
                    height:"5px",
                    color: "#7E7A7A",
                    fontWeight:"100",

                  }}
                  fullWidth
                  control={<Checkbox />}
                  label="Marque aqui se confirma que tens mais de 18 anos"
                  
                />
                {!!errors.terms &&  <FormHelperText>You can display an error</FormHelperText>}
               </FormGroup></FormControl>
               
               
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" fullWidth >
              GARANTIR RODADAS GRATIS
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default Form;
