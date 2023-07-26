import React from "react";
import styles from "./dashmenu.module.css";
import { AiOutlineUser } from "react-icons/ai";
import { TbStack2 } from "react-icons/tb";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { MdPercent } from "react-icons/md";

const DashMenu = () => {
  return (
    <section className={styles.dashmenu}>
      <div>
        <AiOutlineUser />
        Profile
      </div>
      <div>
        <TbStack2 />
        Payments
      </div>
      <div>
        <HiOutlineAcademicCap />
        Courses
      </div>
      <div>
        <MdPercent /> Result
      </div>
      <div>
        <img src="./assets/icons/referral.svg" alt="referral" /> Referral
      </div>
    </section>
  );
};

export default DashMenu;
