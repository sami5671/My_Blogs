export default function NewsLetterSection() {
  return (
    <section id="newsletter" className="py-16 hero-gradient">
      <div className="max-w-2xl mx-auto px-4">
        <div className="glass-dark p-12 rounded-3xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-slate-300 mb-8 text-lg">Get the latest articles delivered to your inbox every week</p>

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

          <p className="text-xs text-slate-400 mt-4">No spam, unsubscribe anytime. We respect your privacy.</p>
        </div>
      </div>
    </section>
  );
}
