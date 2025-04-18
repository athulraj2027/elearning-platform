// AppContext.jsx
import React, { createContext, useState, useContext } from "react";

const AppContext = createContext(); // 👈 This line is okay here

const AppProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modal, setModal] = useState();
  const [selectedSort, setSelectedSort] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");

  return (
    <AppContext.Provider
      value={{
        menuOpen,
        setMenuOpen,
        modal,
        setModal,
        selectedFilter,
        setSelectedFilter,
        selectedSort,
        setSelectedSort,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
const UseAppContext = () => useContext(AppContext);

export { AppContext, AppProvider, UseAppContext };
