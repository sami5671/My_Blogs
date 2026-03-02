import dbConnect from "@/lib/mongodb";
import Post from "@/models/Post";
import { NextResponse } from "next/server";

// GET single post
export async function GET(req, { params }) {
  await dbConnect();
  const post = await Post.findById(params.id);

  return NextResponse.json(post);
}

// DELETE post
export async function DELETE(req, { params }) {
  await dbConnect();
  await Post.findByIdAndDelete(params.id);

  return NextResponse.json({ message: "Deleted" });
}
