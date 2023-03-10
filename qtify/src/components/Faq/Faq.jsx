import React from "react";
import Accordion from "../Accordion/Accordion";
import styles from "../Faq/Faq.module.css";
function Faq() {
  return (
    <div className={styles.accordion}>
      <h1 className={styles.faq_text}>FAQs</h1>
      <Accordion />
    </div>
  );
}

export default Faq;
