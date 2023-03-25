import React, { useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import styles from "../Carousel/Carousel.module.css";
import { Navigation } from "swiper";
import "swiper/css";
import CarouselLeftArrow from "./CarouselLeftArrow/CarouselLeftArrow";
import CarouselRightArrow from "./CarouselRightArrow/CarouselRightArrow";
function Controls({ data }) {
  const swiper = useSwiper();

  useEffect(() => {
    swiper.slideTo(0, 10);
  }, [data]);

  return <div></div>;
}

function Carousel({ data, renderComponent }) {
  return (
    <div className={styles.carousel}>
      <Swiper
        spaceBetween={40}
        initialSlide={0}
        slidesPerView={"auto"}
        modules={[Navigation]}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <Controls data={data} />

        <CarouselLeftArrow />
        <CarouselRightArrow />
        {data.map((ele, idx) => (
          <SwiperSlide key={idx}>{renderComponent(ele)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
