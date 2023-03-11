import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaGooglePlus,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      {/* footer top contents  */}
      <div className="footer-container mb-5">
        {/* about site  */}
        <div className="about-site ">
          <div className="logo-part mb-5">
            <img src={logo} alt="" />
            <h3>That Web Dude</h3>
          </div>
          <p className="mb-5">
            One of the standout features of our site is our focus on practical,
            hands-on learning. Our courses emphasize real-world applications and
            problem-solving, so you can gain the skills.
          </p>
          <div className="social-media-icon-container">
            <h4>FOLLOW US</h4>
            <div className="social-media-icons">
              <FaFacebook className="sm-icon" />{" "}
              <FaTwitter className="sm-icon" />{" "}
              <FaGooglePlus className="sm-icon" />{" "}
              <FaLinkedin className="sm-icon" />
            </div>
          </div>
        </div>

        {/* for Link  */}
        <div className="link-container">
          <h3 className="mb-5 link-title ">Useful links</h3>
          <div className="use-ful-links">
            <Link to="/">Home</Link>
            <Link to="/allcourses">Courses</Link>
            <Link to="/blog">Blog</Link>
            <Link to="faq">FAQ</Link>
          </div>
        </div>

        {/* For contact  */}
        <div className="contacts">
          <h3 className="mb-5 contact-ttile">Contact with Us</h3>
          <p>
            <FaPhone /> +801644626735
          </p>
          <p className="mb-5">
            <FaMailBulk /> info@webdude.com
          </p>
          <h4>Newsletter</h4>
          <div className="footer-input-content">
            <input type="email" placeholder="email" />
            <button>Submit</button>
          </div>
        </div>
      </div>

      {/* footer bottom contentś */}
      <div>
        <hr id="footer-hr" />
        <div className="footer-bottom-site">
          <h5>
            2023 All Right Reserved Design and Developed by{" "}
            <span className="dev-name">Masum Rana</span>
          </h5>
          <h5>That Web Dude</h5>
        </div>
      </div>
    </div>
  );
};

export default Footer;
