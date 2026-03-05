"use client";

import { CalendarDays, Clock, Search, User } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

interface Blog {
  _id: string;
  title: string;
  image?: string;
  author: string;
  readTime: number;
  createdAt: string;
}

interface BlogSidebarProps {
  blogs: Blog[];
  currentPostId: string;
}

export default function BlogSidebar({ blogs, currentPostId }: BlogSidebarProps) {
  const [search, setSearch] = useState("");

  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => blog.title.toLowerCase().includes(search.toLowerCase()));
  }, [search, blogs]);

  return (
    <aside
      className="
      rounded-3xl p-6 sticky top-24 h-fit
      
      bg-white
      dark:bg-slate-900/50
      
      border border-slate-200
      dark:border-slate-700
      
      shadow-lg
      backdrop-blur-md
      "
    >
      {/* Header */}
      <h2 className="text-xl font-bold mb-6 text-slate-900 dark:text-white">Explore More Blogs</h2>

      {/* Search */}
      <div className="relative mb-8">
        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />

        <input
          type="text"
          placeholder="Search blogs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="
          w-full pl-10 pr-4 py-3 rounded-xl
          
          bg-slate-100
          dark:bg-slate-800
          
          border border-slate-200
          dark:border-slate-700
          
          text-slate-900
          dark:text-white
          
          placeholder:text-slate-400
          
          focus:outline-none
          focus:ring-2 focus:ring-blue-500
          "
        />
      </div>

      {/* Blog List */}
      <div className="space-y-6 max-h-[420px] overflow-y-auto pr-2">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => {
            const isActive = blog._id === currentPostId;

            return (
              <Link key={blog._id} href={`/post/${blog._id}`}>
                <div
                  className={`
                  rounded-2xl overflow-hidden border transition-all duration-300
                  
                  ${
                    isActive
                      ? "border-blue-500 shadow-md"
                      : "border-slate-200 dark:border-slate-700 hover:border-blue-400"
                  }

                  bg-white
                  dark:bg-slate-800
                  
                  hover:shadow-lg
                  `}
                >
                  {/* IMAGE */}
                  {blog.image && (
                    <div className="h-40 w-full overflow-hidden">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover hover:scale-105 transition duration-500"
                      />
                    </div>
                  )}

                  {/* CONTENT */}
                  <div className="p-4 space-y-3">
                    <h3 className="font-semibold text-slate-900 dark:text-white line-clamp-2">{blog.title}</h3>

                    <div className="flex flex-col gap-1 text-xs text-slate-500 dark:text-slate-400">
                      <div className="flex items-center gap-2">
                        <User size={14} />
                        {blog.author}
                      </div>

                      <div className="flex items-center gap-2">
                        <CalendarDays size={14} />
                        {new Date(blog.createdAt).toDateString()}
                      </div>

                      <div className="flex items-center gap-2">
                        <Clock size={14} />
                        {blog.readTime} min read
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })
        ) : (
          <p className="text-sm text-slate-500 dark:text-slate-400 text-center">No blogs found.</p>
        )}
      </div>
    </aside>
  );
}
