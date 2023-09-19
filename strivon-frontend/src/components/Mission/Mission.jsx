import React from 'react';
import styles from './Mission.module.css';

const Mission = ({title, content}) => {
  return (
    <section className={styles.container}>
        <div>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    </section>
  )
}

export default Mission