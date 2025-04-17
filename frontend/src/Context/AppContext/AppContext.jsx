// AppContext.jsx
import React, { createContext, useState,useContext } from "react";

 const AppContext = createContext(); // 👈 This line is okay here

 const AppProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <AppContext.Provider value={{ menuOpen, setMenuOpen }}>
      {children}
    </AppContext.Provider>
  );
};
const UseAppContext = () => useContext(AppContext);

export {AppContext,AppProvider,UseAppContext}