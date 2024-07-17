/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slider.scss";

import cave1 from "../../assets/images/pride_2024.png";
import cave2 from "../../assets/images/cave_a_king4.png";
import cave3 from "../../assets/images/cave_a_king1.png";
import cave4 from "../../assets/images/cave_a_king6.png";

const cavePictures = [cave1, cave2, cave3, cave4];

function Slider() {
  return (
    <>
      <h2 className="sliderTitle">quelques photos</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop
        pagination={{
          clickable: true,
        }}
        navigation
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {cavePictures.map((cave) => (
          <SwiperSlide key={cave}>
            <img src={cave} alt={`${cave}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Slider;
