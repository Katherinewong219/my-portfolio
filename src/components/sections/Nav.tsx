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
      <nav className="mx-auto grid h-20 w-full max-w-[1273px] grid-cols-[1fr_auto_1fr] items-center px-4 sm:px-6">
        <Link
          href="#work"
          className="justify-self-start px-2 py-2 text-[14px] text-[var(--text-strong)] transition-colors hover:text-[var(--accent)] sm:px-5"
        >
          Work
        </Link>
        <Link
          href="/"
          className="justify-self-center font-serif text-[22px] leading-none tracking-[-1.12px] text-[var(--accent)] sm:text-[28px]"
        >
          Katherine<span className="italic">Wong</span>
        </Link>
        <Link
          href="#about"
          className="justify-self-end px-2 py-2 text-[14px] text-[var(--text-strong)] transition-colors hover:text-[var(--accent)] sm:px-5"
        >
          About
        </Link>
      </nav>
    </header>
  );
}
