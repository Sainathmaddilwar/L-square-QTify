import React, { useState, useEffect } from "react";
import styles from "../Section/Section.module.css";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import Filters from "../Tabs/Filters";
function Section({ title, cards, filterSource, type }) {
  const [isShowAll, setIsShowAll] = useState(false);
  const [filters, setFilters] = useState([{ key: "all", label: "all" }]);
  const [selectedFilterdIndex, setSelectedFilteredIndex] = useState(0);

  useEffect(() => {
    if (filterSource) {
      filterSource().then((data) => {
        setFilters([...filters, ...data.data]);
      });
    }
  }, []);

  const handleToggle = () => {
    setIsShowAll((prevState) => !prevState);
  };

  const filteredData = cards.filter((card) =>
    selectedFilterdIndex !== 0
      ? card.genre.key === filters[selectedFilterdIndex].key
      : card
  );

  // console.log(filteredData);
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
      {filterSource && (
        <Filters
          data={filters}
          selectedFilterdIndex={selectedFilterdIndex}
          setSelectedFilteredIndex={setSelectedFilteredIndex}
        />
      )}

      {isShowAll ? (
        <div className={styles.cardWrapper}>
          {cards &&
            filteredData.map((card, idx) => {
              return (
                <Card
                  key={idx}
                  data={{
                    title: card.title,
                    image: card.image,
                    follows: card.follows,
                  }}
                  type={type}
                />
              );
            })}
        </div>
      ) : (
        <Carousel
          data={filteredData}
          renderComponent={(data) => <Card data={data} type={type} />}
        />
      )}
    </div>
  );
}

export default Section;
