import styles from "./aboutpage.module.css";
import { useEffect } from "react";
import { Seo } from "../../utils/seo";
import bg from "../../assets/images/aboutbg.jpg";
import frontend from "../../assets/images/frontend.avif";
import CustomTrack from "../../utils/customTrack/CustomTrack";

const AboutPage = () => {
  useEffect(() => {
    Seo({
      title: "About || Strivon Academy",
      metaDescription: "Learn about Strivon",
    });
  }, []);
  return (
    <main className={styles.container}>
      <section className={styles.inner}>
        <div
          className={styles.top}
          
        >
          <img src={bg} alt='' />
         <h1>Strive For Mastery</h1> 
        </div>
        <div className={styles.second}>
          <div className={styles.boxcon}>
            <div className={styles.box1}></div>
            <div className={styles.box2}></div>
            <div className={styles.box3}></div>
            <div className={styles.box4}></div>
          </div>
          <div className={`${styles.boxcon2} ${styles.rotate}`}>
            <div className={styles.box5}></div>
            <div className={styles.box6}></div>
            <div className={styles.box7}></div>
            <div className={styles.box8}></div>
          </div>
        </div>
        <section className={styles.wrapper}>
          <h3>About Our Institute</h3>
          <div className={styles.aboutSection}>
            <div className={styles.aboutInfo}>
              <p className={styles.info}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                vitae iure voluptate nam sit laudantium debitis ipsa eos natus
                deserunt neque nostrum quia, repudiandae architecto dolorum
                eveniet, qui enim, similique dicta necessitatibus placeat dolore
                laboriosam praesentium laborum. Laborum, molestias qui.
              </p>
            </div>
            <div className={styles.imgwrapper}>
              <img src={frontend} alt="frontend" />
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default AboutPage;
