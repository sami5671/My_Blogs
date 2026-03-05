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
    <Link href={`/post/${slug}`} className="group">
      <div
        className="
        h-full flex flex-col overflow-hidden rounded-2xl
        
        backdrop-blur-md
        
        bg-white/80 dark:bg-slate-900/40
        border border-slate-200 dark:border-slate-700
        
        shadow-sm hover:shadow-xl
        
        transition-all duration-300
        hover:-translate-y-1
        "
      >
        {/* Cover Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={coverImage}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          {/* Category */}
          <div className="mb-3">
            <span
              className="
              inline-block
              px-3 py-1
              text-xs
              font-semibold
              rounded-full
              
              bg-blue-100 text-blue-700
              dark:bg-blue-500/20 dark:text-blue-300
              "
            >
              {category}
            </span>
          </div>

          {/* Title */}
          <h3
            className="
            text-xl font-bold mb-2
            text-slate-900 dark:text-white
            
            group-hover:text-blue-600
            dark:group-hover:text-blue-300
            
            transition-colors
            line-clamp-2
            "
          >
            {title}
          </h3>

          {/* Excerpt */}
          <p
            className="
            text-sm mb-4 flex-1 line-clamp-2
            
            text-slate-600
            dark:text-slate-400
            "
          >
            {excerpt}
          </p>

          {/* Metadata */}
          <div
            className="
            flex items-center justify-between
            text-xs
            
            text-slate-500
            dark:text-slate-400
            "
          >
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
