import BlogSidebar from "@/components/blog/blogSidebar";
import dbConnect from "@/lib/mongodb";
import PostModel from "@/models/Post";
import { CalendarDays, Clock, Tag, User } from "lucide-react";
import mongoose from "mongoose";
import { notFound } from "next/navigation";

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
  // ✅ Await params (Next.js 13 App Router fix)
  const { id } = await params;

  // ✅ Prevent invalid ObjectId crash
  if (!mongoose.Types.ObjectId.isValid(id)) return notFound();

  await dbConnect();

  const post = await PostModel.findById(id).lean();
  if (!post) return notFound();

  // ✅ Fetch all blogs for sidebar
  const rawBlogs = await PostModel.find({}).sort({ createdAt: -1 }).lean();

  // ✅ Convert _id to string
  const blogs = rawBlogs.map((blog) => ({
    ...blog,
    _id: blog._id.toString(),
  }));

  return (
    <section className="hero-gradient min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* LEFT: Blog Content */}
        <div className="lg:col-span-2">
          <div className="backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 rounded-3xl shadow-2xl p-8 md:p-12">
            {/* Category Badge */}
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 text-sm font-semibold border border-blue-400/20">
                <Tag size={16} />
                {post.tags}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-300 mb-8 border-b border-white/10 pb-6">
              <div className="flex items-center gap-2">
                <User size={18} className="text-blue-400" />
                <span>{post.author}</span>
              </div>

              <div className="flex items-center gap-2">
                <CalendarDays size={18} className="text-purple-400" />
                <span>{new Date(post.createdAt).toDateString()}</span>
              </div>

              <div className="flex items-center gap-2">
                <Clock size={18} className="text-pink-400" />
                <span>{post.readTime} min read</span>
              </div>
            </div>

            {/* Cover Image */}
            {post.image && (
              <div className="relative mb-10 rounded-2xl overflow-hidden shadow-xl border border-white/10">
                <img src={post.image} alt={post.title} className="w-full h-[420px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            )}

            {/* Blog Content */}
            <div
              className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-white prose-p:text-slate-300 prose-strong:text-white prose-a:text-blue-400 hover:prose-a:text-blue-300"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>

        {/* RIGHT: Sidebar */}
        <div>
          <BlogSidebar blogs={blogs} currentPostId={id} />
        </div>
      </div>
    </section>
  );
}
