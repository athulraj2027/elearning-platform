import React from "react";

const Profile = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center sm:justify-start sm:flex-row">
        <img
          src="https://wallpapers.com/images/featured/cool-profile-picture-87h46gcobjl5e4xu.webp"
          alt=""
          className="sm:h-60 sm:w-60 max-h-60 max-w-60 rounded-full"
        />
        <div className="flex flex-col  gap-3 p-5">
          <h1 className="text-xl sm:text-3xl text-violet-600 ">Athul Raj NV</h1>
          <h3 className="text-sm sm:text-md ">Kerala, India</h3>
          <h3 className="text-sm sm:text-md ">Since 25, January 2025</h3>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center sm:justify-start sm:flex-row m-auto mt-5">
        <div className="w-1/3 flex flex-col items-center justify-center h-70">Earnings</div>
        <div className="w-1/3 flex flex-col items-center justify-center h-70">Earnings</div>{" "}
        <div className="w-1/3 flex flex-col items-center justify-center h-70">Earnings</div>
      </div>
    </div>
  );
};

export default Profile;
