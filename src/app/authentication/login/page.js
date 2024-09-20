"use client";
import { auth } from "@/app/firebase.init";
import Loading from "@/app/loading";
import LoginWithAll from "@/components/authentication/LoginWithAll/LoginWithAll";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
export default function Login() {
  const [cUser, cLoading, xError] = useAuthState(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    await signInWithEmailAndPassword(data.userEmail, data.password);
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
  if (error || xError) {
    console.log(error || xError);
  }
  return (
    <section className="text-[#000]">
      <div className="container mx-auto px-2 relative h-[100vh]">
        <div className="login_content_center w-[400px]  h-auto bg-[#fff]  p-3 rounded shadow-2xl ">
          <div className="text-center pt-6 pb-4">
            <h1 className="text-2xl font-medium">Sign up</h1>
            <h2 className="text-slate-800 pt-2">
              {" "}
              Start watching today. Cancel any time.
            </h2>
          </div>
          <form className="" onSubmit={handleSubmit(onSubmit)}>
            <div className="my-2">
              <label htmlFor="userEmail" className="block">
                Email address
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
            <div className="my-4">
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
                className="w-full my-4 bg-indigo-700 px-6 p-1 text-[#FFF] rounded shadow-2xl"
                type="submit"
              />
            </div>
          </form>
          <Link
            exact="true"
            className="text-blue-500 dark:text-blue-200 py-2 block "
            href="/authentication/create-account"
          >
            Create a new account ?
          </Link>
          {/* login and sign up all */}
          <LoginWithAll />
        </div>
      </div>
    </section>
  );
}
