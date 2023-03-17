import React, { useState, useEffect } from "react";
import styles from "../Section/Section.module.css";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
function Section({ title, dataSource }) {
  const [cards, setCards] = useState([]);
  const [isShowAll, setIsShowAll] = useState(false);
  useEffect(() => {
    // console.log(title);
    dataSource().then((res) => {
      // console.log(res);
      setCards(res);
    });
  }, []);
  const handleToggle = () => {
    setIsShowAll((prevState) => !prevState);
  };
  return (
    <div className={styles.section}>
      <div className={styles.wrapper}>
        <div style={{ color: "white" }}>
          <h4>{title}</h4>
        </div>
        <div className={styles.showAll} onClick={handleToggle}>
          <h4>{isShowAll ? "collapse" : "Show All"}</h4>
        </div>
      </div>

      {isShowAll ? (
        <div className={styles.cardWrapper}>
          {cards &&
            cards.map((card, idx) => {
              return (
                <Card
                  key={idx}
                  data={{
                    title: card.title,
                    image: card.image,
                    follows: card.follows,
                  }}
                />
              );
            })}
        </div>
      ) : (
        <Carousel
          data={cards}
          renderComponent={(data) => <Card data={data} />}
        />
      )}
    </div>
  );
}

export default Section;
