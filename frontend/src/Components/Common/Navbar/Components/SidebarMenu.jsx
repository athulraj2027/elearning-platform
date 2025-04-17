import React from "react";
import { Link } from "react-router-dom";
import Icons from "../../../../assets/Icons";
import {UseAppContext} from "../../../../Context/AppContext/AppContext";

const SidebarMenu = () => {
   const{menuCross} = Icons()
   const {setMenuOpen} = UseAppContext()
  
    const options = [
      { name: "Login", linkTo: "/login" },
      { name: "Signup", linkTo: "/signup" },
      { name: "Plans and Pricing", linkTo: "/plans" },
    ];
  
    const categories = [
      { name: "Web development", linkTo: "web-development" },
      { name: "Mobile development", linkTo: "mobile-development" },
      { name: "Game development", linkTo: "game-development" },
      { name: "Entrepreneurship", linkTo: "entrepreneurship" },
      { name: "Finance", linkTo: "finance" },
      { name: "Certifications", linkTo: "certifications" },
    ];
  return (
    <div className="fixed inset-0 z-10 bg-black/50 ">
      <div className="absolute left-0 top-0 w-fit h-full bg-white p-5 overflow-auto transform transition-transform duration-300 ease-in-out translate-x-0">
        <ul>
          <li className="cursor-pointer" onClick={() => setMenuOpen(false)}>
            {menuCross}
          </li>
          {options.map((option, index) => (
            <li key={index} className="p-1 ">
              <Link
                to={option.linkTo}
                className="text-sm text-blue-600"
                onClick={() => setMenuOpen(false)}
              >
                {option.name}
              </Link>
            </li>
          ))}
          <hr className="mt-3" />
          {categories.map((category, index) => (
            <li key={index} className="p-1 ">
              {" "}
              <Link
                to={`/courses?${category.linkTo}`}
                className="text-sm text-gray-600"
                onClick={() => setMenuOpen(false)}
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SidebarMenu;
