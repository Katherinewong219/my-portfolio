"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
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
  caseStudy?: CaseStudy;
};

type CaseStudy = {
  oneLineSummary: string;
  snapshot: {
    label: string;
    value: string;
  }[];
  context: string[];
  coreChallenge: string;
  approachIntro: string;
  principles: string[];
  insights: {
    title: string;
    body: string;
    decision: string;
    impact: string;
  }[];
  impact: string[];
};

const WORKS: Work[] = [
  {
    slug: "ai-compliance-review",
    title: "AI Compliance Review",
    desc: "Designed and scaled an AI compliance review platform that enables marketing teams to self-serve content checks against internal rules and regulatory requirements across multiple workflows and integrations.",
    img: "/images/work-finflow.jpg",
    alt: "AI compliance review platform case study preview",
    bg: "rgb(248, 232, 220)",
    caseStudy: {
      oneLineSummary:
        "Designed and scaled an AI compliance review platform that enables marketing teams to self-serve content checks against internal rules and regulatory requirements across multiple workflows and integrations. The goal was to reduce manual review effort, save compliance team resources, and ease the bottleneck caused by limited compliance review capacity.",
      snapshot: [
        {
          label: "Project title",
          value: "AI Compliance Review",
        },
        {
          label: "Role",
          value: "Product Designer",
        },
        {
          label: "Timeline",
          value: "2025-Ongoing",
        },
        {
          label: "Platform",
          value:
            "Enterprise SaaS web app, document review experience, design system, and third-party integrations",
        },
        {
          label: "Project type",
          value:
            "AI compliance, B2B SaaS, workflow design, design systems, integrations, enterprise review tools",
        },
        {
          label: "My contribution",
          value:
            "I led design across core review workflows, rule-application flows, asset management, integrations, and the design system. My work included product flows, interaction design, component design, Figma libraries, written usage guidelines, design QA, and cross-functional collaboration with product and engineering.",
        },
      ],
      context: [
        "Compliance teams often need to review marketing, legal, and business content before it can be published or shared. This process can be slow, manual, and difficult to scale, especially when content is created across different tools such as documents, design files, web pages, and project management platforms.",
        "The product needed to help teams review content more efficiently while keeping the experience clear, trustworthy, and flexible enough for different enterprise workflows.",
      ],
      coreChallenge:
        "Users needed to understand what compliance issues were found, why they mattered, and what action to take next. However, the review experience involved complex rules, multiple content sources, different user roles, and many edge cases. The challenge was not just to design a cleaner interface. It was to turn a complex compliance review process into a guided, scalable product experience that could support enterprise users across multiple workflows.",
      approachIntro:
        "I worked as the product designer across several high-impact areas of the platform, including the review experience, rule-application flow, asset library, integrations, activity history, and design system.",
      principles: [
        "Make complex review results easier to understand",
        "Bring compliance review into users' existing workflows",
        "Create scalable foundations for faster product delivery",
      ],
      insights: [
        {
          title: "Compliance review needs clarity, not just detection",
          body:
            "AI can identify potential issues, but users still need to understand what was found, where it appears, why it matters, and what action to take next.",
          decision:
            "I designed a structured review experience that grouped findings into clearer evidence cards, connected issues back to the relevant content, and supported both in-line and side-panel review patterns.",
          impact:
            "This improved clarity across complex compliance review workflows and helped users move from simply seeing a list of issues to understanding the evidence, context, and recommended next steps. It also created a more scalable review pattern that could be reused across different content types and review surfaces.",
        },
        {
          title: "The right rules depend on the right context",
          body:
            "A compliance review is only useful when the right rules are applied to the right type of content. Users needed a clearer way to provide context before or during the review.",
          decision:
            "I redesigned the rule-application flow into a questionnaire experience with more flexible question types, editable answers, metadata visibility, and conditional logic.",
          impact:
            "This supported more accurate rule application by giving the system better context before the review. It also gave users more control and visibility over the information driving the review, making the experience feel more transparent and trustworthy.",
        },
        {
          title: "Review workflows should meet users where they work",
          body:
            "Users create and review content across many tools. A review product becomes more valuable when it connects directly into those existing environments.",
          decision:
            "I designed integration experiences for common workplace tools, including document editors, design platforms, browser-based workflows, and work-management tools. These flows included entry points, review handoff, source-tracking behaviours, and email/in-app notification patterns.",
          impact:
            "This reduced context switching and helped users move between the review platform and their source content more smoothly. It also made the compliance review workflow easier to adopt because users could access review actions within the tools they already used day to day.",
        },
        {
          title: "Review work does not end after the first result",
          body:
            "Users also needed to understand what happened to an asset over time, including when it was uploaded, submitted, updated, reviewed, or changed.",
          decision:
            "I improved asset management patterns, including the asset library, date models, review notifications, saved rules, asset history, and activity-tracking experiences.",
          impact:
            "This created more scalable patterns for asset management and activity tracking. It helped users better understand the lifecycle of reviewed content and gave teams clearer visibility into review history, status changes, and follow-up actions.",
        },
        {
          title: "A growing product needs a stronger design foundation",
          body:
            "As more review surfaces, dashboards, integrations, and workflows were added, the team needed a more consistent design language and reusable components.",
          decision:
            "I contributed to the planning and development of a design system component library alongside other designers and cross-functional team members. This included core components such as accordions, banners, badges, breadcrumbs, comments, chips, drawers, dropdowns, labels, messages, modals, pagination, status badges, text fields, upload fields, icons, and more. I also helped evaluate component-library directions, mapped component needs for dashboard experiences, and wrote usage guides to support consistent implementation.",
          impact:
            "The design system strengthened product consistency, reduced repeated design effort, and gave product and engineering teams a stronger foundation for scaling future workflows. The written guides also improved design-engineering alignment, supported faster delivery, and helped maintain product quality through more consistent design review.",
        },
      ],
      impact: [
        "This became one of my most significant product design contributions because it helped establish key foundations for the platform's growth, contributing to a successful $12M USD Series A raise, supporting 4.5x revenue growth, and helping the company maintain a 100% customer retention rate with no customer churn.",
        "Beyond these business outcomes, the work also created a more scalable product foundation across compliance review, integrations, asset management, and the design system, supporting the product as it grew to the next level.",
      ],
    },
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
  const [isPopupScrolling, setIsPopupScrolling] = useState(false);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  function handlePopupScroll() {
    setIsPopupScrolling(true);

    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = setTimeout(() => {
      setIsPopupScrolling(false);
    }, 900);
  }

  return (
    <section id="work" className="mx-auto w-full max-w-[1273px] scroll-mt-[104px] px-6 py-24">
      <Dialog.Root
        open={selectedWork !== null}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedWork(null);
            setIsPopupScrolling(false);
          }
        }}
      >
        <div className="mx-auto max-w-[720px] text-center">
        <p className="eyebrow mb-4">{"// Works"}</p>
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
          <Dialog.Popup className="fixed left-1/2 top-1/2 z-50 h-[min(820px,calc(100svh-32px))] w-[min(1040px,calc(100vw-32px))] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[24px] bg-[var(--bg-page)] shadow-2xl outline-none data-[ending-style]:animate-out data-[starting-style]:animate-in data-[ending-style]:fade-out-0 data-[starting-style]:fade-in-0 data-[ending-style]:zoom-out-95 data-[starting-style]:zoom-in-95 lg:h-[min(900px,calc(100svh-48px))] xl:h-[min(980px,calc(100svh-64px))]">
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
                  onScroll={handlePopupScroll}
                  className={`case-study-scroll h-full overflow-y-auto overscroll-contain px-7 py-8 sm:px-12 sm:py-12 md:px-20 md:py-16 ${
                    isPopupScrolling ? "is-scrolling" : ""
                  }`}
                >
                  <div className="mx-auto max-w-[820px]">
                    <div className="pr-14">
                      <p className="eyebrow mb-4">{"// Case Study"}</p>
                      <Dialog.Title className="font-serif text-[clamp(38px,5vw,72px)] leading-[1.05] tracking-[-2px] text-[var(--text-heading)]">
                        {selectedWork.title}
                      </Dialog.Title>
                    </div>

                    <Dialog.Description className="mt-7 text-[17px] leading-[1.65] text-[var(--text-body)] sm:text-[18px]">
                      {selectedWork.caseStudy?.oneLineSummary ?? selectedWork.desc}
                    </Dialog.Description>

                    {selectedWork.caseStudy ? (
                      <CaseStudyContent caseStudy={selectedWork.caseStudy} />
                    ) : (
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
                    )}
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

