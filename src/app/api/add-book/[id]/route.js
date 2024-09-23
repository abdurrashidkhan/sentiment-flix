import connectMongodb from "@/lib/mongodb";
import books from "@/models/booksSchema";
import { NextResponse } from "next/server";

export async function DELETE(request, { params }) {
  const { id } = params;
  await connectMongodb();
  const deleted = await books.deleteOne({ _id: id }).exec();
  return NextResponse.json({ status: true, message: "banner deleted" });
}
