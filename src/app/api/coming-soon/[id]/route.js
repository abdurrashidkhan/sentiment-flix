import connectMongodb from "@/lib/mongodb";
import ComingSoon from "@/models/comingSoonSchema";
import { NextResponse } from "next/server";

export async function DELETE(request, { params }) {
  const { id } = params;
  await connectMongodb();
  const deleted = await ComingSoon.deleteOne({ _id: id }).exec();
  return NextResponse.json({ status: true, message: "banner deleted" });
}
