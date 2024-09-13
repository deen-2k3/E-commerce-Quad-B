import React, { useState } from "react";
import ImageLogo from "../assets/login.jpg";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);

  return (
    <div className="flex items-center gap-32  w-screen h-screen overflow-hidden">
      <div className="">
        <img src={ImageLogo} alt="Login" className="w-[736px] h-[1080px] " />
      </div>

      <div className="form-container">
        <h1 className="text-5xl font-medium	 mb-5 leading-10 text-slate-950	">
          Forgot Password
        </h1>

        <form className="flex flex-col gap-5">
          <div className="mb-4 ">
            <input
              type="email"
              id="email"
              className="border-b-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Email address "
              required
            />
          </div>
          <div className="mb-4">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="border-b-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder=" Password"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type={showCPassword ? "text" : "password"}
              id="password"
              className="border-b-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Confirm Password"
              required
            />
          </div>

          <span
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-[310px] top-[295px] z-[10] cursor-pointer"
          >
            {showPassword ? (
              <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
            ) : (
              <AiOutlineEye fontSize={24} fill="#AFB2BF" />
            )}
          </span>

          <span
            onClick={() => setShowCPassword((prev) => !prev)}
            className="absolute right-[310px] top-[370px] z-[10] cursor-pointer"
          >
            {showCPassword ? (
              <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
            ) : (
              <AiOutlineEye fontSize={24} fill="#AFB2BF" />
            )}
          </span>

          <div className="flex items-center justify-between">
            <div className=" text-gray-600 flex items-center justify-center">
              <input
                type="checkbox"
                id="remember_me"
                className="mr-2 w-[24px] h-[24px]"
              />
              <span className="text-xl">Remember me</span>
            </div>
            <Link
              to="/login"
              className=" text-slate-950 font-semibold hover:text-slate-700	"
            >
              <span>Back To LogIn?</span>
            </Link>
          </div>
          <button
            type="submit"
            className="bg-slate-950 hover:bg-slate-800 text-white font-bold py-2 mt-5 px-4 rounded focus:outline-none focus:shadow-outline "
          >
            Forgot Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
