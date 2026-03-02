"use client";

import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    Product: [
      { label: "Features", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Security", href: "#" },
    ],
    Company: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
    ],
    Legal: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Contact", href: "#" },
    ],
  };

  return (
    <footer className="border-t border-slate-200/20 dark:border-slate-700/30 bg-slate-900/50 dark:bg-slate-950/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4">KeenGuide</h3>
            <p className="text-slate-400 text-sm">Insights and knowledge for modern technology leaders.</p>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-semibold text-slate-200 mb-4">{category}</h4>
              <ul className="space-y-2">
                {items.map((item, idx) => (
                  <li key={item.href + idx}>
                    {" "}
                    {/* append index to ensure uniqueness */}
                    <Link href={item.href} className="text-slate-400 hover:text-slate-200 transition-colors text-sm">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700/30 pt-8">
          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
            <p>&copy; {currentYear} KeenGuide. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-slate-200 transition-colors">
                Twitter
              </a>
              <a href="#" className="hover:text-slate-200 transition-colors">
                LinkedIn
              </a>
              <a href="#" className="hover:text-slate-200 transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
