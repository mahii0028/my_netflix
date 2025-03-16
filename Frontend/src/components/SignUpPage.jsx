import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { userRegister } from "../api/api";

const SignUpPage = ({ setLogin }) => {
  const [signUpData, setSignUpData] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const onChangeHandler = (identifier, value) => {
    setSignUpData((prev) => ({ ...prev, [identifier]: value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await userRegister(signUpData); // Register api call
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/");
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log("Error", error);
    }
  };
  return (
    <div className="absolute rounded-sm min-h-[600px] left-[35%] top-[100px] flex items-center justify-center bg-black opacity-90">
      <div className="bg-transparent p-8 rounded-md max-w-md w-full">
        <h1 className="text-white text-3xl font-bold mb-6">Sign Up</h1>

        <form className="space-y-4" onSubmit={submitHandler}>
          <div>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 rounded bg-zinc-800 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-white"
              value={signUpData.userName}
              onChange={(e) => onChangeHandler("userName", e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Email or phone number"
              className="w-full p-3 rounded bg-zinc-800 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-white"
              value={signUpData.email}
              onChange={(e) => onChangeHandler("email", e.target.value)}
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 rounded bg-zinc-800 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-white"
              value={signUpData.password}
              onChange={(e) => onChangeHandler("password", e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 py-3 text-white font-bold rounded hover:bg-red-700 transition duration-300"
          >
            Sign Up
          </button>

          <div className="flex justify-between items-center text-sm text-gray-400">
            <div>
              <input type="checkbox" id="remember-me" className="mr-2" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <a href="#" className="hover:underline">
              Need help?
            </a>
          </div>
        </form>

        <p className="text-gray-400 mt-8">
          Already Have an account?
          <a
            onClick={() => navigate("/")}
            className="text-white hover:underline cursor-pointer"
          >
            Sign in now
          </a>
          .
        </p>

        <p className="text-gray-400 text-sm mt-4">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          <a href="#" className="text-blue-500 hover:underline">
            Learn more.
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
