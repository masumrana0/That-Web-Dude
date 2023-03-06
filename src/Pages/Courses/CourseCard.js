import React, { useContext } from "react";
import { FaClock, FaPeopleArrows, FaPeopleCarry, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { contexts } from "../../Contexts/UserContext";
import "./CourseCard.css";

const CourseCard = ({ data }) => {
  const { theme } = useContext(contexts);
  const { id, duration, name, others, price } = data;

  return (
    <div
      className={`card-cotnainer ${theme ? "cardDarkMode" : "cardLightTheme"}`}
    >
      <img src={data?.photo} alt="" />
      <div className="card-dettails">
        <div className={`name-rating`}>
          <p  className={theme?"cardDarkMode":"cardLightMode"}>{name}</p>{" "}
          <span className={theme?"cardDarkMode":"cardLightMode"}>
            <FaStar className="star-color" />
            {others.rating}
          </span>
        </div>
        <h3>{data.title}</h3>
        <div className="duration-people">
          <h5 className="duration">
            <FaClock /> : {duration}
          </h5>
          <h5>Join-People: {others?.people}</h5>
        </div>
        <h3>Price:${price}</h3>
      </div>
      <div className="card-btn">
       <Link to={`/coursedetails/${id}`}><button className="btn-details">View Dettails</button></Link>
      </div>
    </div>
  );
};

export default CourseCard;
