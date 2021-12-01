import React from "react";
import dynamic from "next/dynamic";
const TopBar = dynamic(() => import("../components/TopBar"));
const Sidebar = dynamic(() => import("../components/Sidebar"));
const NewUserCreate = dynamic(() => import("../components/NewUserCreate"));

function newuser() {
  return (
    <div>
      <TopBar />
      <main className="flex flex-col xl:flex-row">
        <Sidebar />
        <NewUserCreate />
      </main>
    </div>
  );
}

export default newuser;
