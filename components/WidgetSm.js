import React from "react";
import { MdVisibility } from "react-icons/md";
import WiddgetSmUserList from "./WiddgetSmUserList";

function WidgetSm() {
  const userData = [
    {
      id: 1,
      username: "anna95",
      fullname: "Anna Woo",
      avatar: "./image/anna.jpg",
      email: "anna@gmail.com",
      dob: "25-12-1995",
      contactNumber: "012-2235885",
      status: "active",
      location: "Selangor",
      country: "Malaysia",
      Memberstatus: "new Member",
      transaction: "RM0.00",
    },
    {
      id: 2,
      username: "vivian92",
      fullname: "Vivian Foo",
      avatar: "./image/vivian.jpg",
      email: "vivian@gmail.com",
      dob: "25-09-1992",
      contactNumber: "012-2235885",
      status: "active",
      location: "Perak",
      country: "Malaysia",
      Memberstatus: "new Member",
      transaction: "RM0.00",
    },
  ];

  return (
    <div className="w-full max-w-2/5 shadow-xl p-5 mr-5">
      <span className=" text-2xl font-semibold">New Join Members</span>
      <ul className="">
        {userData.map((user) => (
          <WiddgetSmUserList
            key={user?.id}
            id={user?.id}
            user={user}
            fullname={user?.fullname}
            avatar={user?.avatar}
            Memberstatus={user?.Memberstatus}
          />
        ))}
      </ul>
    </div>
  );
}

export default WidgetSm;
