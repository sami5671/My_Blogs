import { Footer } from "@/components/footer";
import BlogSection from "@/components/home/blog-section";
import { HeroSection } from "@/components/home/hero-section";
import { Navbar } from "@/components/home/navbar";
import NewsLetterSection from "@/components/home/newsLetter-section";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <BlogSection />
      <NewsLetterSection />
      <Footer />
    </main>
  );
}
