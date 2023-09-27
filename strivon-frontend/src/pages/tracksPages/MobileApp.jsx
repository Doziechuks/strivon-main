import React, { useEffect }from "react";
import styles from "./customstyle.module.css";
import { handleScrollTop } from "../../utils/functions/scrollToTop";
import { trackData } from "./aboutTrackData";
import CustomTrack from "../../utils/customTrack/CustomTrack";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
// import mobileAppImage from "../../assets/images/mobile app track.jpg";
import mobileAppImage from "../../assets/images/mobile-track-dark1.jpg";

const MobileApp = () => {
  const { mobileApp } = trackData;

  useEffect(() => {
    handleScrollTop()
  })
  return (
    <>
      <CustomTrack
        title="Become a certified "
        title2="Mobile App Developer"
        subtitle="who is a mobile app developer"
        // about={mobileApp.about}
        p1={mobileApp.about[0]}
        p2={mobileApp.about[1]}
        p3={mobileApp.about[2]}
        p4={mobileApp.about[3]}
        p5={mobileApp.about[4]}
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
