import { auth } from "@/app/firebase.init";
import Loading from "@/app/loading";
import userInfoInsert from "@/database/userInfoInsert/userInfoInsert";
import Image from "next/image";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import googleLogo from "../../../images/googleLogo.png";
export default async function LoginWithGoogle() {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  // const [cUser, cLoading, cError] = useAuthState(auth);
  // console.log(cUser.accessToken);

  const googleLogin = async () => {
    await signInWithGoogle();
  };
  const userInfo = {
    displayName: user?.user?.displayName,
    userNumber: user?.user?.phoneNumber || null,
    email: user?.user?.email,
    emailVerified: user?.user?.emailVerified,
    photoURL: user?.user?.photoURL,
    accessToken: user?.user?.accessToken,
  };
  if (user) {
    console.log(userInfo);
    await userInfoInsert(userInfo);
  }

  if (loading) {
    return <Loading></Loading>;
  }

  let errorElement = "";
  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }

  return (
    <div>
      <button onClick={() => googleLogin()}>
        <Image
          className="mx-auto w-[30px] h-auto"
          loading="lazy"
          // placeholder="blur"
          src={googleLogo}
          width={"100%"}
          height={"auto"}
          alt="Loading...."
        />
      </button>
    </div>
  );
}
