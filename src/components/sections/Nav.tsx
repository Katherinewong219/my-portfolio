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
    <header className="sticky top-0 z-50 w-full">
      <nav
        className={`mx-auto flex h-20 w-full max-w-[1273px] items-center justify-between gap-2 px-4 transition-colors duration-300 sm:px-6 ${
          scrolled ? "bg-[var(--bg-page)]/85 backdrop-blur" : ""
        }`}
      >
        <Link
          href="/works"
          className="shrink-0 px-2 py-2 text-[14px] text-[var(--text-strong)] hover:text-[var(--accent)] transition-colors sm:px-5"
        >
          Works
        </Link>
        <Link
          href="/"
          className="shrink-0 font-serif text-[22px] leading-none tracking-[-1.12px] text-[var(--accent)] sm:text-[28px]"
        >
          Katherine<span className="italic">Wong</span>
        </Link>
        <Link
          href="/about-me"
          className="shrink-0 px-2 py-2 text-[14px] text-[var(--text-strong)] hover:text-[var(--accent)] transition-colors sm:px-5"
        >
          About me
        </Link>
      </nav>
    </header>
  );
}
