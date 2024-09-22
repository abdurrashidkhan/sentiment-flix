"use client";
import { auth } from "@/app/firebase.init";
import Loading from "@/app/loading";
import CheckAdmin from "@/components/Admin/CheckAdmin";
import CheckingUser from "@/components/Admin/checkingUser";
import uaeAllUserFind from "@/database/find/allUsers/uaeAllUserFind";
import { useEffect, useState } from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
export default function Teammate() {
  const [user, loading, error] = useAuthState(auth);
  const [signOut, outLoading, OutError] = useSignOut(auth);
  const [usersInfo, setUsersInfo] = useState([]);
  CheckingUser(); // call checking user fund or not
  // data faceting
  const userInfo = async () => {
    const { allUser } = await uaeAllUserFind();
    setUsersInfo(allUser);
  };
  // data faceting
  useEffect(() => {
    CheckAdmin(user, signOut);
    userInfo();
  }, [user, signOut]);
  // console.log(usersInfo);
  // data faceting

  if (loading || outLoading) {
    return <Loading></Loading>;
  }
  if (error || OutError) {
    console.log(error?.message);
  }
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className="text-[#000] dark:text-[#fff] ">Name</th>
              <th className="text-[#000] dark:text-[#fff] ">Email</th>
              <th className="text-[#000] dark:text-[#fff] ">Role</th>
              <th className="text-[#000] dark:text-[#fff] ">Action</th>
            </tr>
          </thead>
          <tbody>
            {usersInfo.map((user, index) => (
              <tr key={user?._id}>
                <th>{index + 1}</th>
                <td className="">{user?.displayName}</td>
                <td className="">{user?.email}</td>
                <select className="select select-none select-sm  bg-transparent focus:outline-none text-[#000] dark:text-[#fff]">
                  <option
                    value={user?.role}
                    className="bg-transparent dark:bg-[#122033]"
                  >
                    {user?.role}
                  </option>
                  <option
                    value={"seo-expert"}
                    className="bg-transparent dark:bg-[#122033]"
                  >
                    Seo expert
                  </option>
                  <option
                    value={"social-eng"}
                    className="bg-transparent dark:bg-[#122033]"
                  >
                    Social Eng
                  </option>
                </select>
                <td className="">Delete</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
