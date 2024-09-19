import { auth } from "@/app/firebase.init";
import Loading from "@/app/loading";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import Swal from "sweetalert2";

export default function CheckingUser() {
  const [user, cLoading, cError] = useAuthState(auth);
  const router = useRouter();
  if (cLoading) {
    return <Loading></Loading>;
  } else {
    if (!user) {
      router.push("/authentication/login");
      Swal.fire({
        title: "Login now",
        icon: "info",
      });
    }
  }
  if (cError) {
    console.log(cError.message);
  }
}
