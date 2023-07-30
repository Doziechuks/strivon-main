import React from "react";
import styles from "./Login.module.css";
import logo from "../../assets/images/strivon1.png";
import image from "../../assets/images/back.jpg";
import CustomButton from "../../utils/customButton/CustomButton";
import CustomInput from "../../utils/customInput/CustomInput";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <main className={styles.container}>
      <section
        className={styles.logoSection}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className={styles.logoBox} onClick={() => navigate("/")}>
          <img src={logo} alt="" />
        </div>
        <div className={styles.titleBox}>
          <h1 className={styles.title}>
            Excel through mastery in the tech space
          </h1>
          <p className={styles.subTitle}>
            Start your journey in the field of tech today
          </p>
        </div>
        <div className={styles.mediaBox}>
          <div className={styles.iconBox}>
            <span className={styles.link}>
              <AiFillTwitterCircle size={25} />
            </span>
            <span className={styles.link}>
              <BsFacebook size={25} />
            </span>
            <span className={styles.link}>
              <AiFillInstagram size={25} />
            </span>
            <span className={styles.link}>
              <AiFillLinkedin size={25} />
            </span>
          </div>
          <p>&copy;2023 Strivon. All rights reserved</p>
        </div>
      </section>
      <section className={styles.formSection}>
        <div className={styles.applicationBox}>
          <h2>Sign In to your dashboard</h2>
          <p>Enter your email and password to proceed to your dashboard</p>
        </div>
        <div className={styles.mobileHeading}>
          <div className={styles.logoBox} onClick={() => navigate("/")}>
            <img src={logo} alt="" />
          </div>
          <div className={styles.mobileTitle}>
            <h2>Sign In to your dashboard</h2>
            <p>Enter your email and password to proceed to your dashboard</p>
          </div>
        </div>
        <form className={styles.formBox}>
          <CustomInput placeholder="email" type="email" required />
          <CustomInput placeholder="password" type="password" required />
          <CustomButton title="Proceed to dashboard" />
          <div className={styles.termsBox}>
            can't remeber your password? <span>Reset here!</span>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Login;
