import React, { createContext,  useEffect,  useState } from 'react';
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
     
    const ContextInfo={
        theme,
        setTheme,
        changeTheme,
        setChangeTheme
    };
    return (
        <contexts.Provider value={ContextInfo}>
              {children}
        </contexts.Provider>
    );
};

export default UserContext;

