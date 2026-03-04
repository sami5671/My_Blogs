import dbConnect from "@/lib/mongodb";
import Post from "@/models/Post";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  await dbConnect();
  const post = await Post.findById(params.id);

  return NextResponse.json(post);
}
