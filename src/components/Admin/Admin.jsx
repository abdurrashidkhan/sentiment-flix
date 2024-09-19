"use client";
import { auth } from "@/app/firebase.init";
import Loading from "@/app/loading";
import { useEffect, useState } from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import CheckAdmin from "./CheckAdmin";

export default function Admin() {
  const [user, cLoading, cError] = useAuthState(auth);
  const [isLoading, setLoading] = useState(true);
  const [signOut, loading, error] = useSignOut(auth);
  useEffect(() => {
    // isLoading();
    CheckAdmin(user?.email, signOut);
    setLoading(false);
  }, [user, isLoading, signOut]);

  if (cLoading || loading || isLoading) {
    return <Loading></Loading>;
  }
  if (error || cError) {
    console.log(error.message);
  }
  // return <div>Admin</div>;
}
