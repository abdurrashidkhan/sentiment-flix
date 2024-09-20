import connectMongodb from "@/lib/mongodb";
import seriesSubtitles from "@/models/seriesSubtitlesSchema";
import { NextResponse } from "next/server";

export async function POST(request) {
  const {
    title,
    seriesName,
    freeOrPaid,
    season,
    catagories,
    displaySection,
    episode,
    date,
    smImage,
    lgImage,
    downloadUrl,
    video,
    contentSummary,
    description,
  } = await request.json();
  const data = {
    title,
    seriesName,
    freeOrPaid,
    catagories,
    displaySection,
    season,
    episode,
    date,
    smImage,
    lgImage,
    downloadUrl,
    video,
    contentSummary,
    description,
  };
  // console.log(data);
  await connectMongodb();
  await seriesSubtitles.create(data);
  return NextResponse.json({
    message: "data upload success",
    status: true,
    status: 200,
  });
}

export async function GET(request) {
  await connectMongodb();
  const allSeriesSubtitles = await seriesSubtitles.find({}).catch();
  // console.log(allUser)
  return NextResponse.json({ allSeriesSubtitles });
}
