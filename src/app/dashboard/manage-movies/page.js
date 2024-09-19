"use client";
import { auth } from "@/app/firebase.init";
import Loading from "@/app/loading";
import CheckAdmin from "@/components/Admin/CheckAdmin";
import CheckingUser from "@/components/Admin/checkingUser";
import uesDeleteMovie from "@/database/delete/uesDeleteMovie";
import uesAllMovies from "@/database/find/allMovies/useAllMovies";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

export default function ManageProject() {
  const [user, loading, error] = useAuthState(auth);
  const [signOut, outLoading, OutError] = useSignOut(auth);
  const [moviesInfo, setMoviesInfo] = useState([]);
  const [IsLoading, setLoading] = useState(false);
  CheckingUser(); // call checking user fund or not
  // data faceting
  const moviesLoad = async () => {
    setLoading(true);
    const { allMovies } = await uesAllMovies();
    setMoviesInfo(allMovies);
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
        const res = uesDeleteMovie(id);
        Swal.fire({
          title: "Deleted!",
          text: "movie deleted success",
          icon: "success",
        });
      }
    });
    // console.log(id)
    // const { uesAllMovies } = await uesDeleteProject(id);

    // console.log(uesAllMovies)
  };
  // data faceting
  useEffect(() => {
    CheckAdmin(user, signOut);
    moviesLoad();
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
        {moviesInfo?.length > 0 ? (
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th className="text-[#fff] ">No.</th>
                <th className="text-[#fff] ">Title</th>
                <th className="text-[#fff] ">Date</th>
                <th className="text-[#fff] ">Free Or Paid</th>

                <th colSpan={2} className="text-center text-[#fff] ">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {moviesInfo.map((m, index) => (
                <tr key={m?._id}>
                  <th>{index + 1}</th>
                  <td className="capitalize">{m?.title}</td>
                  <td className="capitalize">{m?.date.slice(0, 10)}</td>
                  <td className="capitalize">{m?.freeOrPaid}</td>
                  <td className="capitalize">
                    <Link
                      exact="true"
                      href={`/dashboard/manage-movies/update/${m.catagories}/${m?._id}`}
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
