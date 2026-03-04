"use client";

import { cn } from "@/lib/utils";
import { ArrowRight, Sparkles } from "lucide-react";
import React, { forwardRef, useRef } from "react";
import { AnimatedBeam } from "../ui/animated-beam";

/* ---------------- Circle Component for Beam Dots ---------------- */
const Circle = forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode }>(
  ({ className, children }, ref) => (
    <div
      ref={ref}
      className={cn(
        "z-10 flex items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      <div className="w-12 h-12 flex items-center justify-center">{children}</div>
    </div>
  ),
);

Circle.displayName = "Circle";

/* ---------------- Icons Used in Animated Beam ---------------- */
const Icons = {
  database: () => <img src="/database.png" alt="Database" className="w-full h-full object-cover rounded-full" />,
  k6: () => <img src="/k6.png" alt="k6" className="w-full h-full object-cover rounded-full" />,
  nextjs: () => <img src="/nextjs.png" alt="Next.js" className="w-full h-full object-cover rounded-full" />,
  playwright: () => <img src="/playwright.png" alt="Playwright" className="w-full h-full object-cover rounded-full" />,
  sdlc: () => <img src="/sdlc.png" alt="SDLC" className="w-full h-full object-cover rounded-full" />,
  selenium: () => <img src="/selenium.png" alt="Selenium" className="w-full h-full object-cover rounded-full" />,
  testing: () => <img src="/testing.gif" alt="Testing" className="w-full h-full object-cover rounded-full" />,
};

/* ---------------- Animated Beam Grid ---------------- */
function AnimatedBeamGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden" ref={containerRef}>
      <div className="flex w-full max-w-lg flex-col items-stretch justify-between gap-10">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div1Ref}>
            <Icons.database />
          </Circle>
          <Circle ref={div5Ref}>
            <Icons.k6 />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div2Ref}>
            <Icons.nextjs />
          </Circle>
          <Circle ref={div4Ref} className="w-16 h-16">
            <Icons.testing />
          </Circle>
          <Circle ref={div6Ref}>
            <Icons.sdlc />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div3Ref}>
            <Icons.selenium />
          </Circle>
          <Circle ref={div7Ref} className="w-16 h-16">
            <Icons.playwright />
          </Circle>
        </div>
      </div>

      {/* Beams */}
      <AnimatedBeam containerRef={containerRef} fromRef={div1Ref} toRef={div4Ref} curvature={-75} endYOffset={-10} />
      <AnimatedBeam containerRef={containerRef} fromRef={div2Ref} toRef={div4Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={div3Ref} toRef={div4Ref} curvature={75} endYOffset={10} />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeam containerRef={containerRef} fromRef={div6Ref} toRef={div4Ref} reverse />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
      />
    </div>
  );
}

/* ---------------- Main Hero Section ---------------- */
export function HeroSection() {
  return (
    <section className="hero-gradient min-h-[600px] flex items-center py-6 relative">
      <div className="max-w-6xl mx-auto px-4 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 lg:max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full glass-dark">
              <Sparkles size={18} className="text-blue-400" />
              <span className="text-sm text-slate-300">Modern Insights for Tech Leaders</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              Explore knowledge of <span className="gradient-text">Software Testing & Web Dev</span>
            </h1>

            <p className="text-lg text-slate-700 dark:text-slate-300 mb-8 leading-relaxed max-w-lg">
              Comprehensive articles about Software Testing, Web Development, and Modern Software Engineering practices.
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

          {/* Animated Beam Grid */}
          <div className="flex-1 hidden lg:flex items-center justify-center">
            <AnimatedBeamGrid />
          </div>
        </div>
      </div>
    </section>
  );
}
