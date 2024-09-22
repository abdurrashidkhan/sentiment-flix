"use client";
import { auth } from "@/app/firebase.init";
import { usePathname } from "next/navigation";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import Swal from "sweetalert2";

// import logo

import Link from "next/link";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
export default function DbNavbar() {
  const pathname = usePathname();
  const [user, loading, error] = useAuthState(auth);
  // console.log(user);
  const [signOut, outLoading, OutError] = useSignOut(auth);
  const [openMenu, setOpenMenu] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  // routing
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

  const userLogOut = async () => {
    await signOut();
    Swal.fire({
      title: "Logout success",
      icon: "success",
    });
  };
  console.log(openMenu);
  return (
    <div className="">
      {openMenu && (
        <div className="">
          <div className="">
            <aside className="fixed sm:hidden w-[70%] bg-[#fff] h-[100vh]  py-5 ease-in-out duration-700 top-[0%] left-[0%] z-[999]">
              <div className="absolute  text-red-700" id="dashboard_close_icon">
                <IoClose
                  className="sm:hidden text-3xl"
                  onClick={() => setOpenMenu(false)}
                />
              </div>
              <ul className="" id="dashboard_mobile_items">
                {dashboardRouting.map(({ path, name }) => (
                  <li
                    key={path}
                    className="px-3 py-1  hover:bg-[#fff] mx-1 rounded"
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
        </div>
      )}
      {/* small  */}
      <div className="">
        <div className="navbar bg-[#ffffffea]  fixed z-[3] text-[#000] drop-shadow-2xl sm:hidden">
          <div className="navbar-start" onClick={() => setOpenMenu(true)}>
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="navbar-center">
            <a className="btn btn-ghost text-xl">Booklistenin</a>
          </div>
          <div className="navbar-end">
            {/* <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </button> */}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded z-[1] mt-3 w-52 p-2 shadow bg-[#2e2d26e1] text-slate-800"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <button onClick={() => userLogOut()}>Logout</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* for large */}
      <div className="hidden sm:block">
        <div className="navbar bg-[#ffffffea]  fixed z-[3] text-[#000] drop-shadow-2xl">
          <div className="container mx-auto">
            <div className="flex-1">
              <a className="btn btn-ghost text-xl ">Booklistening</a>
            </div>
            <div className="flex-none">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded z-[1] mt-3 w-52 p-2 shadow bg-[#2e2d26e1] text-slate-800"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <button onClick={() => userLogOut()}>Logout</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
