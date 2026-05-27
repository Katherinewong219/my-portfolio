import { BrainCircuitIcon, GoalIcon, RocketIcon } from "lucide-react";
import { TelescopeIcon } from "@/components/icons";

const CARDS = [
  {
    eyebrow: "01",
    title: "Strategic Design",
    desc: "Every design decision connects to business goals, supporting activation, growth, and readiness for the next stage of funding.",
    Icon: TelescopeIcon,
    accent: "var(--accent)",
  },
  {
    eyebrow: "02",
    title: "Startup Speed",
    desc: "I move at startup speed. Fast iterations, clear deliverables, and a process that keeps work moving forward quickly.",
    Icon: RocketIcon,
    accent: "var(--text-heading)",
  },
  {
    eyebrow: "03",
    title: "End-to-End Craft",
    desc: "From brand and UX to high-fidelity UI and pitch decks, projects are taken from zero through to launch.",
    Icon: GoalIcon,
    accent: "var(--accent)",
  },
  {
    eyebrow: "04",
    title: "AI in Design",
    desc: "I integrate AI into the design process to accelerate ideation, support rapid testing, and validate user flows before development.",
    Icon: BrainCircuitIcon,
    accent: "var(--text-heading)",
  },
];

export function WhatIBring() {
  return (
    <section className="mx-auto w-full max-w-[1273px] px-6 py-24">
      <div className="mx-auto max-w-[720px] text-center">
        <p className="eyebrow mb-4">{"// Values"}</p>
        <h2 className="font-serif text-[clamp(36px,5vw,64px)] tracking-[-2px] text-[var(--text-heading)]">
          What I bring to the <span className="italic">table</span>
        </h2>
        <p className="mt-4 text-[17px] leading-[1.5] text-[var(--text-body)]">
          Digital experiences that engage users and drive real product impact.
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
