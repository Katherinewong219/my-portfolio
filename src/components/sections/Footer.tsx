import Link from "next/link";

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-[1273px] px-6 pb-12 pt-4">
      <div className="flex flex-col items-center justify-between gap-6 border-t border-[var(--text-heading)]/10 pt-10 md:flex-row">
        <Link
          href="/"
          className="font-serif text-[28px] leading-[25.2px] tracking-[-1.12px] text-[var(--accent)]"
        >
          Katherine<span className="italic">Wong</span>
        </Link>
        <nav className="flex items-center gap-6 text-[14px] text-[var(--text-strong)]">
          <Link
            href="/works"
            className="hover:text-[var(--accent)] transition-colors"
          >
            Works
          </Link>
          <Link
            href="/about-me"
            className="hover:text-[var(--accent)] transition-colors"
          >
            About me
          </Link>
        </nav>
        <p className="text-[13px] text-[var(--text-body)]">
          © {new Date().getFullYear()} Katherine Wong · Built as a study clone.
        </p>
      </div>
    </footer>
  );
}
