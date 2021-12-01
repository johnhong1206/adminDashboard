import React from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

function FeaturedInfo() {
  return (
    <div className="w-full flex flex-wrap xl:flex-row justify-between ">
      <div className="flex-1 mx-5 p-8 rounded-lg cursor-pointer shadow-lg">
        <span className="text-lg">Revanue</span>
        <div className="mt-3 flex flex-row items-center">
          <span className="flex flex-row font-medium text-[30px]">$2,415</span>
          <span className="flex flex-row items-center ml-5">
            -11.4 <AiOutlineArrowDown className="text-red-500" />
          </span>
        </div>
        <span className="text-sm text-gray-400">Compared to last month</span>
      </div>
      <div className="flex-1 mx-5 p-8 rounded-lg cursor-pointer shadow-lg">
        <span className="text-lg">Sales</span>
        <div className="mt-3 flex flex-row items-center">
          <span className="flex flex-row font-medium text-[30px]">$4,415</span>
          <span className="flex flex-row items-center ml-5">
            -1.4 <AiOutlineArrowDown className="text-red-500" />
          </span>
        </div>
        <span className="text-sm text-gray-400">Compared to last month</span>
      </div>
      <div className="flex-1 mx-5 p-8 rounded-lg cursor-pointer shadow-lg">
        <span className="text-lg">Cost</span>
        <div className="mt-3 flex flex-row items-center">
          <span className="flex flex-row font-medium text-[30px]">$2,225</span>
          <span className="flex flex-row items-center ml-5">
            +2.4 <AiOutlineArrowUp className="featuredIcon" />
          </span>
        </div>
        <span className="text-sm text-gray-400">Compared to last month</span>
      </div>
    </div>
  );
}

export default FeaturedInfo;
