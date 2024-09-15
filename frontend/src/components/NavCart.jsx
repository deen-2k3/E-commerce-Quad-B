import React, { useState } from "react";
import black from "../assets/Cart/black.svg";
import lamp from "../assets/Cart/lamp.svg";
import red from "../assets/Cart/red.svg";
const NavCart = () => {
  const [count, setCount] = useState(1);

  return (
    <div>
      <div className="w-[413px] h-[1024px] ml-5 ">

        <div className="flex w-[365px] h-[34px] mt-7">
          <h2 className="w-[325px] h-[34px] text-3xl leading-8  font-medium">
            Cart
          </h2>
          <span className="bg-black text-white border border-1 rounded-full  w-[33.78px] h-[33.78px]  items-center content-center flex justify-center ">
            X
          </span>
        </div>
        <div className="w-[365px] h-[480px] mt-7 ">
          <div className="flex mb-3">
            <img src={black} alt="" />
            <div className="">
              <div className="flex ml-2">
                <h2 className="w-[180px] h-[22px] font-semibold text-[14px] leading-6">
                  Tray Table
                </h2>{" "}
                <span className="ml-20 w-[44px] h-[22px] text-[14px] font-semibold leading-6">
                  $19.19
                </span>
              </div>
              <p className="h-[20px] text-[#6C7275] font-normal text-[12px] leading-5 ml-2">
                Color:Black <span className="ml-56 w-[24px] h-[24px]">X</span>
              </p>

              <div className="ml-9">
                <div className="flex w-[80px] h-[32px] border ml-[-25px] border-black justify-center items-center  gap-3 ">
                  <button
                    disabled={count === 1}
                    onClick={() => setCount(count - 1)}
                    className=""
                  >
                    -
                  </button>
                  <p className=" ">{count}</p>
                  <button
                    className=""
                    disabled={count === 9}
                    onClick={() => setCount(count + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[376px] h-[2px] bg-[#E8ECEF]"></div>

          {/* next element */}
          <div className="w-[365px] h-[480px] mt-9">
            <div className="flex mb-3">
              <img src={red} alt="" />
              <div className="">
                <div className="flex ml-2">
                  <h2 className="w-[180px] h-[22px] font-semibold text-[14px] leading-6">
                    Tray Table
                  </h2>{" "}
                  <span className="ml-20 w-[44px] h-[22px] text-[14px] font-semibold leading-6">
                    $19.19
                  </span>
                </div>
                <p className="h-[20px] text-[#6C7275] font-normal text-[12px] leading-5 ml-2">
                  Color:Black <span className="ml-56 w-[24px] h-[24px]">X</span>
                </p>

                <div className="ml-9">
                  <div className="flex w-[80px] h-[32px] border ml-[-25px] border-black justify-center items-center  gap-3 ">
                    <button
                      disabled={count === 1}
                      onClick={() => setCount(count - 1)}
                      className=""
                    >
                      -
                    </button>
                    <p className=" ">{count}</p>
                    <button
                      className=""
                      disabled={count === 9}
                      onClick={() => setCount(count + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[376px] h-[2px] bg-[#E8ECEF]"></div>

            <div className="w-[365px] h-[480px] mt-7">
              <div className="w-[365px] h-[480px] mt-7">
                <div className="flex mb-3">
                  <img src={lamp} alt="" />
                  <div className="">
                    <div className="flex ml-2">
                      <h2 className="w-[180px] h-[22px] font-semibold text-[14px] leading-6">
                        Tray Table
                      </h2>{" "}
                      <span className="ml-20 w-[44px] h-[22px] text-[14px] font-semibold leading-6">
                        $19.19
                      </span>
                    </div>
                    <p className="h-[20px] text-[#6C7275] font-normal text-[12px] leading-5 ml-2">
                      Color: Gold{" "}
                      <span className="ml-56 w-[24px] h-[24px]">X</span>
                    </p>

                    <div className="ml-9">
                      <div className="flex w-[80px] h-[32px] border ml-[-25px] border-black justify-center items-center  gap-3 ">
                        <button
                          disabled={count === 1}
                          onClick={() => setCount(count - 1)}
                          className=""
                        >
                          -
                        </button>
                        <p className=" ">{count}</p>
                        <button
                          className=""
                          disabled={count === 9}
                          onClick={() => setCount(count + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[376px] h-[2px] bg-[#E8ECEF]"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[365px] h-[52px] flex gap-[280px]">
            <p className="w-[64px] h-[26px] font-normal text-sm leading-7">Subtotal</p> <span className="w-[57px] h-[26px] font-semibold text-sm leading-7">$99.00</span>
        </div>
        <div className="bg-[#E8ECEF] h-[1px] w-[365px] "></div>
        <div className="w-[365px] h-[52px] flex gap-[265px] mt-3">
            <p className="w-[51px] h-[28px] font-medium text-[20px] leading-7">Total</p> <span className="w-[80px] h-[28px] font-semibold text-[20px] leading-7">$234.00</span>
        </div>
        <div>
            <button
              type="submit"
              className="bg-slate-950 hover:bg-slate-800 text-white font-bold py-2 mt-5 px-4 rounded-lg focus:outline-none focus:shadow-outline w-[380px]  h-[52px] mb-7"
            >
              Checkout
            </button>
          </div>
          <div className="flex justify-center items-center ">
            <p className="w-[67px] h-[22px]  font-semibold text-[14px] leading-6 ml-[-25px] underline">View Cart</p>
            
          </div>
      </div>

    </div>
  );
};

export default NavCart;
