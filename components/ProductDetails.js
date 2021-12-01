import React from "react";
import Link from "next/link";
import Chart from "./Chart";
import { MdPublish } from "react-icons/md";

function ProductDetails() {
  const productData = [
    {
      name: "Jan",
      Sales: 4000,
    },
    {
      name: "Feb",
      Sales: 3000,
    },
    {
      name: "Mar",
      Sales: 5000,
    },
  ];
  return (
    <div className="flex-1 flex-grow p-5">
      <div className=" flex items-center justify-between space-x-9">
        <h1 className="text-3xl font-semibold">Product</h1>
        <Link href="/newproduct">
          <button className=" w-20 p-2 bg-green-500 text-white cursor-pointer text-[16px]">
            Create
          </button>
        </Link>
      </div>
      <div className="flex flex-col xl:flex-row">
        <div className="flex-grow">
          <Chart data={productData} dataKey="Sales" title="Sales Performance" />
        </div>
        <div className="flex-grow p-10 xl:p-2">
          <div className="flex flex-row items-center">
            <img
              src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className=" w-10 h-10 rounded-full object-cover cursor-pointer"
            />
            <span className="font-semibold">Apple Airpods</span>
          </div>
          <div className="mt-3">
            <div className="w-[150px] flex flex-row items-center justify-between">
              <span className="font-semibold text-lg">id:</span>
              <span className="text-sm">123</span>
            </div>
            <div className="w-[150px] flex flex-row items-center justify-between">
              <span className="font-semibold text-lg">sales:</span>
              <span className="text-sm">5123</span>
            </div>
            <div className="w-[150px] flex flex-row items-center justify-between">
              <span className="font-semibold text-lg">active:</span>
              <span className="text-sm">yes</span>
            </div>
            <div className="w-[150px] flex flex-row items-center justify-between">
              <span className="font-semibold text-lg">in stock:</span>
              <span className="text-sm">no</span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 m-5 shadow-2xl">
        <form className="flex flex-row items-center justify-between">
          <div className="flex flex-col space-y-4">
            <label className="mb-3 text-gray-500">Product Name</label>
            <input type="text" placeholder="Apple AirPod" />
            <label className="mb-3 text-gray-500">In Stock</label>
            <select name="inStock" id="idStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label className="mb-3 text-gray-500">Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="flex flex-col justify-around">
            <div className="flex flex-row items-center">
              <img
                src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className=" w-[100px] h-[100px] rounded-lg object-cover mr-5"
              />
              <label for="file">
                <MdPublish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="p-2 bg-blue-800 text-white rounded-lg cursor-pointer mt-4">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductDetails;
