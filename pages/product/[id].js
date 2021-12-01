import React from "react";
import dynamic from "next/dynamic";
const Sidebar = dynamic(() => import("../../components/Sidebar"));
const TopBar = dynamic(() => import("../../components/TopBar"));
const ProductDetails = dynamic(() => import("../../components/ProductDetails"));

function Product() {
  return (
    <div>
      <TopBar />
      <main className="flex flex-col xl:flex-row">
        <Sidebar />
        <ProductDetails />
      </main>
    </div>
  );
}

export default Product;
