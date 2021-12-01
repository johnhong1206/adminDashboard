import React from "react";

function NewProductCreat() {
  return (
    <div className=" h-full max-h-screen w-screen md:w-9/12  p-5">
      <h1 className="text-3xl font-bold">New Product</h1>
      <form className="grid grid-flow-row-den md:grid-cols-1 lg:grid-cols-2">
        <div className=" w-[400px] flex flex-col mt-2 mr-5">
          <label className=" mb-3 text-sm font-semibold text=[#979696]">
            Image
          </label>
          <input type="file" id="file" />
        </div>
        <div className=" w-[400px] flex flex-col mt-2 mr-5">
          <label className=" mb-3 text-sm font-semibold text=[#979696]">
            Name
          </label>
          <input type="text" placeholder="Apple Airpods" />
        </div>
        <div className=" w-[400px] flex flex-col mt-2 mr-5">
          <label className=" mb-3 text-sm font-semibold text=[#979696]">
            Category
          </label>
          <input type="text" placeholder="Category" />
        </div>
        <div className=" w-[400px] flex flex-col mt-2 mr-5">
          <label className=" mb-3 text-sm font-semibold text=[#979696]">
            Price
          </label>
          <input type="text" placeholder="Price" />
        </div>
        <div className=" w-[400px] flex flex-col mt-2 mr-5">
          <label className=" mb-3 text-sm font-semibold text=[#979696]">
            Description
          </label>
          <input type="text" placeholder="Description" />
        </div>
        <div className=" w-[400px] flex flex-col mt-2 mr-5">
          <label className=" mb-3 text-sm font-semibold text=[#979696]">
            Rating
          </label>
          <input type="text" placeholder="Rating" />
        </div>
        <div className=" w-[400px] flex flex-col mt-2 mr-5">
          <label className=" mb-3 text-sm font-semibold text=[#979696]">
            Stock
          </label>
          <input type="text" placeholder="123" />
        </div>
        <div className=" w-[400px] flex flex-col mt-2 mr-5">
          <label className=" mb-3 text-sm font-semibold text=[#979696]">
            Active
          </label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="w-[200px] rounded-xl py-2 px-3 mt-10 bg-blue-800 text-white font-semibold">
          Create
        </button>
      </form>
    </div>
  );
}

export default NewProductCreat;
