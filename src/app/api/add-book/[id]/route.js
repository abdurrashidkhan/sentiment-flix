import connectMongodb from "@/lib/mongodb";
import banner from "@/models/bannerSchema";
import { NextResponse } from "next/server";

export async function DELETE(request, { params }) {
  const { id } = params
  await connectMongodb();
  const deleted = await banner.deleteOne({ _id: id }).exec();
  return NextResponse.json({status:true,message:'banner deleted'});
}
