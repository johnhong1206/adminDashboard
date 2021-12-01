import { useState } from "react";
import { useRouter } from "next/router";

import { DataGrid } from "@mui/x-data-grid";
import dynamic from "next/dynamic";
const TopBar = dynamic(() => import("../components/TopBar"));
const Sidebar = dynamic(() => import("../components/Sidebar"));

import { MdDeleteOutline } from "react-icons/md";
import { useRecoilState } from "recoil";
import { userState } from "../atoms/userAtom";

function UserList() {
  const router = useRouter();

  const userRows = [
    {
      id: 1,
      username: "patricia92",
      fullname: "Patricia Lim",
      avatar: "./image/patricia.jpg",
      email: "patricia@gmail.com",
      dob: "05-12-1992",
      contactNumber: "016-1237887",
      status: "active",
      location: "Selangor",
      country: "Malaysia",
      Memberstatus: "Premium Member",
      transaction: "RM120.00",
    },
    {
      id: 2,
      username: "patricia92",
      fullname: "Patricia Lim",
      avatar: "./image/patricia.jpg",
      email: "patricia@gmail.com",
      dob: "05-12-1992",
      contactNumber: "016-1237887",
      status: "active",
      location: "Selangor",
      country: "Malaysia",
      Memberstatus: "Premium Member",
      transaction: "RM120.00",
    },
    {
      id: 3,
      username: "patricia92",
      fullname: "Patricia Lim",
      avatar: "./image/patricia.jpg",
      email: "patricia@gmail.com",
      dob: "05-12-1992",
      contactNumber: "016-1237887",
      status: "active",
      location: "Selangor",
      country: "Malaysia",
      Memberstatus: "Premium Member",
      transaction: "RM120.00",
    },
    {
      id: 4,
      username: "patricia92",
      fullname: "Patricia Lim",
      avatar: "./image/patricia.jpg",
      email: "patricia@gmail.com",
      dob: "05-12-1992",
      contactNumber: "016-1237887",
      status: "active",
      location: "Selangor",
      country: "Malaysia",
      Memberstatus: "Premium Member",
      transaction: "RM120.00",
    },
    {
      id: 5,
      username: "patricia92",
      fullname: "Patricia Lim",
      avatar: "./image/patricia.jpg",
      email: "patricia@gmail.com",
      dob: "05-12-1992",
      contactNumber: "016-1237887",
      status: "active",
      location: "Selangor",
      country: "Malaysia",
      Memberstatus: "Premium Member",
      transaction: "RM120.00",
    },
    {
      id: 6,
      username: "patricia92",
      fullname: "Patricia Lim",
      avatar: "./image/patricia.jpg",
      email: "patricia@gmail.com",
      dob: "05-12-1992",
      contactNumber: "016-1237887",
      status: "active",
      location: "Selangor",
      country: "Malaysia",
      Memberstatus: "Premium Member",
      transaction: "RM120.00",
    },
    {
      id: 7,
      username: "patricia92",
      fullname: "Patricia Lim",
      avatar: "./image/patricia.jpg",
      email: "patricia@gmail.com",
      dob: "05-12-1992",
      contactNumber: "016-1237887",
      status: "active",
      location: "Selangor",
      country: "Malaysia",
      Memberstatus: "Premium Member",
      transaction: "RM120.00",
    },
    {
      id: 8,
      username: "patricia92",
      fullname: "Patricia Lim",
      avatar: "./image/patricia.jpg",
      email: "patricia@gmail.com",
      dob: "05-12-1992",
      contactNumber: "016-1237887",
      status: "active",
      location: "Selangor",
      country: "Malaysia",
      Memberstatus: "Premium Member",
      transaction: "RM120.00",
    },
    {
      id: 9,
      username: "patricia92",
      fullname: "Patricia Lim",
      avatar: "./image/patricia.jpg",
      email: "patricia@gmail.com",
      dob: "05-12-1992",
      contactNumber: "016-1237887",
      status: "active",
      location: "Selangor",
      country: "Malaysia",
      Memberstatus: "Premium Member",
      transaction: "RM120.00",
    },
    {
      id: 10,
      username: "patricia92",
      fullname: "Patricia Lim",
      avatar: "./image/patricia.jpg",
      email: "patricia@gmail.com",
      dob: "05-12-1992",
      contactNumber: "016-1237887",
      status: "active",
      location: "Selangor",
      country: "Malaysia",
      Memberstatus: "Premium Member",
      transaction: "RM120.00",
    },
  ];

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="flex flex-row items-center">
            <img
              className="w-8 h-8 rounded-full object-cover mr-3"
              src={params.row.avatar}
              alt=""
            />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <button
              onClick={() => navUserEdit(params.row)}
              className=" py-1 px-3 bg-[#3bb077] text-white cursor-pointer mr-5"
            >
              Edit
            </button>

            <MdDeleteOutline
              className="w-6 h-6 text-red-400 cursor-pointer"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  const [data, setData] = useState(userRows);
  const [getUser, setGetUser] = useRecoilState(userState);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const navUserEdit = (row) => {
    setGetUser(row);
    console.log(row);
    router.push(`/user/${row?.id}`);
  };

  return (
    <div className="w-full">
      <TopBar />
      <main className="flex flex-col xl:flex-row">
        <Sidebar />
        <div className="w-full h-[70vh] xl:h-[90vh] max-w-screen-6xl overflow-x-scroll scrollbar-hide">
          <DataGrid
            rows={data}
            columns={columns}
            pageSize={8}
            checkboxSelection
          />
        </div>
      </main>
    </div>
  );
}

export default UserList;
