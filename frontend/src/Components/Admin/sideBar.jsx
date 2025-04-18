import React from "react";
import { Link } from "react-router-dom";
import Icons from "../../assets/Icons";

const SideBar = () => {
  const { box, category, users, barChart, coupon, logout, offer, orders } =
    Icons();

  const options = [
    { name: "Dashboard", icon: barChart },
    { name: "Courses", icon: box },
    { name: "Categories", icon: category },
    { name: "Customers", icon: users },
    { name: "Tutors", icon: users },
    { name: "Purchases", icon: orders },
    { name: "Coupons", icon: coupon },
    { name: "Offers", icon: offer },
    { name: "Logout", icon: logout },
  ];
  return (
    <div className=" bg-violet-600 text-white w-fit h-screen py-7 px-2">
      <ul className="flex flex-col h-[100%] justify-around">
        <li className="text-2xl text-yellow-300 hidden sm:block">LearnEmy</li>
        {options.map((item, index) => (
          <Link to={`/admin/${item.name.toLowerCase()}`}>
            <li
              key={index}
              className="hover:bg-white flex gap-1 hover:text-violet-600 p-3 rounded-md"
            >
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
