import React from "react";
import { ChevronDown, Grid, LayoutGrid, List, Menu } from "lucide-react";

const ProductFilter = () => {
  return (
    <div className="flex w-[77%] mx-auto items-center justify-between p-4 bg-white border-b border-gray-200 mt-10">
      <div className="flex space-x-4">
        <div className="relative w-[262px] h-[82px] flex flex-col gap-2 ">
          <p className=" w-[102px] h-[26px] font-semibold text-base leading-6 text-gray-500">
            CATEGORIES
          </p>
          <select className="flex flex-col items-center justify-center appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-sm leading-5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-semibold">
            <option className="">Living Room</option>
          </select>
          <ChevronDown
            className=" absolute right-3 top-[50px] transform -translate-y-1/2 text-gray-400 pointer-events-none"
            size={16}
          />
        </div>
        <div className="relative w-[262px] h-[82px] flex flex-col gap-2">
          <p className=" w-[102px] h-[26px] font-semibold text-base leading-6 text-gray-500">
            PRICE
          </p>
          <select className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-sm leading-5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 fonts">
            <option>All Price</option>
          </select>
          <ChevronDown
            className="absolute right-3 top-[50px] transform -translate-y-1/2 text-gray-400 pointer-events-none"
            size={16}
          />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <button className="flex items-center text-sm text-gray-700 hover:text-gray-900 focus:outline-none">
            Sort by
            <ChevronDown className="ml-1" size={16} />
          </button>
        </div>
        <div className="flex space-x-2">
          <button className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none">
            <LayoutGrid size={20} />
          </button>
          <button className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none">
            <Grid size={20} />
          </button>
          <button className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none">
            <List size={20} />
          </button>
          <button className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