function CaseStudyContent({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <div className="mt-10 flex flex-col gap-12 border-t border-[rgba(0,22,102,0.1)] pt-8">
      <section>
        <p className="eyebrow mb-5">01 / Snapshot</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {caseStudy.snapshot.map((item) => (
            <div
              key={item.label}
              className="rounded-[16px] bg-[var(--bg-surface)] p-5"
            >
              <p className="eyebrow mb-2 text-[12px]">{item.label}</p>
              <p className="text-[16px] leading-[1.55] text-[var(--text-strong)]">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      <CaseStudySection eyebrow="02 / Context & Challenge" title="Context">
        {caseStudy.context.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <div className="rounded-[16px] bg-[var(--accent-soft)] p-6">
          <p className="eyebrow mb-3">Core challenge</p>
          <p className="text-[17px] leading-[1.65] text-[var(--text-strong)]">
            {caseStudy.coreChallenge}
          </p>
        </div>
      </CaseStudySection>

      <CaseStudySection eyebrow="03 / My Role & Approach" title="Approach">
        <p>{caseStudy.approachIntro}</p>
        <div className="grid gap-3">
          {caseStudy.principles.map((principle, index) => (
            <div
              key={principle}
              className="flex gap-4 rounded-[16px] bg-[var(--bg-surface)] p-5"
            >
              <span className="font-mono text-[13px] text-[var(--accent)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-[17px] leading-[1.45] text-[var(--text-strong)]">
                {principle}
              </p>
            </div>
          ))}
        </div>
      </CaseStudySection>

      <section>
        <p className="eyebrow mb-5">04 / Key Insights & Design Decisions</p>
        <div className="grid gap-5">
          {caseStudy.insights.map((insight, index) => (
            <article
              key={insight.title}
              className="rounded-[18px] border border-[rgba(0,22,102,0.1)] bg-[rgba(255,255,255,0.36)] p-6"
            >
              <p className="eyebrow mb-3">Insight {index + 1}</p>
              <h3 className="font-serif text-[26px] leading-[1.25] tracking-[-1px] text-[var(--text-heading)]">
                {insight.title}
              </h3>
              <p className="mt-4 text-[16px] leading-[1.65] text-[var(--text-body)]">
                {insight.body}
              </p>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div>
                  <p className="eyebrow mb-2">Design decision</p>
                  <p className="text-[15px] leading-[1.65] text-[var(--text-strong)]">
                    {insight.decision}
                  </p>
                </div>
                <div>
                  <p className="eyebrow mb-2">Why it mattered</p>
                  <p className="text-[15px] leading-[1.65] text-[var(--text-strong)]">
                    {insight.impact}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-[20px] bg-[var(--text-heading)] p-7 text-white">
        <p className="eyebrow mb-4 text-white/80">05 / Impact</p>
        <div className="grid gap-5">
          {caseStudy.impact.map((paragraph) => (
            <p key={paragraph} className="text-[17px] leading-[1.65]">
              {paragraph}
            </p>
          ))}
        </div>
      </section>
    </div>
  );
}

function CaseStudySection({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h3 className="font-serif text-[30px] leading-[1.25] tracking-[-1px] text-[var(--text-heading)]">
        {title}
      </h3>
      <div className="mt-5 grid gap-5 text-[16px] leading-[1.7] text-[var(--text-body)]">
        {children}
      </div>
    </section>
  );
}
