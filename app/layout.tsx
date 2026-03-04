import { Navbar } from "@/components/home/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { LocaleProvider } from "@/context/LocalContext";
import AuthProvider from "@/provider/AuthProvider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "react-day-picker";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KeenGuide - Technical Insights for Modern Leaders",
  description: "Deep dives into AI...",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LocaleProvider>
            <AuthProvider>
              {/* Global Navbar */}
              <Navbar />
              {children}
              {/* Global Footer */}
              <Footer />
            </AuthProvider>
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
