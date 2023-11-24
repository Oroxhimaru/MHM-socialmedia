import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext();

export const DarkModeContextProvider = ({ children }) => {
    // State hook ka istemal kar ke dark mode ka state initialize karein
  // localStorage se dark mode ki value hasil karein, agar nahi milti to default value false rakhein
    const [darkMode, setDarkMode] = useState( JSON.parse(localStorage.getItem("darkMode")) || false);
    
    const toggle = () => {
        setDarkMode(!darkMode);
      };
 // `useEffect` hook ka istemal kar ke dark mode ki value localStorage mein save karein
    useEffect(() => {
      localStorage.setItem('darkMode', darkMode)
    }, [darkMode])
    

    return (
        <DarkModeContext.Provider value={{ darkMode, toggle }}>
          {children}
        </DarkModeContext.Provider>
      );
}