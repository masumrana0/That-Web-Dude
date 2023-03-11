import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import "./Home.css";
import { contexts } from "../../Contexts/UserContext";
import HomeCard from "./HomeCard";
import img from "../../assets/home-banner.png";
import HomeSwiper from "./HomeSwiper";

const Home = () => {
  const { theme } = useContext(contexts);
  const datas = useLoaderData();
  const [swiperData, setSwiperData] = useState([]);

  useEffect(() => {
    fetch(`https://web-dude-server-site-masumrana44.vercel.app/swipercard`)
      .then((res) => res.json())
      .then((data) => setSwiperData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="home-header-container">
      {/* Home Header  */}
      <div
        className={`home-header ${
          theme ? "header-home-DarkMode" : "header-home-LightMode"
        }`}
      >
        <div>
          <h6 className="home-header-title">
            <TypeAnimation
              sequence={[
                " Exclusive React Workshop for Beginners!",
                1000,
                " Exclusive JavaScript Workshop for Beginners!",
                1000,
                " Exclusive  HTML Workshop for Beginners!",
                1000,
                " Exclusive CSS Workshop for Beginners!",
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
         <Link to='/allcourses'><button className="home-header-button">Learn More..</button></Link>
        </div>
      </div>

      {/* Home card  */}
      <div className="home-bottom-content-container">
        <div className={`home-card-container `}>
         
          {datas.map((data) => (
            <HomeCard key={data?.id} data={data} />
          ))}
        </div>
      </div>

      {/* Site introducing Letter  */}
      <div className="site-introduce-corner-card">
        <div className="introduce-corner-card-banner">
          <img src={img} alt="" />
        </div>

        <div className={`introduce-corner-card-content ${theme?"homeDarkTheme":""}`}>
          <div className="introduce-corner-card-text">
            <h3 className="introduce-card-title">
              Introducing an Interactive and Community-Focused E-Learning Site
              for IT Skill Development
            </h3>
            <p>
              Your e-learning website is an excellent platform designed to help
              people acquire new skills and contribute to the growth of the IT
              community. The site offers a variety of courses and resources that
              are aimed at enhancing the knowledge and expertise of learners.
              One of the key features of your e-learning site is the interactive
              learning experience it provides. The courses are designed to be
              engaging, interactive, and informative, with multimedia content,
              practical exercises, and quizzes to test understanding. This
              approach ensures that learners are not just passive observers, but
              active participants in their learning journey. Your site also has
              a strong community aspect, with forums, chat rooms, and social
              media groups where learners can interact with each other, ask
              questions, and share ideas. This collaborative learning
              environment fosters a sense of camaraderie and helps learners
              build connections with others who share similar interests.
            </p>
          </div>
          <div className="acheivement-rating">
            <div>
              <h3>2.1K+</h3>
              <p>Online Course</p>
            </div>
            <div>
              <h3>300+</h3>
              <p>Expert Memeber </p>
            </div>
            <div>
              <h3>1K+</h3>
              <p>Rating & Review</p>
            </div>
          </div>
        </div>
      </div>

      {/* Successful Students Swiper Card  */}
      <div className="swiper-card-container">
        <HomeSwiper datas={swiperData} />
      </div>
       
       {/* Home Register Section  */}
      <div className="register-section"> 
        <h2>Ready to join</h2>
        <p>
          Easy Access Information. Fast and Trusted. Multiple SourcesCombined.
          Simple in Use. Discover Us Now! All the Answers
        </p>
      <Link to='/register'><button>Register Now</button></Link>
      </div>
    </div>
  );
};

export default Home;
