"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { withBasePath } from "@/lib/site-path";

const TAGLINE = "Welcome to my design world!";
const ARC_TEXT =
  "✦ User Experience ✦ User Interface ✦ Innovative Design Solutions ✦ Seamless Interactions ✦ Creative Problem-Solving ✦ Prototyping";
const ARC_PATH_LENGTH = Math.round(2 * Math.PI * 270);
const ARC_END_PADDING = 4;

export function Hero() {
  return (
    <section className="relative mx-auto flex h-[420px] w-full max-w-[1273px] flex-col items-center justify-center overflow-hidden px-6 py-10 text-center md:h-[720px] md:py-6">
      {/* Decorative arc text — slowly rotating SVG */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[min(86vw,360px)] w-[min(86vw,360px)] -translate-x-1/2 -translate-y-1/2 md:h-[623px] md:w-[623px]"
        aria-hidden
      >
        <svg
          viewBox="0 0 623 623"
          className="h-full w-full animate-spin-slow opacity-70"
          style={{ animationDuration: "60s" }}
        >
          <defs>
            <path
              id="arc"
              d="M 311.5,311.5 m -270,0 a 270,270 0 1,1 540,0 a 270,270 0 1,1 -540,0"
            />
          </defs>
          <text
            fill="var(--text-strong)"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "16px",
              letterSpacing: "0.18em",
            }}
          >
            <textPath
              href="#arc"
              startOffset="0"
              textLength={ARC_PATH_LENGTH - ARC_END_PADDING}
              lengthAdjust="spacing"
            >
              {ARC_TEXT}
            </textPath>
          </text>
        </svg>
      </div>

      {/* Floating photo cards */}
      <FloatingPhoto
        src="/images/hero-1.jpg"
        alt=""
        className="absolute left-[5%] top-[9%] h-[118px] w-[92px] md:left-[6%] md:top-[12%] md:h-[252px] md:w-[198px]"
        rot={-6}
      />
      <FloatingPhoto
        src="/images/hero-2.png"
        alt=""
        className="absolute right-[5%] top-[7%] h-[98px] w-[72px] md:right-[8%] md:top-[6%] md:h-[216px] md:w-[160px]"
        rot={5}
      />
      <FloatingPhoto
        src="/images/hero-3.jpg"
        alt=""
        className="absolute bottom-[10%] left-[7%] h-[64px] w-[90px] md:bottom-[10%] md:left-[10%] md:h-[130px] md:w-[183px]"
        rot={4}
      />
      <FloatingPhoto
        src="/images/hero-4.jpg"
        alt=""
        className="absolute bottom-[14%] right-[8%] h-[54px] w-[76px] md:bottom-[14%] md:right-[12%] md:h-[101px] md:w-[142px]"
        rot={-5}
      />

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-[820px] text-center font-serif text-[clamp(40px,7vw,80px)] leading-[1.1] tracking-[-2px] text-[var(--text-heading)]"
      >
        Product <span className="block italic">Designer</span>
      </motion.h1>

      <div className="relative z-10 mt-6 flex h-[26px] items-center overflow-hidden">
        {TAGLINE.split("").map((ch, i) => (
          <motion.span
            key={i}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.4 + i * 0.025,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="font-mono text-[15px] text-[var(--text-strong)] whitespace-pre"
          >
            {ch}
          </motion.span>
        ))}
      </div>
    </section>
  );
}

function FloatingPhoto({
  src,
  alt,
  className,
  rot,
}: {
  src: string;
  alt: string;
  className?: string;
  rot: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, rotate: rot }}
      animate={{ opacity: 1, scale: 1, rotate: rot }}
      transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className={`overflow-hidden rounded-[8px] shadow-[0_10px_30px_rgba(0,0,0,0.08)] ${className}`}
      style={{ ["--rot" as never]: `${rot}deg` }}
    >
      <Image
        src={withBasePath(src)}
        alt={alt}
        fill
        sizes="(min-width: 768px) 220px, 50vw"
        className="object-cover"
      />
    </motion.div>
  );
}
