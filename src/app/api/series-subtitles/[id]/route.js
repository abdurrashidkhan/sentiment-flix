import connectMongodb from "@/lib/mongodb";
import seriesSubtitles from "@/models/seriesSubtitlesSchema";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  const { id } = params;
  // console.log(id);
  await connectMongodb();
  const seriesSubtitlesDelete = await seriesSubtitles
    .deleteOne({ _id: id })
    .exec();
  return NextResponse.json({ status: true, message: "service deleted" });
}
