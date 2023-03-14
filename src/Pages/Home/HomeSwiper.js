import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./HomeSwiper.css";

// import required modules
import { Pagination } from "swiper";
import HomeSwiperCard from "./HomeSwiperCard";
import { contexts } from "../../Contexts/UserContext";
const HomeSwiper = ({ datas }) => {
  const {theme}=useContext(contexts);
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          350:{
            slidesPerView:1,
            spaceBetween:10
          },
          280:{
            slidesPerView:1,
            spaceBetween:10
          },
          530:{
            slidesPerView:2,
            spaceBetween:40
          },
          810:{
            slidesPerView:2,
            spaceBetween:50
          },
          760:{
            slidesPerView:2,
            spaceBetween:50
          },
          910:{
            slidesPerView:2,
            spaceBetween:55
          },
          1280:{
            slidesPerView:3,
            spaceBetween:55
          },
          1160:{
            slidesPerView:2,
            spaceBetween:10
          },

         }}
      > 
      {
        datas.map(data=><SwiperSlide className={` ${theme? "header-home-DarkMode":""}`} key={data.id}>
         <HomeSwiperCard data={data} />
        </SwiperSlide>)
      }
      </Swiper>
    </>
  );
};

export default HomeSwiper;
