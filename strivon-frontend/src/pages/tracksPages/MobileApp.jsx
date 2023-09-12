import React from "react";
import styles from "./customstyle.module.css";
import { trackData } from "./aboutTrackData";
import CustomTrack from "../../utils/customTrack/CustomTrack";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import mobileAppImage from "../../assets/images/mobile app track.jpg";

const MobileApp = () => {
  const { mobileApp } = trackData;
  return (
    <>
      <CustomTrack
        title="Become a certified "
        title2="Mobile App Developer"
        subtitle="who is a mobile app developer"
        about={mobileApp.about}
        link1="/tracks/frontend"
        track1="see frontend track"
        link2="/tracks/backend"
        track2="see backend track"
        image={mobileAppImage}
      >
        {mobileApp.courses.map((course, id) => (
          <div className={styles.learnCard} key={id}>
            <div className={styles.item} key={id}>
              <TaskAltIcon />
              <p>{course}</p>
            </div>
            <div className={styles.line} />
          </div>
        ))}
      </CustomTrack>
    </>
  );
};

export default MobileApp;
