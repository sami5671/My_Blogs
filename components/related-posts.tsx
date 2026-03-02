'use client';

import { BlogCard } from './blog-card';

interface Post {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  coverImage: string;
  readTime: number;
}

interface RelatedPostsProps {
  posts: Post[];
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Related Articles</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <BlogCard
            key={post.id}
            id={post.id}
            title={post.title}
            excerpt={post.excerpt}
            date={post.date}
            author={post.author}
            category={post.category}
            coverImage={post.coverImage}
            readTime={post.readTime}
          />
        ))}
      </div>
    </section>
  );
}
