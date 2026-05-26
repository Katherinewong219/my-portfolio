import {
  ComputerIcon,
  HeartIcon,
  StarIcon,
  TelescopeIcon,
} from "@/components/icons";

const CARDS = [
  {
    eyebrow: "01",
    title: "Strategic Design",
    desc: "Every design decision ties back to your business goals — from improving activation rates to closing your next funding round.",
    Icon: TelescopeIcon,
    accent: "var(--accent)",
  },
  {
    eyebrow: "02",
    title: "Startup Speed",
    desc: "I move at startup pace. Fast iterations, clear deliverables, and no endless rounds of revisions slowing you down.",
    Icon: ComputerIcon,
    accent: "var(--text-heading)",
  },
  {
    eyebrow: "03",
    title: "End-to-End Craft",
    desc: "From brand and UX to high-fidelity UI and pitch decks — one designer who can take the project from zero to launch.",
    Icon: StarIcon,
    accent: "var(--accent)",
  },
  {
    eyebrow: "04",
    title: "Founder Empathy",
    desc: "I work alongside founders, not just for them. Your priorities, constraints, and ambitions shape every pixel.",
    Icon: HeartIcon,
    accent: "var(--text-heading)",
  },
];

export function WhatIBring() {
  return (
    <section className="mx-auto w-full max-w-[1273px] px-6 py-24">
      <div className="mx-auto max-w-[720px] text-center">
        <p className="eyebrow mb-4">{"// What I bring"}</p>
        <h2 className="font-serif text-[clamp(36px,5vw,64px)] tracking-[-2px] text-[var(--text-heading)]">
          What I bring to the <span className="italic">table</span>
        </h2>
        <p className="mt-4 text-[17px] leading-[1.5] text-[var(--text-body)]">
          Digital experiences that engage users and help your startup stand out
          from day one.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {CARDS.map((c) => {
          const Icon = c.Icon;
          return (
            <div
              key={c.eyebrow}
              className="flex flex-col gap-4 rounded-[20px] p-7 transition-transform hover:-translate-y-1"
              style={{ backgroundColor: "var(--bg-surface)" }}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[13px] text-[var(--text-strong)]">
                  {c.eyebrow}
                </span>
                <Icon style={{ color: c.accent }} className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-[24px] leading-[1.2] tracking-[-0.96px] text-[var(--text-heading)]">
                {c.title}
              </h3>
              <p className="text-[15px] leading-[1.55] text-[var(--text-body)]">
                {c.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
