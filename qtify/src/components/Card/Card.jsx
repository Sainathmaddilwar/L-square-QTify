import React from "react";
import styles from "../Card/Card.module.css";
function Card() {
  return (
    <div className={styles.card_container}>
      <div className={styles.card_img_btn_container}>
        <div>
          <img src={require("../../assets/card-image.png")} alt="card-image" />
        </div>
        <div className={styles.card_btn_container}>
          <button className={styles.card_btn}>100 Follows</button>
        </div>
      </div>
      <div className={styles.card_text}>New English Songs</div>
    </div>
  );
}

export default Card;
