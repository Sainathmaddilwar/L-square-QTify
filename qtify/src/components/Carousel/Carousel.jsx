import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../Carousel/Carousel.module.css";
import "swiper/css";
function Carousel({ data, renderComponent }) {
  console.log(data);
  return (
    <div className={styles.carousel}>
      <Swiper
        spaceBetween={40}
        slidesPerView={"auto"}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data.map((ele, idx) => (
          <SwiperSlide key={idx}>{renderComponent(ele)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
