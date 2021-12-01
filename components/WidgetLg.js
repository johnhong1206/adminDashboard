import React from "react";

function WidgetLg() {
  const Button = ({ type }) => {
    return (
      <button
        className={
          ` ml-1 py-1 px-2 rounded-lg ${
            type == "Approved" &&
            "bg-[#e5faf2] text-[#3bb077] hover:bg-green-600 hover:text-white"
          }
          ${
            type == "Declined" &&
            "bg-[#fff0f1] text-[#d95087] hover:bg-red-600 hover:text-white "
          }
          ${
            type == "Pending" &&
            "bg-[#ebf1fe] text-[#2a7ade] hover:bg-blue-600 hover:text-white "
          }
          ` + type
        }
      >
        {type}
      </button>
    );
  };

  return (
    <div className="w-full max-w-2/10 shadow-lg p-5">
      <h3 className=" text-2xl font-semibold">Latest transactions</h3>
      <table className="w-full flex flex-col space-y-7">
        <tr className="">
          <th className="text-left">Customer</th>
          <th className="text-left">Date</th>
          <th className="text-left">Amount</th>
          <th className="text-left">Status</th>
        </tr>
        <tr className="">
          <td className="flex flex-row items-center text-semibold">
            <img
              src="./image/lisa.jpg"
              alt=""
              className=" w-10 h-10 rounded-full object-cover mr-3"
            />
            <span className="font-semibold">Lisa Lin</span>
          </td>
          <td className="font-normal">2 Jun 2021</td>
          <td className="font-normal">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="">
          <td className="flex flex-row items-center text-semibold">
            <img
              src="./image/lisa.jpg"
              alt=""
              className=" w-10 h-10 rounded-full object-cover mr-3"
            />
            <span className="font-semibold">Lisa Lin</span>
          </td>
          <td className="font-normal">2 Jun 2021</td>
          <td className="font-normal">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="">
          <td className="flex flex-row items-center text-semibold">
            <img
              src="./image/lisa.jpg"
              alt=""
              className=" w-10 h-10 rounded-full object-cover mr-3"
            />
            <span className="font-semibold">Lisa Lin</span>
          </td>
          <td className="font-normal">2 Jun 2021</td>
          <td className="font-normal">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="">
          <td className="flex flex-row items-center text-semibold">
            <img
              src="./image/lisa.jpg"
              alt=""
              className=" w-10 h-10 rounded-full object-cover mr-3"
            />
            <span className="font-semibold">Lisa Lin</span>
          </td>
          <td className="font-normal">2 Jun 2021</td>
          <td className="font-normal">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default WidgetLg;
