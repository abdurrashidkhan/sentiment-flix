export default async function useAllContent(sectionName) {
  // console.log(sectionName);
  const res = await fetch(`/api/all-content/${sectionName}`, {
    cache: "no-store",
  });
  return res.json();
}
