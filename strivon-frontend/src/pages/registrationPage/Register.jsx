import React, { useEffect, useState } from "react";
import styles from "./Register.module.css";
import { Seo } from "../../utils/seo";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import logo from "../../assets/images/strivon1.png";
import CustomInput from "../../utils/customInput/CustomInput";
import CustomButton from "../../utils/customButton/CustomButton";
import FormBanner from "../../utils/formBanner/FormBanner";

const initialUser = { fullname: "", email: "", phone: 0 };
const Register = () => {
  const [user, setUser] = useState(initialUser);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "https://strivonacademy.com/phpapi/api/register.php";
    let fData = new FormData();
    fData.append("fullname", user.fullname);
    fData.append("phone", user.phone);
    fData.append("email", user.email);
    if (
      user.fullname.trim() === "" ||
      user.email.trim() === "" ||
      user.phone.trim() === ""
    ) {
      setError("inputs cannot be empty");
      return;
    }
    try {
      const res = await axios.post(url, fData);
      if (res) {
        console.log(res);
      }
    } catch (error) {
      console.log(error.message);
      setError("something went wrong");
    }
  };

  useEffect(() => {
    Seo({
      title: "Apply || start your journey towards growing you career in tech",
      metaDescription:
        "Have a seamless appliction process in your journey towards mastery in the filed of tech",
    });
  }, []);
  return (
    <main className={styles.container}>
      <FormBanner
        title="Excel through mastery in the tech space"
        subTitle="Start your journey in the field of tech today"
      />
      {/* <section
        className={styles.logoSection}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className={styles.logoBox} onClick={() => navigate("/")}>
          <img src={logo} alt="" />
        </div>
        <div className={styles.titleBox}>
          <h1 className={styles.title}>
            Excel through mastery in the tech space
          </h1>
          <p className={styles.subTitle}>
            Start your journey in the field of tech today
          </p>
        </div>
        <div className={styles.mediaBox}>
          <div className={styles.iconBox}>
            <span
              className={styles.link}
              onClick={() =>
                window.open(
                  "https://twitter.com/strivonacademy?t=GNiB-yZBXThEVGA_iYIqjA&s=09",
                  "_blank"
                )
              }
            >
              <img src={twitter} alt="/" />
            </span>
            <span
              className={styles.link}
              onClick={() =>
                window.open(
                  "https://www.facebook.com/profile.php?id=100093645410148",
                  "_blank"
                )
              }
            >
              <img src={facebook} alt="/" />
            </span>
            <span
              className={styles.link}
              onClick={() =>
                window.open("http://Instagram.com/strivon_academy", "_blank")
              }
            >
              <img src={instagram} alt="/" />
            </span>
            <span className={styles.link}>
              <img src={linkedin} alt="/" />
            </span>
          </div>
          <p>&copy;2023 Strivon Academy. All rights reserved</p>
        </div>
      </section> */}
      <section className={styles.formSection}>
        <div className={styles.applicationBox}>
          <h2>application form</h2>
          <p>Please fill in your details</p>
        </div>
        <div className={styles.mobileHeading}>
          <div className={styles.logoBox} onClick={() => navigate("/")}>
            <img src={logo} alt="" />
          </div>
          <div className={styles.mobileTitle}>
            <h2>application form</h2>
            <p>Please fill in your details correctly</p>
          </div>
        </div>
        <form className={styles.formBox} onSubmit={handleSubmit}>
          <CustomInput
            placeholder="Full name"
            type="name"
            name="fullname"
            value={user.fullname}
            onChange={handleChange}
            required
          />
          <CustomInput
            placeholder="email"
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
          />
          <CustomInput
            placeholder="phone number"
            type="number"
            name="phone"
            value={user.phone}
            onChange={handleChange}
            required
          />
          <div className={styles.termsBox}>
            By clicking submit, I agree to <Link>Terms of Use</Link> and
            acknowledge that I have read the <Link>Privacy Policy</Link>.
          </div>
          <CustomButton title="submit" />
          <span>{user.fullname}</span>
          <span>{user.email}</span>
          <span>{user.phone}</span>
        </form>
      </section>
    </main>
  );
};

export default Register;
