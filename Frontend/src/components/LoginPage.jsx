import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../api/api";
import { useDispatch, useSelector } from "react-redux";
import { setUser, setIsLoading } from "../store/userSlice";
import CircularProgress from "@mui/material/CircularProgress";

const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.user);

  const onChangeHandler = (identifier, value) => {
    setLoginData((prev) => ({ ...prev, [identifier]: value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(setIsLoading(true));
    try {
      const res = await userLogin(loginData); // Login api call
      if (res.data.success) {
        toast.success(res.data.message);
      }
      dispatch(setUser(res.data.user));
      navigate("/browse");
    } catch (error) {
      toast.error(error.response.data.message);
      console.log("Error", error);
    } finally {
      dispatch(setIsLoading(false));
    }
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center z-10">
      <div className="bg-black bg-opacity-70 p-8 rounded-md max-w-sm w-full mx-4 sm:max-w-md md:max-w-lg">
        <h1 className="text-white text-3xl font-bold mb-6">Sign In</h1>

        <form className="space-y-4" onSubmit={submitHandler}>
          <div>
            <input
              type="email"
              placeholder="Email or phone number"
              className="w-full p-3 rounded bg-zinc-800 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-white"
              value={loginData.email}
              onChange={(e) => onChangeHandler("email", e.target.value)}
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 rounded bg-zinc-800 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-white"
              value={loginData.password}
              onChange={(e) => onChangeHandler("password", e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 py-3 text-white font-bold rounded hover:bg-red-700 transition duration-300"
          >
            {isLoading ? (
              <CircularProgress
                thickness={6}
                sx={{ color: "black" }}
                size="20px"
              />
            ) : (
              "Sign In"
            )}
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
          New to Netflix?
          <a
            onClick={() => navigate("/register")}
            className="text-white hover:underline cursor-pointer"
          >
            Sign up now
          </a>
          .
        </p>

        <p className="text-gray-400 text-sm mt-4">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          <a className="text-blue-500 hover:underline ">Learn more.</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
