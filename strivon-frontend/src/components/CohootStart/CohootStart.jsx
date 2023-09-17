import React from 'react';
import styles from "./cohootstart.module.css";
import { Link } from 'react-router-dom';

const CohootStart = () => {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.left}>
                <h1>Apply to Cohort 3 bootcamp</h1>
                <p>The cohort 3 courses: web development foundation, software engineering, asp.net, 
                    data analytics, and product design.</p>
            </div>
            <div className={styles.right}>
                <div className={styles.startdate}>
                <div className={styles.startdatewrapper}>
                    <p>The next cohort starts</p>
                    <h2>11th December, 2023</h2>
                </div>
                <Link className={styles.btn}>
                Apply Now
                </Link>
                </div>
                <div className={styles.enddate}>
                <div className={styles.enddatewrapper}>
                    <p>Deadline for applications</p>
                    <h2>31st November, 2023</h2>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CohootStart;