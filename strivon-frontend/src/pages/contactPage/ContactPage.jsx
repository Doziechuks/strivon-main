import React, { useState, useEffect } from "react";
import styles from "./ContactPage.module.css";
import { useNavigate } from "react-router-dom";
import CustomInput from "../../utils/customInput/CustomInput";
import CustomButton from "../../utils/customButton/CustomButton";
import FormBanner from "../../utils/formBanner/FormBanner";
import { Seo } from "../../utils/seo";

import logo from "../../assets/images/strivon1.png";

const ContactPage = () => {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    Seo({
      title: "Contact us || Reach out to our commuity for any need at all",
      metaDescription:
        "Get in touch with the strivon Academy community for any clarifications ",
    });
  }, []);
  return (
    <main className={styles.container}>
      <FormBanner
        title="Reach out to our customer services"
        subTitle="Get to hear from use with relative ease"
      />
      <section className={styles.formSection}>
        <div className={styles.applicationBox}>
          <h2>contact us form</h2>
          <p>Please fill in the form correctly</p>
        </div>
        <div className={styles.mobileHeading}>
          <div className={styles.logoBox} onClick={() => navigate("/")}>
            <img src={logo} alt="" />
          </div>
          <div className={styles.mobileTitle}>
            <h2>contact us form</h2>
            <p>Please fill in the form correctly</p>
          </div>
        </div>
        <form className={styles.formBox}>
          <CustomInput
            label={"Full Name *"}
            placeholder="Enter your full name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <CustomInput
            label={"Email *"}
            placeholder="Enter your email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <CustomInput
            label={"Subject"}
            placeholder="Enter message title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className={styles.messageBox}>
            <label className={styles.inputLabel}>Message body</label>
            <textarea
              className={styles.message}
              placeholder="Write to us"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <CustomButton title="Send your message" type="submit" />
        </form>
      </section>
    </main>
  );
};

export default ContactPage;
