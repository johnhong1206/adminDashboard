import Head from "next/head";
import dynamic from "next/dynamic";

const Center = dynamic(() => import("../components/Center"));
const Sidebar = dynamic(() => import("../components/Sidebar"));
const TopBar = dynamic(() => import("../components/TopBar"));

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Admin Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopBar />
      <main className="flex flex-col xl:flex-row">
        <Sidebar />
        <Center />
      </main>
      <div className="pb-10" />
    </div>
  );
}
