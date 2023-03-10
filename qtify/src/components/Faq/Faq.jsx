import React from "react";
import Accordion from "../Accordion/Accordion";
import styles from "../Faq/Faq.module.css";
function Faq() {
  return (
    <div className={styles.accordion}>
      <Accordion />
    </div>
  );
}

export default Faq;
