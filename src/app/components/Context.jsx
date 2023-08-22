"use client"
import React,  { createContext, useState } from "react"
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [start, setStart] = useState(false);
    

    const board_number = []
    for(let i =1; i<=90; i++){
        board_number.push(i)
    }

    return (
        <AppContext.Provider
          value={{
           start, setStart
          }}
        >
          {children}
        </AppContext.Provider>
      );
}