import React, { useContext } from 'react';
import { contexts } from '../../Contexts/UserContext';
import './Login.css'
import { FaGithubSquare, FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
const Login = () => {
    const {
        theme,
        loginWithEmailPassword,
        verifyEmail,
        LoginWithGithub,
        LoginWithGoogle, } = useContext(contexts);


    const handleLogin = (event) => {
        event.preventDefault()
        const form=event.target
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password)
    
        loginWithEmailPassword(email,password)
        .then((result)=>{
            if(!result.user.emailVerified){
                verifyEmail().then(result=>{
                    toast.success('Your email did not verified.Please Check your email.')
                    return
                })
                
            }
            console.log(result.user)
        })
        .catch(error=>console.error(error,error.code))

    }

    // Handle GOogle LOgin 
    const handleGoogleLogin = () => {
        LoginWithGoogle()
            .then((result) => {
                console.log(result.user)
            })
            .catch(error => console.error(error))
    }

    //    Handle Github Login 
    const handleGithubLogin = () => {
        LoginWithGithub()
            .then(res => console.log(res.user))
            .catch(error => console.error(error))
    }



    return (
        <div className='login-container '>

            <form
                onSubmit={handleLogin}
                className={`login-form ${theme ? "darkModeLogin" : 'lightModeLogin'}`}>
                <h2 className='text-center'>Sign in</h2>
                <label htmlFor="email">Email
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder='Email'
                        required
                    />
                </label>
                <label htmlFor="password">Password
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder='Password'
                        required
                    />
                </label>
                <button
                    type='submit'
                    className='btn-sigin'

                >Sign in</button>
                <div className='hr-block'>
                    <hr className='login-hr' />or<hr className='login-hr' />
                </div>

                <div
                    className='another-login-container'>
                    <button
                        onClick={handleGoogleLogin}
                        className='withAnotherlogin-btn'>
                        <FaGoogle className='icon-styles' />Sign in with Google
                    </button>
                    <button
                        onClick={handleGithubLogin}
                        className='withAnotherlogin-btn'><FaGithubSquare className='icon-styles' />Sign in with Github</button>
                </div>
                <p className='text-center mt-5'>You have no any account.Please        <Link to='/register' className='resgiter-link'

                >
                    Sign Up</Link>.</p>
            </form>


        </div>
    );
};

export default Login;