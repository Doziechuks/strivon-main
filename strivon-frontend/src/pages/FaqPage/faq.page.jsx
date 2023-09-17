import styles from "./faq.module.css";
import According from "../../utils/accordion/According";
import CustomTrack from '../../utils/customTrack/CustomTrack'

import React, { useEffect } from "react";
import { Seo } from "../../utils/seo";

const Faq = () => {
  useEffect(() => {
    Seo({
      title: "FAQs || Strivon Academy",
      metaDescription:
        "Get clarified on your questions about Strivon Academy on our frequently asked questions section",
    });
  }, []);
  return (
    <main className={styles.container}>
     <div className={styles.header}>
          <h1 className={styles.title}>
            Frequently Asked <span>Questions</span>{" "}
          </h1>
        </div>
      <div className={styles.wrap}>
        {/* <CustomTrack title="Frequently Asked Questions"/> */}
        <h2>We Answer Your Questions</h2>
        <According
          question="Can you tell me about Strivon Academy?"
          answer="Strivon Academy is an elite software engineering and leadership training institute that equips high potential talent with world-class software engineering and leadership skills. We also offer practical exposure to real-life projects through internships."
        />
        <According
          question="Why Apply for Strivon Academy Training Program?"
          answer="If you desire to start a career in tech, upskill or you would just like an opportunity to work with global companies and get a high-paying job in six months, then the Decagon training program is for you."
        />
        <According
          question="How can I enroll into Strivon Academy?"
          answer="To register, please visit our website (www.strivonacademy.com), select any school of your choice and click on the apply button. You will be required to put in a valid email address before you proceed to the application form."
        />
        <According
          question="After registration, what next?"
          answer="Once you have successfully registered, your payment will be confirmed within 48 hours. After confirmation a home study kit with all the materials you need for the assessment will be sent to you. Please make sure you provide a valid email address while applying and check your spam for emails from us. Also endeavor to thoroughly study the materials provided in the home study kit."
        />
        <According
          question="How long is the training program for?"
          answer="The training is a 6-month intensive program to help you launch your career as a software engineer."
        />
        <According
          question="When will the classes start?"
          answer="Resumption date varies for each school, the actual date for resumption will be duly communicated with applicants."
        />
        <According
          question="Do I need to have studied or have a background in tech to apply?"
          answer="No prior knowledge or experience in tech is required, Strivon Academy programs are beginner-friendly."
        />
        <According
          question="What qualifies me to get accepted into the School?"
          answer="To get accepted into the program, you need to have a minimum of a HighSchool/Secondary School certificate, be computer literate and pass our basic assessment test. If you are about to complete your high school or secondary education, you can apply as well."
        />
        <According
          question="How much is the tuition fee?"
          answer="We have several payment plans just for you. You are required to choose your preferred payment plan, the tuition fee can be paid upfront, quarterly or monthly. Check out the tuition page to see all payment options."
        />
        <According
          question="Where will the classes take place?"
          answer="Majority of the classes will be held online on our Learning Management System but we will also have Live classes and Learning circles where students can work together as a team."
        />
        <According
          question="What do I need to learn at Strivon Academy?"
          answer="You only need a stable Internet connection and a Laptop/Desktop with at least 4gb RAM."
        />
        <According
          question="Where will the classes take place?"
          answer="Majority of the classes will be held online on our Learning Management System but we will also have Live classes and Learning circles where students can work together as a team."
        />
      </div>
    </main>
  );
};

export default Faq;
