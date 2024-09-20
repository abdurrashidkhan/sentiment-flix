"use client";
import Error from "@/app/error";
import { auth } from "@/app/firebase.init";
import Loading from "@/app/loading";
import LoginWithAll from "@/components/authentication/LoginWithAll/LoginWithAll";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

export default function SinUp() {
  const router = useRouter();
  const [cUser, cLoading, cError] = useAuthState(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile] = useUpdateProfile(auth);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (e) => {
    await createUserWithEmailAndPassword(e.userEmail, e.password);
    await updateProfile({ displayName: e.userName });
    const userInfo = {
      displayName: e?.userName,
      userNumber: e?.userNumber,
      email: e?.userEmail,
      password: e?.password,
      emailVerified: user?.emailVerified || false,
      photoURL: user?.photoURL || null,
      accessToken: user?.accessToken || null,
    };
    // console.log(userInfo)
    if (e.userEmail) {
      try {
        // C:\projects\digital-marketing-agency\src\app\api\merge-marketing\v1\users\insert-user\[email].js
        const res = await fetch(`/api/users/create-account/`, {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(userInfo),
        });
        // }
        if (!res.ok) {
          throw new Error("Failed to insert user info");
        } else {
          reset();
        }

        return res.json();
      } catch (error) {
        console.log(error);
      }
    }
  };
  useEffect(() => {
    if (user || cUser) {
      router.push("/");
      Swal.fire({
        title: "Login success",
        icon: "success",
      });
    }
  }, [user, router, cUser]);

  if (loading || cLoading) {
    return <Loading></Loading>;
  }
  if (error || cError) {
    return console.log(error.message);
  }
  return (
    <section className="text-[#000]">
      <div className="container mx-auto px-2 relative h-[100vh]">
        <div className="login_content_center w-[400px]  h-auto bg-[#fff]  p-3 rounded shadow-2xl">
          <form className="" onSubmit={handleSubmit(onSubmit)}>
            <div className="my-2">
              <label htmlFor="userName" className="block">
                Enter Your Name
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <input
                  type="text"
                  name="userName"
                  id="userName"
                  placeholder="enter your name"
                  className="w-full px-2 border border-[#bbbbbb]  py-2 drop-shadow-2xl rounded bg-transparent dark:border-[#2f415a] outline-none focus:outline-none"
                  {...register("userName", { required: true })}
                />
              </div>
            </div>
            <div className="my-2">
              <label htmlFor="userNumber" className="block">
                Enter Mobile Number
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <input
                  type="number"
                  name="userNumber"
                  id="userNumber"
                  placeholder="enter your number"
                  className="w-full px-2 border border-[#bbbbbb]  py-2 drop-shadow-2xl rounded bg-transparent dark:border-[#2f415a] outline-none focus:outline-none"
                  {...register("userNumber", { required: true })}
                />
              </div>
            </div>
            <div className="my-2">
              <label htmlFor="userEmail" className="block">
                Enter Your Email
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <input
                  type="email"
                  name="userEmail"
                  id="userEmail"
                  placeholder="enter your password"
                  className="w-full px-2 border border-[#bbbbbb]  py-2 drop-shadow-2xl rounded bg-transparent dark:border-[#2f415a] outline-none focus:outline-none"
                  {...register("userEmail", { required: true })}
                />
              </div>
            </div>
            <div className="my-2">
              <label htmlFor="password" className="block">
                Password
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="w-full px-2 border border-[#bbbbbb]  py-2 drop-shadow-2xl rounded bg-transparent dark:border-[#2f415a] outline-none focus:outline-none"
                  {...register("password", { required: true })}
                />
              </div>
            </div>
            {/* <input placeholder="Enter your Password"  {...register("userPassword", { pattern: /^[A-Za-z]+$/i })} /> */}
            <div className="">
              <input
                className="w-full my-4 bg-indigo-700 px-6 p-1 text-[#FFF] rounded shadow-2xl hover:cursor-pointer"
                type="submit"
              />
            </div>
          </form>
          <Link
            className="dark:text-blue-200 text-blue-500 py-2 block"
            href="/authentication/login"
          >
            I have account ?
          </Link>

          {/* login and sign up all */}
          <LoginWithAll />
        </div>
      </div>
    </section>
  );
}
