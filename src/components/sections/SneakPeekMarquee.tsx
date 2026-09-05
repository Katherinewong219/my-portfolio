import Image from "next/image";
import {
  BarChart3Icon,
  CheckCircle2Icon,
  FileTextIcon,
  FilterIcon,
  SearchIcon,
  ShieldCheckIcon,
  type LucideIcon,
} from "lucide-react";
import { withBasePath } from "@/lib/site-path";

type SneakItem =
  | {
      type: "image";
      src: string;
      alt: string;
      w: number;
      h: number;
      bg: string;
    }
  | {
      type: "diagram";
      variant: "review" | "matching" | "dashboard";
      alt: string;
      w: number;
      h: number;
    };

const SNEAK_ITEMS: SneakItem[] = [
  {
    type: "image",
    src: "/images/Compliance1.png",
    alt: "AI compliance review case study hero",
    w: 280,
    h: 220,
    bg: "rgb(248, 232, 220)",
  },
  {
    type: "diagram",
    variant: "review",
    alt: "Animated evidence-led review diagram",
    w: 260,
    h: 220,
  },
  {
    type: "image",
    src: "/images/work-uPaged.png",
    alt: "Healthcare workforce platform case study hero",
    w: 260,
    h: 220,
    bg: "rgb(238, 235, 245)",
  },
  {
    type: "diagram",
    variant: "matching",
    alt: "Animated shift matching diagram",
    w: 260,
    h: 220,
  },
  {
    type: "image",
    src: "/images/work-pethealth.png",
    alt: "Pet health app case study hero",
    w: 250,
    h: 220,
    bg: "rgb(220, 233, 245)",
  },
  {
    type: "diagram",
    variant: "dashboard",
    alt: "Animated usage dashboard diagram",
    w: 280,
    h: 220,
  },
  {
    type: "image",
    src: "/images/work-talentbridge.png",
    alt: "Energy customer portal case study hero",
    w: 300,
    h: 220,
    bg: "rgb(235, 234, 230)",
  },
];

