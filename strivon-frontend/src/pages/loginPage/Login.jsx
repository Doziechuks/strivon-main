import React, { useEffect, useState } from "react";
import styles from "./Login.module.css";
import logo from "../../assets/images/strivon1.png";
import CustomButton from "../../utils/customButton/CustomButton";
import CustomInput from "../../utils/customInput/CustomInput";
import { useNavigate } from "react-router-dom";
import { Seo } from "../../utils/seo";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FormBanner from "../../utils/formBanner/FormBanner";

const Login = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const handleToggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };
  useEffect(() => {
    Seo({
      title: "Student Login || Strivon Academy",
      metaDescription:
        "Login to your dashboard to view personal profile, perforemces, and pogress in the on going session at Strivon Academy",
    });
  }, []);
  return (
    <main className={styles.container}>
      <FormBanner
        title="Excel through mastery in the tech space"
        subTitle="Start your journey in the field of tech today"
      />
      <section className={styles.formSection}>
        <div className={styles.applicationBox}>
          <h2>Sign In to your dashboard</h2>
          <p>Enter your email and password to proceed to your dashboard</p>
        </div>
        <div className={styles.mobileHeading}>
          <div className={styles.logoBox} onClick={() => navigate("/")}>
            <img src={logo} alt="" />
          </div>
          <div className={styles.mobileTitle}>
            <h2>Sign In to your dashboard</h2>
            <p>Enter your email and password to proceed to your dashboard</p>
          </div>
        </div>
        <form className={styles.formBox}>
          <CustomInput placeholder="email" type="email" required />
          <div className={styles.passwordWrap}>
            <CustomInput
              placeholder="password"
              type={isVisible ? "text" : "password"}
              required
            />
            <div className={styles.toggleBox} onClick={handleToggleVisibility}>
              {isVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </div>
          </div>

          <CustomButton title="Proceed to dashboard" />
          <div className={styles.termsBox}>
            can't remeber your password? <span>Reset here!</span>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Login;
