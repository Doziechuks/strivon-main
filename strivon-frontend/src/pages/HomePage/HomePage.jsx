import React, { useEffect } from "react";
import styles from "./HomePage.module.css";
import { Seo } from "../../utils/seo";

import Heading from "../../components/heading/Heading";
import About from "../../components/about/About";
import Tracks from "../../components/tracks/Tracks";
import CallToAction from "../../components/CallToAction/CallToAction";
import CohootStart from "../../components/CohootStart/CohootStart";

const HomePage = () => {
  useEffect(() => {
    Seo({
      title: "Home || Strivon Academy",
      metaDescription:
        "Learn and gain mastery in highly sort after tech skills at Strivon Academy",
    });
  }, []);
  return (
    <main className={styles.container}>
      <Heading />
      <CohootStart />
      <About />
      <Tracks />
      <CallToAction />
    </main>
  );
};

export default HomePage;
