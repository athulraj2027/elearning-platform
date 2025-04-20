import React from "react";
import { Outlet } from "react-router-dom";
import Icons from "../assets/Icons";
import SideBar from "../Components/Admin/sideBar";

const TutorLayout = () => {
  const { box, category, users, barChart } = Icons();
  const options = [
    { name: "Profile", icon: barChart },
    { name: "Courses", icon: box },
    { name: "Add New Course", icon: category },
    { name: "Payments", icon: users },
    { name: "Customer Care", icon: users },
  ];
  return (
    <div className="flex ">
      <SideBar linkTo="tutors" options={options} />
      <div className="shadow-xl m-1 sm:m-10 w-full rounded-md p-2 sm:p-5 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default TutorLayout;
