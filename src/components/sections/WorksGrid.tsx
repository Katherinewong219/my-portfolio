"use client";

import Image from "next/image";
import { useState } from "react";
import { Dialog } from "@base-ui/react/dialog";
import { XIcon } from "lucide-react";
import { ArrowRightIcon } from "@/components/icons";
import { withBasePath } from "@/lib/site-path";

type Work = {
  slug: string;
  title: string;
  desc: string;
  img: string;
  alt: string;
  bg: string;
};

const WORKS: Work[] = [
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
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);

  return (
    <section className="mx-auto w-full max-w-[1273px] px-6 py-24">
      <Dialog.Root
        open={selectedWork !== null}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedWork(null);
          }
        }}
      >
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
            <Dialog.Trigger
              key={w.slug}
              onClick={() => setSelectedWork(w)}
              className="group flex w-full cursor-pointer flex-col gap-6 rounded-[16px] text-left outline-none transition-transform focus-visible:ring-3 focus-visible:ring-[var(--accent)]/40"
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
            </Dialog.Trigger>
          ))}
        </div>

        <Dialog.Portal>
          <Dialog.Backdrop className="fixed inset-0 z-50 bg-[rgba(0,22,102,0.42)] backdrop-blur-[6px] data-[ending-style]:animate-out data-[starting-style]:animate-in data-[ending-style]:fade-out-0 data-[starting-style]:fade-in-0" />
          <Dialog.Popup className="fixed left-1/2 top-1/2 z-50 h-[min(820px,calc(100svh-32px))] w-[min(920px,calc(100vw-32px))] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[24px] bg-[var(--bg-page)] shadow-2xl outline-none data-[ending-style]:animate-out data-[starting-style]:animate-in data-[ending-style]:fade-out-0 data-[starting-style]:fade-in-0 data-[ending-style]:zoom-out-95 data-[starting-style]:zoom-in-95 lg:h-[min(900px,calc(100svh-48px))] xl:h-[min(980px,calc(100svh-64px))]">
            {selectedWork ? (
              <>
                <Dialog.Close
                  aria-label="Close case study"
                  className="absolute right-5 top-5 z-10 inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-[var(--bg-surface)] text-[var(--text-strong)] transition-colors hover:bg-[var(--accent)] hover:text-white focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[var(--accent)]/40"
                >
                  <XIcon className="size-5" />
                </Dialog.Close>

                <div
                  data-lenis-prevent
                  className="h-full overflow-y-auto overscroll-contain px-7 py-8 sm:px-12 sm:py-12 md:px-20 md:py-16"
                >
                  <div className="mx-auto max-w-[680px]">
                    <div className="pr-14">
                      <p className="eyebrow mb-4">{"// Case Study"}</p>
                      <Dialog.Title className="font-serif text-[clamp(38px,5vw,72px)] leading-[1.05] tracking-[-2px] text-[var(--text-heading)]">
                        {selectedWork.title}
                      </Dialog.Title>
                    </div>

                    <Dialog.Description className="mt-7 text-[17px] leading-[1.65] text-[var(--text-body)] sm:text-[18px]">
                      {selectedWork.desc}
                    </Dialog.Description>

                    <div className="mt-10 grid gap-5 border-t border-[rgba(0,22,102,0.1)] pt-8 sm:grid-cols-2">
                      <div>
                        <p className="eyebrow mb-2">Focus</p>
                        <p className="text-[18px] leading-[1.45] text-[var(--text-strong)]">
                          Product strategy, UX flow, visual direction
                        </p>
                      </div>
                      <div>
                        <p className="eyebrow mb-2">Outcome</p>
                        <p className="text-[18px] leading-[1.45] text-[var(--text-strong)]">
                          A focused MVP experience shaped for startup teams
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : null}
          </Dialog.Popup>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
}
