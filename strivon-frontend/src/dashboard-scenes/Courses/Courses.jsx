import styles from "./courses.module.css";

import React from "react";

const Courses = () => {
  return (
    <div className={styles.courses}>
      <div className={styles.wrap}>
        <h2>Our Packages</h2>
        <div className={styles.packagewrap}>
          <article>
            <p className={styles.desc}>Frontend Software Engineering, Level 1</p>
            <ul className={styles.listcontainer}>
              <li>HTML5</li>
              <li>CSS</li>
              <li>Javascript (DOM, BOM & Algorithms)</li>
              <li>Git and Github</li>
            </ul>
          </article>
          <article>
            <p className={styles.desc}>Frontend Software Engineering, Level 2</p>
            <ul className={styles.listcontainer}>
              <li>React</li>
              <li>Material UI</li>
              <li>Javascript (Algorithms)</li>
              <li>Tailwind css</li>
              <li>APIs and endpoints testing</li>
            </ul>
          </article>
          <article>
            <p className={styles.desc}>Backend Software Engineering</p>
            <ul className={styles.listcontainer}>
              <li>PHP</li>
              <li>Nodejs</li>
            </ul>
          </article>
          <article>
            <p className={styles.desc}>Mobile App development</p>
            <ul className={styles.listcontainer}>
              <li>React native</li>
              <li>Flutter</li>
            </ul>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Courses;
