import React, { useState } from "react";
import styles from "./CustomTrack.module.css";
import { Link } from "react-router-dom";
import { handleScrollTop } from "../functions/scrollToTop";

const CustomTrack = (props) => {
  const [showInfo, setShowInfo] = useState(false);
  const {
    title,
    title2,
    subtitle,
    about, p1, p2, p3, p4, p5,
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
          <div className={`${styles.aboutInfo} ${showInfo ? styles.more : styles.less}`}>
            <p className={showInfo ? styles.more : styles.less}>
            <p className={styles.info}>{about}</p>
            <p className={styles.info}>{p1}</p>
            <br />
            <p className={styles.info}>{p2}</p>
            <br />
            <br className={showInfo && styles.hide}/>
            <p className={styles.info}>{p3}</p>
            <br />
            <p className={styles.info}>{p4}</p>
            <br />
            <p className={styles.info}>{p5}</p>
            </p>
          </div>
          <div className={styles.imgwrapper}>
            <img src={image} alt="frontend" />
            {/* <h1>test</h1> */}
          </div>
        </div>
        <button onClick={() => setShowInfo((prev) => !prev)} className={styles.btn}>{showInfo ? "show less": "show more"}</button>
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
