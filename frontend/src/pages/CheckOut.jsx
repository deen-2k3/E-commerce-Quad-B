import React from "react";

const CheckOut = () => {
  return (
    <div>
      <div className="">
        {/* checkout */}
        
        <div className="flex flex-col justify-center items-center  mt-[50px] mb-20">
          <h2 className="w-[276px] h-[58px] font-medium leading-10 text-5xl mb-2">
            Check Out
          </h2>
          <div className="flex ">
            <span className="bg-[#38CB89] text-white border border-1 rounded-full  w-[42px] h-[42px]  items-center content-center flex justify-center">
              ✔
            </span>
            <p className="w-[256px] h-[42px] items-center mt-[8px] ml-5 font-semibold leading-6 text-lg text-[#38CB89]">
              Shopping cart
              <div className="h-[1.5px] w-[256px] bg-[#38CB89] mt-5 ml-[-55px]"></div>
            </p>
            <span className="bg-black text-white border border-1 rounded-full  w-[42px] h-[42px]  items-center content-center flex justify-center">
              2
            </span>
            <p className=" text-black w-[256px] h-[42px] items-center mt-[8px] ml-5 font-semibold leading-6 text-lg">
              Checkout details
              <div className="h-[1.5px] w-[256px] bg-black mt-5 ml-[-55px]"></div>
            </p>
            <span className="bg-gray-400 text-white border border-1 rounded-full  w-[42px] h-[42px]  items-center content-center flex justify-center">
              3
            </span>
            <p className="text-gray-400 w-[256px] h-[42px] items-center mt-[8px] ml-5 font-semibold leading-6 text-lg">
              Order complete
            </p>
          </div>
        </div>

        <div className="">
          <div className="flex flex-col border border-1 border-[#6C7275] rounded-[4px] w-[643px] h-[372px] ml-40 mb-5">
            <h1 className="w-[198px] h-[28px] ml-5 mt-8 font-medium leading-7 mb-5">
              Contact Infomation
            </h1>
            <div className="flex w-[595px] h-[64px] mb-5">
              <div className="flex flex-col ml-5">
                <label
                  htmlFor=""
                  className="w-[74px] h-[12px] font-bold text-[12px] leading-3 mb-2 text-[#6C7275]"
                >
                  FIRST NAME
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="  First name"
                  className="border border-1 w-[285.5px] h-[40px]  border-[#CBCBCB] rounded-md"
                />
              </div>
              <div className="flex flex-col ml-5">
                <label
                  htmlFor=""
                  className="w-[74px] h-[12px] font-bold text-[12px] leading-3 mb-2 text-[#6C7275]"
                >
                  LAST NAME
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder=" Last name"
                  className="border border-1 w-[285.5px] h-[40px]  border-[#CBCBCB] rounded-md "
                />
              </div>
            </div>
            <div className="w-[595px] h-[64px] ml-5 mb-3">
              <label
                htmlFor=""
                className="w-[74px] h-[12px] font-bold text-[12px] leading-3 mb-2 text-[#6C7275]"
              >
                PHONE NUMBER
              </label>
              <br />
              <input
                type="text"
                name=""
                id=""
                placeholder="  Phone number"
                className="border border-1 w-[595px] h-[40px]  border-[#CBCBCB] rounded-md"
              />
            </div>
            <div className="ml-5 mt-3">
              <label
                htmlFor=""
                className="w-[74px] h-[12px] font-bold text-[12px] leading-3 mb-2 text-[#6C7275]"
              >
                EMAIL ADDRESS
              </label>
              <br />
              <input
                type="email"
                name=""
                id=""
                placeholder="  Your Email"
                className="border border-1 w-[595px] h-[40px]  border-[#CBCBCB] rounded-md"
              />
            </div>
          </div>
        </div>

        <div className="">
          <div className="">
            <div className="flex flex-col border border-1 border-[#6C7275] rounded-[4px] w-[643px] h-[510px] ml-40 mb-5">
              <h1 className="w-[198px] h-[28px] ml-5 mt-8 font-medium leading-7 mb-5">
                Shipping Address
              </h1>

              <div className="w-[595px] h-[64px] ml-5 mb-3">
                <label
                  htmlFor=""
                  className="w-[74px] h-[12px] font-bold text-[12px] leading-3 mb-2 text-[#6C7275]"
                >
                  STREET ADDRESS
                </label>
                <br />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="  Stress Address"
                  className="border border-1 w-[595px] h-[40px]  border-[#CBCBCB] rounded-md"
                />
              </div>
              <div className="ml-5 mt-3">
                <label
                  htmlFor=""
                  className="w-[74px] h-[12px] font-bold text-[12px] leading-3 mb-3 text-[#6C7275]"
                >
                  COUNTRY
                </label>
                <br />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="  Country"
                  className="border border-1 w-[595px] h-[40px]  border-[#CBCBCB] rounded-md"
                />
              </div>
              <div className="ml-5 mt-3">
                <label
                  htmlFor=""
                  className="w-[74px] h-[12px] font-bold text-[12px] leading-3 mb-3 text-[#6C7275]"
                >
                  TOWN/CITY
                </label>
                <br />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="  Town/City"
                  className="border border-1 w-[595px] h-[40px]  border-[#CBCBCB] rounded-md"
                />
              </div>
              <div className="flex w-[595px] h-[64px] mb-5 mt-5">
                <div className="flex flex-col ml-5 ">
                  <label
                    htmlFor=""
                    className="w-[74px] h-[12px] font-bold text-[12px] leading-3 mb-3 text-[#6C7275]"
                  >
                    STATE
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="  State"
                    className="border border-1 w-[285.5px] h-[40px]  border-[#CBCBCB] rounded-md"
                  />
                </div>
                <div className="flex flex-col ml-5 ">
                  <label
                    htmlFor=""
                    className="w-[74px] h-[12px] font-bold text-[12px] leading-3 mb-3 text-[#6C7275]"
                  >
                    ZIP CODE
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder=" Zip Code"
                    className="border border-1 w-[285.5px] h-[40px]  border-[#CBCBCB] rounded-md "
                  />
                </div>
              </div>
              <div className="w-[339px] h-[26px] ml-5 text-[#6C7275]">
                <input type="checkbox" />{" "}
                <span className="text-[16px] font-normal leading-7">
                  Use a different billing address(optional)
                </span>
              </div>
            </div>

            <div className=""></div>
          </div>

          <div className="">
            <div className="flex flex-col border border-1 border-[#6C7275] rounded-[4px] w-[643px] h-[468px] ml-40 mb-5">
              <h1 className="w-[198px] h-[28px] ml-5 mt-8 font-medium leading-7 mb-5">
                Payment method
              </h1>
              <div className="flex items-center border rounded bg-gray-300  border-gray-400 w-[595px] h-[52px] mb-5  ml-5">
                <input
                  type="radio"
                  name="cart"
                  checked
                  className="ml-2  bg-black"
                />{" "}
                <span className="ml-3">Pay by Card Credit</span>
              </div>
              <div className="flex items-center border rounded   border-gray-400 w-[595px] h-[52px] mb-5 ml-5 mt-5 ">
                <input
                  type="radio"
                  name="cart"
                  checked
                  className="ml-2  bg-black"
                />{" "}
                <span className="ml-3">Paypal</span>
              </div>
              <div className="w-[595px] h-[64px] ml-5 mb-3">
                <label
                  htmlFor=""
                  className="w-[74px] h-[12px] font-bold text-[12px] leading-3 mb-2 text-[#6C7275]"
                >
                  CARD NUMBER
                </label>
                <br />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="  1234 1234 1234"
                  className="border border-1 w-[595px] h-[40px]  border-[#CBCBCB] rounded-md"
                />
              </div>
              <div className="flex w-[595px] h-[64px] mb-5 mt-5">
                <div className="flex flex-col ml-5">
                  <label
                    htmlFor=""
                    className="w-[107px] h-[12px] font-bold text-[12px] leading-3 mb-2 text-[#6C7275]"
                  >
                    EXPIRATION DATE
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="  MM/YY"
                    className="border border-1 w-[285.5px] h-[40px]  border-[#CBCBCB] rounded-md"
                  />
                </div>
                <div className="flex flex-col ml-5">
                  <label
                    htmlFor=""
                    className="w-[107px] h-[12px] font-bold text-[12px] leading-3 mb-2 text-[#6C7275]"
                  >
                    CVC
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder=" CVC code"
                    className="border border-1 w-[285.5px] h-[40px]  border-[#CBCBCB] rounded-md "
                  />
                </div>
              </div>
            </div>
         
          </div>
          
          <div>
            <button
              type="submit"
              className="bg-slate-950 hover:bg-slate-800 text-white font-bold py-2 mt-5 px-4 rounded-lg focus:outline-none focus:shadow-outline w-[643px]  h-[52px] ml-40 mb-20"
            >
              Checkout
            </button>
          </div>
          
        </div>
        
      </div>

    </div>
  );
};

export default CheckOut;
