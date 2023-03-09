import React from "react";
import styles from "../Hero/Hero.module.css";
function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.text}>
        100 thosands songs Ad free
        <br />
        Over thousands podcasts episodes
      </div>
      <div className={styles.hero_img}>
        <img src={require("../../assets/headphone.png")} alt="headphone" />
      </div>
    </div>
  );
}

export default Hero;
