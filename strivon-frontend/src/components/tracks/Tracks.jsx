import React from "react";
import styles from "./Tracks.module.css";
import { Link } from "react-router-dom";
import { cardContents } from "./cardContents";

const Tracks = () => {
  return (
    <section className={styles.container}>
      <h6 className={styles.title}>
        Our <span>Tracks</span>
      </h6>
      {/* <div className={styles.wrapper}>
        <div className={styles.box}>
          <h5>FrontEnd Track</h5>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            in et officia aliquid vel, officiis voluptatibus numquam placeat at
            sapiente aut ipsum accusamus quos vero. Minima quaerat inventore
            laudantium. Id dignissimos perspiciatis ut officia nisi aliquam
            omnis debitis fugiat esse quam ipsa incidunt odit exercitationem
            repudiandae sint, ipsam ratione accusamus!
          </p>
          <Link to="/tracks/frontend" className={styles.btn}>
            see details...
          </Link>
        </div>
        <div className={styles.box}>
          <h5>BackEnd Track</h5>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            in et officia aliquid vel, officiis voluptatibus numquam placeat at
            sapiente aut ipsum accusamus quos vero. Minima quaerat inventore
            laudantium. Id dignissimos perspiciatis ut officia nisi aliquam
            omnis debitis fugiat esse quam ipsa incidunt odit exercitationem
            repudiandae sint, ipsam ratione accusamus!
          </p>
          <Link to="/tracks/backend" className={styles.btn}>
            see details...
          </Link>
        </div>
      </div> */}
      <div className={styles.wrapper2}>
        {cardContents.map((content) => {
          const { id, title, desc, imgUrl } = content;
          return (
            <div key={id} className={styles.card}>
              <div className={styles.imgcontainer}>
                <img src={imgUrl} alt="img" />
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
              <Link className={styles.btn}>
                View Course
                </Link>
              

            </div>
          )
        })}
      </div>
    </section>
  );
};

export default Tracks;
