export default async function uesAllSeriesSubtitles() {
  // console.log(email)
  const res = await fetch(`/api/series-subtitles/`, {
    cache: 'no-store'
  });
  return res.json();
}
