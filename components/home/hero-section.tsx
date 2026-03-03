import { ArrowRight, Code2, Sparkles, Zap } from "lucide-react";

export function HeroSection() {
  return (
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
              Comprehensive articles about AI, cloud architecture, performance optimization, and modern software
              development practices.
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
  );
}
