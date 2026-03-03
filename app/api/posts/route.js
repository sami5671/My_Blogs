import dbConnect from "@/lib/mongodb";
import Post from "@/models/Post";
import { NextResponse } from "next/server";

// GET all posts
export async function GET() {
  try {
    await dbConnect();

    const blogs = await Post.find().sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      data: blogs,
    });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Server Error" }, { status: 500 });
  }
}
// CREATE post
export async function POST(req) {
  await dbConnect();
  const body = await req.json();

  const post = await Post.create(body);

  return NextResponse.json(post, { status: 201 });
}
