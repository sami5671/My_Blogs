'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { BlogCard } from '@/components/blog-card';
import { blogPosts } from '@/lib/blog-data';
import { ArrowRight, Sparkles, Code2, Zap } from 'lucide-react';

export default function Home() {
  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1, 7);

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="hero-gradient min-h-[600px] flex items-center py-16">
        <div className="max-w-6xl mx-auto px-4 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Text Content */}
            <div className="flex-1 lg:max-w-2xl">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full glass-dark">
                <Sparkles size={18} className="text-blue-400" />
                <span className="text-sm text-slate-300">Modern Insights for Tech Leaders</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                Explore Deep <span className="gradient-text">Technical Knowledge</span>
              </h1>

              <p className="text-xl text-slate-700 dark:text-slate-300 mb-8 leading-relaxed max-w-lg">
                Comprehensive articles about AI, cloud architecture, performance optimization, and modern software development practices.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#blog"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 group"
                >
                  Read Articles
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <button className="px-8 py-4 rounded-full border-2 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200">
                  Subscribe
                </button>
              </div>

              {/* Stats */}
              <div className="flex gap-8 mt-12 pt-8 border-t border-slate-300/30 dark:border-slate-700/30">
                <div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">100+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Articles Published</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">50K+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Readers Monthly</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">95%</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Reader Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Tech Icons - Grid */}
            <div className="flex-1 hidden lg:flex items-center justify-center">
              <div className="grid grid-cols-2 gap-6">
                <div className="glass-dark p-8 rounded-2xl flex flex-col items-center justify-center h-40 group hover:bg-slate-900/50 transition-all">
                  <Code2 size={40} className="text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                  <span className="text-sm text-slate-300">Cloud Native</span>
                </div>
                <div className="glass-dark p-8 rounded-2xl flex flex-col items-center justify-center h-40 group hover:bg-slate-900/50 transition-all">
                  <Zap size={40} className="text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
                  <span className="text-sm text-slate-300">High Performance</span>
                </div>
                <div className="glass-dark p-8 rounded-2xl flex flex-col items-center justify-center h-40 group hover:bg-slate-900/50 transition-all">
                  <Sparkles size={40} className="text-pink-400 mb-4 group-hover:scale-110 transition-transform" />
                  <span className="text-sm text-slate-300">AI Insights</span>
                </div>
                <div className="glass-dark p-8 rounded-2xl flex flex-col items-center justify-center h-40 group hover:bg-slate-900/50 transition-all">
                  <ArrowRight size={40} className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
                  <span className="text-sm text-slate-300">Best Practices</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post Section */}
      <section className="py-16 bg-gradient-to-b from-slate-100/50 to-slate-50 dark:from-slate-900/50 dark:to-slate-950/50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Featured Article</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8">Our most impactful article this month</p>

          <a href={`/blog/${featuredPost.slug}`} className="block group">
            <div className="glass-dark-hover overflow-hidden rounded-3xl border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300 group-hover:shadow-2xl">
              <div className="grid lg:grid-cols-5 gap-0">
                {/* Image */}
                <div className="lg:col-span-2 h-80 lg:h-auto overflow-hidden relative">
                  <img
                    src={featuredPost.coverImage}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent lg:hidden"></div>
                </div>

                {/* Content */}
                <div className="lg:col-span-3 p-8 lg:p-10 flex flex-col justify-center">
                  <div className="flex gap-3 mb-4">
                    <span className="inline-block px-4 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold">
                      {featuredPost.category}
                    </span>
                    <span className="inline-block px-4 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-semibold">
                      Featured
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {featuredPost.title}
                  </h3>
                  <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-slate-400">
                    <div className="flex gap-4">
                      <span>{featuredPost.author}</span>
                      <span>•</span>
                      <span>{featuredPost.date}</span>
                    </div>
                    <span className="group-hover:text-blue-400 transition-colors">
                      {featuredPost.readTime} min read →
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section id="blog" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Latest Articles</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              Deep dives into modern technology and software development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
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
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="py-16 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20">
        <div className="max-w-2xl mx-auto px-4">
          <div className="glass-dark p-12 rounded-3xl text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-slate-300 mb-8 text-lg">
              Get the latest articles delivered to your inbox every week
            </p>

            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full bg-slate-900/50 border border-slate-700/50 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:bg-slate-900/70 transition-all"
              />
              <button className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-200 whitespace-nowrap">
                Subscribe
              </button>
            </form>

            <p className="text-xs text-slate-400 mt-4">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
