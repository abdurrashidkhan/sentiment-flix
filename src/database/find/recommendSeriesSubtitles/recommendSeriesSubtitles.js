export default async function recommendSeriesSubtitles(seriesName, season) {
  try {
    if (!seriesName || !season) {
      throw new Error("Series name and season are required.");
    }

    const res = await fetch(
      `/api/recommend-series-subtitles/${seriesName}/${season}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching subtitles:", error);
    return { error: error.message };
  }
}
