import BlogSidebar from "@/components/blog/blogSidebar";
import dbConnect from "@/lib/mongodb";
import PostModel from "@/models/Post";
import { CalendarDays, Clock, Tag, User } from "lucide-react";
import mongoose from "mongoose";
import { notFound } from "next/navigation";

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  if (!mongoose.Types.ObjectId.isValid(id)) return notFound();

  await dbConnect();

  const post = await PostModel.findById(id).lean();
  if (!post) return notFound();

  const rawBlogs = await PostModel.find({}).sort({ createdAt: -1 }).lean();

  const blogs = rawBlogs.map((blog) => ({
    ...blog,
    _id: blog._id.toString(),
  }));

  return (
    <section
      className="
      min-h-screen py-20 px-4
      bg-gradient-to-b 
      from-slate-50 via-white to-slate-100
      dark:from-slate-950 dark:via-slate-900 dark:to-slate-950
      "
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* BLOG CONTENT */}
        <div className="lg:col-span-2">
          <div
            className="
            rounded-3xl p-8 md:p-12
            
            bg-white
            dark:bg-slate-900/50
            
            border border-slate-200
            dark:border-slate-700
            
            shadow-lg
            dark:shadow-xl
            
            backdrop-blur-lg
            "
          >
            {/* Category */}
            <div className="mb-6">
              <span
                className="
                inline-flex items-center gap-2
                px-4 py-2 rounded-full
                text-sm font-semibold
                
                bg-blue-100 text-blue-700
                dark:bg-blue-500/20 dark:text-blue-300
                "
              >
                <Tag size={16} />
                {post.tags}
              </span>
            </div>

            {/* Title */}
            <h1
              className="
              text-4xl md:text-5xl font-bold mb-6 leading-tight
              text-slate-900 dark:text-white
              "
            >
              {post.title}
            </h1>

            {/* META INFO */}
            <div
              className="
              flex flex-wrap items-center gap-6
              text-sm
              text-slate-600
              dark:text-slate-400
              mb-8 pb-6
              border-b border-slate-200
              dark:border-slate-700
              "
            >
              <div className="flex items-center gap-2">
                <User size={18} className="text-blue-500" />
                {post.author}
              </div>

              <div className="flex items-center gap-2">
                <CalendarDays size={18} className="text-purple-500" />
                {new Date(post.createdAt).toDateString()}
              </div>

              <div className="flex items-center gap-2">
                <Clock size={18} className="text-pink-500" />
                {post.readTime} min read
              </div>
            </div>

            {/* COVER IMAGE */}
            {post.image && (
              <div className="mb-10 rounded-2xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-700">
                <img src={post.image} alt={post.title} className="w-full h-[420px] object-cover" />
              </div>
            )}

            {/* CONTENT */}
            <div
              className="
              prose prose-lg max-w-none

              prose-headings:text-slate-900
              prose-p:text-slate-700
              prose-strong:text-slate-900
              prose-a:text-blue-600

              dark:prose-invert
              dark:prose-headings:text-white
              dark:prose-p:text-slate-300
              "
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>

        {/* SIDEBAR */}
        <div>
          <BlogSidebar blogs={blogs} currentPostId={id} />
        </div>
      </div>
    </section>
  );
}
