export default async function uesAllComingSoon() {
  // console.log(email)
  const res = await fetch(`/api/coming-soon/`, {
    cache: "no-store",
  });
  return res.json();
}
