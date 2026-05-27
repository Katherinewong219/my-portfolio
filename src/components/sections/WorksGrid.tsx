import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { withBasePath } from "@/lib/site-path";

const WORKS = [
  {
    slug: "finflow",
    title: "FinFlow",
    desc: "FinFlow needed an expense tracking platform for startup teams with tight budgets. Existing tools were too complex, so I designed an MVP to provide real-time spending insights for growth and fundraising.",
    img: "/images/work-finflow.jpg",
    alt: "Smartphone displaying data analytics, colorful illustration background",
    bg: "rgb(248, 232, 220)",
  },
  {
    slug: "launchpad",
    title: "LaunchPad",
    desc: "LaunchPad wanted a website builder for founders without coding skills. I designed an intuitive platform for creating MVP landing pages and marketing sites to establish online presence quickly.",
    img: "/images/work-launchpad.png",
    alt: "Laptop displaying data graphs and charts",
    bg: "rgb(238, 235, 245)",
  },
  {
    slug: "healthsync",
    title: "HealthSync",
    desc: "HealthSync aimed to provide startup teams accessible telehealth for overwhelmed employees. Traditional healthcare was slow and inaccessible, so I designed an app connecting teams to virtual care, supporting startup wellness.",
    img: "/images/work-healthsync.png",
    alt: "Hand holding phone with saving goal app interface",
    bg: "rgb(220, 233, 245)",
  },
  {
    slug: "talentbridge",
    title: "TalentBridge",
    desc: "TalentBridge aimed to create a hiring platform for startups scaling from 5 to 50 employees. I designed a solution to simplify recruitment while ensuring quality hires, addressing the unique needs of fast-growing teams.",
    img: "/images/work-talentbridge.png",
    alt: "Abstract green oval shapes",
    bg: "rgb(235, 234, 230)",
  },
];

export function WorksGrid() {
  return (
    <section className="mx-auto w-full max-w-[1273px] px-6 py-24">
      <div className="mx-auto max-w-[720px] text-center">
        <p className="eyebrow mb-4">{"// Projects"}</p>
        <h2 className="font-serif text-[clamp(40px,5vw,64px)] leading-[1.2] tracking-[-2px] text-[var(--text-heading)]">
          Design in <span className="italic">action</span>
        </h2>
        <p className="mt-4 text-[18px] leading-[1.5] text-[var(--text-body)]">
          Crafting functional, stunning products that solve real problems.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
        {WORKS.map((w) => (
          <Link
            key={w.slug}
            href={`/works/${w.slug}`}
            className="group flex flex-col gap-6"
          >
            <div
              className="relative aspect-[4/3] w-full overflow-hidden rounded-[16px]"
              style={{ backgroundColor: w.bg }}
            >
              <Image
                src={withBasePath(w.img)}
                alt={w.alt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </div>
            <div className="flex flex-col gap-3">
              <h5 className="text-[clamp(24px,3vw,36px)] tracking-[-0.72px]">
                {w.title}
              </h5>
              <p className="text-[15px] leading-[1.6] text-[var(--text-body)]">
                {w.desc}
              </p>
              <div className="mt-2 inline-flex items-center gap-2 text-[14px] font-medium text-[var(--text-strong)] transition-colors group-hover:text-[var(--accent)]">
                View case study
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
