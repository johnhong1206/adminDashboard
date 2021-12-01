import React from "react";
import FeaturedInfo from "./FeaturedInfo";
import Chart from "./Chart";
import WidgetSm from "./WidgetSm";
import WidgetLg from "./WidgetLg";

function Center() {
  const userData = [
    {
      name: "Jan",
      "Active User": 4000,
    },
    {
      name: "Feb",
      "Active User": 3000,
    },
    {
      name: "Mar",
      "Active User": 5000,
    },
    {
      name: "Apr",
      "Active User": 4000,
    },
    {
      name: "May",
      "Active User": 3000,
    },
    {
      name: "Jun",
      "Active User": 2000,
    },
    {
      name: "Jul",
      "Active User": 4000,
    },
    {
      name: "Agu",
      "Active User": 3000,
    },
    {
      name: "Sep",
      "Active User": 4000,
    },
    {
      name: "Oct",
      "Active User": 1000,
    },
    {
      name: "Nov",
      "Active User": 4000,
    },
    {
      name: "Dec",
      "Active User": 3000,
    },
  ];

  return (
    <div className="h-screen w-screen max-w-6/10">
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="flex flex-col xl:flex-row">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}

export default Center;
