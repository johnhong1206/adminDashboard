import { useRouter } from "next/router";
import React from "react";
import { MdVisibility } from "react-icons/md";
import { useRecoilState, useRecoilValue } from "recoil";
import { userState } from "../atoms/userAtom";

function WiddgetSmUserList({ key, id, user, fullname, avatar, Memberstatus }) {
  const router = useRouter();

  const [getUser, setGetUser] = useRecoilState(userState);

  const navUserEdit = (user) => {
    setGetUser(user);
    router.push(`/user/${id}`);
  };

  return (
    <li key={key} className="flex items-center justify-between my-5">
      <img
        src={avatar}
        alt=""
        className=" w-10 h-10 rounded-full object-cover"
      />
      <div className="flex flex-col">
        <span className="font-medium">{fullname}</span>
        <span className="font-light">{Memberstatus}</span>
      </div>
      <button
        onClick={() => navUserEdit(user)}
        className="flex items-center py-2 px-3 cursor-pointer bg-[#eeeef7] hover:bg-gray-600 hover:text-white rounded-lg "
      >
        <MdVisibility className="w-6 h-6 mr-2" />
        Display
      </button>
    </li>
  );
}

export default WiddgetSmUserList;
