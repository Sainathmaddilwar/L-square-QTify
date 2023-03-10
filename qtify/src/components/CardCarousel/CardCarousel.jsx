import React from "react";
import Card from "../Card/Card";
import Carousel from "react-elastic-carousel";
import styles from "../CardCarousel/Carousel.module.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 7 },
];
function CardCarousel() {
  return (
    <>
      <div className={styles.carousel}>
        <Carousel breakPoints={breakPoints}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Carousel>
      </div>
    </>
  );
}

export default CardCarousel;
