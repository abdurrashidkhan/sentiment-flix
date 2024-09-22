"use client";
import { auth } from "@/app/firebase.init";
import Loading from "@/app/loading";
import CheckAdmin from "@/components/Admin/CheckAdmin";
import CheckingUser from "@/components/Admin/checkingUser";
import uesDeleteUser from "@/database/delete/uesDeleteUser";
import uaeAllUserFind from "@/database/find/allUsers/uaeAllUserFind";
import { useEffect, useState } from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
export default function ManageUsers() {
  const [user, loading, error] = useAuthState(auth);
  const [signOut, outLoading, OutError] = useSignOut(auth);
  const [usersInfo, setUsersInfo] = useState([]);
  const [isLoading, setLoading] = useState(false);
  CheckingUser(); // call checking user fund or not
  // data faceting
  const userInfo = async () => {
    setLoading(true);
    const { allUser } = await uaeAllUserFind();
    setUsersInfo(allUser);
    setLoading(false);
  };
  // data faceting
  useEffect(() => {
    CheckAdmin(user, signOut);
    userInfo();
  }, [user, signOut]);

  const deleteUser = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const res = uesDeleteUser(id);
        Swal.fire({
          title: "Deleted!",
          text: "User deleted.",
          icon: "success",
        });
      }
    });
  };

  if (loading || outLoading || isLoading) {
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
              <th className="text-[#000] dark:text-[#fff] ">ID</th>
              <th className="text-[#000] dark:text-[#fff] ">Name</th>
              <th className="text-[#000] dark:text-[#fff] ">Email</th>
              <th className="text-[#000] dark:text-[#fff] ">Role</th>
              <th className="text-[#000] dark:text-[#fff] text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {usersInfo.map((users, index) => (
              <tr key={users?._id}>
                <th>{index + 1}</th>
                <td className="">{users?.displayName}</td>
                {users?.email === "aitihashikonubad.official@gmail.com" ? (
                  <td className="">
                    {users?.email.slice(0, 5)}*******@gmail.com
                  </td>
                ) : (
                  <td className="">{users?.email}</td>
                )}
                <td className="">{users?.role}</td>
                {/* <select className="select select-none select-sm  bg-transparent focus:outline-none text-[#000] dark:text-[#fff]">
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
                </select> */}
                <td className="text-center">
                  {users?.email === "rashidkhan.destop@gmail.com" ? (
                    <button disabled>
                      <MdDelete className="text-red-400  text-xl" />
                    </button>
                  ) : (
                    <button onClick={() => deleteUser(users?._id)}>
                      <MdDelete className="text-red-700 hover:text-red-800 duration-500 ease-in-out text-xl" />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
