"use client";
import { auth } from "@/app/firebase.init";
import Loading from "@/app/loading";
import CheckAdmin from "@/components/Admin/CheckAdmin";
import CheckingUser from "@/components/Admin/checkingUser";
import uesDeleteComingSoon from "@/database/delete/uesDeleteComingSoon";
import uesAllComingSoon from "@/database/find/allComingSoon/useAllComingSoon";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

export default function ManageComingSoon() {
  const [user, loading, error] = useAuthState(auth);
  const [signOut, outLoading, OutError] = useSignOut(auth);
  const [BannerInfo, setBannerInfo] = useState([]);
  const [IsLoading, setLoading] = useState(false);
  CheckingUser(); // call checking user fund or not
  // data faceting
  const BannerLoad = async () => {
    setLoading(true);
    const { comingSoon } = await uesAllComingSoon();
    setBannerInfo(comingSoon);
    setLoading(false);
  };
  const deleteMovie = async (id) => {
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
        const res = uesDeleteComingSoon(id);
        Swal.fire({
          title: "Deleted!",
          text: "deleted success",
          icon: "success",
        });
      }
    });
    // console.log(id)
    // const { uesAllBanner } = await uesDeleteProject(id);

    // console.log(uesAllBanner)
  };
  // data faceting
  useEffect(() => {
    CheckAdmin(user, signOut);
    BannerLoad();
  }, [user, signOut]);
  // data faceting

  if (loading || outLoading || IsLoading) {
    return <Loading></Loading>;
  }
  if (error || OutError) {
    console.log(error?.message);
  }
  return (
    <div>
      <div className="overflow-x-auto">
        {BannerInfo?.length > 0 ? (
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th className="text-[#fff] ">No.</th>
                <th className="text-[#fff] ">Title</th>
                <th className="text-[#fff] ">Date</th>
                <th className="text-[#fff] ">Series Name</th>

                <th colSpan={2} className="text-center text-[#fff] ">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {BannerInfo.map((m, index) => (
                <tr key={m?._id}>
                  <th>{index + 1}</th>
                  <td className="capitalize">{m?.title}</td>
                  <td className="capitalize">{m?.date.slice(0, 10)}</td>
                  <td className="capitalize">{m?.seriesName}</td>
                  <td className="capitalize">
                    <Link
                      exact="true"
                      href={`/dashboard/manage-coming-soon/update/${m.catagories}/${m?._id}`}
                    >
                      <FaRegEdit className="text-xl text-[#158111]" />
                    </Link>
                  </td>
                  <td className="capitalize">
                    <button onClick={() => deleteMovie(m?._id)}>
                      <MdDelete className="text-xl mt-1 text-red-800" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div>
            <div className="content_center">
              <h2>No Data found..</h2>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
