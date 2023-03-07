import React from "react";
import { FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import Accordion from "./Accordian";
import CardDetailsCard from "./CardDetailsCard";
import CourseCard from "./CourseCard";
import "./CourseDettails.css";

const CoursesDetails = () => {
  const data = useLoaderData();
  const {
    name,
    title,
    photo,
    price,
    ins_photo,
    instructor,
    duration,
    introduction,
    description,
    others,
  } = data;
  console.log(data);

  return (
    <div className="course-details-container">
      <div className="course-header">
        <div className="header-underline"></div>
        <div className="header-typing-text">
          <h3>
            <TypeAnimation
              sequence={[`${name}`, 1000, `${title}`, 1000]}
              style={{ fontSize: "2em" }}
              wrapper="h2"
              repeat={Infinity}
            />
          </h3>
        </div>
      </div>

      <div className="course-details-nav">
        <h4>Description</h4>
        <h4>Lessons</h4>
        <h4>Reviews</h4>
        <h4>Instructor</h4>
      </div>

      <div className="course-details-content">
        <div className="course-text">
          <div>
            <h2>Course</h2>
            <h5>{title}</h5>
          </div>

          <div>
            <h2>Introduction</h2>
            <p>{introduction}</p>
          </div>
          <div>
            <h2>Description</h2>
            <p>{description}</p>
          </div>
          <div className="accoridan-main-container">
            <div>
            <div className="accordian-title">
            <h2>Lessons</h2>
            <div className="lestion-text">
              <p>48 lessons</p>
              <p>01.02:10</p>
            </div>
          </div>
              <Accordion />
            </div>
          </div>
        </div>
        <div className="course-card">
          <CardDetailsCard data={data} />
        </div>
      </div>
    </div>
  );
};

export default CoursesDetails;
