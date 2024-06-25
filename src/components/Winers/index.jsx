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
  Paper,
  useMediaQuery,
  // FormGroup,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { ArrowForwardIos, ArrowBackIos } from "@mui/icons-material";

function Item(props) {
  return (
    <Paper elevation={3} sx={{ padding: 2, margin: 2 }}>
      <Typography variant="h5" component="h2">
        {props.item.name}
      </Typography>
      <Typography variant="body1" component="p" sx={{ marginBottom: 2 }}>
        {props.item.description}
      </Typography>
      <Button variant="contained" color="primary">
        Check it out!
      </Button>
    </Paper>
  );
}
function Winers() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  const items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
    {
      name: "Random Name #3",
      description: "This is a new item description.",
    },
    {
      name: "Random Name #4",
      description: "Another random description for the carrousel.",
    },
    {
      name: "Random Name #5",
      description: "More content to see in the carrousel.",
    },
    {
      name: "Random Name #6",
      description: "Yet another random item description.",
    },
    {
      name: "Random Name #7",
      description: "Let's add more content to the carrousel.",
    },
    {
      name: "Random Name #8",
      description: "This is the last random item description.",
    },
  ];

  const isLargeScreen = useMediaQuery("(min-width:800px)");
  return (
    <Container sx={{ marginTop: 4 }}>
      <Carousel
        animation="slide"
        NavButton={({ onClick, className, style, next, prev }) => {
          // Other logic

          return (
            <Button onClick={onClick} className={className} style={style}>
              {next && <ArrowForwardIos />}
              {prev && <ArrowBackIos />}
            </Button>
          );
        }}
        navButtonsAlwaysVisible
        sx={{ "& .MuiButtonBase-root": { color: "primary.main" } }}
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
