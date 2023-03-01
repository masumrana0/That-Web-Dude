import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
 
import { contexts } from '../../Contexts/UserContext';
import './Register.css';

const Register = () => {
    const {
        theme,
        createUser,
        verifyEmail,
        updateProfileName,}=useContext(contexts)

    const handleRegistration=(event)=>{
     event.preventDefault()
     const form=event.target;
     const name=form.name.value;
     const email=form.email.value;
     const password=form.password.value;
     const ConPassword=form.ConPassword.value;
     console.log(name,email,password,ConPassword);

      createUser(email,password)
      .then((result)=>{
        verifyEmail();
        updateProfileName(name);
         toast.success('Please Check email')
        console.log(result.user)
      })
      .catch((error=>{
        console.error(error)
        
      }))
      


    }
    return (
        <div className='login-container '>

        <form
        onSubmit={handleRegistration}
         className={`login-form ${theme?"darkModeLogin":'lightModeLogin'}`}>
            <h2 className='text-center'>Sign Up</h2>
            
            <label htmlFor="name">Name
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder='Enter your name'
                    required
                />
            </label>
            <label  htmlFor="email">Email
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder='example@gmail.com'
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
            <label htmlFor="ConPassword">Confrim Password
                <input
                    type="password"
                    id="ConPassword"
                    name="ConPassword"
                    placeholder='Confrim Password'
                    required
                />
            </label>
            <button
                type='submit'
                className='btn-sigin'

            >Sign Up</button>
            <div className='hr-block'>
            <hr className='login-hr'/>or<hr className='login-hr'/>
            </div>

            
           <p className='text-center mt-5'> Already haven an Account.Please        <Link to='/login'className='resgiter-link'
             
              >
                 Sign in</Link>.</p>
        </form>

       
    </div>
    );
};

export default Register;