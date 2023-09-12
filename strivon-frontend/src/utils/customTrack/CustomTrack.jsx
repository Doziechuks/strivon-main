import React from "react";
import styles from "./CustomTrack.module.css";
import { Link } from "react-router-dom";
import { handleScrollTop } from "../functions/scrollToTop";

const CustomTrack = (props) => {
  const {
    title,
    title2,
    subtitle,
    about,
    track1,
    track2,
    image,
    link1,
    link2,
    children,
  } = props;

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>{title}<span className={styles.title2}>{title2}</span></h1>
      </header>
      <section className={styles.wrapper}>
        <h3>{subtitle}?</h3>
        <div className={styles.aboutSection}>
          <div className={styles.aboutInfo}>
            <p className={styles.info}>{about}</p>
          </div>
          <div className={styles.imgwrapper}>
            <img src={image} alt="frontend" />
            {/* <h1>test</h1> */}
          </div>
        </div>
      </section>
      <section className={`${styles.wrapper2} ${styles.wrapper}`}>
        <h3>what you will learn</h3>
        <div className={styles.learnCard}>{children}</div>
        <div className={styles.btnwrapper}>
          <Link to={link1} className={styles.linkBtn} onClick={handleScrollTop}>
            {track1}
          </Link>
          <Link to="/apply" className={styles.linkBtn}>
            apply here
          </Link>
          <Link to={link2} className={styles.linkBtn} onClick={handleScrollTop}>
            {track2}
          </Link>
        </div>
        <div className={styles.mobileBtnWrap}>
          <Link to="/apply" className={styles.linkBtn}>
            apply here
          </Link>
          <div className={styles.otherTracks}>
            <Link
              to={link1}
              className={styles.linkBtn}
              onClick={handleScrollTop}
            >
              {track1}
            </Link>
            <Link
              to={link2}
              className={styles.linkBtn}
              onClick={handleScrollTop}
            >
              {track2}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CustomTrack;
