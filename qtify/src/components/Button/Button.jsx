import React from "react";
import styles from "../Button/Button.module.css";
function Button() {
  return (
    <div className={styles.box}>
      <button className={styles.button}>Give Feedback</button>
    </div>
  );
}

export default Button;
