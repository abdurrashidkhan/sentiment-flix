import connectMongodb from "@/lib/mongodb";
import ComingSoon from "@/models/comingSoonSchema";
import seriesSubtitles from "@/models/seriesSubtitlesSchema";
import { NextResponse } from "next/server";

// one user find
export async function GET(request, { params }) {
  const { sectionName } = params;
  // console.log(sectionName);
  await connectMongodb();
  if (sectionName === "coming-soon") {
    const allContent = await ComingSoon.find({
      displaySection: sectionName,
    }).exec();
    return NextResponse.json({ allContent });
  }

  const allContent = await seriesSubtitles
    .find({
      displaySection: sectionName,
    })
    .exec();
  return NextResponse.json({ allContent });
}
