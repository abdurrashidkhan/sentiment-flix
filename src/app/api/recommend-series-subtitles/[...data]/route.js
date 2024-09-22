import connectMongodb from "@/lib/mongodb";
import seriesSubtitles from "@/models/seriesSubtitlesSchema";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const seriesName = params?.data[0];
  const season = params?.data[1];
  // const episode = params?.data[2];
  // console.log(params);
  await connectMongodb();
  const filter = {
    seriesName: seriesName,
    season: season,
  };
  const allEpisode = await seriesSubtitles.find(filter).catch();
  // console.log(allEpisode);
  return NextResponse.json({ allEpisode });
}
