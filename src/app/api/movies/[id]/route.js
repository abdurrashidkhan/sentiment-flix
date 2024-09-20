import connectMongodb from "@/lib/mongodb";
import movies from "@/models/moviesSchema";
import { NextResponse } from "next/server";

export async function DELETE(request, { params }) {
  const { id } = params
  await connectMongodb();
  const deleted = await movies.deleteOne({ _id: id }).exec();
  return NextResponse.json({status:true,message:'movie deleted'});
}
