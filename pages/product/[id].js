import React from "react";
import Head from "next/head";

import dynamic from "next/dynamic";
const Sidebar = dynamic(() => import("../../components/Sidebar"));
const TopBar = dynamic(() => import("../../components/TopBar"));
const ProductDetails = dynamic(() => import("../../components/ProductDetails"));

function Product() {
  return (
    <div>
      <Head>
        <title>Admin Dashboard | Product Details</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopBar />
      <main className="flex flex-col xl:flex-row">
        <Sidebar />
        <ProductDetails />
      </main>
    </div>
  );
}

export default Product;
