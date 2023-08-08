import React, { useEffect, useState } from "react";
import styles from "./dashmenu.module.css";
import { AiFillTaobaoSquare, AiOutlineUser } from "react-icons/ai";
import { TbStack2 } from "react-icons/tb";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { MdPercent } from "react-icons/md";
import referralicon from '../../assets/icons/referral.svg';
import { Link } from "react-router-dom";
import { setMobileView } from "../../redux/mobileToggle/mobileToggleAction";
import { createStructuredSelector } from "reselect";
import { selectMobileView } from "../../redux/mobileToggle/mobileToggleSelect";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";

const DashMenu = ({ setToggle }) => {
  const [pathName, setPathName] = useState("");
  const location = useLocation();
  const { pathname } = location;

    useEffect(() => {
    setPathName(pathname);
  }, [pathname]);

  return (
    <section className={styles.dashmenu}>
      <Link to="profile" onClick={() => setToggle(false)}>
        <div className={`${styles.item} ${pathName.includes('profile') ? styles.active : ''}`}>
          <AiOutlineUser className={`${styles.icon} ${pathName.includes('profile') ? styles.change : ''}`} />
          Profile
        </div>
      </Link>
      <Link to="payments" onClick={() => setToggle(false)}>
        <div className={`${styles.item} ${pathName.includes('payments') ? styles.active : ''}`}>
          <TbStack2 className={styles.icon} />
          Payments
        </div>
      </Link>

      <Link to="courses" onClick={() => setToggle(false)}>
        <div className={`${styles.item} ${pathName.includes('courses') ? styles.active : ''}`}>
          <HiOutlineAcademicCap className={styles.icon} />
          Courses
    
        </div>
      </Link>
      <Link to="results" onClick={() => setToggle(false)}>
        <div className={`${styles.item} ${pathName.includes('results') ? styles.active : ''}`}>
          <MdPercent className={styles.icon} /> Result
        </div>
      </Link>
      <Link to="referral" onClick={() => setToggle(false)}>
        <div className={`${styles.item} ${pathName.includes('referral') ? styles.active : ''}`}>
          <img
            src={referralicon}
            alt="referral"
            className={styles.icon}
          />
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
