import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const LoginComponent = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formSubmitHandler = async () => {
    if (!email || !password) return toast.error("Credentials missing");

    try {
      const config = {
        headers: { "Content-type": "application/json" },
      };
      const { data } = await axios.post(
        `/api/${props.linkTo}/auth/signin`,
        { email, password },
        config
      );
      console.log(data);
      toast.success("User logged in successfully", {
        onClose: () => navigate(`/${props.linkTo}`),
        autoClose: 2000,
      });
    } catch (error) {
      console.error(error);
      return toast.error("Server couldn't complete request");
    }
  };
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div>
        <h1 className="text-2xl font-bold">Log In for {props.value}</h1>
        <label htmlFor="email" className="text-xs">
          {" "}
          Email address
        </label>
        <br />
        <input
          type="email"
          placeholder="Email"
          className="p-2 border text-gray-500 border-gray-300 rounded-md focus:outline-none focus:border-violet-500"
          onChange={(e) => setEmail(e.target.value)}
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
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button
          className="p-2 w-50 mt-6 bg-violet-600 rounded-md cursor-pointer hover:bg-violet-800 text-white"
          onClick={formSubmitHandler}
        >
          Log In
        </button>
        <p className="text-xs mt-2 text-center">
          First time here?
          <Link
            to={`/${props.linkTo}/signup`}
            className="text-violet-600 text-xs underline "
          >
            {" "}
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginComponent;
