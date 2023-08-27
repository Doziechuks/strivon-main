import React, { useState } from "react";
import styles from "./About.module.css";
import frontend from "../../assets/images/frontend.avif";
import { Link } from "react-router-dom";
import { handleScrollTop } from "../../utils/functions/scrollToTop";

const About = () => {
  const [isVisible, setisVisible] = useState(false);
  const [isVisibleMobile1, setisVisibleMobile1] = useState(false);
  const [isVisibleMobile2, setisVisibleMobile2] = useState(false);

  const handleVisible = () => {
    if (window.scrollY >= 150) {
      setisVisible(true);
    } else {
      setisVisible(false);
    }
    if (window.scrollY >= 150) {
      setisVisibleMobile1(true);
    } else {
      setisVisibleMobile1(false);
    }
    if (window.scrollY >= 400) {
      setisVisibleMobile2(true);
    } else {
      setisVisibleMobile2(false);
    }
  };
  window.addEventListener("scroll", handleVisible);
  return (
    <section className={styles.container}>
      <h6 className={styles.mobilTitle}>
        Why choose <span>Strivon Academy</span>
      </h6>
      <div className={styles.wrapper}>
        <div
          className={`${styles.box1} ${isVisible && styles.show} ${
            isVisibleMobile1 && styles.showMobile
          }`}
        >
          <img src={frontend} alt="frontend" />
        </div>
        <div
          className={`${styles.box2} ${isVisible && styles.show} ${
            isVisibleMobile2 && styles.showMobile
          }`}
        >
          <h6 className={styles.title}>
            Why choose <span>Strivon Academy</span>
          </h6>
          <div className={styles.info}>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestiae dolorum, dolor fugit delectus obcaecati saepe iusto enim
              odit eius minus corrupti vitae expedita alias, iste libero quas
              maiores illum! Esse.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestiae dolorum, dolor fugit delectus obcaecati saepe iusto enim
              odit eius minus corrupti vitae expedita alias, iste libero quas
              maiores illum! Esse. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Sapiente voluptas ratione amet inventore rem ex.
            </p>
          </div>
          <Link to="/about" className={styles.btn} onClick={handleScrollTop}>
            Learn more
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
