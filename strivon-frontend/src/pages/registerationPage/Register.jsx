import React from "react";
import styles from "./Register.module.css";
import logo from "../../assets/images/strivon1.png";
import CustomInput from "../../utils/customInput/CustomInput";
import CustomButton from "../../utils/customButton/CustomButton";

const Register = () => {
  return (
    <main className={styles.container}>
      <section className={styles.formSection}>
        <form className={styles.formBox}>
          <CustomInput placeholder="Full name" type="name" required />
          <CustomInput placeholder="email" type="email" required />
          <CustomInput placeholder="phone number" type="number" required />
          <CustomButton title="submit" />
        </form>
      </section>
    </main>
  );
};

export default Register;
