"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Dialog } from "@base-ui/react/dialog";
import {
  BarChart3Icon,
  CalendarDaysIcon,
  CheckCircle2Icon,
  ClipboardCheckIcon,
  FileTextIcon,
  FilterIcon,
  HeartPulseIcon,
  LightbulbIcon,
  PawPrintIcon,
  SearchIcon,
  SlidersHorizontalIcon,
  StethoscopeIcon,
  WorkflowIcon,
  XIcon,
  ZapIcon,
} from "lucide-react";
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

type DiagramVariant =
  | "evidence"
  | "rules"
  | "integrations"
  | "matching"
  | "schedule"
  | "operations"
  | "records"
  | "comparison"
  | "booking"
  | "dashboard"
  | "timeline"
  | "guidance";

type HighlightDiagram = {
  title: string;
  caption: string;
  variant: DiagramVariant;
  image?: DiagramImage;
};

type DiagramImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type DiagramIcon =
  | "barChart"
  | "calendar"
  | "check"
  | "clipboard"
  | "file"
  | "filter"
  | "heart"
  | "lightbulb"
  | "paw"
  | "sliders"
  | "search"
  | "stethoscope"
  | "workflow"
  | "zap";

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
    diagram?: HighlightDiagram;
  }[];
  impact: string[];
};

