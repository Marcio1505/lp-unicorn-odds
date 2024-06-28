
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
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import { trackEvent } from '../../utils/fbPixel';


function Form() {
  const { handleSubmit, control, formState: { errors } } = useForm();
  const [country, setCountry] = useState("us");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    
    fetch("https://ipinfo.io/json?token=df26bb0f8ce15c", { headers: { "Accept": "application/json" } })
      .then((resp) => resp.json())
      .catch(() => ({ country: "us" }))
      .then((resp) => {
        setCountry(resp.country.toUpperCase());
      });
  }, []);

  const onSubmit = async (formData) => {
    setLoading(true);
    try {

      setTimeout(function () {
       

        let email = formData.email;
        let first_name = formData.first_name;
        let last_name = formData.last_name;
        let phone = formData.phone;
        let id = localStorage.getItem("cid");

      
            window.location = 'http://google.com/?'
                + '&email=' + email
                + '&first_name=' + first_name
                + '&last_name=' + last_name
                + '&phone=' + phone
                + '&sub5=' + id;
      
    
}, 3000);//4000
      const response = await fetch("https://hooks.zapier.com/hooks/catch/3217841/ff4wgw/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          url: window.location.href,
          sid: "MS001",
          cas: "UnicornOfOdds",
          date: new Date().toISOString(),
        }),
      });
      

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }
      trackEvent('track', 'Lead');


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
        position: 'relative'
      }}
    >
       {loading && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '#D8D8D8',
            borderRadius:"14px",
            border:"5px solid #D8D3D3",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1,
          }}
        >
          <CircularWithValueLabel />
        </Box>
      )}
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
                letiant="standard"
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
              
              
               </FormGroup> {!!errors.terms &&  <FormHelperText sx={{
                marginLeft: "-10px",
                marginTop: "22px"
               }}
               md={{ marginTop: "0px"}}>You can display an error</FormHelperText>}
               </FormControl>
               
               
              )}
            />
             
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" letiant="contained" fullWidth >
              GARANTIR RODADAS GRATIS
            </Button>
          </Grid>
        </Grid>
      </form>
     
    </Container>
  );
}

export default Form;


function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress letiant="determinate" {...props} size={80}/>
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          
        }}
      >
        <Typography letiant="caption" component="div" color="text.secondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate letiant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};

function CircularWithValueLabel() {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 320);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <CircularProgressWithLabel value={progress} />;
}
