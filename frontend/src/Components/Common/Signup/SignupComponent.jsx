import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignupComponent = (props) => {
  const navigate = useNavigate();

  // const [otpModal, setOtpModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Form submission

  const submitHandler = async () => {
    if (!name || !email || !password || !confirmPassword)
      return toast.error("Credentials missing");

    // Regex check

    const nameRegex = /^[A-Za-z\s]{2,50}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!nameRegex.test(name)) return toast.error("Invalid name syntax");
    if (!emailRegex.test(email)) return toast.error("Invalid email syntax");
    if (!passwordRegex.test(password))
      return toast.error(
        "Invalid password syntax(At least 8 characters(1 lowercase, 1 uppercase, 1 number, 1 special)"
      );

    if (password != confirmPassword)
      return toast.error("Passwords doesn't match");

    // Sending data to backend

    try {
      const config = {
        headers: { "Content-type": "application/json" },
      };

      const { data } = await axios.post(
        `/api/${props.linkTo}/auth/signup`,
        { name, email, password },
        config
      );
      console.log(data);
      toast.success("New account registered successfully", {
        onClose: () => navigate(`/${props.linkTo}/signin`),
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
        <h1 className="text-2xl font-bold">Sign up for {props.value}</h1>

        {/* Name field  */}

        <label htmlFor="name" className="text-xs">
          {" "}
          User name
        </label>
        <br />
        <input
          type="text"
          placeholder="Name (Minimum 2 letters)"
          className="p-2 border text-gray-500 border-gray-300 rounded-md focus:outline-none focus:border-violet-500"
          onChange={(e) => setName(e.target.value)}
        />
        <br />

        {/* Email field */}

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

        {/* Password field */}

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

        {/* Confirm Password field */}

        <label htmlFor="confirm-password" className="text-xs">
          {" "}
          Confirm Password
        </label>
        <br />
        <input
          type="password"
          placeholder="Confirm Password"
          className="p-2 border text-gray-500 border-gray-300 rounded-md focus:outline-none focus:border-violet-500"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <br />

        {/* Submit button */}

        <button
          className="p-2 w-50 mt-6 bg-violet-600 rounded-md cursor-pointer hover:bg-violet-800 text-white"
          onClick={submitHandler}
        >
          Sign Up
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
