import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import styles from "../CarouselLeftArrow/CarouselLeftArrow.module.css";
import { ReactComponent as LeftArrow } from "../../../assets/LeftArrow.svg";

export default function CarouselLeftArrow() {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

  useEffect(() => {
    swiper.on("slideChange", function () {
      setIsBeginning(swiper.isBeginning);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [swiper]);

  return (
    <div className={styles.leftNavigation}>
      {!isBeginning && <LeftArrow onClick={() => swiper.slidePrev()} />}
    </div>
  );
}
