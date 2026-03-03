import { Footer } from "@/components/footer";
import { Navbar } from "@/components/home/navbar";
import { RelatedPosts } from "@/components/related-posts";
import { blogPosts, getBlogPostBySlug, getRelatedPosts } from "@/lib/blog-data";
import { ChevronLeft, Clock, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export const generateStaticParams = () => {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
};

interface BlogPostPageProps {
  params: Promise<{ slug: string }>; // ✅ must be Promise in Next 15
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params; // ✅ MUST await

  if (!slug) {
    notFound();
  }

  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug);

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <Image src={post.coverImage} alt={post.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

        <div className="absolute inset-0 flex flex-col justify-end p-8">
          <div className="max-w-4xl mx-auto w-full">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-sm font-semibold mb-4">
              {post.category}
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">{post.title}</h1>

            <div className="flex items-center gap-4 text-slate-200 text-sm">
              <span>{post.author}</span>
              <span>•</span>
              <span>{post.date}</span>
              <div className="flex items-center gap-1">
                <Clock size={16} />
                <span>{post.readTime} min read</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="flex-1">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <Link href="/#blog" className="inline-flex items-center gap-2 text-blue-600 mb-8 font-semibold">
            <ChevronLeft size={20} />
            Back to Articles
          </Link>

          <article
            className="prose prose-lg dark:prose-invert max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Share */}
          <div className="border-t pt-8">
            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass">
              <Share2 size={18} />
              Share
            </button>
          </div>
        </div>
      </section>

      {relatedPosts.length > 0 && (
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <RelatedPosts posts={relatedPosts} />
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
