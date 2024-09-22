import Swal from "sweetalert2";

const getAdmin = async (email) => {
  try {
    const res = await fetch(`/api/users/${email}/`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("failed to fetch admin");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function CheckAdmin(user, signOut) {
  const email = user?.email;
  if (email) {
    const { isAdmin } = await getAdmin(email);
    // setAdmin(isAdmin);
    if (isAdmin !== true) {
      await signOut();
      Swal.fire({
        title: "Your are not admin",
        icon: "info",
      });
    }
    return isAdmin;
  }
}
