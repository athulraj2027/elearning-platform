import React from "react";
import { Link } from "react-router-dom";

const SignupComponent = (props) => {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div>
        <h1 className="text-2xl font-bold">Sign up for {props.value}</h1>
        <label htmlFor="name" className="text-xs">
          {" "}
          User name
        </label>
        <br />
        <input
          type="text"
          placeholder="Username"
          className="p-2 border text-gray-500 border-gray-300 rounded-md focus:outline-none focus:border-violet-500"
        />
        <br />
        <label htmlFor="email" className="text-xs">
          {" "}
          Email address
        </label>
        <br />
        <input
          type="email"
          placeholder="Email"
          className="p-2 border text-gray-500 border-gray-300 rounded-md focus:outline-none focus:border-violet-500"
        />
        <br />
        <label htmlFor="password" className="text-xs">
          {" "}
          Password
        </label>
        <br />
        <input
          type="password"
          placeholder="Password"
          className="p-2 border text-gray-500 border-gray-300 rounded-md focus:outline-none focus:border-violet-500"
        />
        <br />
        <button className="p-2 w-50 mt-6 bg-violet-600 rounded-md cursor-pointer hover:bg-violet-800 text-white">
          Log In
        </button>
        <p className="text-xs mt-2 text-center">
          Have account already?
          <Link
            to={`/${props.linkTo}/login`}
            className="text-violet-600 text-xs underline "
          >
            {" "}
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupComponent;
