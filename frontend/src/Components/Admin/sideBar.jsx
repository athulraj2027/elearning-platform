import React from "react";
import { Link } from "react-router-dom";

const SideBar = (props) => {
  return (
    <div className=" bg-violet-600 text-white w-fit h-screen py-7 px-2">
      <ul className="flex flex-col h-[100%] justify-around">
        <li className="text-2xl text-yellow-300 hidden sm:block">Learnemy</li>
        {props.options.map((item, index) => (
          <Link to={`/${props.linkTo}/${item.name.toLowerCase()}`} key={index}>
            <li className="hover:bg-white flex gap-1 hover:text-violet-600 p-3 rounded-md">
              {item.icon}
              <p className="hidden sm:block">{item.name}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
