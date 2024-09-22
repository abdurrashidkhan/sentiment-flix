export default async function uesDeleteSeriesSubtitles(id) {
  const res = await fetch(`/api/series-subtitles/${id}/`, {
    method: "DELETE",
    cache: "no-store",
  });
  return res.json();
}
