import connectMongodb from "@/lib/mongodb";
import banner from "@/models/bannerSchema";
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
  await connectMongodb();
  await banner.create(data);
  return NextResponse.json({
    message: "data upload success",
    status: true,
    status: 200,
  });
}
export async function GET(request) {
  await connectMongodb();
  const allBanner = await banner.find({}).catch();
  // console.log(allUser)
  return NextResponse.json({ allBanner });
}
