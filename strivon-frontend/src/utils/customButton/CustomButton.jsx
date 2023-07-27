import React from "react";
import styles from "./CustomButton.module.css";

const CustomButton = ({ title, ...otherProps }) => {
  return (
    <button type="submit" className={styles.customBtn} {...otherProps}>
      {title}
    </button>
  );
};

export default CustomButton;
