import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { CALENDLY } from "@/data/site";

type ProcessTab = {
  name: string;
  color: string;
  title: string;
  subtitle: string;
  apps: { name: string; bg: string; icon: string }[];
  cursors: { name: string; color: string; pos: string; delay?: string }[];
  photos: string[];
};

const processTabs: ProcessTab[] = [
  {
    name: "Discovery",
    color: "#F97316",
    title: "Kickoff & project discovery",
    subtitle: "Understanding the business, users, and goals before a single pixel is designed.",
    apps: [
      { name: "Teams", bg: "#4B53BC", icon: "💬" },
      { name: "Zoom", bg: "#2D8CFF", icon: "Z" },
      { name: "Meet", bg: "#00897B", icon: "📹" },
      { name: "Cal", bg: "#4285F4", icon: "31" },
    ],
    cursors: [
      { name: "Jahid", color: "#3B82F6", pos: "bottom-14 left-1/4", delay: "0s" },
      { name: "Sarah", color: "#EC4899", pos: "bottom-3 left-1/2", delay: "0.5s" },
      { name: "Butch", color: "#9AFD0D", pos: "top-4 right-24", delay: "0.2s" },
      { name: "Youssef", color: "#8B5CF6", pos: "top-16 right-36", delay: "0.7s" },
      { name: "Diplo", color: "#EAB308", pos: "bottom-8 right-8", delay: "1s" },
    ],
    photos: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80",
    ],
  },
  {
    name: "Research",
    color: "#FACC15",
    title: "User & market intelligence",
    subtitle: "Deep dive into user pain points, competitor benchmarks, and product positioning.",
    apps: [
      { name: "Notion", bg: "#000000", icon: "N" },
      { name: "Miro", bg: "#FFD02F", icon: "M" },
      { name: "Typeform", bg: "#262627", icon: "T" },
      { name: "Analytics", bg: "#E37400", icon: "📊" },
    ],
    cursors: [
      { name: "Persona", color: "#FACC15", pos: "top-8 left-1/4", delay: "0s" },
      { name: "Pain Point", color: "#EF4444", pos: "bottom-12 left-1/2", delay: "0.4s" },
      { name: "Benchmark", color: "#10B981", pos: "top-12 right-16", delay: "0.8s" },
    ],
    photos: [
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=300&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&auto=format&fit=crop&q=80",
    ],
  },
  {
    name: "UI/UX Design",
    color: "#06B6D4",
    title: "Wireframes & design system",
    subtitle: "Crafting intuitive flows, pixel-perfect UI components, and interactive prototypes.",
    apps: [
      { name: "Figma", bg: "#000000", icon: "❖" },
      { name: "Principle", bg: "#6366F1", icon: "P" },
      { name: "Framer", bg: "#0055FF", icon: "F" },
      { name: "Tokens", bg: "#10B981", icon: "◆" },
    ],
    cursors: [
      { name: "Auto-layout", color: "#06B6D4", pos: "top-10 left-1/4", delay: "0.1s" },
      { name: "Variant", color: "#8B5CF6", pos: "bottom-12 right-28", delay: "0.6s" },
      { name: "Prototype", color: "#EC4899", pos: "top-14 right-10", delay: "0.9s" },
    ],
    photos: [
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=300&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&auto=format&fit=crop&q=80",
    ],
  },
  {
    name: "Development",
    color: "#3B82F6",
    title: "Scalable full-stack builds",
    subtitle: "Engineering fast, modern web applications with clean code, React, and robust APIs.",
    apps: [
      { name: "React", bg: "#23272F", icon: "⚛" },
      { name: "Next.js", bg: "#000000", icon: "▲" },
      { name: "TypeScript", bg: "#3178C6", icon: "TS" },
      { name: "Tailwind", bg: "#0F172A", icon: "🌊" },
    ],
    cursors: [
      { name: "PR Approved", color: "#10B981", pos: "top-8 left-1/3", delay: "0.2s" },
      { name: "API Ready", color: "#3B82F6", pos: "bottom-10 right-28", delay: "0.5s" },
      { name: "100% Typed", color: "#F59E0B", pos: "top-14 right-10", delay: "0.8s" },
    ],
    photos: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&auto=format&fit=crop&q=80",
    ],
  },
  {
    name: "QA Testing",
    color: "#A855F7",
    title: "Cross-browser & speed QA",
    subtitle:
      "Rigorous device testing, edge case checks, accessibility compliance, and zero regressions.",
    apps: [
      { name: "Cypress", bg: "#1B1E2E", icon: "C" },
      { name: "Lighthouse", bg: "#FF4E42", icon: "100" },
      { name: "Sentry", bg: "#362D59", icon: "🛡" },
      { name: "Vitest", bg: "#729B1A", icon: "⚡" },
    ],
    cursors: [
      { name: "0 Errors", color: "#10B981", pos: "top-10 left-1/4", delay: "0s" },
      { name: "Pass 100%", color: "#A855F7", pos: "bottom-12 right-24", delay: "0.6s" },
    ],
    photos: [
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=300&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&auto=format&fit=crop&q=80",
    ],
  },
  {
    name: "Launch",
    color: "#10B981",
    title: "Deployment & continuous support",
    subtitle:
      "Smooth zero-downtime production deployment, domain routing, and ongoing optimization.",
    apps: [
      { name: "Cloudflare", bg: "#F38020", icon: "☁" },
      { name: "Vercel", bg: "#000000", icon: "▲" },
      { name: "Analytics", bg: "#EA4335", icon: "📈" },
      { name: "SSL", bg: "#10B981", icon: "🔒" },
    ],
    cursors: [
      { name: "Live 🚀", color: "#10B981", pos: "top-12 left-1/3", delay: "0.3s" },
      { name: "Uptime 99.9%", color: "#9AFD0D", pos: "bottom-10 right-20", delay: "0.7s" },
    ],
    photos: [
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80",
    ],
  },
];