const WORKS: Work[] = [
  {
    slug: "ai-compliance-review",
    title: "AI Compliance Review",
    desc: "Designed and scaled an AI compliance review platform that enables marketing teams to self-serve content checks against internal rules and regulatory requirements across multiple workflows and integrations.",
    img: "/images/Compliance1.png",
    alt: "AI compliance review platform case study preview",
    bg: "rgb(248, 232, 220)",
    caseStudy: {
      oneLineSummary:
        "Designed and scaled an AI compliance review platform that enables marketing teams to self-serve content checks against internal rules and regulatory requirements across multiple workflows and integrations. The goal was to reduce manual review effort, save compliance team resources, and ease the bottleneck caused by limited compliance review capacity.",
      snapshot: [
        {
          label: "Role",
          value: "Product Designer",
        },
        {
          label: "Timeline",
          value: "2025-Ongoing",
        },
        {
          label: "Project type",
          value:
            "Enterprise review tools, AI compliance, B2B SaaS, workflow design, design systems, integrations",
        },
        {
          label: "My contribution",
          value:
            "Led design across core review workflows, rule-application flows, asset management, integrations, and the design system, covering product flows, interaction design, component design, design QA, and product-engineering collaboration.",
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
          diagram: {
            title: "Evidence-led reviews",
            caption: "Findings are grouped into a guided path from issue to evidence to next step.",
            variant: "evidence",
            image: {
              src: "/images/ai-compliance-evidence-led-reviews.svg",
              alt: "Compliance rules, reasoning, and action flowing into a risk issue panel",
              width: 913,
              height: 279,
            },
          },
        },
        {
          title: "The right rules depend on the right context",
          body:
            "A compliance review is only useful when the right rules are applied to the right type of content. Users needed a clearer way to provide context before or during the review.",
          decision:
            "I redesigned the rule-application flow into a questionnaire experience with more flexible question types, editable answers, metadata visibility, and conditional logic.",
          impact:
            "This supported more accurate rule application by giving the system better context before the review. It also gave users more control and visibility over the information driving the review, making the experience feel more transparent and trustworthy.",
          diagram: {
            title: "Context-aware rules",
            caption: "Questionnaire answers shape the active rule set before review starts.",
            variant: "rules",
            image: {
              src: "/images/ai-compliance-context-aware-rules.svg",
              alt: "Rules with brief, audience, and region context cards",
              width: 452,
              height: 280,
            },
          },
        },
        {
          title: "Review workflows should meet users where they work",
          body:
            "Users create and review content across many tools. A review product becomes more valuable when it connects directly into those existing environments.",
          decision:
            "I designed integration experiences for common workplace tools, including document editors, design platforms, browser-based workflows, and work-management tools. These flows included entry points, review handoff, source-tracking behaviours, and email/in-app notification patterns.",
          impact:
            "This reduced context switching and helped users move between the review platform and their source content more smoothly. It also made the compliance review workflow easier to adopt because users could access review actions within the tools they already used day to day.",
          diagram: {
            title: "Workflow integrations",
            caption: "Source tools, review handoff, and notifications stay connected.",
            variant: "integrations",
            image: {
              src: "/images/ai-compliance-workflow-integrations.svg",
              alt: "Workplace apps around a review regulated content action",
              width: 566,
              height: 280,
            },
          },
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
    title: "Healthcare Workforce Platform",
    desc: "Redesigned key workflows across a healthcare workforce platform to help nurses find suitable shifts faster, while helping managers and HR teams manage scheduling, timesheets, and workforce operations with less manual effort.",
    img: "/images/work-uPaged.png",
    alt: "Healthcare workforce platform case study preview",
    bg: "rgb(238, 235, 245)",
    caseStudy: {
      oneLineSummary:
        "Redesigned key workflows across a healthcare workforce platform to help nurses find suitable shifts faster, while helping managers and HR teams manage scheduling, timesheets, and workforce operations with less manual effort.",
      snapshot: [
        {
          label: "Role",
          value: "Product Designer",
        },
        {
          label: "Timeline",
          value: "2022-2023",
        },
        {
          label: "Project type",
          value:
            "B2C mobile app, B2B SaaS, marketplace, scheduling, HR operations",
        },
        {
          label: "My contribution",
          value:
            "Redesigned three connected product areas: job discovery for nurses, schedule management for managers, and HR dashboard workflows for admin teams. My work included qualitative and quantitative research, user flows, wireframes, prototypes, UI design, usability improvements, and developer handover.",
        },
      ],
      context: [
        "Healthcare staffing involved multiple users and highly manual workflows. Agents had to call nurses one by one to fill shifts, nurses were often in a passive position waiting for suitable opportunities, managers had to create and repost shifts repeatedly, and HR teams needed to review timesheets, manage worker preferences, and process admin tasks accurately.",
        "The goal was to make the platform easier to use across the full staffing journey, from finding work to scheduling shifts and managing post-shift admin.",
      ],
      coreChallenge:
        "Users needed to complete staffing tasks quickly and accurately, but the traditional workflow lacked transparency, created repeated manual work, and made job matching slower than it needed to be.",
      approachIntro:
        "My approach focused on improving the connected workflows across nurse job discovery, manager scheduling, and HR operations while keeping the product familiar for existing users.",
      principles: [
        "Make decisions easier by showing the most relevant job, shift, and timesheet information upfront",
        "Reduce repeated work with templates, bulk actions, clearer forms, and reusable interaction patterns",
        "Keep workflows familiar by improving the experience without forcing existing users to relearn the whole product",
      ],
      insights: [
        {
          title: "Nurses needed faster ways to compare jobs",
          body:
            "Nurses were browsing many job options, but key details were not always easy to scan or compare.",
          decision:
            "I redesigned the Find Work experience with clearer job cards, stronger filtering, and job-match indicators to help nurses find relevant shifts faster.",
          impact:
            "This accelerated job matching, reduced search effort, and helped nurses make quicker decisions when comparing available shifts.",
          diagram: {
            title: "Shift matching",
            caption: "Filters, match signals, and job cards help nurses compare quickly.",
            variant: "matching",
          },
        },
        {
          title: "Managers needed to create shifts without repeating the same steps",
          body:
            "Scheduling was slowed down by repetitive manual input, especially when creating similar shifts or reposting jobs.",
          decision:
            "I simplified the scheduling flow, reduced unnecessary form fields, introduced reusable templates, and supported faster reposting patterns.",
          impact:
            "This reduced scheduling effort and made it easier for managers to create and manage jobs at scale.",
          diagram: {
            title: "Reusable scheduling",
            caption: "Templates and reposting patterns cut repeated shift setup work.",
            variant: "schedule",
          },
        },
        {
          title: "HR teams needed clearer timesheet and worker-management workflows",
          body:
            "Admin users needed to process timesheets accurately while managing worker preferences and operational details.",
          decision:
            "I improved dashboard patterns for timesheet review, bulk sign-off, worker preferences, and conditional interactions.",
          impact:
            "This helped HR teams process information faster, reduce manual review effort, and maintain better accuracy across workforce operations.",
          diagram: {
            title: "Operations dashboard",
            caption: "Timesheets, preferences, and bulk sign-off become one scannable workspace.",
            variant: "operations",
          },
        },
      ],
      impact: [
        "The redesign improved the platform across both sides of the healthcare workforce marketplace. Active monthly talent increased by 145% and shift applications increased by 38% between Apr 2023 and Mar 2024.",
        "This project helped me dive deeper into key pain points in the healthcare workforce industry, especially slow job matching, repetitive scheduling work, and fragmented admin processes.",
        "By solving these problems through intuitive design and clearer information architecture, I helped users make faster decisions, reduce manual effort, and complete workforce tasks more accurately. My biggest contribution was helping set the product foundation for a more scalable staffing platform that continued to support job discovery, scheduling, and HR operations as the marketplace grew.",
      ],
    },
  },
  {
    slug: "pet-health-app",
    title: "Pet Health App",
    desc: "Designed a mobile app concept that helps pet owners manage health records, track symptoms, compare vet clinics, book appointments, and access care information in one place.",
    img: "/images/work-pethealth.png",
    alt: "Pet health app case study preview",
    bg: "rgb(220, 233, 245)",
    caseStudy: {
      oneLineSummary:
        "Designed a mobile app concept that helps pet owners manage health records, track symptoms, compare vet clinics, book appointments, and access care information in one place.",
      snapshot: [
        {
          label: "Role",
          value: "UX/UI Designer",
        },
        {
          label: "Timeline",
          value: "Jun 2022",
        },
        {
          label: "Project type",
          value: "Healthcare, pet care, mobile app, service design",
        },
        {
          label: "My contribution",
          value:
            "I worked across user research, competitor analysis, user flows, wireframes, prototyping, usability testing, and final UI design.",
        },
      ],
      context: [
        "Pet owners often manage their pet's health information across scattered places, including vet emails, paper records, reminders, and personal notes.",
        "They also face difficulty when exploring a new vet clinic. Clinic information is often spread across websites and reviews, pricing is not always transparent, and it can be hard to compare before booking.",
      ],
      coreChallenge:
        "Pet owners needed an easier way to manage their pet's care and choose the right clinic, but the current process was fragmented, and information was not transparent. The goal was to create a simple mobile experience that made pet care feel more organised and accessible, from managing health records to finding and booking suitable care.",
      approachIntro: "My approach focused on three principles.",
      principles: [
        "Centralise important pet health information: Bring records, reminders, symptoms, and appointment details into one place.",
        "Make vet discovery easier to compare: Help users compare clinics by services, availability, location, pricing signals, and trust factors.",
        "Build trust through clarity: Use simple language, clear categories, and guided actions to make pet care decisions feel less overwhelming.",
      ],
      insights: [
        {
          title: "Pet owners needed one place to manage health records",
          body:
            "Research showed that pet health information was often scattered across different formats, making it easy to lose track of important details.",
          decision:
            "I designed a pet profile that centralised key information such as medical history, vaccination records, symptoms, and care notes.",
          impact:
            "This helped users access important pet health information faster and reduced the need to search across multiple sources.",
          diagram: {
            title: "Pet health hub",
            caption: "Records, symptoms, reminders, and notes come together around one profile.",
            variant: "records",
          },
        },
        {
          title: "Finding the right vet was difficult to compare",
          body:
            "Pet owners found it hard to compare vet clinics because services, fees, availability, and clinic information were often hidden or inconsistent across different websites.",
          decision:
            "I designed a clinic discovery and comparison experience that helped users review key information before booking.",
          impact:
            "This made the decision process more transparent and helped users feel more confident when choosing care.",
          diagram: {
            title: "Clinic comparison",
            caption: "Services, availability, trust markers, and price signals become comparable.",
            variant: "comparison",
          },
        },
        {
          title: "Booking care needed to feel simple and reassuring",
          body:
            "When pets are unwell, users may feel worried and need a quick way to take action.",
          decision:
            "I designed a booking flow that helped users find care options, select an appointment, and provide relevant context before the visit.",
          impact:
            "This reduced friction in the appointment process and helped users feel more prepared when seeking care.",
          diagram: {
            title: "Reassuring booking",
            caption: "Care options move into appointment selection and visit context.",
            variant: "booking",
          },
        },
      ],
      impact: [
        "This project helped me understand empathy-driven design and the importance of thinking from users' perspective. Good design should support users in making better, more confident decisions, especially when they are caring for their pets.",
        "My biggest contribution was validating ideas and designing the end-to-end experience that made pet care feel more organised, transparent, and reassuring, from managing everyday health records to choosing and booking suitable care.",
      ],
    },
  },
  {
    slug: "energy-customer-portal",
    title: "Energy Customer Portal",
    desc: "Designed a customer portal experience that helps energy users understand their usage, compare billing data, monitor savings, and make more informed decisions about energy plans and consumption.",
    img: "/images/work-talentbridge.png",
    alt: "Energy customer portal case study preview",
    bg: "rgb(235, 234, 230)",
    caseStudy: {
      oneLineSummary:
        "Designed a customer portal experience that helps energy users understand their usage, compare billing data, monitor savings, and make more informed decisions about energy plans and consumption.",
      snapshot: [
        {
          label: "Role",
          value: "UX/UI Designer",
        },
        {
          label: "Timeline",
          value: "Aug 2022",
        },
        {
          label: "Project type",
          value: "Data visualisation, customer portal, energy tech",
        },
        {
          label: "My contribution",
          value:
            "I worked on research, competitor analysis, MVP prioritisation, data visualisation recommendations, user flows, wireframes, prototypes, usability testing, and final UI design.",
        },
      ],
      context: [
        "Energy users are often cost-conscious, but they do not always have clear access to the data they need to reduce bills or lower their carbon footprint if they would like to.",
        "The challenge was to make energy data easier to understand and more actionable.",
      ],
      coreChallenge:
        "Users needed to understand their energy usage, costs, and savings opportunities, but the current platform lacked clear data visibility and personalised guidance. The goal was to create a smoother customer portal that turned complex energy data into simple, useful insights.",
      approachIntro: "My approach focused on three principles.",
      principles: [
        "Make data easier to understand: Use clear visualisations to help users quickly understand usage, billing, and savings.",
        "Turn insights into action: Provide recommendations, plan comparisons, and saving tips so users know what to do next.",
        "Support positive behaviour change: Reinforce better energy habits through useful feedback, renewable information, and future engagement ideas.",
      ],
      insights: [
        {
          title: "Users needed clarity before they could take action",
          body:
            "Survey findings showed that users cared about reducing energy costs, but usability testing revealed that key billing and usage information was not easy enough to find or interpret.",
          decision:
            "I designed dashboard patterns that made billing, usage, savings, and renewable energy information easier to scan.",
          impact:
            "This helped users understand their energy behaviour more clearly and made the portal feel more useful day to day.",
          diagram: {
            title: "Usage dashboard",
            caption: "Billing, usage, savings, and renewable signals are easier to scan.",
            variant: "dashboard",
          },
        },
        {
          title: "Comparison helps users make smarter decisions",
          body:
            "Through interviews and usability testing, I found that users needed more than standalone usage numbers. They wanted to understand whether their energy usage was improving, getting worse, or changing across different periods.",
          decision:
            "I designed side-by-side comparison patterns to help users compare usage and billing data across billing periods, seasons, and selected dates.",
          impact:
            "This made it easier for users to spot changes, understand patterns, and make more informed decisions about their energy consumption.",
          diagram: {
            title: "Period comparison",
            caption: "Side-by-side timelines reveal changes across dates, seasons, and bills.",
            variant: "timeline",
          },
        },
        {
          title: "Users needed guidance, not just data",
          body:
            "Survey findings and competitor analysis showed that raw energy data became more valuable when paired with practical next steps, such as plan recommendations, saving tips, and alerts.",
          decision:
            "I prioritised features such as current and recommended plans, saving tips, billing comparison, notifications, and quick account switching.",
          impact:
            "This helped shift the portal from a passive dashboard into a more actionable decision-making tool.",
          diagram: {
            title: "Guided next steps",
            caption: "Plans, alerts, and saving tips turn raw data into practical actions.",
            variant: "guidance",
          },
        },
        {
          title: "The MVP needed to balance user value and delivery effort",
          body:
            "I used an MVP framework to categorise ideas based on user value and delivery effort. This helped focus the first version on features that could improve the experience quickly without overcomplicating the product.",
          decision:
            "I prioritised easy-win features such as essential billing and usage information, notifications, recommended plans, saving tips, account switching, billing comparison, and quizzes.",
          impact:
            "This gave the product a clearer first-release scope while leaving room for future improvements such as appliance tagging and gamification.",
        },
      ],
      impact: [
        "The final design turned complex energy data into a clearer, more actionable customer portal by improving visibility of key information. It enabled users to compare energy usage across timeframes to make more informed decisions.",
        "This project helped me understand turning complex data into practical everyday decisions. In the energy space, users need clear insights, simple comparisons, and guidance on what to do next.",
        "My biggest contribution was conducting user researches and helping shape a customer portal that made energy data more understandable, actionable, and supportive of smarter energy decisions.",
      ],
    },
  },
];

export function WorksGrid() {
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);
  const [isPopupScrolling, setIsPopupScrolling] = useState(false);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!selectedWork) {
      return;
    }

    const scrollY = window.scrollY;
    const { body, documentElement } = document;
    const scrollbarWidth = window.innerWidth - documentElement.clientWidth;
    const computedBodyPaddingRight = window.getComputedStyle(body).paddingRight;
    const bodyPaddingRight = Number.parseFloat(computedBodyPaddingRight) || 0;
    const originalBodyStyles = {
      overflow: body.style.overflow,
      paddingRight: body.style.paddingRight,
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
    };
    const originalHtmlOverflow = documentElement.style.overflow;

    documentElement.style.overflow = "hidden";
    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";

    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${bodyPaddingRight + scrollbarWidth}px`;
    }

    return () => {
      documentElement.style.overflow = originalHtmlOverflow;
      body.style.overflow = originalBodyStyles.overflow;
      body.style.paddingRight = originalBodyStyles.paddingRight;
      body.style.position = originalBodyStyles.position;
      body.style.top = originalBodyStyles.top;
      body.style.left = originalBodyStyles.left;
      body.style.right = originalBodyStyles.right;
      body.style.width = originalBodyStyles.width;
      window.scrollTo(0, scrollY);
    };
  }, [selectedWork]);

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
        <p className="eyebrow mb-4">{"// Case study"}</p>
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
                <h5 className="text-[clamp(24px,3vw,36px)] leading-[1.15] tracking-[-0.72px]">
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
          <Dialog.Backdrop className="fixed inset-0 z-50 bg-[rgba(0,0,0,0.58)] backdrop-blur-[6px] data-[ending-style]:animate-out data-[starting-style]:animate-in data-[ending-style]:fade-out-0 data-[starting-style]:fade-in-0" />
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
                      <Dialog.Title className="font-serif text-[clamp(38px,5vw,72px)] leading-[1.14] tracking-[-2px] text-[var(--text-heading)]">
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

      <CaseStudySection eyebrow="03 / My Role & Approach">
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
              <div className="mt-5 grid gap-4">
                <div>
                  <p className="text-[16px] leading-[1.65] text-[var(--text-body)]">
                    {insight.decision}
                  </p>
                </div>
                <div>
                  <p className="text-[16px] leading-[1.65] text-[var(--text-body)]">
                    {insight.impact}
                  </p>
                </div>
              </div>
              {insight.diagram ? (
                <div className="mt-8 flex justify-center">
                  <ProductDiagram diagram={insight.diagram} />
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-[20px] bg-[rgba(0,22,102,0.14)] p-7">
        <p className="eyebrow mb-4">05 / Impact</p>
        <div className="grid gap-5">
          {caseStudy.impact.map((paragraph) => (
            <p
              key={paragraph}
              className="text-[17px] leading-[1.65] text-[var(--text-strong)]"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>
    </div>
  );
}

function ProductDiagram({ diagram }: { diagram: HighlightDiagram }) {
  if (diagram.image) {
    return (
      <aside className="w-full">
        <div className="flex w-full justify-center overflow-hidden">
          <Image
            src={withBasePath(diagram.image.src)}
            alt={diagram.image.alt}
            width={diagram.image.width}
            height={diagram.image.height}
            sizes={`${diagram.image.width}px`}
            className="h-auto max-w-full rounded-[14px]"
          />
        </div>
      </aside>
    );
  }

  return (
    <aside className="w-full text-[var(--text-strong)]">
      <div className="relative min-h-[260px] overflow-hidden p-1 sm:min-h-[300px]">
        <DiagramArtwork variant={diagram.variant} />
      </div>
    </aside>
  );
}

function renderDiagramIcon(icon: DiagramIcon, className: string) {
  const props = { className, strokeWidth: 1.8 };

  switch (icon) {
    case "barChart":
      return <BarChart3Icon {...props} />;
    case "calendar":
      return <CalendarDaysIcon {...props} />;
    case "check":
      return <CheckCircle2Icon {...props} />;
    case "clipboard":
      return <ClipboardCheckIcon {...props} />;
    case "filter":
      return <FilterIcon {...props} />;
    case "heart":
      return <HeartPulseIcon {...props} />;
    case "lightbulb":
      return <LightbulbIcon {...props} />;
    case "paw":
      return <PawPrintIcon {...props} />;
    case "search":
      return <SearchIcon {...props} />;
    case "sliders":
      return <SlidersHorizontalIcon {...props} />;
    case "stethoscope":
      return <StethoscopeIcon {...props} />;
    case "workflow":
      return <WorkflowIcon {...props} />;
    case "zap":
      return <ZapIcon {...props} />;
    case "file":
    default:
      return <FileTextIcon {...props} />;
  }
}

function DiagramArtwork({ variant }: { variant: DiagramVariant }) {
  if (variant === "matching") {
    return <Pipeline labels={["Filter", "Match", "Apply"]} icons={["filter", "search", "check"]} />;
  }

  if (variant === "schedule") {
    return (
      <div className="grid h-full min-h-[220px] grid-cols-3 gap-3">
        {["Mon", "Tue", "Wed"].map((day, index) => (
          <div key={day} className="rounded-[12px] bg-white/70 p-3">
            <p className="flex items-center gap-1.5 font-mono text-[11px] text-[var(--text-body)]">
              {renderDiagramIcon("calendar", "size-3")}
              {day}
            </p>
            <div className={`mt-5 h-20 rounded-[8px] ${index === 1 ? "bg-[var(--accent)]" : "bg-[var(--highlight)]"}`} />
            <div className="mt-3 h-10 rounded-[8px] bg-[rgba(0,22,102,0.08)]" />
          </div>
        ))}
      </div>
    );
  }

  if (variant === "operations") {
    return <Bars labels={["Review", "Sign-off", "Payroll"]} />;
  }

  if (variant === "records") {
    return (
      <div className="grid h-full min-h-[220px] grid-cols-[120px_1fr] gap-5">
        <div className="rounded-[14px] bg-[var(--accent-soft)] p-4 text-[var(--text-heading)]">
          <div className="mx-auto mt-3 flex size-14 items-center justify-center rounded-full bg-white">
            {renderDiagramIcon("paw", "size-7 text-[var(--accent)]")}
          </div>
          <div className="mt-7 h-2 rounded-full bg-[rgba(0,22,102,0.16)]" />
          <div className="mt-3 h-2 w-2/3 rounded-full bg-[rgba(0,22,102,0.1)]" />
        </div>
        <MiniStack labels={["Vaccines", "Symptoms", "Notes"]} icon="heart" />
      </div>
    );
  }

  if (variant === "comparison") {
    return <Comparison labels={["Clinic A", "Clinic B"]} />;
  }

  if (variant === "booking") {
    return <Pipeline labels={["Care", "Time", "Confirm"]} icons={["stethoscope", "calendar", "check"]} />;
  }

  if (variant === "dashboard") {
    return (
      <div className="grid h-full min-h-[220px] grid-cols-[1.1fr_0.9fr] gap-4">
        <div className="rounded-[12px] bg-white/70 p-4">
          <div className="flex h-28 items-center justify-center rounded-[10px] bg-[var(--highlight)]">
            {renderDiagramIcon("zap", "size-7 text-[var(--text-heading)]")}
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2">
            <span className="h-8 rounded-[6px] bg-[var(--accent)]" />
            <span className="h-8 rounded-[6px] bg-[rgba(0,22,102,0.08)]" />
            <span className="h-8 rounded-[6px] bg-[rgba(0,22,102,0.08)]" />
          </div>
        </div>
        <Bars labels={["Use", "Cost", "Solar"]} compact />
      </div>
    );
  }

  if (variant === "timeline") {
    return <Comparison labels={["Last bill", "This bill"]} />;
  }

  if (variant === "guidance") {
    return <Pipeline labels={["Insight", "Tip", "Action"]} icons={["barChart", "lightbulb", "check"]} />;
  }

  return (
    <div className="grid h-full min-h-[220px] items-center gap-5 md:grid-cols-[1fr_84px_1fr]">
      <MiniStack labels={["Issue", "Evidence", "Action"]} icon="check" />
      <CleanFlowArrow />
      <div className="rounded-[10px] bg-[var(--accent-soft)] p-3">
        <div className="h-3 rounded-full bg-[rgba(0,22,102,0.18)]" />
        <div className="mt-3 flex h-16 items-center justify-center rounded-[8px] bg-white/70">
          {renderDiagramIcon("file", "size-7 text-[var(--accent)]")}
        </div>
      </div>
    </div>
  );
}

function MiniStack({
  labels,
  icon = "file",
  gold = false,
}: {
  labels: string[];
  icon?: DiagramIcon;
  gold?: boolean;
}) {
  return (
    <div className="grid gap-2">
      {labels.map((label, index) => (
        <div
          key={label}
          className={`flex items-center gap-3 rounded-[10px] px-4 py-3 text-[14px] sm:text-[18px] ${
            gold && index === 1
              ? "bg-[var(--accent-soft)] text-[var(--text-heading)]"
              : "bg-white/70 text-[var(--text-body)]"
          }`}
        >
          {renderDiagramIcon(icon, "size-4 shrink-0 text-[var(--accent)]")}
          {label}
        </div>
      ))}
    </div>
  );
}

function Connector() {
  return (
    <div className="h-px w-8 bg-[rgba(0,22,102,0.18)] before:block before:size-2 before:-translate-y-[3px] before:translate-x-7 before:rotate-45 before:border-r before:border-t before:border-[rgba(0,22,102,0.2)]" />
  );
}

function Pipeline({ labels, icons }: { labels: string[]; icons: DiagramIcon[] }) {
  return (
    <div className="flex h-full min-h-[220px] items-center justify-between gap-2">
      {labels.map((label, index) => (
        <div key={label} className="flex flex-1 items-center gap-2">
          <div className="flex h-36 flex-1 flex-col justify-between rounded-[12px] bg-white/70 p-4">
            <span className="flex size-10 items-center justify-center rounded-full bg-[var(--accent-soft)] text-[var(--accent)]">
              {renderDiagramIcon(icons[index] ?? "check", "size-5")}
            </span>
            <span className="text-[14px] text-[var(--text-body)]">{label}</span>
          </div>
          {index < labels.length - 1 ? <Connector /> : null}
        </div>
      ))}
    </div>
  );
}

function Bars({ labels, compact = false }: { labels: string[]; compact?: boolean }) {
  return (
    <div className="flex h-full items-end gap-3 rounded-[12px] bg-white/70 p-4">
      {labels.map((label, index) => (
        <div key={label} className="flex flex-1 flex-col items-center gap-2">
          <div
            className={`w-full rounded-t-[7px] ${index === 1 ? "bg-[var(--accent)]" : "bg-[var(--highlight)]"}`}
            style={{ height: compact ? `${54 + index * 18}px` : `${44 + index * 28}px` }}
          />
          <span className="text-[11px] text-[var(--text-body)]">{label}</span>
        </div>
      ))}
    </div>
  );
}

function Comparison({ labels }: { labels: string[] }) {
  return (
    <div className="grid h-full min-h-[220px] grid-cols-2 gap-4">
      {labels.map((label, index) => (
        <div key={label} className="rounded-[12px] bg-white/70 p-4">
          <p className="flex items-center gap-2 text-[14px] text-[var(--text-body)]">
            {renderDiagramIcon("search", "size-4")}
            {label}
          </p>
          <div className="mt-6 h-2 rounded-full bg-[rgba(0,22,102,0.08)]">
            <div
              className="h-full rounded-full bg-[var(--accent)]"
              style={{ width: index === 0 ? "58%" : "78%" }}
            />
          </div>
          <div className="mt-7 grid gap-3">
            <span className="h-12 rounded-[8px] bg-[var(--highlight)]" />
            <span className="h-12 rounded-[8px] bg-[rgba(0,22,102,0.08)]" />
          </div>
        </div>
      ))}
    </div>
  );
}

function CleanFlowArrow() {
  return (
    <svg
      className="mx-auto hidden h-20 w-20 text-[rgba(0,22,102,0.28)] md:block"
      viewBox="0 0 80 80"
      fill="none"
      aria-hidden
    >
      <path
        d="M12 40H62"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M48 24L64 40L48 56"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CaseStudySection({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <p className="eyebrow mb-4">{eyebrow}</p>
      {title ? (
        <h3 className="font-serif text-[30px] leading-[1.25] tracking-[-1px] text-[var(--text-heading)]">
          {title}
        </h3>
      ) : null}
      <div
        className={`grid gap-5 text-[16px] leading-[1.7] text-[var(--text-body)] ${
          title ? "mt-5" : "mt-0"
        }`}
      >
        {children}
      </div>
    </section>
  );
}
