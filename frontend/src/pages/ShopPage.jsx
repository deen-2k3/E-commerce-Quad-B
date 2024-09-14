import React from "react";
import ShopImg from "../assets/Banner/shopBanner.svg";
import { Link } from "react-router-dom";
import ProductFilter from "../components/ProductFilter";
import Card from "../components/Card";
import NewsLetter from "../components/NewsLetter";

function ShopPage() {
  return (
    <div className="">
      <div className="  w-full mx-auto h-[392px] mt-5 ">
        <div className="relative ">
          <img
            src={ShopImg}
            alt=""
            className="min-w-[1170px] scale-100 mx-auto"
          />
          <div className=" absolute top-[29%] left-[35%] flex flex-col gap-8 text-cente">
            <p className="font-medium text-sm leading-6 ml-36 ">
              <Link className="w-[56px] h-[24px] text-gray-500" to={"/"}>
                Home{" > "} &nbsp;&nbsp;
              </Link>{" "}
              Shop
            </p>
            <h2 className="w-[500px] h-[54px] leading-[58px] ml-10 font-medium text-6xl">
              Shop Page
            </h2>
            <p className="w-[413px] h-[32px] text-xl leading-8 ml-5">
              Let's design the place you always imagined.
            </p>
          </div>
        </div>

        <ProductFilter />
      </div>
      <div className="flex mt-48 ml-44 gap-10 flex-wrap">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="w-[163px] h-[40px] rounded-full border-solid border-2 mb-16 border-zinc-900 mx-auto mt-5 flex justify-center items-center">
        <Link to={"/product"}>Show more</Link>
      </div>
    </div>
  );
}

export default ShopPage;