export function Process() {
  const [active, setActive] = useState(0);
  const currentTab = processTabs[active] ?? processTabs[0]!;

  return (
    <section className="bg-[#050505] border-t border-white/10 py-20 sm:py-28 lg:py-32 overflow-hidden select-none">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.45fr] lg:items-center">
          {/* Left Column: Heading & Subtitle only */}
          <div>
            <div className="mb-4">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-[#6060603D] px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
                <span className="size-2.5 rounded-full bg-[#9AFD0D] shadow-[0_0_12px_#9AFD0D] animate-pulse" />
                Our Process
              </span>
            </div>

            <h2
              className="text-4xl sm:text-5xl lg:text-[58px] font-bold tracking-tight text-white leading-[1.08] mt-4 mb-3"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              How We Get It
              <br />
              Done.
            </h2>

            <p className="text-xs sm:text-sm text-[#888888] max-w-sm leading-relaxed font-normal">
              Every step, done right. From discovery to launch structured, smooth, and built to
              deliver.
            </p>
          </div>

          {/* Right Column: Top Colored Tabs & Exact Light Luminous Card */}
          <div>
            {/* Horizontal Tabs with active colored underline indicator */}
            <div className="flex flex-wrap items-center gap-5 sm:gap-6 mb-4 px-1">
              {processTabs.map((tab, idx) => {
                const isActive = active === idx;
                return (
                  <button
                    key={tab.name}
                    type="button"
                    onClick={() => setActive(idx)}
                    className={`relative py-1 text-xs sm:text-[13px] font-semibold transition-colors cursor-pointer ${
                      isActive ? "text-white" : "text-[#777777] hover:text-white"
                    }`}
                  >
                    <span>{tab.name}</span>
                    {isActive && (
                      <span
                        className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full"
                        style={{ backgroundColor: tab.color }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Rich Luminous Card matching screenshot exactly */}
            <div className="relative rounded-[26px] bg-gradient-to-br from-[#FFFFFF] via-[#F4FFF2] to-[#E2FCDA] p-7 sm:p-9 shadow-[0_24px_70px_rgba(0,0,0,0.6)] border border-white/50 overflow-hidden min-h-[360px]">
              {/* Soft Ethereal Radial Ambient Blur */}
              <div
                className="pointer-events-none absolute inset-0 opacity-55 blur-3xl transition-all duration-700"
                style={{
                  background: `radial-gradient(circle at 20% 30%, ${currentTab.color}35, transparent 65%), radial-gradient(circle at 75% 70%, #9AFD0D30, transparent 60%)`,
                }}
              />

              <div className="grid grid-cols-1 sm:grid-cols-[1.25fr_1fr] gap-6 items-center relative z-10">
                {/* Left Sub-Column: App Badges, Headline, Subtitle */}
                <div>
                  {/* Floating App Badges */}
                  <div className="flex items-center gap-2 mb-6">
                    {currentTab.apps.map((app) => (
                      <div
                        key={app.name}
                        className="flex size-7 sm:size-8 items-center justify-center rounded-lg text-white font-bold text-xs shadow-md border border-white/20"
                        style={{ backgroundColor: app.bg }}
                        title={app.name}
                      >
                        {app.icon}
                      </div>
                    ))}
                  </div>

                  {/* Step Title in Bold Dark Charcoal/Black */}
                  <h3
                    className="text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight leading-[1.16] mb-2"
                    style={{ fontFamily: "'Manrope', sans-serif" }}
                  >
                    {currentTab.title}
                  </h3>

                  {/* Subtitle in Dark Gray */}
                  <p className="text-xs sm:text-sm text-[#444444] font-medium leading-relaxed max-w-xs">
                    {currentTab.subtitle}
                  </p>
                </div>

                {/* Right Sub-Column: Team Collaboration Photos & Floating Cursors */}
                <div className="relative h-48 sm:h-56 flex items-center justify-center">
                  {/* Photo Collage */}
                  <div className="relative w-full max-w-[240px] flex items-center justify-center">
                    <div className="size-28 sm:size-32 rounded-2xl overflow-hidden border-2 border-white shadow-xl -rotate-3 z-10">
                      <img
                        src={currentTab.photos[0]}
                        alt="Team lead"
                        className="size-full object-cover"
                      />
                    </div>
                    {currentTab.photos[1] && (
                      <div className="size-20 sm:size-24 rounded-xl overflow-hidden border-2 border-white shadow-lg rotate-6 -ml-8 -mt-6 z-20">
                        <img
                          src={currentTab.photos[1]}
                          alt="Colleague on call"
                          className="size-full object-cover"
                        />
                      </div>
                    )}
                  </div>

                  {/* Floating Figma-style Cursor Tags with bobbing animations */}
                  {currentTab.cursors.map((cursor) => (
                    <div
                      key={cursor.name}
                      className={`absolute ${cursor.pos} flex items-center gap-1.5 z-30 pointer-events-none select-none animate-cursor-bob`}
                      style={{ animationDelay: cursor.delay ?? "0s" }}
                    >
                      <svg
                        className="size-3.5 drop-shadow-sm"
                        style={{ fill: cursor.color, color: cursor.color }}
                        viewBox="0 0 24 24"
                      >
                        <path d="M4 0l16 12-7 2-4 7z" />
                      </svg>
                      <span
                        className="rounded px-1.5 py-0.5 text-[10px] font-bold text-black shadow-md tracking-tight"
                        style={{ backgroundColor: cursor.color }}
                      >
                        {cursor.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const consultAvatars = [
  {
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=160&auto=format&fit=crop&q=80",
    alt: "Strategy lead",
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&auto=format&fit=crop&q=80",
    alt: "Technical director",
  },
  {
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=160&auto=format&fit=crop&q=80",
    alt: "Product strategist",
  },
  {
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=160&auto=format&fit=crop&q=80",
    alt: "Design lead",
  },
];

export function ConsultCta() {
  return (
    <section className="py-20 sm:py-28 bg-[#000000]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="relative rounded-[32px] sm:rounded-[36px] bg-[#FFFFFF] overflow-hidden shadow-2xl border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1.35fr] items-center">
            {/* Left Column: Eyebrow, Heading with Inline Avatars, Subtitle, CTA */}
            <div className="p-8 sm:p-12 lg:p-16 flex flex-col items-start z-10">
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2.5 rounded-full border border-black/10 bg-black/[0.04] px-4 py-2 text-sm font-medium text-[#111111] backdrop-blur-md shadow-xs">
                <span className="size-2.5 rounded-full bg-[#9AFD0D] shadow-[0_0_12px_#9AFD0D] animate-pulse" />
                <span>Let&rsquo;s talk</span>
              </div>

              {/* Main Heading with 4 inline avatars with lime green rings */}
              <h2
                className="mt-6 text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#111111] tracking-tight leading-[1.14]"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                Consult{" "}
                <span className="inline-flex items-center align-middle mx-1 -translate-y-0.5">
                  {consultAvatars.map((avatar, idx) => (
                    <img
                      key={idx}
                      src={avatar.src}
                      alt={avatar.alt}
                      className="size-8 sm:size-9 lg:size-10 rounded-full border-2 border-[#9AFD0D] object-cover -ml-2.5 first:ml-0 shadow-sm"
                    />
                  ))}
                </span>{" "}
                strategy
                <br />
                to build stronger product
              </h2>

              {/* Subtitle / Description */}
              <p className="mt-5 text-sm sm:text-base text-[#555555] font-normal leading-relaxed max-w-md">
                30 minutes to understand your product, uncover the real problems, and figure out
                what actually needs to change.
              </p>

              {/* CTA Button */}
              <div className="mt-8 sm:mt-10">
                <a
                  href={CALENDLY}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#9AFD0D] px-8 py-3.5 text-sm sm:text-[15px] font-bold text-black transition-all hover:bg-[#8cee07] hover:scale-[1.02] shadow-[0_4px_24px_rgba(154,253,13,0.35)]"
                >
                  Book a Free Consultation
                </a>
              </div>
            </div>

            {/* Right Column: Realistic Keyboard Surface with 5 Floating Metric Cards */}
            <div className="relative min-h-[460px] sm:min-h-[500px] overflow-hidden flex flex-col justify-center px-4 py-8 sm:p-8">
              {/* Keyboard Backdrop Keycaps extending to the top and right edges */}
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none select-none flex flex-col gap-2.5 justify-center pl-2 pt-2 sm:pl-4 sm:pt-4 overflow-hidden"
              >
                {/* Row 1: Esc, F1, F2, F3, F4, F5, F6 */}
                <div className="flex gap-2.5">
                  <div className="h-11 w-16 rounded-[14px] bg-[#FAFAFA] border border-[#E7E9ED] shadow-[0_2px_4px_rgba(0,0,0,0.02),inset_0_-2px_0_rgba(0,0,0,0.04)] flex items-center justify-center text-[11px] font-medium text-[#A1A1AA]">
                    Esc
                  </div>
                  <div className="h-11 w-14 rounded-[14px] bg-[#FAFAFA] border border-[#E7E9ED] shadow-[0_2px_4px_rgba(0,0,0,0.02),inset_0_-2px_0_rgba(0,0,0,0.04)] flex items-center justify-center text-[11px] font-medium text-[#A1A1AA]">
                    F1
                  </div>
                  <div className="h-11 w-14 rounded-[14px] bg-[#FAFAFA] border border-[#E7E9ED] shadow-[0_2px_4px_rgba(0,0,0,0.02),inset_0_-2px_0_rgba(0,0,0,0.04)] flex items-center justify-center text-[11px] font-medium text-[#A1A1AA]">
                    F2
                  </div>
                  <div className="h-11 w-14 rounded-[14px] bg-[#FAFAFA] border border-[#E7E9ED] shadow-[0_2px_4px_rgba(0,0,0,0.02),inset_0_-2px_0_rgba(0,0,0,0.04)] flex items-center justify-center text-[11px] font-medium text-[#A1A1AA]">
                    F3
                  </div>
                  <div className="h-11 w-14 rounded-[14px] bg-[#FAFAFA] border border-[#E7E9ED] shadow-[0_2px_4px_rgba(0,0,0,0.02),inset_0_-2px_0_rgba(0,0,0,0.04)] flex items-center justify-center text-[11px] font-medium text-[#A1A1AA]">
                    F4
                  </div>
                  <div className="h-11 w-14 rounded-[14px] bg-[#FAFAFA] border border-[#E7E9ED] shadow-[0_2px_4px_rgba(0,0,0,0.02),inset_0_-2px_0_rgba(0,0,0,0.04)] flex items-center justify-center text-[11px] font-medium text-[#A1A1AA]">
                    F5
                  </div>
                  <div className="h-11 w-14 rounded-[14px] bg-[#FAFAFA] border border-[#E7E9ED] shadow-[0_2px_4px_rgba(0,0,0,0.02),inset_0_-2px_0_rgba(0,0,0,0.04)] flex items-center justify-center text-[11px] font-medium text-[#A1A1AA]">
                    F6
                  </div>
                </div>

                {/* Row 2: Numbers (~, 1, 2, 3, 4, 5, 6) */}
                <div className="flex gap-2.5">
                  <div className="h-14 w-14 rounded-[16px] bg-[#FAFAFA] border border-[#E7E9ED] shadow-[0_2px_4px_rgba(0,0,0,0.02),inset_0_-2px_0_rgba(0,0,0,0.04)] flex flex-col items-center justify-center text-[11px] text-[#A1A1AA] font-mono leading-none">
                    <span>~</span>
                    <span className="mt-1 text-[13px] font-medium text-[#71717A]">`</span>
                  </div>
                  <div className="h-14 w-14 rounded-[16px] bg-[#FAFAFA] border border-[#E7E9ED] shadow-[0_2px_4px_rgba(0,0,0,0.02),inset_0_-2px_0_rgba(0,0,0,0.04)] flex flex-col items-center justify-between py-2 text-[11px] text-[#A1A1AA] font-mono leading-none">
                    <span>!</span>
                    <span className="text-[13px] font-medium text-[#71717A]">1</span>
                  </div>
                  <div className="h-14 w-14 rounded-[16px] bg-[#FAFAFA] border border-[#E7E9ED] shadow-[0_2px_4px_rgba(0,0,0,0.02),inset_0_-2px_0_rgba(0,0,0,0.04)] flex flex-col items-center justify-between py-2 text-[11px] text-[#A1A1AA] font-mono leading-none">
                    <span>@</span>
                    <span className="text-[13px] font-medium text-[#71717A]">2</span>
                  </div>
                  <div className="h-14 w-14 rounded-[16px] bg-[#FAFAFA] border border-[#E7E9ED] shadow-[0_2px_4px_rgba(0,0,0,0.02),inset_0_-2px_0_rgba(0,0,0,0.04)] flex flex-col items-center justify-between py-2 text-[11px] text-[#A1A1AA] font-mono leading-none">
                    <span>#</span>
                    <span className="text-[13px] font-medium text-[#71717A]">3</span>
                  </div>
                  <div className="h-14 w-14 rounded-[16px] bg-[#FAFAFA] border border-[#E7E9ED] shadow-[0_2px_4px_rgba(0,0,0,0.02),inset_0_-2px_0_rgba(0,0,0,0.04)] flex flex-col items-center justify-between py-2 text-[11px] text-[#A1A1AA] font-mono leading-none">
                    <span>$</span>
                    <span className="text-[13px] font-medium text-[#71717A]">4</span>
                  </div>
                  <div className="h-14 w-14 rounded-[16px] bg-[#FAFAFA] border border-[#E7E9ED] shadow-[0_2px_4px_rgba(0,0,0,0.02),inset_0_-2px_0_rgba(0,0,0,0.04)] flex flex-col items-center justify-between py-2 text-[11px] text-[#A1A1AA] font-mono leading-none">
                    <span>%</span>
                    <span className="text-[13px] font-medium text-[#71717A]">5</span>
                  </div>
                  <div className="h-14 w-14 rounded-[16px] bg-[#FAFAFA] border border-[#E7E9ED] shadow-[0_2px_4px_rgba(0,0,0,0.02),inset_0_-2px_0_rgba(0,0,0,0.04)] flex flex-col items-center justify-between py-2 text-[11px] text-[#A1A1AA] font-mono leading-none">
                    <span>^</span>
                    <span className="text-[13px] font-medium text-[#71717A]">6</span>
                  </div>
                </div>

                {/* Row 3: Tab, Q, W, E, R, T, Y */}
                <div className="flex gap-2.5">
                  <div className="h-14 w-20 rounded-[16px] bg-[#FAFAFA] border border-[#E7E9ED] shadow-[0_2px_4px_rgba(0,0,0,0.02),inset_0_-2px_0_rgba(0,0,0,0.04)] flex items-center justify-center text-[11px] font-medium text-[#A1A1AA]">
                    Tab
                  </div>
                  <div className="h-14 w-14 rounded-[16px] bg-[#FAFAFA] border border-[#E7E9ED] shadow-[0_2px_4px_rgba(0,0,0,0.02),inset_0_-2px_0_rgba(0,0,0,0.04)] flex items-center justify-center text-[13px] font-medium text-[#71717A]">
                    Q
                  </div>
                  <div className="h-14 w-14 rounded-[16px] bg-[#FAFAFA] border border-[#E7E9ED] shadow-[0_2px_4px_rgba(0,0,0,0.02),inset_0_-2px_0_rgba(0,0,0,0.04)] flex items-center justify-center text-[13px] font-medium text-[#71717A]">
                    W
                  </div>
                  <div className="h-14 w-14 rounded-[16px] bg-[#FAFAFA] border border-[#E7E9ED] shadow-[0_2px_4px_rgba(0,0,0,0.02),inset_0_-2px_0_rgba(0,0,0,0.04)] flex items-center justify-center text-[13px] font-medium text-[#71717A]">
                    E
                  </div>
                  <div className="h-14 w-14 rounded-[16px] bg-[#FAFAFA] border border-[#E7E9ED] shadow-[0_2px_4px_rgba(0,0,0,0.02),inset_0_-2px_0_rgba(0,0,0,0.04)] flex items-center justify-center text-[13px] font-medium text-[#71717A]">
                    R
                  </div>
                  <div className="h-14 w-14 rounded-[16px] bg-[#FAFAFA] border border-[#E7E9ED] shadow-[0_2px_4px_rgba(0,0,0,0.02),inset_0_-2px_0_rgba(0,0,0,0.04)] flex items-center justify-center text-[13px] font-medium text-[#71717A]">
                    T
                  </div>
                  <div className="h-14 w-14 rounded-[16px] bg-[#FAFAFA] border border-[#E7E9ED] shadow-[0_2px_4px_rgba(0,0,0,0.02),inset_0_-2px_0_rgba(0,0,0,0.04)] flex items-center justify-center text-[13px] font-medium text-[#71717A]">
                    Y
                  </div>
                </div>

                {/* Row 4: Caps, A, S, D, F, G */}
                <div className="flex gap-2.5">
                  <div className="h-14 w-24 rounded-[16px] bg-[#FAFAFA] border border-[#E7E9ED] shadow-[0_2px_4px_rgba(0,0,0,0.02),inset_0_-2px_0_rgba(0,0,0,0.04)] flex items-center justify-center text-[11px] font-medium text-[#A1A1AA]">
                    Caps
                  </div>
                  <div className="h-14 w-14 rounded-[16px] bg-[#FAFAFA] border border-[#E7E9ED] shadow-[0_2px_4px_rgba(0,0,0,0.02),inset_0_-2px_0_rgba(0,0,0,0.04)] flex items-center justify-center text-[13px] font-medium text-[#71717A]">
                    A
                  </div>
                  <div className="h-14 w-14 rounded-[16px] bg-[#FAFAFA] border border-[#E7E9ED] shadow-[0_2px_4px_rgba(0,0,0,0.02),inset_0_-2px_0_rgba(0,0,0,0.04)] flex items-center justify-center text-[13px] font-medium text-[#71717A]">
                    S
                  </div>
                  <div className="h-14 w-14 rounded-[16px] bg-[#FAFAFA] border border-[#E7E9ED] shadow-[0_2px_4px_rgba(0,0,0,0.02),inset_0_-2px_0_rgba(0,0,0,0.04)] flex items-center justify-center text-[13px] font-medium text-[#71717A]">
                    D
                  </div>
                  <div className="h-14 w-14 rounded-[16px] bg-[#FAFAFA] border border-[#E7E9ED] shadow-[0_2px_4px_rgba(0,0,0,0.02),inset_0_-2px_0_rgba(0,0,0,0.04)] flex items-center justify-center text-[13px] font-medium text-[#71717A]">
                    F
                  </div>
                  <div className="h-14 w-14 rounded-[16px] bg-[#FAFAFA] border border-[#E7E9ED] shadow-[0_2px_4px_rgba(0,0,0,0.02),inset_0_-2px_0_rgba(0,0,0,0.04)] flex items-center justify-center text-[13px] font-medium text-[#71717A]">
                    G
                  </div>
                </div>

                {/* Row 5: Shift, ~, Z, X, C, V */}
                <div className="flex gap-2.5">
                  <div className="h-14 w-28 rounded-[16px] bg-[#FAFAFA] border border-[#E7E9ED] shadow-[0_2px_4px_rgba(0,0,0,0.02),inset_0_-2px_0_rgba(0,0,0,0.04)] flex items-center justify-center text-[16px] text-[#A1A1AA]">
                    ⇧
                  </div>
                  <div className="h-14 w-14 rounded-[16px] bg-[#FAFAFA] border border-[#E7E9ED] shadow-[0_2px_4px_rgba(0,0,0,0.02),inset_0_-2px_0_rgba(0,0,0,0.04)] flex flex-col items-center justify-center text-[11px] text-[#A1A1AA] font-mono leading-none">
                    <span>~</span>
                    <span className="mt-1 text-[13px] font-medium text-[#71717A]">`</span>
                  </div>
                  <div className="h-14 w-14 rounded-[16px] bg-[#FAFAFA] border border-[#E7E9ED] shadow-[0_2px_4px_rgba(0,0,0,0.02),inset_0_-2px_0_rgba(0,0,0,0.04)] flex items-center justify-center text-[13px] font-medium text-[#71717A]">
                    Z
                  </div>
                  <div className="h-14 w-14 rounded-[16px] bg-[#FAFAFA] border border-[#E7E9ED] shadow-[0_2px_4px_rgba(0,0,0,0.02),inset_0_-2px_0_rgba(0,0,0,0.04)] flex items-center justify-center text-[13px] font-medium text-[#71717A]">
                    X
                  </div>
                  <div className="h-14 w-14 rounded-[16px] bg-[#FAFAFA] border border-[#E7E9ED] shadow-[0_2px_4px_rgba(0,0,0,0.02),inset_0_-2px_0_rgba(0,0,0,0.04)] flex items-center justify-center text-[13px] font-medium text-[#71717A]">
                    C
                  </div>
                  <div className="h-14 w-14 rounded-[16px] bg-[#FAFAFA] border border-[#E7E9ED] shadow-[0_2px_4px_rgba(0,0,0,0.02),inset_0_-2px_0_rgba(0,0,0,0.04)] flex items-center justify-center text-[13px] font-medium text-[#71717A]">
                    V
                  </div>
                </div>
              </div>

              {/* 5 Prominent Floating Feature Cards in Foreground */}
              <div className="relative z-10 flex flex-col gap-3.5 my-auto">
                {/* Top Row: 3 Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-3.5">
                  {/* Card 1: Quick product audit */}
                  <div className="rounded-[20px] bg-white border border-[#E5E7EB] p-4 sm:p-5 shadow-[0_12px_32px_rgba(0,0,0,0.07)] min-h-[116px] sm:min-h-[124px] flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl transition-all duration-200">
                    <svg
                      className="size-5 text-[#111111]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span className="text-xs sm:text-[13px] font-bold text-[#111111] leading-snug">
                      Quick product audit
                    </span>
                  </div>

                  {/* Card 2: Growth direction */}
                  <div className="rounded-[20px] bg-white border border-[#E5E7EB] p-4 sm:p-5 shadow-[0_12px_32px_rgba(0,0,0,0.07)] min-h-[116px] sm:min-h-[124px] flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl transition-all duration-200">
                    <svg
                      className="size-5 text-[#111111]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="6" r="6" />
                      <circle cx="12" cy="2" r="2" />
                    </svg>
                    <span className="text-xs sm:text-[13px] font-bold text-[#111111] leading-snug">
                      Growth direction
                    </span>
                  </div>

                  {/* Card 3: Expert perspective */}
                  <div className="rounded-[20px] bg-white border border-[#E5E7EB] p-4 sm:p-5 shadow-[0_12px_32px_rgba(0,0,0,0.07)] min-h-[116px] sm:min-h-[124px] flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl transition-all duration-200">
                    <svg
                      className="size-5 text-[#111111]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="8" r="3" />
                      <path d="M6.5 18a6 6 0 0 1 11 0" />
                    </svg>
                    <span className="text-xs sm:text-[13px] font-bold text-[#111111] leading-snug">
                      Expert perspective
                    </span>
                  </div>
                </div>

                {/* Bottom Row: 2 Cards + 1 empty space allowing S and D to be visible */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-3.5 items-start">
                  {/* Card 4: $2B+ Revenue influenced */}
                  <div className="rounded-[20px] bg-white border border-[#E5E7EB] p-4 sm:p-5 shadow-[0_12px_32px_rgba(0,0,0,0.07)] min-h-[116px] sm:min-h-[124px] flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl transition-all duration-200">
                    <svg
                      className="size-5 text-[#111111]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                    </svg>
                    <span className="text-xs sm:text-[13px] font-bold text-[#111111] leading-snug">
                      $2B+ Revenue influenced
                    </span>
                  </div>

                  {/* Card 5: 48h avg onboarding */}
                  <div className="rounded-[20px] bg-white border border-[#E5E7EB] p-4 sm:p-5 shadow-[0_12px_32px_rgba(0,0,0,0.07)] min-h-[116px] sm:min-h-[124px] flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl transition-all duration-200">
                    <svg
                      className="size-5 text-[#111111]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span className="text-xs sm:text-[13px] font-bold text-[#111111] leading-snug">
                      48h avg onboarding
                    </span>
                  </div>

                  {/* Empty 3rd slot allows the 'S' and 'D' keycaps underneath to show cleanly */}
                  <div className="hidden sm:block" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
