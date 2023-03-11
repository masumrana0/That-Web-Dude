import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <Footer>
      <div className="dude-container">
        <div>
          <img src={logo} alt="" />
          <h4>That Web Dude</h4>
        </div>
        <p>
          One of the standout features of our site is our focus on practical,
          hands-on learning. Our courses emphasize real-world applications and
          problem-solving, so you can gain the skills and knowledge you need to
          succeed in your career. We offer a variety of teaching methods,
          including video lectures, interactive quizzes, and practical
          assignments, to ensure that you get the most out of your learning
          experience.
        </p>
      </div>
      <div className="use-ful-links">

      </div>
      <div className="contacts"></div>
    </Footer>
  );
};

export default Footer;
