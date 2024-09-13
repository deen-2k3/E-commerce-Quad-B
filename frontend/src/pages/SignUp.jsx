import React, { useState } from "react";
import ImageLogo from "../assets/login.jpg";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center gap-32  w-screen h-screen overflow-hidden">
      <div className="">
        <img src={ImageLogo} alt="Login" className="w-[736px] h-[1080px] " />
      </div>

      <div className="form-container">
        <h1 className="text-5xl font-medium	 mb-5 leading-10 text-slate-950	">
          Sign Up
        </h1>

        <div className="text-base w-[456px] h-[26px] mb-5">
          <p className="text-gray-500  ">
            Already have an account?{" "}
            <Link to="/login">
              <span className="text-emerald-400	 hover:text-emerald-600	text-lg	font-semibold">
                Sign in
              </span>
            </Link>
          </p>
        </div>

        <form className="flex flex-col gap-5">
          <div className="mb-4 ">
            <input
              type="text"
              id="text"
              className="border-b-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your name "
              required
            />
          </div>

          <div className="mb-4 ">
            <input
              type="text"
              id="text"
              className="border-b-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Username "
              required
            />
          </div>

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
              placeholder="Password"
              required
            />
          </div>
          <span
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-[218px] top-[431px] z-[10] cursor-pointer"
          >
            {showPassword ? (
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
              <p className="">
                I agree with <span className=" font-bold">Privacy Policy</span>{" "}
                and <span className=" font-bold">Term of Use</span>{" "}
              </p>
            </div>
          </div>
          <button
            type="submit"
            className="bg-slate-950 hover:bg-slate-800 text-white font-bold py-2 mt-5 px-4 rounded focus:outline-none focus:shadow-outline "
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
