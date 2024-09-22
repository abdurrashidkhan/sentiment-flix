export default async function uesAllBanner() {
  // console.log(email)
  const res = await fetch(`/api/add-banner/`, {
    cache: "no-store",
  });
  return res.json();
}
