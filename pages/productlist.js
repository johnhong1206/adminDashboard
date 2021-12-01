import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Link from "next/link";
import { MdDeleteOutline } from "react-icons/md";
import dynamic from "next/dynamic";
const TopBar = dynamic(() => import("../components/TopBar"));
const Sidebar = dynamic(() => import("../components/Sidebar"));

function productlist() {
  const productRows = [
    {
      id: 1,
      name: "Apple Airpods",
      img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      stock: 123,
      status: "active",
      price: "$120.00",
    },
    {
      id: 2,
      name: "Apple Airpods",
      img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      stock: 123,
      status: "active",
      price: "$120.00",
    },
    {
      id: 3,
      name: "Apple Airpods",
      img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      stock: 123,
      status: "active",
      price: "$120.00",
    },
    {
      id: 4,
      name: "Apple Airpods",
      img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      stock: 123,
      status: "active",
      price: "$120.00",
    },
    {
      id: 5,
      name: "Apple Airpods",
      img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      stock: 123,
      status: "active",
      price: "$120.00",
    },
    {
      id: 6,
      name: "Apple Airpods",
      img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      stock: 123,
      status: "active",
      price: "$120.00",
    },
    {
      id: 7,
      name: "Apple Airpods",
      img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      stock: 123,
      status: "active",
      price: "$120.00",
    },
    {
      id: 8,
      name: "Apple Airpods",
      img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      stock: 123,
      status: "active",
      price: "$120.00",
    },
    {
      id: 9,
      name: "Apple Airpods",
      img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      stock: 123,
      status: "active",
      price: "$120.00",
    },
    {
      id: 10,
      name: "Apple Airpods",
      img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      stock: 123,
      status: "active",
      price: "$120.00",
    },
  ];
  const [data, setData] = useState(productRows);
  const handleDelete = (id) => {
    if (id !== null) {
      setData(data.filter((item) => item.id !== id));
    } else {
      setData([]);
    }
  };
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="flex flex-row items-center">
            <img
              className="w-8 h-8 rounded-xl object-cover mr-3"
              src={params.row.img}
              alt=""
            />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link href={"/product/" + params.row.id}>
              <button className=" py-1 px-3 bg-[#3bb077] text-white cursor-pointer mr-5">
                Edit
              </button>
            </Link>
            <MdDeleteOutline
              className="w-6 h-6 text-red-400 cursor-pointer"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <div>
      <TopBar />
      <main className="flex flex-col xl:flex-row">
        <Sidebar />
        {data.length > 0 ? (
          <div className="w-full h-[70vh] xl:h-[90vh] max-w-screen-6xl overflow-x-scroll scrollbar-hide">
            <DataGrid
              rows={data}
              columns={columns}
              pageSize={8}
              checkboxSelection
            />
          </div>
        ) : (
          <div className=" flex items-center justify-center w-full">
            <Link href={"/newproduct/"}>
              <button className=" rounded-xl shadow-xl py-3  px-5 bg-[#3bb077] text-white cursor-pointer mr-5">
                Create the product
              </button>
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}

export default productlist;
