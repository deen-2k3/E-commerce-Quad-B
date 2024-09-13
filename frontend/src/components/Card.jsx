import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import IMG from "../assets/category/p1.svg";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

const firstExample = {
  size: 20,
  edit: false,
  value: 4.5,
};

const Card = () => {
  const [heart, SetHeart] = useState(false);

  return (
    <div className=" relative min-w-[262px] min-h-[470px] border-blue-500 group">
      <img src={IMG} alt="" />
      <ReactStars {...firstExample} />
      <h2 className="w-[262px] h-[26px] font-medium text-base leading-6	">
        Loveseat Sofa
      </h2>
      <div className="flex gap-3">
        <p className="w-[56px] h-[22px] font-medium text-base leading-5">
          $199.00
        </p>
        <strike>$400.00</strike>
      </div>

      <div className="absolute top-5 left-5 flex flex-col gap-[8px]">
        <p className="bg-white px-[14px] py-[4px] rounded-md font-medium ">
          NEW
        </p>
        <p className=" bg-green-500 text-white px-[14px] py-[4px] rounded-md font-medium ">
          -50%
        </p>
      </div>
      <div
        className=" absolute top-5 right-5 w-[40px] h-[40px] rounded-full bg-white flex items-center justify-center invisible group-hover:visible"
        onClick={() => SetHeart(!heart)}
      >
        {heart ? <FaHeart size="25px" color="#C70039 " /> : <CiHeart size="30px" />}
      </div>

      <button className="bg-black text-white  absolute left-5 bottom-36 w-[230px] h-[46px] rounded-lg invisible group-hover:visible transition-opacity duration-300 ease-in-out">
       <span className=" px-[24px] py-[8px]  font-medium "> Add to cart</span>
      </button>

    </div>
  );
};

export default Card;
