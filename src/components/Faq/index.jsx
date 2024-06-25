import * as React from "react";
import { Typography, Container } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqData = [
  {
    question: "O que é o Material-UI?",
    answer:
      "Material-UI é uma biblioteca de componentes de interface de usuário para React baseada no design system do Google Material Design.",
  },
  {
    question: "Como eu instalo o Material-UI?",
    answer:
      "Você pode instalar o Material-UI usando npm ou yarn. Com npm, use o comando `npm install @mui/material @emotion/react @emotion/styled`.",
  },
  {
    question: "O Material-UI é gratuito?",
    answer:
      "Sim, o Material-UI é uma biblioteca open-source e gratuita para uso. No entanto, eles oferecem uma versão paga com componentes adicionais e suporte.",
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
      <Typography variant="h4" gutterBottom>
        Perguntas Frequentes
      </Typography>
      {faqData.map((item, index) => (
        <Accordion
          key={index}
          sx={{
            bgcolor: "#2A2E4A",
            color: "#ffffff",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography>{item.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
}

export default Faq;
