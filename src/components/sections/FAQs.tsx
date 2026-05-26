"use client";

import { useState } from "react";
import { PlusIcon } from "@/components/icons";
import { motion, AnimatePresence } from "motion/react";

const FAQS = [
  {
    q: "What is your typical design process?",
    a: "I start with a quick discovery call to understand your goals, users, and constraints. Then I move into research and wireframes, followed by high-fidelity UI and a handoff package. Throughout, I share progress in short loops so you stay in the loop and we can change direction fast if needed.",
  },
  {
    q: "How long does a project usually take?",
    a: "A focused MVP design typically takes 3–5 weeks. Pitch decks land in 1–2 weeks. Larger product engagements run on a weekly retainer so we can ship continuously. I'll always give you a clear estimate after our first call.",
  },
  {
    q: "Do you handle development as well?",
    a: "Yes — I can build production-ready sites in Framer or partner with engineers for React/Next.js builds. For complex products I usually team up with vetted developers I trust so the design intent makes it to production.",
  },
  {
    q: "Can you help us with our pitch deck?",
    a: "Absolutely. Decks are some of my favorite work — story, narrative flow, and a visual language investors remember. I'll work from your raw material and turn it into something fundable.",
  },
  {
    q: "How do we get started?",
    a: "Send a note via the form below or email me at hello@artemis.com. I'll reply within a business day and we'll find time for an intro call.",
  },
];

export function FAQs() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="mx-auto w-full max-w-[820px] px-6 py-24">
      <div className="mx-auto max-w-[720px] text-center">
        <p className="eyebrow mb-4">// FAQs</p>
        <h2 className="font-serif text-[clamp(36px,5vw,64px)] tracking-[-2px] text-[var(--text-heading)]">
          Got questions? I&apos;ve got <span className="italic">answers.</span>
        </h2>
      </div>

      <div className="mt-12 flex flex-col gap-3">
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <div
              key={f.q}
              className="overflow-hidden rounded-[16px] transition-colors"
              style={{ backgroundColor: "var(--bg-surface)" }}
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-medium text-[17px] tracking-[-0.2px] text-[var(--text-heading)]">
                  {f.q}
                </span>
                <span
                  className="shrink-0 transition-transform duration-300"
                  style={{
                    transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                >
                  <PlusIcon className="h-5 w-5 text-[var(--text-heading)]" />
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <p className="px-6 pb-6 pr-12 text-[15px] leading-[1.6] text-[var(--text-body)]">
                      {f.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
