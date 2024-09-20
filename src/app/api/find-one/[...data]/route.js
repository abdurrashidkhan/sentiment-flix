import connectMongodb from "@/lib/mongodb";
import banner from "@/models/bannerSchema";
import ComingSoon from "@/models/comingSoonSchema";
import movies from "@/models/moviesSchema";
import seriesSubtitles from "@/models/seriesSubtitlesSchema";
import { NextResponse } from "next/server";

// one user find
export async function GET(request, { params }) {
  const category = params?.data[0];
  const id = params?.data[1];

  await connectMongodb();

  if (category === "movies") {
    const findOneContent = await movies
      .findOne({
        _id: id,
      })
      .exec();

    if (!findOneContent) {
      const findOneContent = await ComingSoon.findOne({
        _id: id,
      }).exec();
      if (!findOneContent) {
        const findOneContent = await banner
          .findOne({
            _id: id,
          })
          .exec();
        return NextResponse.json({ findOneContent });
      }
      return NextResponse.json({ findOneContent });
    }

    return NextResponse.json({ findOneContent });
  } else {
    const findOneContent = await seriesSubtitles
      .findOne({
        _id: id,
      })
      .exec();

    if (!findOneContent) {
      const findOneContent = await banner
        .findOne({
          _id: id,
        })
        .exec();
      if (!findOneContent) {
        const findOneContent = await ComingSoon.findOne({
          _id: id,
        }).exec();
        return NextResponse.json({ findOneContent });
      }
      return NextResponse.json({ findOneContent });
    }

    return NextResponse.json({ findOneContent });
  }
}
