import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div
      className={`flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700`}
    >
      <div className="flex w-[96%] md:w-11/12 max-w-maxContent items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="w-[105px] h-[24px] font-medium leading-6 text-base"
        >
          3legant
        </Link>

        <nav className="">
          <ul className="flex md:gap-x-6 text-richblack-25">
            <Link to={"/"} className="w-[38px] h-[24px] text-sm	leading-6 font-medium text-black">Home</Link>
            <Link>Shop</Link>
            <Link>Product</Link>
            <Link>Contact Us</Link>
          </ul>
        </nav>

        <div className="items-center gap-x-2 flex">
          <Link to="/login">
            <button className="hidden md:block rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
              Log in
            </button>
          </Link>
          <Link to="/signup">
            <button className="hidden md:block rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
              Sign up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
