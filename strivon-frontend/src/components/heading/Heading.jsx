import React from "react";
import styles from "./Heading.module.css";
import { Link } from "react-router-dom";
import backgound from "../../assets/images/home background.jpg";

import { handleScrollTop } from "../../utils/functions/scrollToTop";

const Heading = () => {
  return (
    <section className={styles.container}>
      <img src={backgound} alt="" className={styles.background} />
      <h1 className={styles.title}>
        welcome to <span>strivon academy</span> <br/> start your journey towards tech
        mastery
      </h1>
      <p className={styles.info}>
        We make sure you gain enough mastery that will help you excel in the
        ever evolving tech space by learning highly sort after tech skills in
        the field of Software Engineering.
      </p>
      <div className={styles.btnWrap}>
        <Link to="/apply" className={styles.btn} onClick={handleScrollTop}>
          Apply Now
        </Link>
        <Link to="/about" className={styles.btn} onClick={handleScrollTop}>
          Learn more
        </Link>
      </div>
    </section>
  );
};

export default Heading;
