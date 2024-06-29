import * as React from "react";
import { Typography, Container } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqData = [
  {
    question: "Como  resgatar meu dinheiro? ",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non ligula vitae lectus laoreet consequat eget in mauris. Proin vestibulum magna eleifend erat pulvinar, et gravida turpis volutpat. Aliquam est.",
  },
  {
    question: "Como funciona a UnicornOfOdds ",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non ligula vitae lectus laoreet consequat eget in mauris. Proin vestibulum magna eleifend erat pulvinar, et gravida turpis volutpat. Aliquam est.",
  },
  {
    question: "Porque escolher a UnicornOfOdds?  ",
    answer:
      "Quando se trata de colocar as mãos no seu dinheiro o mais rápido possível, eles são um dos cassinos online mais rápidos do mercado. Tendo pago milhões aos jogadores ao longo dos anos com múltiplas opções de saque, será difícil encontrar outro cassino online com um pagamento mais rápido.",
  },
  {
    question: "Quem pode jogar na UnicornOfOdds  ",
    answer:
      "Qualquer pessoa com mais de 18 anos pode jogar",
  },
];

function Faq() {
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
      <Typography
        variant="h5"
        gutterBottom
        sx={{
          fontSize: "1.4em",
          // '@media (max-width:430px)': {
          //   fontSize:  "1.2em",
          // },
        }}
      >
        Perguntas Frequentes
      </Typography>
      {faqData.map((item, index) => (
        <Accordion
          key={index}
          sx={{
            bgcolor: "#2A2E4A",
            color: "#ffffff",
            fontWeight: "100",
            fontSize: "0.8em",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
            sx={{
              borderTop: "1px solid #484D6C",
            }}
          >
            <Typography>{item.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{
                fontWeight: "200",
                fontSize: "1.2em",
              }}
            >
              {item.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
}

export default Faq;
