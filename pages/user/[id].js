import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useRecoilState } from "recoil";
import { userState } from "../../atoms/userAtom";

const TopBar = dynamic(() => import("../../components/TopBar"));
const Sidebar = dynamic(() => import("../../components/Sidebar"));
const UpdateUser = dynamic(() => import("../../components/UpdateUser"));

function User() {
  const [user, setUser] = useRecoilState(userState);

  return (
    <div>
      <Head>
        <title>Admin Dashboard | {user?.fullname} user account</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopBar />
      <main className="flex flex-col xl:flex-row">
        <Sidebar />
        <UpdateUser />
      </main>
    </div>
  );
}

export default User;
