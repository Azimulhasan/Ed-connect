import React, { useState, createContext } from 'react';

export const PageContext = createContext()

export const PageContextProvidor = ({ children }) =>{
    const titleData = "This is good"
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [userType, setUserType] = useState("")

    return (
        <PageContext.Provider
            value={{
               titleData,
               isAuthenticated,
               setIsAuthenticated,
               userType,
            }}
        >
            {children}
        </PageContext.Provider>
    )
}


