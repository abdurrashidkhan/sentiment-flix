export default async function uesAllMovies() {
  // console.log(email)
  const res = await fetch(`/api/movies/`, {
    cache: 'no-store'
  });
  return res.json();
}
