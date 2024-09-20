import connectMongodb from "@/lib/mongodb";
import movies from "@/models/moviesSchema";
import { NextResponse } from "next/server";

export async function POST(request) {
  const {
    title,
    freeOrPaid,
    catagories,
    displaySection,
    season,
    episode,
    contentSummary,
    date,
    smImage,
    lgImage,
    description,
    downloadUrl,
    video,
  } = await request.json();
  const data = {
    title,
    freeOrPaid,
    catagories,
    displaySection,
    season,
    episode,
    contentSummary,
    date,
    smImage,
    lgImage,
    description,
    downloadUrl,
    video,
  };
  await connectMongodb();
  await movies.create(data);
  return NextResponse.json({
    message: "insert data  upload success",
    status: true,
    status: 200,
  });
}

export async function GET(request) {
  await connectMongodb();
  const allMovies = await movies.find({}).catch();
  // console.log(allUser)
  return NextResponse.json({ allMovies });
}
