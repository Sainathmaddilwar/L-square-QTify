import React from "react";
import styles from "../Card/Card.module.css";
function Card({ data }) {
  return (
    <div className={styles.card_container}>
      <div className={styles.card_img_btn_container}>
        <div className={styles.img}>
          <img src={data.image} alt="card" />
        </div>
        <div className={styles.card_btn_container}>
          <button className={styles.card_btn}>{data.follows} Follows</button>
        </div>
      </div>
      <div className={styles.card_text}>{data.title}</div>
    </div>
  );
}

export default Card;
