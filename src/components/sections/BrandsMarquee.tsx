const BRANDS = [
  "FinFlow",
  "Altoe",
  "Sonooi",
  "LaunchPad",
  "radiO",
  "TalentBridge",
  "Beeply",
];

export function BrandsMarquee() {
  const items = [...BRANDS, ...BRANDS, ...BRANDS];
  return (
    <section className="mx-auto w-full max-w-[1273px] px-6 py-16">
      <h3 className="mb-8 text-center font-serif text-[24px] tracking-[-0.96px] text-[var(--text-heading)]">
        Brands I&apos;ve <span className="italic">Worked With</span>
      </h3>
      <div
        className="w-full min-w-0 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)",
        }}
      >
        <div
          className="flex w-max items-center gap-16 animate-marquee"
          style={{ ["--marquee-duration" as never]: "35s" }}
        >
          {items.map((b, i) => (
            <span
              key={i}
              className="shrink-0 font-serif text-[40px] tracking-[-1.6px] text-[var(--text-strong)] opacity-70 transition-opacity hover:opacity-100"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
