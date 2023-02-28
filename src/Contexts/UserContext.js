import React, { createContext,  useState } from 'react';
export const contexts=createContext();
const UserContext = ( {children}) => {
   const [theme,setTheme]=useState(false);

    const ContextInfo={theme,setTheme};
    return (
        <contexts.Provider value={ContextInfo}>
              {children}
        </contexts.Provider>
    );
};

export default UserContext;

