import connectMongodb from "@/lib/mongodb";
import movies from "@/models/moviesSchema";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const category = params?.data[0];
  const id = params?.data[1];
  await connectMongodb();
  const {
    title,
    freeOrPaid,
    displaySection,
    catagories,
    contentSummary,
    description,
    date,
    lgImage,
    smImage,
    downloadUrl,
    video,
  } = await request.json();
  const filter = { _id: new ObjectId(id) };
  const options = { upsert: false };
  const updateDoc = {
    title,
    freeOrPaid,
    displaySection,
    catagories,
    contentSummary,
    description,
    date,
    lgImage,
    smImage,
    downloadUrl,
    video,
  };

  const result = await movies.findOneAndUpdate(
    filter,
    { $set: updateDoc },
    options
  );

  return NextResponse.json(
    { message: "update data success", status: true },
    { status: 201 }
  );
}
