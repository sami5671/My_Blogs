export default function NewsLetterSection() {
  return (
    <section
      id="newsletter"
      className="
      py-20
      bg-gradient-to-b 
      from-slate-50 via-white to-slate-100
      dark:from-slate-950 dark:via-slate-900 dark:to-slate-950
      "
    >
      <div className="max-w-2xl mx-auto px-4">
        {/* Card */}
        <div
          className="
          rounded-3xl p-12 text-center
          
          bg-white
          dark:bg-slate-900/50
          
          border border-slate-200
          dark:border-slate-700
          
          shadow-lg
          dark:shadow-xl
          
          backdrop-blur-md
          "
        >
          {/* Title */}
          <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Stay Updated</h2>

          {/* Description */}
          <p className="text-lg mb-8 text-slate-600 dark:text-slate-400">
            Get the latest articles delivered to your inbox every week
          </p>

          {/* Form */}
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="
              flex-1 px-6 py-3 rounded-full
              
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

            <button
              className="
              px-8 py-3 rounded-full
              
              bg-gradient-to-r
              from-blue-600
              to-purple-600
              
              text-white font-semibold
              
              hover:shadow-lg
              hover:shadow-blue-500/40
              
              transition-all duration-200
              whitespace-nowrap
              "
            >
              Subscribe
            </button>
          </form>

          {/* Footer text */}
          <p className="text-xs mt-4 text-slate-500 dark:text-slate-400">
            No spam, unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  );
}
