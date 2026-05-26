import { StarIcon } from "@/components/icons";

const TESTIMONIALS = [
  {
    quote:
      "Artemis completely transformed how we present ourselves to investors. The design work didn't just look great — it helped us close our Series A.",
    name: "Sarah Chen",
    role: "Founder, FinFlow",
  },
  {
    quote:
      "Working with Artemis felt like having a co-founder who actually gets design. Fast turnarounds, clear communication, and results that move the needle.",
    name: "Marcus Rivera",
    role: "CEO, TalentBridge",
  },
  {
    quote:
      "Our conversion rates doubled after Artemis redesigned our landing page. Sometimes simple changes make the biggest impact.",
    name: "Jessica Park",
    role: "Head of Growth, LaunchPad",
  },
];

export function Testimonials() {
  return (
    <section className="mx-auto w-full max-w-[1273px] px-6 py-24">
      <div className="mx-auto max-w-[720px] text-center">
        <p className="eyebrow mb-4">{"// Testimonials"}</p>
        <h2 className="font-serif text-[clamp(36px,5vw,64px)] tracking-[-2px] text-[var(--text-heading)]">
          Kind words from <span className="italic">Clients</span>
        </h2>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <figure
            key={t.name}
            className="flex flex-col justify-between gap-8 rounded-[20px] p-7"
            style={{ backgroundColor: "var(--bg-surface)" }}
          >
            <div className="flex gap-1.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-4 w-4 text-[var(--accent)]" />
              ))}
            </div>
            <blockquote className="font-serif text-[20px] leading-[1.4] tracking-[-0.4px] text-[var(--text-heading)]">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="flex flex-col">
              <span className="font-medium text-[15px] text-[var(--text-strong)]">
                {t.name}
              </span>
              <span className="text-[13px] text-[var(--text-body)]">
                {t.role}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
