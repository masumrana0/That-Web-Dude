import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { FaRegMoon, FaCloudSun, FaBars, FaTimes } from "react-icons/fa";
import logo from '../../assets/logo.png'
import { contexts } from '../../Contexts/UserContext';
const Navbar = () => {
    
    const [open, setOpen] = useState(false)
    const { theme, setTheme} = useContext(contexts);
   
  
 
    const themeMode = () => {
        const body = document.body;
          body.setAttribute('class',`${theme ? 'bodyLight' : 'navDark'}`)
          return
    }

    const setThemeNav = () => {
        return setTheme(!theme)
    }

    // For Call Multiple Function in Onclick 
    const callMultiF = () => {
        themeMode()
        setThemeNav()
        return

    }



    return (
      <div>
          <nav className={`${theme ? 'navDark' : 'navLight'}`}>
            <div className="left-side">
                <div className='logo'>
                    <img className='size-icon' src={logo} alt="" />
                    <p>That WEB Dude</p>
                </div>
                <div className='menu-icon' onClick={() => setOpen(!open)}>
                    {
                        open ? <FaTimes className='size-icon' /> : <FaBars className='size-icon' />
                    }
                </div>

            </div>
            <div className={`second-part ${open ? "ture" : "false"} ${theme ? 'navDark' : 'navLight'}`}>
                <div className={`middle-side ${open && 'open'}  `}>
                    <Link to="/courses" className={`nav-item ${theme?'navItemDark':"navItemLight"}`}>Courses</Link>
                    <Link to="/blog" className={`nav-item ${theme?'navItemDark':"navItemLight"}`}>Blog</Link>
                    <Link to="/faq" className={`nav-item ${theme?'navItemDark':"navItemLight"}`}>FAQ</Link>
                    <div onClick={callMultiF}>
                        {
                            theme ? <FaCloudSun className='size-icon' /> : <FaRegMoon className='size-icon' />
                        }
                    </div>
                </div>
                <div className={`right-side   `}>

                    <button className="signin-button">Sign In</button>
                </div>
            </div>
            
        </nav>
        <hr className='navhr'></hr>
      </div>
        
    );
};

export default Navbar;