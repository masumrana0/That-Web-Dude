import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { contexts } from "../../Contexts/UserContext";
import "./HomeCard.css";

const HomeCard = ({ data }) => {
  const { name, title, id, introduction, photo,price } = data;
 const {theme}=useContext(contexts);
  return (
    <div className={`home-card ${theme?"darkTheme":""}`}>
      <div className="home-card-banner">
        <img src={photo} alt="" />
      </div>
      <div className="home-card-text">
        <h3>{title}</h3>
        <span className="home-card-text-span">
          {introduction.slice(0, 300)} 
        </span>
        {"  "} <Link style={{
          "color":"red"
        }} to={`coursedetails/${id}`}>Learn More</Link>
        <h2>Price: ${price}</h2>
      </div>
    </div>
  );
};

export default HomeCard;
