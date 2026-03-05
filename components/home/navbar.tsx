"use client";

import { Menu, PlusCircle, X } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "../theme-toggle";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/#blog" },
    { label: "About", href: "/#about" },
  ];

  return (
    <nav className="nav-blur">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold gradient-text">
          sami.dev
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-medium"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop Controls */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />

          {session && (
            <Link href="/create">
              <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 text-white text-sm font-semibold hover:shadow-lg hover:shadow-green-500/40 transition-all">
                <PlusCircle size={16} />
                Create Post
              </button>
            </Link>
          )}

          {session ? (
            <div className="flex items-center gap-3">
              <img
                src={session.user?.image || "/default-avatar.png"}
                alt={session.user?.name || "User"}
                className="w-8 h-8 rounded-full object-cover"
              />

              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{session.user?.name}</span>

              <button
                onClick={() => signOut()}
                className="px-4 py-2 rounded-full bg-red-600 text-white text-sm font-medium hover:bg-red-700 transition-colors"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link href="/login">
              <button className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-200 text-sm">
                Login
              </button>
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />

          <button className="text-slate-700 dark:text-slate-300" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-200/20 dark:border-slate-700/30 backdrop-blur-sm">
          <div className="px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            {session && (
              <Link href="/create-post">
                <button className="w-full flex items-center justify-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold hover:shadow-lg transition-all">
                  <PlusCircle size={16} />
                  Create Post
                </button>
              </Link>
            )}

            {session ? (
              <div className="flex flex-col gap-2 mt-4">
                <div className="flex items-center gap-3">
                  <img
                    src={session.user?.image || "/default-avatar.png"}
                    alt={session.user?.name || "User"}
                    className="w-8 h-8 rounded-full object-cover"
                  />

                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{session.user?.name}</span>
                </div>

                <button
                  onClick={() => signOut()}
                  className="w-full px-6 py-2 rounded-full bg-red-600 text-white font-semibold hover:bg-red-700 transition-all duration-200"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link href="/login">
                <button className="w-full mt-4 px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg transition-all duration-200">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
