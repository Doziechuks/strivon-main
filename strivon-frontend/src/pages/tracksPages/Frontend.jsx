import React from "react";
import styles from "./customstyle.module.css";
import { trackData } from "./aboutTrackData";
import CustomTrack from "../../utils/customTrack/CustomTrack";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import frontendImage from "../../assets/images/frontend track.jpg";

const Frontend = () => {
  const { frontend } = trackData;
  return (
    <>
      <CustomTrack
        title="Become a certified Frontend Developer"
        subtitle="who is a frontend developer"
        about={frontend.about}
        link1="/tracks/backend"
        track1="see backend track"
        link2="/tracks/mobileapp"
        track2="see mobileApp track"
        image={frontendImage}
      >
        {frontend.courses.map((course, id) => (
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

export default Frontend;
