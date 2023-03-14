import React, { useContext } from "react";
import { contexts } from "../../Contexts/UserContext";
import "./HomeSwoperCard.css";

const HomeSwiperCard = ({ data }) => {
  const { name, Company_name, position, photo } = data;
 const {theme}=useContext(contexts)
  return (
    <div className={` swiper-card-container ${theme? " swiper-card-DarkMode":""}`}>
      <img src={photo} alt={"successfull Student"} />

      <div className="swiper-card-text">
        <h2>{name}</h2>
        <p>{position}</p>
        <p>{Company_name}</p>
      </div>
    </div>
  );
};

export default HomeSwiperCard;
