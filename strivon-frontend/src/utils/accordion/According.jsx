import React from "react";
import styles from "./Accordion.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const According = ({ question, answer }) => {
  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <p className={styles.question}>{question}</p>
        </AccordionSummary>
        <AccordionDetails>
          <p className={styles.answer}>{answer}</p>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default According;
