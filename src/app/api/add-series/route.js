import connectMongodb from "@/lib/mongodb";
import series from "@/models/seriesSchema";
import { NextResponse } from "next/server";

export async function POST(request) {
  const {
    seriesName,
    freeOrPaid,
    catagories,
    displaySection,
    season,
    date,
    smImage,
    lgImage,
    contentSummary,
    description,
  } = await request.json();
  const data = {
    seriesName,
    freeOrPaid,
    catagories,
    displaySection,
    season,
    date,
    smImage,
    lgImage,
    contentSummary,
    description,
  };
  await connectMongodb();
  await series.create(data);
  return NextResponse.json({
    message: "data upload success",
    status: true,
    status: 200,
  });
}
export async function GET(request) {
  await connectMongodb();
  const allSeriesSubtitles = await series.find({}).catch();
  // console.log(allUser)
  return NextResponse.json({ allSeriesSubtitles });
}
