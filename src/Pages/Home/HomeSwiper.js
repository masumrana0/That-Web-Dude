import React from "react";
import "./HomeSwiper.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import HomeSwiperCard from "./HomeSwiperCard";

const HomeSwiper = ({datas}) => {
  
  return (
    <div className="main-swiper">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
         
      >
        {
             datas.map(data=><SwiperSlide  >
                <HomeSwiperCard data={data}/>
             </SwiperSlide>)
        }
      </Swiper>
    </div>
  );
};

export default HomeSwiper;
