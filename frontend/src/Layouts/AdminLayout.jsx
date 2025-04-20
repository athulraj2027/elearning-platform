import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../Components/Admin/sideBar";

import Icons from "../assets/Icons";
const AdminLayout = () => {
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
    <div className="flex ">
      <SideBar linkTo="admin" options={options}/>
      <div className="shadow-xl m-1 sm:m-10 w-full rounded-md p-2 sm:p-5 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
