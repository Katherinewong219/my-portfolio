import Image from "next/image";
import { withBasePath } from "@/lib/site-path";

const SNEAK_ITEMS = [
  {
    src: "/images/hero-4.jpg",
    alt: "Cassie & Henry wedding save the date",
    w: 200,
    h: 280,
  },
  {
    src: "/images/marquee-grand-opening.jpg",
    alt: "Grand Opening Rough Records",
    w: 220,
    h: 290,
  },
  { src: "/videos/work-video-1.mp4", alt: "", w: 240, h: 320, video: true },
  {
    src: "/images/marquee-portfolio-1.jpg",
    alt: "Portfolio image",
    w: 220,
    h: 280,
  },
  {
    src: "/images/hero-3.jpg",
    alt: "Two figures on horseback",
    w: 280,
    h: 250,
  },
  {
    src: "/images/marquee-portfolio-2.jpg",
    alt: "Portfolio image",
    w: 280,
    h: 230,
  },
  {
    src: "/images/marquee-portfolio-3.jpg",
    alt: "Portfolio image",
    w: 220,
    h: 290,
  },
  {
    src: "/images/marquee-dog-portrait.jpg",
    alt: "Jack Russell Terrier portrait",
    w: 200,
    h: 250,
  },
  {
    src: "/images/marquee-portfolio-4.jpg",
    alt: "Portfolio image",
    w: 220,
    h: 280,
  },
  {
    src: "/images/marquee-yard-sale.jpg",
    alt: "Yard Sale poster",
    w: 220,
    h: 280,
  },
  { src: "/videos/work-video-2.mp4", alt: "", w: 240, h: 320, video: true },
  {
    src: "/images/marquee-portfolio-5.png",
    alt: "Portfolio image",
    w: 220,
    h: 220,
  },
];

export function SneakPeekMarquee() {
  // Duplicate items so the infinite loop is seamless
  const items = [...SNEAK_ITEMS, ...SNEAK_ITEMS];
  return (
    <section className="mx-auto flex w-full max-w-none flex-col items-center gap-10 py-16">
      <h2 className="font-serif text-[28px] tracking-[-1.12px] text-[var(--text-heading)] text-center">
        Sneak peak of my <span className="italic">works</span>
      </h2>
      <div
        className="relative w-full min-w-0 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
        }}
      >
        <div
          className="flex w-max items-end gap-6 animate-marquee"
          style={{ ["--marquee-duration" as never]: "60s" }}
        >
          {items.map((it, i) => (
            <div
              key={i}
              className="relative shrink-0 overflow-hidden rounded-[8px] shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
              style={{ width: it.w, height: it.h }}
            >
              {it.video ? (
                <video
                  src={withBasePath(it.src)}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover"
                />
              ) : (
                <Image
                  src={withBasePath(it.src)}
                  alt={it.alt || ""}
                  fill
                  sizes="280px"
                  className="object-cover"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
