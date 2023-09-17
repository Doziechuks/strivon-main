import React from 'react';
import styles from './calltoaction.module.css';
import excel from '../../assets/images/excel.jpg';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <p className={styles.p}>JOIN US TODAY</p>
            <h1>Gain Skillful Mastery</h1>
            <p >Learn valuable and in-demand skills basics by basics taught by enthusiastic and inspiring instructors.</p>
            <div className={styles.loginBox}>
            <Link to="/apply" className={styles.register}>
              Apply Now
            </Link>
          </div>
        </div>
        </div>
  )
}

export default CallToAction