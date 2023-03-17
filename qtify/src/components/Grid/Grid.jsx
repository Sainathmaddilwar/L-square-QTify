import React from "react";
import styles from "../Grid/Grid.module.css";
import Card from "../Card/Card";
function Grid() {
  return (
    <div className={styles.grid}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default Grid;
