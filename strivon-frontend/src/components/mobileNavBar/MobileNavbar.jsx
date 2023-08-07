import React, { useEffect, useState } from "react";
import styles from "./MobileNavbar.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../../assets/images/strivon1.png";
import { Link, useLocation } from "react-router-dom";

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  const [pathName, setPathName] = useState("");
  const { pathname } = useLocation();
  const handleOpen = () => {
    setOpen((prev) => !prev);
  };
  useEffect(() => {
    const handleMouseDown = (event) => {
      if (!event.target.closest(`.${styles.trackBox}`)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleMouseDown);
    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);
  useEffect(() => {
    setPathName(pathname);
  }, [pathname]);
  return (
    <>
      <nav
        className={`${styles.container} ${
          pathName.includes("/apply") ||
          pathName.includes("/student") ||
          pathName.includes("/login")
            ? styles.remove
            : ""
        }`}
      >
        <div className={styles.wrapper}>
          <div className={styles.logoBox}>
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className={styles.wrap}>
            <Link to="/apply" className={styles.register}>
              apply now
            </Link>
            <div className={styles.iconBox} onClick={handleOpen}>
              {open ? (
                <CloseIcon sx={{ fontSize: 30 }} />
              ) : (
                <MenuIcon sx={{ fontSize: 30 }} />
              )}
            </div>
          </div>
        </div>
      </nav>
      <section className={`${styles.navOptions} ${open && styles.active}`}>
        <Link to="/" className={styles.linkOption}>
          home
        </Link>
        <hr />
        <Link to="/aboutus" className={styles.linkOption}>
          about us
        </Link>
        {/* <hr />
        <div className={styles.trackBox} onClick={handleOpnTrack}>
          <span className={styles.tracks}>tracks</span>
          {openTrack ? (
            <KeyboardArrowUpIcon sx={{ fontSize: 30 }} />
          ) : (
            <KeyboardArrowDownIcon sx={{ fontSize: 30 }} />
          )}
        </div> */}

        <hr />
        <Link to="/tracks/frontend" className={styles.linkOption}>
          frontend track
        </Link>
        <hr />
        <Link to="/tracks/backend" className={styles.linkOption}>
          backend track
        </Link>
        <hr />
        <Link to="/tracks/mobileapp" className={styles.linkOption}>
          mobile app track
        </Link>
        <hr />
        <Link to="/faqs" className={styles.linkOption}>
          FAQs
        </Link>
        <hr />
        <Link to="/contactus" className={styles.linkOption}>
          contact us
        </Link>
        <hr />
        <Link to="/apply" className={styles.linkOption}>
          apply now
        </Link>
      </section>
    </>
  );
};

export default MobileNavbar;
