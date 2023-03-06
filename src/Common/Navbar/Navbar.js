import React, { useContext, useEffect, useState } from "react";

import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaRegMoon, FaCloudSun, FaBars, FaTimes, FaUser } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { contexts } from "../../Contexts/UserContext";


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { theme, setTheme, user, LogOut,   } = useContext(contexts);
  // console.log(user)
  

  const themeApplyBody = () => {
    const body = document.body;
    body.setAttribute("class", `${theme ? "bodyLight" : "navDark"}`);
    return;
  };

  const setThemeNav = () => {
    return setTheme(!theme);
  };

  // For Call Multiple Function in Onclick
  const callForTheme = () => {
    themeApplyBody();
    setThemeNav();
    return;
  };

  // Log out
  const logingOut = () => {
    LogOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <nav className={`${theme ? "navDark" : "navLight"}`}>
        <div className="left-side">
          <div className="logo">
            <img className="size-icon" src={logo} alt="" />
            <p>That WEB Dude</p>
          </div>
          <div className="menu-icon" onClick={() => setOpen(!open)}>
            {open ? (
              <FaTimes className="size-icon" />
            ) : (
              <FaBars className="size-icon" />
            )}
          </div>
        </div>
        <div
          className={`second-part ${open ? "ture" : "false"} ${
            theme ? "navDark" : "navLight"
          }`}
        >
          <div className={`middle-side ${open && "open"}  `}>
            <Link
              to="/"
              className={`nav-item ${
                theme ? "navItemDark" : "navItemLight"
              }`}
            >
              Home
            </Link>
            <Link
              to="/allcourses"
              className={`nav-item ${
                theme ? "navItemDark" : "navItemLight"
              }`}
            >
              Courses
            </Link>
            <Link
              to="/blog"
              className={`nav-item ${
                 theme ? "navItemDark" : "navItemLight"
              }`}
            >
              Blog
            </Link>
            <Link
              to="/faq"
              className={`nav-item ${
                theme ? "navItemDark" : "navItemLight"
              }`}
            >
              FAQ
            </Link>
            <div onClick={callForTheme}>
              {theme ? (
                <FaCloudSun className="size-icon" />
              ) : (
                <FaRegMoon className="size-icon" />
              )}
            </div>
          </div>
          <div className={`right-side `}>
            {user?.uid ? (
              <div className="after-login">
                <div className="profile-photo">
                  {user?.photoURL ? (
                    <img src={user?.photoURL} />
                  ) : (
                    <FaUser className="size-icon usericon" />
                  )}
                  <p className="displayName">{user?.displayName}</p>
                </div>
                <Link>
                  <button onClick={logingOut} className="signin-button">
                    Sign Out
                  </button>
                </Link>
              </div>
            ) : (
              <div>
                <Link to="/login">
                  <button className="signin-button">Sing in</button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
      <hr className="navhr"></hr>
    </div>
  );
};

export default Navbar;
