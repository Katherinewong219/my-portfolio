"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? "bg-[var(--bg-page)]/85 backdrop-blur" : ""
      }`}
    >
      <nav className="flex h-20 w-full items-center justify-center px-4 sm:px-6">
        <Link
          href="/"
          className="shrink-0 font-serif text-[22px] leading-none tracking-[-1.12px] text-[var(--accent)] sm:text-[28px]"
        >
          Katherine<span className="italic">Wong</span>
        </Link>
      </nav>
    </header>
  );
}
