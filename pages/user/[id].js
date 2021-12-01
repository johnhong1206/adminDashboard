import React from "react";
import dynamic from "next/dynamic";
const TopBar = dynamic(() => import("../../components/TopBar"));
const Sidebar = dynamic(() => import("../../components/Sidebar"));
const UpdateUser = dynamic(() => import("../../components/UpdateUser"));

function User() {
  return (
    <div>
      <TopBar />
      <main className="flex flex-col xl:flex-row">
        <Sidebar />
        <UpdateUser />
      </main>
    </div>
  );
}

export default User;
