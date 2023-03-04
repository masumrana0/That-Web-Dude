import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import "./Home.css";
import { contexts } from "../../Contexts/UserContext";

const Home = () => {
  const { theme } = useContext(contexts);
  console.log(theme)
  return (
    <div>
      <div
        className={`home-header ${
          theme ? "header-home-DarkMode" : "header-home-LightMode"
        }`}
      >
        <h6 className="home-header-title">
          <TypeAnimation
            // Same String at the start will only be typed once, initially
            sequence={[
              " Exclusive React Workshop for Beginners!",
              1000,
              " Exclusive JavaScript Workshop for Beginners!",
              1000,
              " Exclusive  HTML Workshop for Beginners!",
              1000,
              " Exclusive  CSS Workshop for Beginners!",
              1000,
            ]}
            speed={50}  
            wrapper="span"  
            repeat={Infinity} 
          />
        </h6>
        <div className="header-link-button">
          <p>
            Once in a year opportunity to learn and build your{" "}
            <Link className="header-link">first React app</Link>
          </p>
        </div>
        <button className="home-header-button">Learn More..</button>
      </div>


    <div className="home-bottom-content-container">
        <div className="etc-cotainer">

        </div>

        <div className="">
            
        </div>

    </div>


    </div>
  );
};

export default Home;
