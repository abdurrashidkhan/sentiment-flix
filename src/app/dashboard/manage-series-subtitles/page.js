"use client";
import { auth } from "@/app/firebase.init";
import Loading from "@/app/loading";
import CheckAdmin from "@/components/Admin/CheckAdmin";
import CheckingUser from "@/components/Admin/checkingUser";
import uesDeleteSeriesSubtitles from "@/database/delete/uesDeleteSeriesSubtitles";
import uesAllSeriesSubtitles from "@/database/find/allSeriesSubtitles/allSeriesSubtitles";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

export default function ManageServices() {
  const [user, loading, error] = useAuthState(auth);
  const [signOut, outLoading, OutError] = useSignOut(auth);
  const [AllSeriesSubtitles, setSeriesSubtitles] = useState([]);
  const [IsLoading, setLoading] = useState(false);
  CheckingUser(); // call checking user fund or not
  // data faceting
  const seriesSubtitles = async () => {
    setLoading(true);
    const { allSeriesSubtitles } = await uesAllSeriesSubtitles();
    setSeriesSubtitles(allSeriesSubtitles);
    setLoading(false);
  };
  const deleteSeriesSubtitles = async (id) => {
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
        const res = uesDeleteSeriesSubtitles(id);
        // console.log(result)
        Swal.fire({
          title: "Deleted!",
          text: "series subtitles deleted.",
          icon: "success",
        });
      }
    });
  };
  // data faceting
  useEffect(() => {
    CheckAdmin(user, signOut);
    seriesSubtitles();
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
      {AllSeriesSubtitles?.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th className="text-[#fff] ">No.</th>
                <th className="text-[#fff] ">Title</th>
                <th className="text-[#fff] ">Date</th>
                <th className="text-[#fff] ">Free Or Paid</th>
                {/* <th className="text-[#000] dark:text-[#fff] ">Categories</th> */}
                <th colSpan={2} className="text-center text-[#fff] ">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {AllSeriesSubtitles.map((s, index) => (
                <tr key={s?._id}>
                  <th>{index + 1}</th>
                  <td className="capitalize">{s?.title}</td>
                  <td className="capitalize">{s?.date.slice(0, 10)}</td>
                  <td className="capitalize">{s?.freeOrPaid}</td>
                  {/* <td className="capitalize">{s?.categories}</td> */}
                  <td className="capitalize">
                    <Link
                      exact="true"
                      href={`/dashboard/series-subtitles/update/${s.catagories}/${s?._id}`}
                    >
                      <FaRegEdit className="text-xl text-[#158111]" />
                    </Link>
                  </td>
                  <td className="capitalize">
                    <button onClick={() => deleteSeriesSubtitles(s?._id)}>
                      <MdDelete className="text-xl mt-1 text-red-700" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="">
          <div className="content_center">
            <h2>No Data Found...</h2>
          </div>
        </div>
      )}
    </div>
  );
}
