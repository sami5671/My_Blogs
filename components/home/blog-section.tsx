"use client";

import { usePosts } from "@/hooks/usePosts";
import { BlogCard } from "../blog-card";

export default function BlogSection() {
  const { posts, loading } = usePosts();
  return (
    <section id="blog" className="py-16 hero-gradient">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Latest Blogs</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            explore my web and software testing blogs insights
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
