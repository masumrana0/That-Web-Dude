import React, { createContext,  useEffect,  useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, updateProfile} from 'firebase/auth'
import app from '../Firebase/Firebase.config';

export const contexts=createContext();
const UserContext = ( {children}) => {
   const [theme,setTheme]=useState(false);
   const [changeTheme,setChangeTheme]=useState(null);

   //  add Seclected theme in localStorage 

   
//    useEffect(()=>{
//     localStorage.setItem('theme',theme)
//     },[theme]);

// useEffect(()=>{
//     const changeingTheme=localStorage.getItem('theme');
//     setChangeTheme(changeingTheme)
//  })


// Firebase uses 
 
 
// Providers
const googleAuthProvider=new GoogleAuthProvider()
const gitHubAuthProvider=new GithubAuthProvider();

const auth=getAuth(app)

// Create account with email, Password ,name
const createUser=(email,Password)=>{
   return  createUserWithEmailAndPassword(auth,email,Password)

}

// send Verification email 
const verifyEmail=()=>{
    return sendEmailVerification(auth.currentUser)

}

// Updating user Account name
const updateProfileName=(name)=>{
   return updateProfile(auth.currentUser,{
        displayName:name,
    })
    .then(()=>{
        
    })
    .catch(error=>console.error(error));
}

// Login with Email Password 
const loginWithEmailPassword=(email,Password)=>{
return signInWithEmailAndPassword(auth,email,Password)
}
// Login With Google 
const LoginWithGoogle=()=>{
    return signInWithPopup(auth,googleAuthProvider);
}

//Login with Github 
const LoginWithGithub=()=>{
    return signInWithPopup(auth,gitHubAuthProvider)
}





     
    const ContextInfo={
        theme,
        setTheme,
        changeTheme,
        setChangeTheme,
        createUser,
        verifyEmail,
        updateProfileName,
        loginWithEmailPassword,
        LoginWithGithub,
        LoginWithGoogle,
        
    };
    return (
        <contexts.Provider value={ContextInfo}>
              {children}
        </contexts.Provider>
    );
};

export default UserContext;

