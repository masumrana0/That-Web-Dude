import React, { useContext } from 'react';
import { contexts } from '../../Contexts/UserContext';
import './Login.css'
import {FaGithubSquare,FaGoogle} from "react-icons/fa";
import { Link } from 'react-router-dom';
const Login = () => {
    const { theme } = useContext(contexts);

    return (
        <div className='login-container '>

            <form className={`login-form ${theme?"darkModeLogin":'lightModeLogin'}`}>
                <h2 className='text-center'>Sign in</h2>
                <label for="email">Email
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder='Email'
                    />
                </label>
                <label for="password">Password
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder='Password'
                    />
                </label>
                <button
                    type='submit'
                    className='btn-sigin'

                >Sign in</button>
                <div className='hr-block'>
                <hr className='login-hr'/>or<hr className='login-hr'/>
                </div>

               <div 
               className='another-login-container'>
               <button
                 className='withAnotherlogin-btn'>
                    <FaGoogle className='icon-styles' />Sign in with Google
                 </button>
                <button  className='withAnotherlogin-btn'><FaGithubSquare className='icon-styles'/>Sign in with Github</button>
               </div>
               <p className='text-center'>You have no any account.Please        <Link to='/register'className='resgiter-link'
                 
                  >
                     Sign Up</Link>.</p>
            </form>

           
        </div>
    );
};

export default Login;