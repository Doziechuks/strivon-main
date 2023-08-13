import React, { useState, useEffect } from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/images/strivonwhitetrans.png";
import { Link, useLocation } from "react-router-dom";
import facebook from "../../assets/icons/i.fi-social-facebook.svg";
import instagram from "../../assets/icons/svg.feather.svg";
import twitter from "../../assets/icons/i.fi-social-twitter.svg";
import linkedin from "../../assets/icons/i.fi-social-linkedin.svg";
import email from "../../assets/icons/icon-email.svg";
import phone from "../../assets/icons/icon-phone.svg";

const Footer = () => {
  const [pathName, setPathName] = useState("");
  const { pathname } = useLocation();
  useEffect(() => {
    setPathName(pathname);
  }, [pathname]);

  return (
    <footer
      className={`${styles.container} ${
        pathName.includes("/apply") ||
        pathName.includes("/student") ||
        pathName.includes("/login")
          ? styles.remove
          : ""
      }`}
    >
      <section className={styles.wrapper}>
        <div className={styles.box1}>
          <div className={styles.logoBox}>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className={styles.mailBox}>
            <img src={email} alt="linedin logo" />
            <span>strivonacademy@gmail.com</span>
          </div>
          <div className={styles.mailBox}>
            <img src={phone} alt="linedin logo" />
            <span>+2348161384634</span>
          </div>
        </div>

        <div className={styles.box2}>
          <div className={styles.quickLinkBox}>
            <h4 className={styles.title}>quick links</h4>
            <div className={styles.linkBox}>
              <Link to="/aboutus" className={styles.link}>
                about
              </Link>
              <Link to="/faqs" className={styles.link}>
                FAQs
              </Link>
              <Link to="/contactus" className={styles.link}>
                contact us
              </Link>
            </div>
          </div>
          <div className={styles.quickLinkBox}>
            <h4 className={styles.title}>tracks</h4>
            <div className={styles.linkBox}>
              <Link to="/tracks/frontend" className={styles.link}>
                frontend track
              </Link>
              <Link to="/tracks/backend" className={styles.link}>
                backend track
              </Link>
              <Link to="/tracks/mobileapp" className={styles.link}>
                mobile app track
              </Link>
            </div>
          </div>
          <div className={styles.mediaLinkBox}>
            <span className={styles.mediaLink}>
              <img src={facebook} alt="linedin logo" />
            </span>
            <span className={styles.mediaLink}>
              <img src={instagram} alt="linedin logo" />
            </span>
            <span className={styles.mediaLink}>
              <img src={twitter} alt="linedin logo" />
            </span>
            <span className={styles.mediaLink}>
              <img src={linkedin} alt="linedin logo" />
            </span>
          </div>
        </div>
      </section>
      <div className={styles.line} />
      <p className={styles.copy}>
        &copy; 2023 Strivon Academy. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
