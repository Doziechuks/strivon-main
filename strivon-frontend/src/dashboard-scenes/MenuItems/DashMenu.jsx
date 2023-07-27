import React from "react";
import styles from "./dashmenu.module.css";
import { AiOutlineUser } from "react-icons/ai";
import { TbStack2 } from "react-icons/tb";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { MdPercent } from "react-icons/md";

import { Link } from "react-router-dom";
import { setMobileView } from "../../redux/mobileToggle/mobileToggleAction";
import { createStructuredSelector } from "reselect";
import { selectMobileView } from "../../redux/mobileToggle/mobileToggleSelect";
import { connect } from "react-redux";

const DashMenu = ({ setToggle }) => {
  return (
    <section className={styles.dashmenu}>
      <Link to="profile" onClick={() => setToggle(false)}>
        <div className={styles.item}>
          <AiOutlineUser className={styles.icon} />
          Profile
        </div>
      </Link>
      <Link to="payments" onClick={() => setToggle(false)}>
        <div className={styles.item}>
          <TbStack2 className={styles.icon} />
          Payments
        </div>
      </Link>

      <Link to="courses" onClick={() => setToggle(false)}>
        <div className={styles.item}>
          <HiOutlineAcademicCap className={styles.icon} />
          Courses
        </div>
      </Link>
      <Link to="results" onClick={() => setToggle(false)}>
        <div className={styles.item}>
          <MdPercent className={styles.icon} /> Result
        </div>
      </Link>
      <Link to="referral" onClick={() => setToggle(false)}>
        <div className={styles.item}>
          <img
            src="../assets/icons/referral.svg"
            alt="referral"
            className={styles.icon}
          />{" "}
          Referral
        </div>
      </Link>
    </section>
  );
};

const mapStateToProps = createStructuredSelector({
  toggle: selectMobileView,
});

const mapDispatchToProps = (dispatch) => ({
  setToggle: () => dispatch(setMobileView()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashMenu);
