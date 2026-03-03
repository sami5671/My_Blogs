import { ReactNode } from "react";

export const metadata = {
  title: "Login - Sami.dev login",
};

export default function LoginLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className="
          flex items-center justify-center min-h-screen 
          transition-colors duration-500
          bg-[#1a0b2e] 
          bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] 
          from-[#2d1b4e] via-[#1a0b2e] to-[#0f051a]
        "
      style={{
        // Direct hex match to the image's dark purple/black vibe
        background: "radial-gradient(circle at top, #2d1b4e 0%, #1a0b2e 50%, #0f051a 100%)",
      }}
    >
      {children}
    </div>
  );
}
