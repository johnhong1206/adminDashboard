import React from "react";

function NewUserCreate() {
  return (
    <div className=" h-full max-h-screen w-screen md:w-9/12  p-5">
      <h1 className="text-3xl font-bold">New User</h1>
      <form className="grid grid-flow-row-den md:grid-cols-1 lg:grid-cols-2">
        <div className=" w-[400px] flex flex-col mt-2 mr-5">
          <label className=" mb-3 text-sm font-semibold text=[#979696]">
            Username
          </label>
          <input
            type="text"
            className=" h-[20px] p-3 border-gray-500 border-2"
            type="text"
            placeholder="john"
          />
        </div>
        <div className=" w-[400px] flex flex-col mt-2 mr-5">
          <label className=" mb-3 text-sm font-semibold text=[#979696]">
            Full Name
          </label>
          <input
            className=" h-[20px] p-3 border-gray-500 border-2"
            type="text"
            placeholder="John Smith"
          />
        </div>
        <div className=" w-[400px] flex flex-col mt-2 mr-5">
          <label className=" mb-3 text-sm font-semibold text=[#979696]">
            Email
          </label>
          <input
            className=" h-[20px] p-3 border-gray-500 border-2"
            type="email"
            placeholder="john@gmail.com"
          />
        </div>
        <div className=" w-[400px] flex flex-col mt-2 mr-5">
          <label className=" mb-3 text-sm font-semibold text=[#979696]">
            Password
          </label>
          <input
            className=" h-[20px] p-3 border-gray-500 border-2"
            type="password"
            placeholder="password"
          />
        </div>
        <div className=" w-[400px] flex flex-col mt-2 mr-5">
          <label className=" mb-3 text-sm font-semibold text=[#979696]">
            Phone
          </label>
          <input
            className=" h-[20px] p-3 border-gray-500 border-2"
            type="text"
            placeholder="+1 123 456 78"
          />
        </div>
        <div className=" w-[400px] flex flex-col mt-2 mr-5">
          <label className=" mb-3 text-sm font-semibold text=[#979696]">
            Address
          </label>
          <input
            className=" h-[20px] p-3 border-gray-500 border-2"
            type="text"
            placeholder="New York | USA"
          />
        </div>
        <div className=" w-[400px] flex flex-col mt-2 mr-5">
          <label className="">Gender</label>
          <div className="flex items-center justify-between">
            <div className="space-x-2">
              <input
                className="mt-[15px]"
                type="radio"
                name="gender"
                id="male"
                value="male"
              />
              <label
                className=" mb-3 text-sm font-semibold text=[#979696]"
                for="male"
              >
                Male
              </label>
            </div>
            <div className="space-x-2">
              <input
                className="mt-[15px]"
                type="radio"
                name="gender"
                id="female"
                value="female"
              />
              <label
                className=" mb-3 text-sm font-semibold text=[#979696]"
                for="female"
              >
                Female
              </label>
            </div>
            <div className="space-x-2">
              <input
                className="mt-[15px]"
                type="radio"
                name="gender"
                id="other"
                value="other"
              />
              <label
                className=" mb-3 text-sm font-semibold text=[#979696]"
                for="other"
              >
                Other
              </label>
            </div>
          </div>
        </div>
        <div className=" w-[400px] flex flex-col mt-2 mr-5">
          <label>Active</label>
          <select className="h-[40px] rounded-sm" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="w-[200px] py-2 px-3 mt-10 bg-blue-800 text-white font-semibold">
          Create
        </button>
      </form>
    </div>
  );
}

export default NewUserCreate;
