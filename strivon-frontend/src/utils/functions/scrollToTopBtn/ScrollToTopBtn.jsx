import React, { useState } from "react";
import styles from "./ScrollToTopBtn.module.css";
import { handleScrollTop } from "../scrollToTop";

const ScrollToTopBtn = () => {
  const [showBtn, setShowBtn] = useState(false);

  const handleShowBtn = () => {
    if (window.scrollY >= 50) {
      setShowBtn(true);
    } else {
      setShowBtn(false);
    }
  };
  window.addEventListener("scroll", handleShowBtn);
  return (
    <div
      className={`${styles.scrollTopBtnWrap} ${showBtn && styles.showBtn}`}
      onClick={handleScrollTop}
    >
      <div className={styles.scrollTopBtnInner}>
        <div className={styles.btn} />
      </div>
    </div>
  );
};

export default ScrollToTopBtn;
