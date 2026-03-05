"use client";

import { usePosts } from "@/hooks/usePosts";
import { BlogCard } from "../blog-card";

export default function BlogSection() {
  const { posts, loading } = usePosts();

  return (
    <section
      id="blog"
      className="py-20 bg-gradient-to-b 
      from-slate-50 via-white to-slate-100
      dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4
          text-slate-900 dark:text-white"
          >
            Latest Blogs
          </h2>

          <p className="text-lg text-slate-600 dark:text-slate-400">
            Explore my insights on web development and software testing
          </p>
        </div>

        {/* Loading */}
        {loading && <div className="text-center text-slate-500 dark:text-slate-400">Loading posts...</div>}

        {/* Blog Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard
              key={post._id}
              slug={post._id}
              title={post.title}
              excerpt={post.content.replace(/<[^>]+>/g, "").slice(0, 120) + "..."}
              date={new Date(post.createdAt).toDateString()}
              author={post.author}
              category={post.tags}
              coverImage={post.image}
              readTime={post.readTime}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
