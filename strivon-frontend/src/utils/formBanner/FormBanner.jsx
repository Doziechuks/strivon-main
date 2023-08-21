import React from "react";
import styles from "./FormBanner.module.css";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/images/strivon1.png";
import image from "../../assets/images/mainback.jpg";
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import twitter from "../../assets/icons/twitter.svg";
import linkedin from "../../assets/icons/linkedin.svg";

const FormBanner = ({ title, subTitle }) => {
  const navigate = useNavigate();
  return (
    <section
      className={styles.logoSection}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={styles.logoBox} onClick={() => navigate("/")}>
        <img src={logo} alt="" />
      </div>
      <div className={styles.titleBox}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subTitle}>{subTitle}</p>
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
            <img src={twitter} alt="/" />
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
            <img src={facebook} alt="/" />
          </span>
          <span
            className={styles.link}
            onClick={() =>
              window.open("http://Instagram.com/strivon_academy", "_blank")
            }
          >
            <img src={instagram} alt="/" />
          </span>
          <span className={styles.link}>
            <img src={linkedin} alt="/" />
          </span>
        </div>
        <p>&copy;2023 Strivon Academy. All rights reserved</p>
      </div>
    </section>
  );
};

export default FormBanner;
