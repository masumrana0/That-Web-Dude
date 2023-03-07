import React, { useState } from "react";
import "./Accordian.css";
import { FaClock, FaMinus, FaPlayCircle, FaPlus, FaViadeo } from "react-icons/fa";

const Accordian = () => {
  const [openItemOne, setOpenItemOne] = useState(false);
  const [openItemTwo, setOpenItemTwo] = useState(false);
  const [openItemThree, setOpenItemThree] = useState(false);
  const [openItemFour, setOpenItemFour] = useState(false);
  return (
    <div className="accordian-container">
      {/* Accoridan 1  */}
      <div className="accordion">
        <div
          className="accordion-header"
          onClick={() => {
            setOpenItemOne(!openItemOne);
          }}
        >
          <div className="icon-name">
            <h5>Introduction</h5>
          </div>
          <span className={openItemOne ? "icon up" : "icon down"}></span>
        </div>
        {openItemOne && (
          <div className="accordion-content">
             
              <div className="item-content-align">
                <FaPlayCircle/>    <p>Discastion about Couse Duration</p>
              </div>
              <div className="item-content-align">
                <FaClock/> 
                <p>4.53m</p>
              </div>
             
          </div>
        )}
      </div>

      {/* Accordian 2  */}
      <div className="accordion">
        <div
          className="accordion-header"
          onClick={() => {
            setOpenItemTwo(!openItemTwo);
          }}
        >
          <div>
            <h5>Module-1</h5>
          </div>
          <span className={openItemTwo ? "icon up" : "icon down"}></span>
        </div>
        {openItemTwo && (
          <div className="accordion-content">
              <div className="item-content-align">
                <FaPlayCircle/>    <p>How can you practice effectivly </p>
              </div>
              <div className="item-content-align">
                <FaClock/> 
                <p>4.53m</p>
              </div>
          </div>
        )}
      </div>

      {/* Accordian 3  */}

      <div className="accordion">
        <div
          className="accordion-header"
          onClick={() => {
            setOpenItemThree(!openItemThree);
          }}
        >
          <div>
            <h5>Module-1.2</h5>
          </div>
          <span className={openItemThree ? "icon up" : "icon down"}></span>
        </div>
        {openItemThree && (
          <div className="accordion-content">
           <div className="item-content-align">
                <FaPlayCircle/>    <p>History of Computer and programing language</p>
              </div>
              <div className="item-content-align">
                <FaClock/> 
                <p>9.53m</p>
              </div>
          </div>
        )}
      </div>

      {/* Accordian 4 */}
      <div className="accordion">
        <div
          className="accordion-header"
          onClick={() => {
            setOpenItemFour(!openItemFour);
          }}
        >
          <div>
            
            <h5>Module-1.3</h5>
          </div>
          <span className={openItemFour ? "icon up" : "icon down"}></span>
        </div>
        {openItemFour && (
          <div className="accordion-content">
            <div className="item-content-align">
                <FaPlayCircle/>    <p> Tool and Technology   </p>
              </div>
              <div className="item-content-align">
                <FaClock/> 
                <p>4.53m</p>
              </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