export function SneakPeekMarquee() {
  const items = [...SNEAK_ITEMS, ...SNEAK_ITEMS];

  return (
    <section className="mx-auto flex w-full max-w-none flex-col items-center py-16">
      <div
        className="relative w-full min-w-0 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
        }}
      >
        <div
          className="flex w-max items-end gap-6 animate-marquee"
          style={{ ["--marquee-duration" as never]: "52s" }}
        >
          {items.map((item, index) => (
            <div
              key={`${item.type}-${index}`}
              className="relative shrink-0 overflow-hidden rounded-[8px] shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
              style={{ width: item.w, height: item.h }}
            >
              {item.type === "image" ? (
                <div
                  className="relative h-full w-full"
                  style={{ backgroundColor: item.bg }}
                >
                  <Image
                    src={withBasePath(item.src)}
                    alt={item.alt}
                    fill
                    sizes="300px"
                    className="object-cover"
                  />
                </div>
              ) : (
                <CarouselDiagram variant={item.variant} label={item.alt} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CarouselDiagram({
  variant,
  label,
}: {
  variant: "review" | "matching" | "dashboard";
  label: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className="flex h-full w-full flex-col justify-between border border-[rgba(0,22,102,0.08)] bg-[rgba(255,255,255,0.48)] p-4 text-[var(--text-strong)]"
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="flex size-8 items-center justify-center rounded-full bg-[var(--accent-soft)] text-[var(--accent)]">
            {variant === "review" ? <ShieldCheckIcon className="size-4" strokeWidth={1.8} /> : null}
            {variant === "matching" ? <SearchIcon className="size-4" strokeWidth={1.8} /> : null}
            {variant === "dashboard" ? <BarChart3Icon className="size-4" strokeWidth={1.8} /> : null}
          </span>
          <span className="font-mono text-[11px] text-[var(--text-body)]">
            {variant === "review" ? "Review flow" : null}
            {variant === "matching" ? "Match flow" : null}
            {variant === "dashboard" ? "Usage view" : null}
          </span>
        </div>
        <span className="h-px w-12 bg-[rgba(0,22,102,0.12)]" />
      </div>

      <div className="relative h-[132px] overflow-hidden rounded-[8px] bg-[var(--bg-surface)] p-3">
        {variant === "review" ? <AnimatedReviewDiagram /> : null}
        {variant === "matching" ? <AnimatedMatchingDiagram /> : null}
        {variant === "dashboard" ? <AnimatedDashboardDiagram /> : null}
      </div>
    </div>
  );
}

function AnimatedReviewDiagram() {
  return (
    <div className="grid h-full grid-cols-[1fr_auto_1fr] items-center gap-3">
      <DiagramStack
        icon={FileTextIcon}
        labels={["Issue", "Evidence", "Action"]}
      />
      <DiagramConnector />
      <div className="rounded-[8px] bg-white/70 p-3">
        <div className="h-2 rounded-full bg-[rgba(0,22,102,0.14)]" />
        <div className="mt-3 h-16 rounded-[7px] bg-[var(--accent-soft)]">
          <div className="h-full w-1/2 rounded-[7px] bg-[var(--accent)] opacity-80 animate-diagram-scan" />
        </div>
      </div>
    </div>
  );
}

function AnimatedMatchingDiagram() {
  return (
    <div className="flex h-full items-center gap-2">
      {[
        { label: "Filter", icon: FilterIcon },
        { label: "Match", icon: SearchIcon },
        { label: "Apply", icon: CheckCircle2Icon },
      ].map((item, index) => {
        const Icon = item.icon;

        return (
          <div key={item.label} className="flex flex-1 items-center gap-2">
            <div
              className="flex h-24 flex-1 flex-col justify-between rounded-[8px] bg-white/70 p-3 animate-diagram-flow"
              style={{ animationDelay: `${index * 0.35}s` }}
            >
              <span className="flex size-7 items-center justify-center rounded-full bg-[var(--accent-soft)] text-[var(--accent)]">
                <Icon className="size-4" strokeWidth={1.8} />
              </span>
              <span className="text-[11px] text-[var(--text-body)]">
                {item.label}
              </span>
            </div>
            {index < 2 ? <DiagramConnector /> : null}
          </div>
        );
      })}
    </div>
  );
}

function AnimatedDashboardDiagram() {
  return (
    <div className="grid h-full grid-cols-[1.05fr_0.95fr] gap-3">
      <div className="rounded-[8px] bg-white/70 p-3">
        <div className="flex h-16 items-center justify-center rounded-[7px] bg-[var(--highlight)]">
          <BarChart3Icon className="size-7 text-[var(--text-heading)]" strokeWidth={1.8} />
        </div>
        <div className="mt-3 h-2 rounded-full bg-[rgba(0,22,102,0.08)]">
          <div className="h-full w-2/3 rounded-full bg-[var(--accent)] animate-diagram-scan" />
        </div>
      </div>
      <div className="flex items-end gap-2 rounded-[8px] bg-white/70 p-3">
        {[42, 72, 54].map((height, index) => (
          <div key={height} className="flex flex-1 flex-col items-center gap-2">
            <span
              className={`w-full rounded-t-[6px] animate-diagram-pulse ${
                index === 1 ? "bg-[var(--accent)]" : "bg-[var(--highlight)]"
              }`}
              style={{ height, animationDelay: `${index * 0.3}s` }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function DiagramStack({
  labels,
  icon: Icon,
}: {
  labels: string[];
  icon: LucideIcon;
}) {
  return (
    <div className="grid gap-2">
      {labels.map((label) => (
        <div
          key={label}
          className="flex items-center gap-2 rounded-[8px] bg-white/70 px-3 py-2 text-[11px] text-[var(--text-body)]"
        >
          <Icon className="size-3.5 text-[var(--accent)]" strokeWidth={1.8} />
          {label}
        </div>
      ))}
    </div>
  );
}

function DiagramConnector() {
  return (
    <div className="h-px w-7 bg-[rgba(0,22,102,0.18)] before:block before:size-2 before:-translate-y-[3px] before:translate-x-6 before:rotate-45 before:border-r before:border-t before:border-[rgba(0,22,102,0.2)]" />
  );
}
