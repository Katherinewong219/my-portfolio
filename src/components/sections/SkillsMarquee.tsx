const SKILLS = [
  "Framer Development",
  "Branding",
  "Visual Design",
  "User Interface Design",
  "Product Design",
  "User Experience Design",
  "User Research",
  "Pitch Deck Design",
  "Design Systems",
];

import { StarIcon } from "@/components/icons";

export function SkillsMarquee() {
  const items = [...SKILLS, ...SKILLS, ...SKILLS];
  return (
    <section
      className="w-full overflow-hidden py-10"
      style={{ backgroundColor: "var(--bg-surface)" }}
    >
      <div
        className="flex w-max items-center gap-10 animate-marquee"
        style={{ ["--marquee-duration" as never]: "45s" }}
      >
        {items.map((s, i) => (
          <span key={i} className="flex shrink-0 items-center gap-10">
            <span className="font-serif text-[36px] tracking-[-1.44px] text-[var(--text-heading)] italic">
              {s}
            </span>
            <StarIcon className="h-5 w-5 text-[var(--accent)]" />
          </span>
        ))}
      </div>
    </section>
  );
}
