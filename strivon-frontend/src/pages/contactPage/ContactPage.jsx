import React, { useState } from "react";
import styles from "./ContactPage.module.css";
import CustomInput from "../../utils/customInput/CustomInput";
import CustomButton from "../../utils/customButton/CustomButton";

const ContactPage = () => {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <main className={styles.container}>
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
    </main>
  );
};

export default ContactPage;
