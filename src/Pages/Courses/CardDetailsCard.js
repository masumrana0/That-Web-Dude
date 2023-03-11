import React, { useContext } from "react";
import { FaClock, FaPeopleArrows, FaPeopleCarry, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { contexts } from "../../Contexts/UserContext";
import "./CourseDetailsCard.css";

const CardDetailsCard = ({ data }) => {
  const { theme } = useContext(contexts);
  const {
    name,
    title,
    price,
    ins_photo,
    instructor,
    duration,
    others,
  } = data;
  return (
    <div
      className={`card-details-cotnainer ${
        theme ? "cardDarkMode" : "cardLightTheme"
      }`}
    >
      <img src={data?.photo} alt="" />

      <div className={`card-dettails  theme ? "cardDarkMode" : "cardLightTheme"`}>
        <div className={`name-rating`}>
          <p className={theme ? "cardDarkMode" : "cardLightMode"}>{name}</p>{" "}
          <span className={theme ? "cardDarkMode" : "cardLightMode"}>
            <FaStar className="star-color" />
            <FaStar className="star-color" />
            <FaStar className="star-color" />
            {others.rating}
          </span>
        </div>

        <div className="ins-container">
          <h3>Instructor</h3>
          <img src={ins_photo} />
          <h5>{instructor}</h5>
        </div>

        <h3>{title}</h3>
        <div className="duration-people">
          <h5 className="duration">
            <FaClock /> : {duration}
          </h5>
          <h5>Join-People: {others?.people}</h5>
        </div>

        <h3>Price:${price}</h3>
      </div>
      <div className="cardDetails-btn">
        <Link to='/paywith'>
          <button className="btn-purchase">Purchase</button>
        </Link>
      </div>
    </div>
  );
};

export default CardDetailsCard;
