import styles from "./aboutpage.module.css";
import { useEffect } from "react";
import { Seo } from "../../utils/seo";
import bg from "../../assets/images/aboutbg.jpg";
import frontend from "../../assets/images/frontend.avif";
import strive from '../../assets/images/strivon-graphics.jpg'
import CustomTrack from "../../utils/customTrack/CustomTrack";

const AboutPage = () => {
  useEffect(() => {
    Seo({
      title: "About || Strivon Academy",
      metaDescription: "Learn about Strivon Academy",
    });
  }, []);
  return (
    <main className={styles.container}>
      <section className={styles.inner}>
      <div className={styles.header}>
          <h1 className={styles.title}>
            Learn About <span>Strivon</span>{" "}
          </h1>
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
              <p className={styles.info}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                vitae iure voluptate nam sit laudantium debitis ipsa eos natus
                deserunt neque nostrum quia, repudiandae architecto dolorum
                eveniet, qui enim, similique dicta necessitatibus placeat dolore
                laboriosam praesentium laborum. Laborum, molestias qui.
              </p>
              <p className={styles.info}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                vitae iure voluptate nam sit laudantium debitis ipsa eos natus
                deserunt neque nostrum quia, repudiandae architecto dolorum
                eveniet, qui enim, similique dicta necessitatibus placeat dolore
                laboriosam praesentium laborum. Laborum, molestias qui.
              </p>
            </div>
            <div className={styles.imgwrapper}>
              <img src={strive} alt="frontend" />
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default AboutPage;
