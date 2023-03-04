import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../Firebase/Firebase.config';
import { async } from '@firebase/util';

export const contexts = createContext();
const UserContext = ({ children }) => {
    const [theme, setTheme] = useState( );
    const [updatedTheme,SetupdatedTheme] = useState(null);
    const [user, setUser] = useState(null);

    //  add Seclected theme in localStorage 


    //    useEffect(()=>{
    //      localStorage.setItem('theme',theme)
    //     },[]);

    // useEffect(()=>{
    //    const updatedTheme=localStorage.getItem('theme')
    //    console.log(updatedTheme)
    //  },[theme])
     



    // Firebase uses 


    // Providers
    const googleAuthProvider = new GoogleAuthProvider()
    const gitHubAuthProvider = new GithubAuthProvider();

    const auth = getAuth(app)

    // Create account with email, Password ,name
    const createUser = (email, Password) => {
        return createUserWithEmailAndPassword(auth, email, Password)

    }

    // send Verification email 
    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser)

    }

    // Updating user Account name
    const updateProfileName = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
        })
            .then(() => {

            })
            .catch(error => console.error(error));
    }

    // Login with Email Password 
    const loginWithEmailPassword = (email, Password) => {
        return signInWithEmailAndPassword(auth, email, Password)
    }
    // Login With Google 
    const LoginWithGoogle = () => {
        return signInWithPopup(auth, googleAuthProvider);
    }

    //Login with Github 
    const LoginWithGithub = () => {
        return signInWithPopup(auth, gitHubAuthProvider)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
          if(currentUser===null|| currentUser.emailVerified){
            setUser(currentUser);
            console.log('Auth state changed',currentUser)
          }
          
        })

        return () => unSubscribe();
    },[])

    const LogOut = () => {
        return signOut(auth)
    }



    const ContextInfo = {
        theme,
        setTheme,
        user,
        updatedTheme,
        createUser,
        verifyEmail,
        updateProfileName,
        loginWithEmailPassword,
        LoginWithGithub,
        LoginWithGoogle,
        LogOut,

    };
    return (
        <contexts.Provider value={ContextInfo}>
            {children}
        </contexts.Provider>
    );
};

export default UserContext;

