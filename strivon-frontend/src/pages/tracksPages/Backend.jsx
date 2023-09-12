import React from "react";
import styles from "./customstyle.module.css";
import { trackData } from "./aboutTrackData";
import CustomTrack from "../../utils/customTrack/CustomTrack";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import backendImage from "../../assets/images/backend track.jpg";

const Backend = () => {
  const { backend } = trackData;
  return (
    <>
      <CustomTrack
        title="Become a certified "
        title2="Backend Developer"
        subtitle="who is a backend developer"
        about={backend.about}
        link1="/tracks/frontend"
        track1="see frontend track"
        link2="/tracks/mobileapp"
        track2="see mobileApp track"
        image={backendImage}
      >
        {backend.courses.map((course, id) => (
          <div className={styles.learnCard} key={id}>
            <div className={styles.item} key={id}>
              <TaskAltIcon />
              <p>{course}</p>
            </div>
            <div className={styles.line} />
          </div>
        ))}{" "}
      </CustomTrack>
    </>
  );
};

export default Backend;
