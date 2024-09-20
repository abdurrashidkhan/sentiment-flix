// welcome to dashboard
"use client";
import { auth } from "@/app/firebase.init";
import Loading from "@/app/loading";
import CheckingUser from "@/components/Admin/checkingUser";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";

export default function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const [signOut, outLoading, OutError] = useSignOut(auth);
  const checkingUsers = CheckingUser();
  let isAdmin;
  if (loading || outLoading) {
    return <Loading></Loading>;
  } else {
    // isAdmin = CheckAdmin()
  }
  if (error || OutError) {
    console.log(error?.message);
  }
  return (
    <div className="">
      <h1>Hello Dashboard</h1>
    </div>
  );
}
