import React from "react";
import { BsBell, BsGlobe } from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";

function TopBar() {
  return (
    <div className=" w-full bg-white h-12 sticky top-0 z-50">
      <div className="h-full flex flex-row items-center justify-between pt-2 px-5">
        <div>
          <span className="font-bold text-blue-800 text-3xl">ZH Admin</span>
        </div>
        <div className="flex flex-row items-center space-x-4">
          <div className="relative ">
            <BsBell className="w-6 h-6  cursor-pointer" />
            <span className="absolute -top-2 -right-2 bg-red-500 bg-opacity-80 z-auto w-5 h-5 flex items-center justify-center leading-5 rounded-full">
              0
            </span>
          </div>
          <div className="relative ">
            <BsGlobe className="w-6 h-6  cursor-pointer" />
          </div>
          <div className="relative ">
            <AiOutlineSetting className="w-6 h-6  cursor-pointer" />
          </div>
          <img
            src={"/image/zonghong.jpg"}
            className="w-12 h-12 rounded-full cursor-pointer"
            alt="uesr image"
          />
        </div>
      </div>
    </div>
  );
}

export default TopBar;
