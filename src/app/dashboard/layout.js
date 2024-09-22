"use client";
import { auth } from "@/app/firebase.init";
import Loading from "@/app/loading";
import CheckAdmin from "@/components/Admin/CheckAdmin";
import CheckingUser from "@/components/Admin/checkingUser";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { HiMiniArrowRightOnRectangle } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import "./style.css";
const Layout = ({ children }) => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { admin, setAdmin } = useState(false);
  const checkingUsers = CheckingUser(); // call checking user fund or not
  const [user, loading, error] = useAuthState(auth);
  const [signOut, outLoading, OutError] = useSignOut(auth);
  const dashboardRouting = [
    { path: "/dashboard", name: "Overview" },
    { path: "/dashboard/add-banner", name: "Add Banner" },
    // { path: "/dashboard/add-series", name: "Add Series" },
    { path: "/dashboard/add-movies", name: "Add Movies" },
    { path: "/dashboard/add-coming-soon", name: "Add Coming Soon" },
    { path: "/dashboard/series-subtitles", name: "Add Series Subtitles" },
    // { path: "/dashboard/teammate", name: "Teammate " },
    {
      path: "/dashboard/manage-series-subtitles",
      name: "Manage Series & Subtitles",
    },
    { path: "/dashboard/manage-coming-soon", name: "Manage Coming Soon" },
    { path: "/dashboard/manage-banner", name: "Manage Banner" },
    { path: "/dashboard/manage-movies", name: "Manage Movies" },
    { path: "/dashboard/manage-users", name: "Manage Users" },
  ];

  useEffect(() => {
    CheckAdmin(user, signOut);
  }, [user, signOut]);

  if (loading || outLoading) {
    return <Loading></Loading>;
  }
  if (error || OutError) {
    console.log(error?.message);
  }
  console.log(open);
  return (
    <>
      {/* <Navbar /> */}
      <div className="container mx-auto px-2  pt-[95px] sm:pt-[50px] ">
        {/* this content just small dives  */}
        {!open && (
          <button
            className=" text-5xl ease-in-out duration- z-[99] text-[#fff] hover:tooltip tooltip-open tooltip-right sm:hidden fixed"
            id="dashboard_menu_icon"
            onClick={() => setOpen(true)}
          >
            <HiMiniArrowRightOnRectangle
              className="sm:hidden w-full h-[60px] py-5 p-2  rounded-r shadow-2xl drop-shadow-2xl bg-[#ccc9c9] dark:bg-[#122033] dark:text-[#fff] text-[#000]"

              // id="dashboard_menu_open_icon"
            />
          </button>
        )}
        {/* end  */}
        <div className="flex gap-0 relative">
          {open && (
            <div className="">
              <aside className="absolute sm:hidden w-[70%] bg-[#1b1b1b] h-[100vh]  py-5 ease-in-out duration-700 top-[-2%] left-[0%] z-[999]">
                <div
                  className="absolute  text-red-700"
                  id="dashboard_close_icon"
                >
                  <IoClose
                    className="sm:hidden text-3xl"
                    onClick={() => setOpen(false)}
                  />
                </div>
                <ul className="" id="dashboard_mobile_items">
                  {dashboardRouting.map(({ path, name }) => (
                    <li
                      key={path}
                      className="px-3 py-1  hover:bg-[#3333332f] mx-1 rounded"
                    >
                      <Link
                        exact={path === "/dashboard"}
                        className={`${
                          pathname === path ? "text-[#e93c25]" : ""
                        } w-full`}
                        href={path}
                      >
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </aside>
            </div>
          )}
          {/* this menu list for large dives */}
          <aside className="hidden sm:block sm:w-[30%] bg-[#1b1b1b] h-[100vh]  py-5 ease-in-out duration-700 rounded shadow-2xl drop-shadow-2xl pt-[5%]">
            <ul className="mt-5">
              {dashboardRouting.map(({ path, name }) => (
                <li
                  key={path}
                  className="px-3 py-1 hover:bg-[#3333332f] mx-1 rounded"
                >
                  <Link
                    exact={path === "/dashboard"}
                    className={`${
                      pathname === path ? "text-[#e93c25]" : ""
                    } w-full`}
                    href={path}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
          {/* main content show */}
          <div
            className="w-[100%] bg-[#05080e] text-[#fff] p-5 h-[100vh] mt-[2%] sm:mt-[2%] rounded shadow-2xl  text-center sm:text-start pt-10 mb-5 overflow-auto md:relative"
            id="dashboard_content"
          >
            {children}
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
