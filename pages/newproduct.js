import React from "react";

import dynamic from "next/dynamic";
const TopBar = dynamic(() => import("../components/TopBar"));
const Sidebar = dynamic(() => import("../components/Sidebar"));
const NewProductCreat = dynamic(() => import("../components/NewProductCreat"));

function newproduct() {
  return (
    <div>
      <TopBar />
      <main className="flex flex-col xl:flex-row">
        <Sidebar />
        <NewProductCreat />
      </main>
    </div>
  );
}

export default newproduct;
