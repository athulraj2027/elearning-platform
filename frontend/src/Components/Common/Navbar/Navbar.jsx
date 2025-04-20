import React, { useState, useEffect } from "react";
import Icons from "../../../assets/Icons";
import { Link } from "react-router-dom";

import SidebarMenu from "./Components/SidebarMenu";
import { UseAppContext } from "../../../Context/AppContext/AppContext";

const Navbar = () => {
  const { menuIcon, search, cart } = Icons();
  const { menuOpen, setMenuOpen } = UseAppContext();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="shadow-md h-15 md:h-20 w-full flex justify-between items-center p-3">
      <div className="text-black sm:hidden" onClick={() => setMenuOpen(true)}>
        {menuIcon}
      </div>
      <Link to="/students" className="text-xl sm:text-2xl text-violet-600">
        Learnemy
      </Link>
      <div className="text-sm flex gap-3 sm:hidden">
        {search}
        {cart}
      </div>
      <div className="hidden sm:block">
        <ul className="flex gap-3 text-gray-600 text-md items-center-safe">
          <li>Plans & Pricing</li>
          <li>Courses</li>
          <li>
            <Link
              to="/students/login"
              className="border border-violet-600 rounded-sm px-3 py-1 text-violet-600 hover:bg-violet-600 hover:text-white"
            >
              Log In
            </Link>
          </li>
          <li>
            <Link
              to="/students/signup"
              className="border border-violet-600 rounded-sm px-3 py-1 text-violet-600 hover:bg-violet-600 hover:text-white "
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
      {menuOpen && windowWidth < 768 && <SidebarMenu />}
    </div>
  );
};

export default Navbar;
