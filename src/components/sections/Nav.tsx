"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  function scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(
        null,
        "",
        `${window.location.pathname}${window.location.search}`,
      );
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }

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
        <button
          type="button"
          onClick={() => scrollToSection("work")}
          className="justify-self-start px-2 py-2 text-[14px] text-[var(--text-strong)] transition-colors hover:text-[var(--accent)] sm:px-5"
        >
          Work
        </button>
        <Link
          href="/"
          className="justify-self-center font-serif text-[22px] leading-none tracking-[-1.12px] text-[var(--accent)] sm:text-[28px]"
        >
          Katherine<span className="italic">Wong</span>
        </Link>
        <button
          type="button"
          onClick={() => scrollToSection("about")}
          className="justify-self-end px-2 py-2 text-[14px] text-[var(--text-strong)] transition-colors hover:text-[var(--accent)] sm:px-5"
        >
          About
        </button>
      </nav>
    </header>
  );
}
