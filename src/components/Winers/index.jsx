import * as React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Avatar,
  Paper,
  useMediaQuery,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import avatars from "../../asstes/imgs/winers"


function Item(props) {
  return (
    <Paper elevation={3} sx={{
       padding: 2, 
       margin: 2,
       color:"white" }}>
      <Box >
      <Typography 
       sx={{
        display:"flex",
        alignItems: "center",
        fontSize:"1.4rem",
        fontWeight:"200",
        paddingBottom:"0.8rem" }}
      variant="p" 
      component="h5">
      <Avatar 
      sx={{
        marginRight:"1rem"
      }}
      alt="photo" 
      src={props.item.photo}>
      </Avatar>
      {props.item.name}
      </Typography>
      </Box>
      <Typography variant="body1" component="p" >
        {props.item.description}
      </Typography>
    </Paper>
  );
}
function Winers() {
  
  const items = [
    {
      photo: avatars[0],
      name: "Marcos Silva - SP",
      description: "5 MIL REAIS - Ganhei na Unicorn of Odds e realizei meu sonho de viajar pelo mundo!",
    },
    {
      photo: avatars[1],
      name: "Antonio Walace - RJ",
      description: "3 MIL REAIS - Ganhei pela primeira vez na Unicorn of Odds e estou naapostas nuvens! Nunca imaginei que poderia ser tão fácil e emocionante.",
    },
    {
      photo: avatars[2],
      name: "Marina Ribeiro - SC",
      description: "800 REAIS - Unicorn of Odds me trouxe sorte e um prêmio incrível!",
    },
    {
      photo: avatars[3],
      name: "Igor Duarte - Al",
      description: "4 MIL REAIS - A sorte sorriu para mim na Unicorn of Odds, que sensação maravilhosa! Recomendo a todos que tentem a sorte também.",
    },
    {
      photo: avatars[4],
      name: "Johseph Milei - SP",
      description: "900 REAIS - Meu palpite certeiro na Unicorn of Odds me rendeu uma bela quantia! Estou muito satisfeito com o site e suas ótimas oportunidades",
    },
    {
      photo: avatars[5],
      name: "Maria Eduarda - RN",
      description: "2 MIL REAIS - Recebi uma notificação da Unicorn of Odds e quase nao acreditei, com esse dinheiro vou pagar minhas contas",
    },
  ];

  const isLargeScreen = useMediaQuery("(min-width:800px)");
  return (
    <Container 
    sx={{
      padding: "1.2rem 1rem",
      backgroundColor:"#2A2E4A",
      
    }}>
      <Carousel
        animation="slide"
        activeIndicatorIconButtonProps={{
          style: {
              backgroundColor: "#FAB42F"
          }
      }}
        sx={{ 

          "& .MuiPaper-root": { maxHeight:"20rem", minHeight:"15rem" },
          "& .MuiButtonBase-root": { color: "primary.main",marginTop:"1rem" } }}
      >
        {isLargeScreen
          ? items
              .reduce((acc, item, index, arr) => {
                if (index % 2 === 0) acc.push(arr.slice(index, index + 2));
                return acc;
              }, [])
              .map((pair, i) => (
                <Grid container spacing={2} key={i}>
                  {pair.map((item, j) => (
                    <Grid item xs={6} key={j}>
                      <Item item={item} />
                    </Grid>
                  ))}
                </Grid>
              ))
          : items.map((item, i) => <Item key={i} item={item} />)}
      </Carousel>
    </Container>
  );
}

export default Winers;
