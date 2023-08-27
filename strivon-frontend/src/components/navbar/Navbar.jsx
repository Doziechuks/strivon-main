import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/images/strivon1.png";
import { Link, useLocation } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";

const Navbar = () => {
  const [pathName, setPathName] = useState("");
  const [showTracks, setShowTracks] = useState(false);
  const { pathname } = useLocation();

  const handleShowTracks = () => {
    setShowTracks(true);
  };
  const handleCloseTracks = () => {
    if (showTracks) {
      setShowTracks(false);
    }
  };

  // const handleShowTracks = () => {
  //   setShow((prev) => !prev);
  // };
  // useEffect(() => {
  //   const handleMouseDown = (event) => {
  //     if (!event.target.closest(`.${styles.trackBox}`)) {
  //       setShow(false);
  //     }
  //   };
  //   document.addEventListener("mousedown", handleMouseDown);
  //   return () => {
  //     document.removeEventListener("mousedown", handleMouseDown);
  //   };
  // }, []);

  useEffect(() => {
    setPathName(pathname);
  }, [pathname]);

  // console.log({ show });
  return (
    <>
      <nav
        className={`${styles.container} ${
          pathName.includes("/apply") ||
          pathName.includes("/student") ||
          pathName.includes("/login") ||
          pathName.includes("/contactus")
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
          <div className={styles.linkBox}>
            <Link
              className={`${styles.option} ${
                pathName === "/" ? styles.active : ""
              }`}
              to="/"
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`${styles.option} ${
                pathName.includes("/about") ? styles.active : ""
              }`}
            >
              About
            </Link>
            <div
              className={`${styles.trackOptions} ${
                pathName.includes("/track") ? styles.active : ""
              }`}
              onMouseOver={handleShowTracks}
              onMouseOut={handleCloseTracks}
            >
              Tracks <FaAngleDown />
            </div>
            <Link
              to="/faqs"
              className={`${styles.option} ${
                pathName.includes("/faqs") ? styles.active : ""
              }`}
            >
              FAQs
            </Link>
            <Link
              to="/contactus"
              className={`${styles.option} ${
                pathName.includes("/contactus") ? styles.active : ""
              }`}
            >
              Contact us
            </Link>
          </div>
          <div className={styles.loginBox}>
            <Link to="/apply" className={styles.register}>
              Apply Now
            </Link>
          </div>
        </div>
      </nav>
      <div className={`${styles.trackBox} ${showTracks && styles.showOptions}`}>
        <Link to="/tracks/frontend" className={styles.trackLink}>
          frontend Track
        </Link>
        <Link to="/tracks/backend" className={styles.trackLink}>
          backend Track
        </Link>
        <Link to="/tracks/mobileapp" className={styles.trackLink}>
          mobile app Track
        </Link>
      </div>
    </>
  );
};

export default Navbar;
// ${show ? styles.showOptions : styles.trackBox}
//  <div
//    className={`${styles.trackOptions} ${
//      pathName.includes("/track") ? styles.active : ""
//    }`}
//    onClick={handleShowTracks}
//  >
//    Tracks {show ? <FaAngleUp /> : <FaAngleDown />}
//  </div>;
