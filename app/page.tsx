import BlogSection from "@/components/home/blog-section";
import { HeroSection } from "@/components/home/hero-section";
import NewsLetterSection from "@/components/home/newsLetter-section";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <HeroSection />
      <BlogSection />
      <NewsLetterSection />
    </main>
  );
}
