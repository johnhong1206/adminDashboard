import React, { useState } from "react";
import Link from "next/link";
import {
  AiOutlineHome,
  AiOutlineBarChart,
  AiOutlineMail,
} from "react-icons/ai";
import {
  IoAnalyticsOutline,
  IoPersonCircleOutline,
  IoStorefrontOutline,
  IoChatbubbleOutline,
} from "react-icons/io5";
import { BiTrendingUp } from "react-icons/bi";
import {
  MdOutlineAttachMoney,
  MdOutlineFeedback,
  MdOutlineManageSearch,
  MdOutlineExpandLess,
  MdOutlineExpandMore,
} from "react-icons/md";
import { useRouter } from "next/router";

function Sidebar() {
  const router = useRouter();
  const [openDashBoard, setOpenDashboard] = useState(true);

  const navHome = () => {
    router.push("/");
  };

  const navUsers = () => {
    router.push("/UserList");
  };

  const navProduct = () => {
    router.push("/productlist");
  };

  const toggleDashboard = () => {
    if (openDashBoard) {
      setOpenDashboard(false);
    } else {
      setOpenDashboard(true);
    }
  };

  return (
    <div className="flex flex-col sticky top-12 bg-[#fbfbff]  h-full max-h-screen w-screen md:w-3/12 ">
      <div className="p-5 text-[#555]">
        <div className="mb-3">
          <div className="flex items-center justify-between">
            <h3 className="text-base text-[#BABABB]">Dashboard</h3>
            <div onClick={toggleDashboard} className="">
              {openDashBoard ? (
                <MdOutlineExpandLess className="w-6 h-6 cursor-pointer" />
              ) : (
                <MdOutlineExpandMore className="w-6 h-6 cursor-pointer" />
              )}
            </div>
          </div>

          <ul className="flex flex-wrap xl:flex-col p-2">
            <li
              onClick={navHome}
              className="flex flex-row items-center p-2 rounded-lg cursor-pointer hover:bg-[#f0f0ff]"
            >
              <AiOutlineHome className="w-6 h-6 mr-1" />
              Home
            </li>

            <li className="flex flex-row items-center p-2 rounded-lg cursor-pointer hover:bg-[#f0f0ff]">
              <IoAnalyticsOutline className="w-6 h-6 mr-1" />
              Analytics
            </li>
            <li className="flex flex-row items-center p-2 rounded-lg cursor-pointer hover:bg-[#f0f0ff]">
              <BiTrendingUp className="w-6 h-6 mr-1" />
              Sales
            </li>
          </ul>
        </div>
        {openDashBoard && (
          <>
            <div>
              <h3>Quick Menu</h3>
              <ul className="flex flex-wrap xl:flex-col p-2">
                <li
                  onClick={navUsers}
                  className="flex flex-row items-center p-2 rounded-lg cursor-pointer hover:bg-[#f0f0ff]"
                >
                  <IoPersonCircleOutline className="w-6 h-6 mr-1" />
                  Users
                </li>

                <li
                  onClick={navProduct}
                  className="flex flex-row items-center p-2 rounded-lg cursor-pointer hover:bg-[#f0f0ff]"
                >
                  <IoStorefrontOutline className="w-6 h-6 mr-1" />
                  Products
                </li>

                <li className="flex flex-row items-center p-2 rounded-lg cursor-pointer hover:bg-[#f0f0ff]">
                  <MdOutlineAttachMoney className="w-6 h-6 mr-1" />
                  Transactions
                </li>
                <li className="flex flex-row items-center p-2 rounded-lg cursor-pointer hover:bg-[#f0f0ff]">
                  <AiOutlineBarChart className="w-6 h-6 mr-1" />
                  Reports
                </li>
              </ul>
            </div>
            <div>
              <h3>Notifications</h3>
              <ul className="flex flex-wrap xl:flex-col p-2">
                <li className="flex flex-row items-center p-2 rounded-lg cursor-pointer hover:bg-[#f0f0ff]">
                  <AiOutlineMail className="w-6 h-6 mr-1" />
                  Mail
                </li>
                <li className="flex flex-row items-center p-2 rounded-lg cursor-pointer hover:bg-[#f0f0ff]">
                  <MdOutlineFeedback className="w-6 h-6 mr-1" />
                  Feedback
                </li>
                <li className="flex flex-row items-center p-2 rounded-lg cursor-pointer hover:bg-[#f0f0ff]">
                  <IoChatbubbleOutline className="w-6 h-6 mr-1" />
                  Messages
                </li>
              </ul>
            </div>
            <div>
              <h3>Staff</h3>
              <ul className="flex flex-wrap xl:flex-col p-2">
                <li className="flex flex-row items-center p-2 rounded-lg cursor-pointer hover:bg-[#f0f0ff]">
                  <MdOutlineManageSearch className="w-6 h-6 mr-1" />
                  Manage
                </li>
                <li className="flex flex-row items-center p-2 rounded-lg cursor-pointer hover:bg-[#f0f0ff]">
                  <IoAnalyticsOutline className="w-6 h-6 mr-1" />
                  Analytics
                </li>
                <li className="flex flex-row items-center p-2 rounded-lg cursor-pointer hover:bg-[#f0f0ff]">
                  <AiOutlineBarChart className="w-6 h-6 mr-1" />
                  Reports
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
