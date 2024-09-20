import connectMongodb from "@/lib/mongodb";
import users from "@/models/usersSchema";
import { NextResponse } from "next/server";

// one user find
export async function GET(request, { params }) {
  const { email } = params;
  await connectMongodb();
  const user = await users.findOne({ email: email }).exec();
  const isAdmin = await user?.role === "admin";
  return NextResponse.json({ isAdmin});
}