import Image from "next/image";
import { withBasePath } from "@/lib/site-path";

const POLAROIDS = [
  {
    src: "/images/about-cat.jpg",
    caption: "A cat person",
    rot: -6,
    top: "0%",
    left: "2%",
  },
  {
    src: "/images/about-hiking.jpg",
    caption: "Enjoy hiking",
    rot: 4,
    top: "32%",
    left: "60%",
  },
];

export function BehindTheCanvas() {
  return (
    <section className="mx-auto w-full max-w-[1273px] px-6 py-24">
      <div className="mx-auto max-w-[720px] text-center">
        <p className="eyebrow mb-4">{"// About"}</p>
        <h2 className="font-serif text-[clamp(36px,5vw,64px)] tracking-[-2px] text-[var(--text-heading)]">
          Behind the <span className="italic">canvas</span>
        </h2>
        <p className="mt-4 text-[17px] leading-[1.5] text-[var(--text-body)]">
          Finally, meet the designer passionate about helping startups succeed —
          a quick peek into my world.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Polaroid stack */}
        <div className="relative mx-auto aspect-[4/3.5] w-full max-w-[480px]">
          <Polaroid
            src="/images/about-portrait.png"
            caption="Hi, it's me :)"
            rot={-4}
            className="absolute left-[8%] top-[5%] w-[58%]"
          />
          {POLAROIDS.map((p) => (
            <Polaroid
              key={p.caption}
              src={p.src}
              caption={p.caption}
              rot={p.rot}
              className="absolute w-[48%]"
              style={{ top: p.top, left: p.left }}
            />
          ))}
        </div>

        {/* Body copy */}
        <div className="flex flex-col gap-6 self-center">
          <p className="text-[18px] leading-[1.55] text-[var(--text-body)]">
            I help startups turn big ideas into designs that actually work.
            Whether you need an MVP that converts or a pitch deck that closes
            funding, I focus on results over pretty pixels.
          </p>
          <p className="text-[18px] leading-[1.55] text-[var(--text-body)]">
            When I&apos;m not designing, you&apos;ll find me stargazing or
            hunting for the perfect coffee. I believe great design should solve
            real problems fast — no endless revisions, no designer ego, just
            stuff that works.
          </p>
        </div>
      </div>
    </section>
  );
}

function Polaroid({
  src,
  caption,
  rot,
  className,
  style,
}: {
  src: string;
  caption: string;
  rot: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`flex flex-col gap-3 bg-white p-3 pb-5 shadow-[0_18px_40px_rgba(0,0,0,0.12)] animate-float ${className ?? ""}`}
      style={{
        transform: `rotate(${rot}deg)`,
        ["--rot" as never]: `${rot}deg`,
        ["--float-duration" as never]: `${6 + Math.abs(rot)}s`,
        ...style,
      }}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <Image
          src={withBasePath(src)}
          alt={caption}
          fill
          sizes="280px"
          className="object-cover"
        />
      </div>
      <p className="text-center font-mono text-[13px] text-[var(--text-strong)]">
        {caption}
      </p>
    </div>
  );
}
