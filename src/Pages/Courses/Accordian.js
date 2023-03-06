import React, { useState } from "react";
import "./Accordian.css";
import { FaMinus, FaPlayCircle, FaPlus, FaViadeo } from "react-icons/fa";

const Accordian = () => {
   const [openItemOne,setOpenItemOne]=useState(false)
  const [openItemTwo,setOpenItemTwo]=useState(false)
  const [openItemThree,setOpenItemThree]=useState(false)
  const [openItemFour,setOpenItemFour]=useState(false)
  return (
    <div>
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
        {openItemOne && <div className="accordion-content">
          <p>Hello. I am Accoridan</p>
          </div>}
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
            <h5>Introduction</h5>
          </div>
          <span className={openItemTwo ? "icon up" : "icon down"}></span>
        </div>
        {openItemTwo && <div className="accordion-content">
          <p>Hello. I am Accoridan</p>
          </div>}
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
            <h5>Introduction</h5>
          </div>
          <span className={openItemThree ? "icon up" : "icon down"}></span>
        </div>
        {openItemThree && <div className="accordion-content">
          <p>Hello. I am Accoridan</p>
          </div>}
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
            {
              
            }
            <h5>Introduction</h5>
          </div>
          <span className={openItemFour ? "icon up" : "icon down"}></span>
        </div>
        {openItemFour && <div className="accordion-content">
          <p>Hello. I am Accoridan</p>
          </div>}
      </div>
    </div>
  );
};

export default Accordian;
