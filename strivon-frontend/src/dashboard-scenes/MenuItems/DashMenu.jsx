import React from "react";
import styles from "./dashmenu.module.css";
import { AiOutlineUser } from "react-icons/ai";
import { TbStack2 } from "react-icons/tb";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { MdPercent } from "react-icons/md";

const DashMenu = () => {
  return (
    <section className={styles.dashmenu}>
      <div className={styles.item}>
        <AiOutlineUser className={styles.icon}/>
        Profile
      </div>
      <div className={styles.item} >
        <TbStack2 className={styles.icon}/>
        Payments
      </div>
      <div className={styles.item}>
        <HiOutlineAcademicCap className={styles.icon}/>
        Courses
      </div>
      <div className={styles.item}>
        <MdPercent className={styles.icon}/> Result
      </div>
      <div className={styles.item}>
        <img src="./assets/icons/referral.svg" alt="referral" className={styles.icon}/> Referral
      </div>
    </section>
  );
};

export default DashMenu;
