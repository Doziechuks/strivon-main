import styles from "./faq.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import React from "react";
import { List, ListItem } from "@mui/material";

const Faq = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <h2>Frequently Asked Questions</h2>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <p className={styles.question}>How do I confirm my payments?</p>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <p className={styles.question}>What course do you offer?</p>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <p>
                We offer you a plethora of choices in the tech field. Below is a
                breakdown of the courses we offer in each niche you pick
              </p>
              <p>Frontend software engineering:</p>
              <ul className={styles.unordered}>
                <li>Html 5</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Tailwind css</li>
                <li>Material UI</li>
                <li>Git and Github</li>
              </ul>

              <p>Backend software engineering:</p>
              <ul className={styles.unordered}>
                <li>Php</li>
                <li>Api and Endpoint testing</li>
                <li>Nodejs</li>
                <li>Firebase</li>
                <li>Mongodb</li>
                <li>SQL</li>
                <li>Endpoint testing</li>
              </ul>
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <p className={styles.question}>How do I get started?</p>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              You are advised to go through our courses and pick a niche that
              interests you the most, after which you click on the 'Apply Now' button
              on the home page, fill in your details and you are good to go.
            </p>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
