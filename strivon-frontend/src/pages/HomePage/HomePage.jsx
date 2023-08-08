import React, { useEffect } from "react";
import styles from "./HomePage.module.css";
import { Seo } from "../../utils/seo";

const HomePage = () => {
  useEffect(() => {
    Seo({
      title: "Home || Strivon Academy",
      metaDescription:
        "Learn and gain mastery in highly sort after tech skills at Strivon Academy",
    });
  }, []);
  return <div>home page</div>;
};

export default HomePage;
