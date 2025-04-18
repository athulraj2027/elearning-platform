import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../Components/Admin/sideBar";

const AdminLayout = () => {
  return (
    <div className="flex ">
      <SideBar />
      <div className="shadow-xl m-1 sm:m-10 w-full rounded-md p-2 sm:p-5 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
