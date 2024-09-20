import connectMongodb from "@/lib/mongodb";
import ComingSoon from "@/models/comingSoonSchema";
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
    video,
    downloadUrl,
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
    video,
    downloadUrl,
    contentSummary,
    description,
  };
  await connectMongodb();
  await ComingSoon.create(data);
  return NextResponse.json({
    message: "data upload success",
    status: true,
    status: 200,
  });
}

export async function GET(request) {
  await connectMongodb();
  const comingSoon = await ComingSoon.find({}).catch();
  // console.log(allUser)
  return NextResponse.json({ comingSoon });
}
