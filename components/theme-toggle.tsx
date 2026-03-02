'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="p-2 rounded-lg bg-slate-200 dark:bg-slate-800 animate-pulse" />
    );
  }

  const isDark = theme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="p-2.5 rounded-lg transition-all duration-300 ease-in-out
        bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700
        text-slate-800 dark:text-amber-400
        border border-slate-300 dark:border-slate-700
        hover:shadow-md dark:hover:shadow-lg dark:hover:shadow-slate-950/50
        hover:scale-105 active:scale-95"
      title={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
    >
      {isDark ? (
        <Sun size={20} className="transition-transform duration-300 rotate-0 group-hover:rotate-180" />
      ) : (
        <Moon size={20} className="transition-transform duration-300" />
      )}
    </button>
  );
}
