import React, { useEffect } from "react";
import styles from "./Register.module.css";
import logo from "../../assets/images/strivon1.png";
import image from "../../assets/images/mainback.jpg";
import CustomInput from "../../utils/customInput/CustomInput";
import CustomButton from "../../utils/customButton/CustomButton";
import { Link, useNavigate } from "react-router-dom";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { Seo } from "../../utils/seo";

const Register = () => {
  const navigate = useNavigate();
  useEffect(() => {
    Seo({
      title: "Apply || start your journey towards growing you career in tech",
      metaDescription:
        "Have a seamless appliction process in your journey towards mastery in the filed of tech",
    });
  }, []);
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
            <span
              className={styles.link}
              onClick={() =>
                window.open(
                  "https://twitter.com/strivonacademy?t=GNiB-yZBXThEVGA_iYIqjA&s=09",
                  "_blank"
                )
              }
            >
              <AiFillTwitterCircle size={25} />
            </span>
            <span
              className={styles.link}
              onClick={() =>
                window.open(
                  "https://www.facebook.com/profile.php?id=100093645410148",
                  "_blank"
                )
              }
            >
              <BsFacebook size={25} />
            </span>
            <span
              className={styles.link}
              onClick={() =>
                window.open("http://Instagram.com/strivon_academy", "_blank")
              }
            >
              <AiFillInstagram size={25} />
            </span>
            <span className={styles.link}>
              <AiFillLinkedin size={25} />
            </span>
          </div>
          <p>&copy;2023 Strivon Academy. All rights reserved</p>
        </div>
      </section>
      <section className={styles.formSection}>
        <div className={styles.applicationBox}>
          <h2>application form</h2>
          <p>Please fill in your details</p>
        </div>
        <div className={styles.mobileHeading}>
          <div className={styles.logoBox} onClick={() => navigate("/")}>
            <img src={logo} alt="" />
          </div>
          <div className={styles.mobileTitle}>
            <h2>application form</h2>
            <p>Please fill in your details correctly</p>
          </div>
        </div>
        <form className={styles.formBox}>
          <CustomInput placeholder="Full name" type="name" required />
          <CustomInput placeholder="email" type="email" required />
          <CustomInput placeholder="phone number" type="number" required />
          <div className={styles.termsBox}>
            By clicking submit, I agree to <Link>Terms of Use</Link> and
            acknowledge that I have read the <Link>Privacy Policy</Link>.
          </div>
          <CustomButton title="submit" />
        </form>
      </section>
    </main>
  );
};

export default Register;
