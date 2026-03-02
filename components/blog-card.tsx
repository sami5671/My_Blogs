"use client";

import Image from "next/image";
import Link from "next/link";
interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  coverImage: string;
  readTime: number;
}

export function BlogCard({ slug, title, excerpt, date, author, category, coverImage, readTime }: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <div className="glass-card-dark group h-full flex flex-col overflow-hidden">
        {/* Cover Image */}
        <div className="relative h-48 mb-4 overflow-hidden rounded-xl">
          <Image
            src={coverImage}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col">
          {/* Category Badge */}
          <div className="mb-3">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold">
              {category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors line-clamp-2">
            {title}
          </h3>

          {/* Excerpt */}
          <p className="text-slate-400 text-sm mb-4 line-clamp-2 flex-1">{excerpt}</p>

          {/* Metadata */}
          <div className="flex items-center justify-between text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <span>{author}</span>
              <span>•</span>
              <span>{date}</span>
            </div>
            <span>{readTime} min read</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
