import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { FaRegMoon, FaCloudSun, FaBars, FaTimes } from "react-icons/fa";
import logo from '../../assets/logo.png'
import { contexts } from '../../Contexts/UserContext';
const Navbar = () => {
    const [open,setOpen]=useState(false)
     const {theme,setTheme}=useContext(contexts);
    

    return (
        <nav className={`${theme?'navDark':'navLight'}`}>
            <div className="left-side">
              <div className='logo'>
              <img  src={logo} alt="" />
                <p>That WEB Dude</p>
              </div>
                <div className='menu-icon' onClick={()=>setOpen(!open)}>
                    {
                     open?<FaTimes className='size-icon'/>:<FaBars className='size-icon'/>
                    }
                </div>

            </div>
           <div className={`second-part ${open?"ture":"false"} ${theme?'navDark':'navLight'}`}>
           <div  className={`middle-side ${open&&'open'}  `}>
                <Link to="/courses" class="nav-item">Courses</Link>
                <Link to="/blog" className="nav-item">Blog</Link>
                <Link to="/faq" className="nav-item">FAQ</Link>
                <div  onClick={()=>setTheme(!theme)}>
                    {
                        theme?<FaCloudSun className='size-icon'/>:<FaRegMoon className='size-icon'/>
                    }
                </div>
            </div>
            <div className={`right-side   `}>
                
                <button className="signin-button">Sign In</button>
            </div>
           </div>
        </nav>
    );
};

export default Navbar;