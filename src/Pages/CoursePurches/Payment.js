import React, { useContext } from "react";
import "./CoursePurches.css";
import bikash from "../../assets/bikash.png";
import nagad from "../../assets/nagad.jpg";
import ucash from "../../assets/ucash.png";
import { contexts } from "../../Contexts/UserContext";
const CoursePurches = () => {
  const {theme}=useContext(contexts);
  return (
    <div className={`payment-container ${theme? "darkTheme":"lightTheme"}`}>
      <h2>Payment with</h2>
      <div className="payment-method">
        <img src={bikash} />
        <img src={nagad} />
        <img src={ucash} />
      </div>
    </div>
  );
};

export default CoursePurches;
