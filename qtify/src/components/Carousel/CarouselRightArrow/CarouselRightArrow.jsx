import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import styles from "../CarouselRightArrow/CarouselRightArrow.module.css";
import { ReactComponent as RightArrow } from "../../../assets/RightArrow.svg";

export default function CarouselRightArrow() {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(swiper.isEnd);

  useEffect(() => {
    swiper.on("slideChange", function () {
      setIsEnd(swiper.isEnd);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [swiper]);

  return (
    <div className={styles.rightNavigation}>
      {!isEnd && <RightArrow onClick={() => swiper.slideNext()} />}
    </div>
  );
}
//  />(
// <img src={require("../../../assets/LeftArrow.png")} alt="LeftArrow" />
// )
