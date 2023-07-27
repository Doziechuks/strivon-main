import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/images/strivon1.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [pathName, setPathName] = useState("");
  const { pathname } = useLocation();
  useEffect(() => {
    setPathName(pathname);
  }, [pathname]);
  return (
    <nav className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.logoBox}>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className={styles.linkBox}>
          <Link
            className={`${styles.option} ${
              pathName === "/" ? styles.active : ""
            }`}
            to="/"
          >
            home
          </Link>
          <Link
            to="/aboutus"
            className={`${styles.option} ${
              pathName.includes("/aboutus") ? styles.active : ""
            }`}
          >
            about us
          </Link>
          <Link
            to="/tracks"
            className={`${styles.option} ${
              pathName.includes("/tracks") ? styles.active : ""
            }`}
          >
            tracks
          </Link>
          <Link
            to="/faqs"
            className={`${styles.option} ${
              pathName.includes("/faqs") ? styles.active : ""
            }`}
          >
            FAQs
          </Link>
          <Link
            to="/contactus"
            className={`${styles.option} ${
              pathName.includes("/contactus") ? styles.active : ""
            }`}
          >
            contact us
          </Link>
        </div>
        <div className={styles.loginBox}>
          <Link to="/apply" className={styles.register}>
            apply now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
