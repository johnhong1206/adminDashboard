import Link from "next/link";
import { MdPermIdentity, MdPublish } from "react-icons/md";
import { BsFillCalendarDateFill, BsPhoneFill } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { useRecoilState, useRecoilValue } from "recoil";
import { userState } from "../atoms/userAtom";

function UpdateUser() {
  const [user, setUser] = useRecoilState(userState);

  return (
    <div className="flex-1 flex-grow p-5">
      <div className=" flex items-center justify-between space-x-9">
        <h1 className="text-3xl font-semibold">Edit User</h1>
        <Link href="/newuser">
          <button className=" w-20 p-2 bg-green-500 text-white cursor-pointer text-[16px]">
            Create
          </button>
        </Link>
      </div>
      <div className="flex flex-col xl:flex-row mt-20 space-x-0 xl:space-x-10">
        <div className=" flex-1 w-full max-w-2/5 p-5 shadow-2xl">
          <div className="flex items-center">
            <img
              src={`.${user?.avatar}`}
              alt={user?.username}
              className=" w-10 h-10 rounded-full object-cover cursor-pointer"
            />
            <div className="flex flex-col ml-5">
              <span className="font-semibold">{user?.fullname}</span>
              <span className="font-normal">{user?.Memberstatus}</span>
            </div>
          </div>
          <div className="mt-5">
            <span className=" text-sm font-semibold">Account Details</span>
            <div className="flex items-center my-5">
              <MdPermIdentity className="w-6 h-6" />
              <span className=" ml-3">{user?.username}</span>
            </div>
            <div className="flex items-center my-5">
              <BsFillCalendarDateFill className="w-6 h-6" />
              <span className=" ml-3">{user?.dob}</span>
            </div>
            <span className=" text-sm font-semibold">Contact Details</span>
            <div className="flex items-center my-5">
              <BsPhoneFill className="w-6 h-6" />
              <span className=" ml-3">{user?.contactNumber}</span>
            </div>
            <div className="flex items-center my-5">
              <FiMail className="w-6 h-6" />
              <span className=" ml-3">{user?.email}</span>
            </div>
            <div className="flex items-center my-5">
              <IoLocationOutline className="w-6 h-6" />
              <span className=" ml-3">
                {user?.location} | {user?.country}
              </span>
            </div>
          </div>
        </div>
        <div className="flex w-full max-w-2/5 p-5 shadow-2xl">
          <span className=" text-2xl font-semibold">Edit</span>
          <form className="flex flex-col  xl:flex-row  items-center justify-between w-full mt-5">
            <div className="">
              <div className="flex flex-col mt-3">
                <label className="mb-2 text-sm">Username</label>
                <input
                  type="text"
                  placeholder={user?.username || "username"}
                  className=" outline-none border-0 w-[250px] h-[30px] border-b-[1px] border-b-gray-200"
                />
              </div>
              <div className="flex flex-col mt-3">
                <label className="mb-2 text-sm">Full Name</label>
                <input
                  type="text"
                  placeholder={user?.fullname || "fullname"}
                  className=" outline-none border-0 w-[250px] h-[30px] border-b-[1px] border-b-gray-200"
                />
              </div>
              <div className="flex flex-col mt-3">
                <label className="mb-2 text-sm">Email</label>
                <input
                  type="text"
                  placeholder={user?.email || "email"}
                  className=" outline-none border-0 w-[250px] h-[30px] border-b-[1px] border-b-gray-200"
                />
              </div>
              <div className="flex flex-col mt-3">
                <label className="mb-2 text-sm">Phone</label>
                <input
                  type="text"
                  placeholder={user?.contactNumber || "contactNumber"}
                  className=" outline-none border-0 w-[250px] h-[30px] border-b-[1px] border-b-gray-200"
                />
              </div>
              <div className="flex flex-col mt-3">
                <label className="mb-2 text-sm">Address</label>
                <input
                  type="text"
                  placeholder={`${user?.location} | ${user?.country}`}
                  className=" outline-none border-0 w-[250px] h-[30px] border-b-[1px] border-b-gray-200"
                />
              </div>
            </div>
            <div className="h-full  flex flex-col items-center justify-between">
              <div className="flex flex-1 items-center">
                <img
                  className=" w-[100px] h-[100px] mr-5 object-cover rounded-xl"
                  src={`.${user?.avatar}`}
                  alt={user?.username}
                />
                <label className="mb-2 text-sm" htmlFor="file">
                  <MdPublish className="w-6 h-6" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="p-1 cursor-pointer bg-blue-800 text-white font-semibold w-full rounded-xl mt-4 xl:mt-0">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateUser;
