import React, { useState } from "react";
import styles from "./About.module.css";
import frontend from "../../assets/images/frontend.avif";
import strive from "../../assets/images/strivon-graphics2.png";
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
          <img src={strive} alt="frontend" />
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
              At Strivon, our commitment is to meet your unique needs as a student. Unlike treating you as part of a crowd, 
              we recognize and value your individual journey. With our team of dedicated and inspired instructors by your side, 
              you can rest assured that you won't fall behind. Our promise is to provide you with a rock-solid foundation that 
              can give you a significant advantage in the competitive tech market.

            </p>
            <p>
            We understand that every student is different, and that's why we tailor our approach
             to your specific requirements. Whether you're a beginner or looking to enhance your skills, 
             we're here to support your growth. At Strivon, it's not just about education; it's about 
             empowering you to thrive in the dynamic world of technology.
             <br />
             
Join us on this exciting journey, and let's strive for success together.
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
