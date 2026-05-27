"use client";

import Image from "next/image";
import { useState } from "react";
import { withBasePath } from "@/lib/site-path";

const POLAROIDS = [
  {
    src: "/images/about-cat.jpg",
    caption: "A cat person",
    rot: -6,
    top: "2%",
    left: "0%",
  },
  {
    src: "/images/about-hiking.jpg",
    caption: "Enjoy hiking",
    rot: 4,
    top: "42%",
    left: "54%",
  },
];

export function BehindTheCanvas() {
  const [activePolaroid, setActivePolaroid] = useState("portrait");

  return (
    <section className="mx-auto w-full max-w-[1273px] px-6 py-24">
      <div className="mx-auto max-w-[720px] text-center">
        <p className="eyebrow mb-4">{"// About"}</p>
        <h2 className="font-serif text-[clamp(36px,5vw,64px)] tracking-[-2px] text-[var(--text-heading)]">
          Behind the <span className="italic">canvas</span>
        </h2>
        <p className="mt-4 text-[17px] leading-[1.5] text-[var(--text-body)]">
          Finally, a small glimpse into my world.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Polaroid stack */}
        <div className="relative mx-auto aspect-[4/3.5] w-full max-w-[480px]">
          <Polaroid
            id="portrait"
            src="/images/about-portrait.png"
            caption="Hi, it's me :)"
            rot={-4}
            className="absolute left-[21%] top-[8%] w-[58%]"
            active={activePolaroid === "portrait"}
            onActivate={setActivePolaroid}
          />
          {POLAROIDS.map((p) => (
            <Polaroid
              key={p.src}
              id={p.src}
              src={p.src}
              caption={p.caption}
              rot={p.rot}
              className="absolute w-[48%]"
              active={activePolaroid === p.src}
              onActivate={setActivePolaroid}
              style={{ top: p.top, left: p.left }}
            />
          ))}
        </div>

        {/* Body copy */}
        <div className="flex flex-col gap-6 self-center">
          <p className="text-[18px] leading-[1.55] text-[var(--text-body)]">
            I design user-focused products that make complex tasks feel simple
            and intuitive. By understanding how people work, I create
            experiences that reduce friction, improve clarity, and help users
            get things done more efficiently.
          </p>
          <p className="text-[18px] leading-[1.55] text-[var(--text-body)]">
            When I&apos;m not designing, I enjoy making coffee, exploring new
            cafes, and travelling. I&apos;m naturally curious about how people
            think, and believe great design comes from empathy and a genuine
            desire to make things work better.
          </p>
        </div>
      </div>
    </section>
  );
}

function Polaroid({
  id,
  src,
  caption,
  rot,
  className,
  active,
  onActivate,
  style,
}: {
  id: string;
  src: string;
  caption: string;
  rot: number;
  className?: string;
  active: boolean;
  onActivate: (id: string) => void;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`cursor-pointer animate-float ${className ?? ""}`}
      onPointerEnter={() => onActivate(id)}
      onFocus={() => onActivate(id)}
      tabIndex={0}
      style={{
        transform: `rotate(${rot}deg)`,
        zIndex: active ? 20 : 0,
        ["--rot" as never]: `${rot}deg`,
        ["--float-duration" as never]: `${6 + Math.abs(rot)}s`,
        ...style,
      }}
    >
      <div
        className={`flex flex-col gap-3 bg-white p-3 pb-5 transition-[box-shadow,transform] duration-300 ease-in-out ${
          active
            ? "scale-[1.04] shadow-[0_24px_55px_rgba(0,0,0,0.18)]"
            : "scale-100 shadow-[0_18px_40px_rgba(0,0,0,0.12)]"
        }`}
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
    </div>
  );
}
