import { createFileRoute } from "@tanstack/react-router";
import { useState, type MouseEvent } from "react";
import {
  ArrowUpRight,
  Sparkles,
  Zap,
  TrendingUp,
  Handshake,
  Quote,
  Linkedin,
  Facebook,
} from "lucide-react";
import founderAsset from "@/assets/founder.png.asset.json";
import team from "@/assets/team.jpg.asset.json";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { Reveal } from "@/components/site/reveal";
import { CountUp } from "@/components/site/count-up";
import { Magnetic } from "@/components/site/magnetic";
import { CALENDLY } from "@/data/site";

const title = "About Us — six2eight Digital Growth Agency";
const description =
  "Meet six2eight: the strategists, designers and engineers building connected digital growth systems for ambitious brands.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const stats: [string, string, string][] = [
  ["180+", "Projects shipped", "Sites, platforms and campaigns launched end to end."],
  ["40+", "People worldwide", "A distributed crew spanning a dozen time zones."],
  ["4.9", "Average review", "Clients keep coming back — and say so publicly."],
  ["12+", "Industries", "Fintech, health, retail, education and beyond."],
  ["20+", "Years of craft", "Senior leadership with two decades in digital."],
  ["90+", "Brands partnered", "From seed-stage startups to global enterprises."],
];
const people: [string, string][] = [
  ["Maya Chen", "Founder & CEO"],
  ["Daniel Ortiz", "Co-Founder & CPO"],
  ["Priya Raman", "Head of Engineering"],
  ["Leo Martins", "Design Lead"],
  ["Amara Okafor", "Operations"],
  ["Jonas Berg", "Creative Director"],
  ["Sofia Rossi", "Senior PM"],
  ["Omar Haddad", "Head of Growth"],
];
const founder = {
  name: "Syed Md Talha",
  role: "Founder & CEO",
  image: founderAsset.url,
  linkedin: "https://www.linkedin.com/in/syedmdtalha26/",
  facebook: "https://www.facebook.com/syedmdtalha26/",
  bio: [
    "Syed founded six2eight on a simple belief: great digital work happens when strategy, design and engineering sit at one table instead of handing problems over a wall.",
    "Over the years he has guided founders and enterprises through launches, rebuilds and growth pushes — always hands-on, always allergic to shortcuts that don't scale.",
    "When he isn't in a sprint review, you'll find him sketching product ideas, mentoring young designers and engineers, or quietly rewriting a landing page at midnight.",
  ],
  quote: "Build things people love to use, and growth takes care of itself.",
};
const approach = [
  [Sparkles, "Always moving", "Hand-offs across time zones keep work progressing day and night."],
  [Zap, "Speed with substance", "We ship quickly, but every pixel earns its place."],
  [TrendingUp, "Built to grow", "Systems and code that scale as your business does."],
  [Handshake, "Shared wins", "We measure success by your metrics, not our portfolio."],
] as const;
const quotes = [
  ["Haven Health", "They turned a messy workflow into something our team actually enjoys using."],
  ["Loop Labs", "Clear communication, no surprises, and a launch that landed on time."],
  ["Tidewater", "It felt like working with our own team — just faster and sharper."],
];
const words = ["Strategy", "Design", "Technology", "Marketing", "Automation", "Growth"];

function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const [t, setT] = useState("");
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    setT(`perspective(900px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg) translateY(-4px)`);
  };
  return (
    <div
      onMouseMove={onMove}
      onMouseLeave={() => setT("")}
      style={{ transform: t }}
      className={`border-glow rounded-3xl bg-card transition-transform duration-300 ease-out ${className}`}
    >
      {children}
    </div>
  );
}

function About() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Header />
      <main>
        {/* Intro */}
        <section className="relative px-5 pb-16 pt-40 lg:px-8">
          <div aria-hidden className="grid-bg pointer-events-none absolute inset-0" />
          <div
            aria-hidden
            className="animate-float pointer-events-none absolute -top-10 left-1/4 size-80 rounded-full bg-primary/20 blur-3xl"
          />
          <div
            aria-hidden
            className="animate-spin-slow pointer-events-none absolute right-[8%] top-40 hidden size-40 rounded-full border border-dashed border-primary/40 lg:block"
          />
          <div className="relative mx-auto max-w-5xl text-center">
            <Reveal>
              <span className="eyebrow">About six2eight</span>
            </Reveal>
            <Reveal delay={100} variant="blur">
              <h1 className="text-display mt-6 text-5xl font-semibold leading-[1.02] tracking-tight md:text-8xl">
                We make hard problems look <span className="text-shine italic">simple.</span>
              </h1>
            </Reveal>
            <Reveal delay={250}>
              <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground">
                A full-service growth studio connecting strategy, design, technology and marketing —
                so every part of your business pulls in the same direction.
              </p>
            </Reveal>
            <Reveal delay={350}>
              <div className="mt-10 flex justify-center">
                <Magnetic>
                  <a
                    href={CALENDLY}
                    target="_blank"
                    rel="noreferrer"
                    className="pill group inline-flex items-center gap-2 bg-primary px-7 py-3.5 font-medium text-primary-foreground transition-transform hover:scale-105"
                  >
                    Book a Free Call
                    <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" />
                  </a>
                </Magnetic>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Word marquee */}
        <div className="border-y border-border py-6">
          <div className="flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
            <div className="animate-marquee flex w-max shrink-0 gap-12 pr-12">
              {[...words, ...words, ...words, ...words].map((w, i) => (
                <span
                  key={i}
                  className={`text-4xl font-semibold tracking-tight md:text-6xl ${i % 2 ? "text-outline" : "text-foreground"}`}
                >
                  {w} <span className="text-primary">✦</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Team photo */}
        <Reveal variant="scale">
          <div className="group mx-auto mt-24 max-w-7xl px-5 lg:px-8">
            <div className="relative overflow-hidden rounded-[2rem] border border-border">
              <img
                src={team.url}
                alt="The six2eight team"
                width={1600}
                height={912}
                className="w-full object-cover transition duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink to-transparent p-8">
                <p className="pill inline-flex border border-border bg-ink/70 px-4 py-2 text-sm backdrop-blur">
                  40+ people · 12 time zones · 1 team
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Mission / vision */}
        <section className="mx-auto mt-24 grid max-w-7xl gap-6 px-5 md:grid-cols-2 lg:px-8">
          {[
            [
              "Mission",
              "Help ambitious teams turn ideas into products and growth engines that are easy to use and ready to scale.",
            ],
            [
              "Vision",
              "Be the partner growing brands trust to set the standard for connected, user-first digital systems.",
            ],
          ].map(([t, d], i) => (
            <Reveal key={t} delay={i * 120} variant={i ? "right" : "left"}>
              <TiltCard className="h-full p-10">
                <span className="eyebrow">{t}</span>
                <p className="mt-5 text-2xl font-medium leading-snug md:text-3xl">{d}</p>
              </TiltCard>
            </Reveal>
          ))}
        </section>

        {/* Stats */}
        <section className="mx-auto mt-32 max-w-7xl px-5 lg:px-8">
          <Reveal>
            <span className="eyebrow">Strategy</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-display mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
              Why teams pick us for <span className="text-primary">growth</span>
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {stats.map(([n, t, d], i) => (
              <Reveal
                key={t}
                delay={i * 80}
                className="group bg-background p-8 transition-colors duration-500 hover:bg-surface"
              >
                <CountUp
                  value={n}
                  className="text-6xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary"
                />
                <p className="mt-4 font-semibold">{t}</p>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="mx-auto mt-32 max-w-7xl px-5 lg:px-8">
          <Reveal>
            <span className="eyebrow">Team</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-display mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
              The people behind the work
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-4">
            {people.map(([n, r], i) => (
              <Reveal key={n} delay={i * 60} variant="up">
                <TiltCard className="group p-5">
                  <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl bg-muted text-5xl font-semibold text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground">
                    <span className="transition-transform duration-500 group-hover:scale-125 group-hover:-rotate-6">
                      {n
                        .split(" ")
                        .map((x) => x[0])
                        .join("")}
                    </span>
                  </div>
                  <p className="mt-4 font-semibold">{n}</p>
                  <p className="text-sm text-muted-foreground">{r}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Founder */}
        <section className="relative mx-auto mt-32 max-w-7xl px-5 lg:px-8">
          <div aria-hidden className="grid-bg pointer-events-none absolute inset-0 opacity-40" />
          <div
            aria-hidden
            className="animate-float pointer-events-none absolute -left-20 top-1/3 size-72 rounded-full bg-primary/10 blur-3xl"
          />
          <div className="relative">
            <Reveal>
              <span className="eyebrow">
                <span className="animate-glow-pulse size-1.5 rounded-full bg-primary" /> Our Founder
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="text-display mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
                The mind behind <span className="text-primary">six2eight</span>
              </h2>
            </Reveal>

            <div className="mt-14 grid items-stretch gap-16 lg:grid-cols-[5fr_6fr]">
              {/* Portrait */}
              <Reveal variant="left" className="h-full">
                <div className="group relative mx-auto w-full max-w-md">
                  <div
                    aria-hidden
                    className="animate-spin-slow absolute -right-16 -top-16 size-40 rounded-full border border-dashed border-primary/25"
                  />
                  <div
                    aria-hidden
                    className="absolute -inset-4 rounded-[2.25rem] border border-border/70"
                  />
                  <div
                    aria-hidden
                    className="absolute -inset-9 rounded-[2.75rem] border border-primary/10"
                  />
                  <div
                    aria-hidden
                    className="animate-float absolute -bottom-12 -left-10 size-28 rounded-full bg-primary/20 blur-2xl"
                  />
                  <span
                    aria-hidden
                    className="absolute -left-7 -top-7 size-14 rounded-tl-[1.75rem] border-l-2 border-t-2 border-primary/60 transition-all duration-500 group-hover:-left-9 group-hover:-top-9"
                  />
                  <span
                    aria-hidden
                    className="absolute -bottom-7 -right-7 size-14 rounded-br-[1.75rem] border-b-2 border-r-2 border-primary/60 transition-all duration-500 group-hover:-bottom-9 group-hover:-right-9"
                  />
                  <div className="shine-sweep relative w-full overflow-hidden rounded-[1.75rem] border border-border shadow-elegant">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="aspect-[4/5] w-full object-cover transition duration-1000 group-hover:scale-105"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent"
                    />
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
                      <span className="pill inline-flex size-12 items-center justify-center border border-border bg-ink/70 text-xs font-semibold tracking-[0.15em] text-primary backdrop-blur transition-transform duration-500 group-hover:rotate-6">
                        SMT
                      </span>
                      <span className="text-[0.65rem] uppercase tracking-[0.4em] text-foreground/70">
                        Founder
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Bio */}
              <Reveal variant="right" delay={120} className="h-full">
                <TiltCard className="flex h-full flex-col p-8 md:p-10">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-transparent"
                  />
                  <Quote
                    aria-hidden
                    className="pointer-events-none absolute right-8 top-8 size-16 text-primary/15"
                  />
                  <h3 className="text-display relative text-3xl font-semibold tracking-tight md:text-4xl">
                    {founder.name}
                  </h3>
                  <p className="relative mt-3 flex items-center gap-3 font-medium text-primary">
                    <span aria-hidden className="h-px w-10 bg-primary" />
                    {founder.role}
                  </p>
                  <blockquote className="relative mt-7 rounded-2xl border border-border bg-surface/60 p-6">
                    <p className="text-xl font-medium italic leading-relaxed md:text-2xl">
                      “{founder.quote}”
                    </p>
                  </blockquote>
                  <div className="relative mt-6 space-y-4">
                    {founder.bio.map((p, i) => (
                      <p
                        key={p.slice(0, 24)}
                        className={
                          i === 0
                            ? "text-lg leading-relaxed text-foreground"
                            : "leading-relaxed text-muted-foreground"
                        }
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                  <div
                    aria-hidden
                    className="relative mt-8 h-px w-full bg-gradient-to-r from-primary/60 via-border to-transparent"
                  />
                  <div className="relative mt-6 flex flex-wrap gap-3">
                    <Magnetic>
                      <a
                        href={founder.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="pill group inline-flex items-center gap-2 border border-border px-5 py-2.5 text-sm font-medium transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                      >
                        <Linkedin className="size-4" /> Connect on LinkedIn
                        <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" />
                      </a>
                    </Magnetic>
                    <Magnetic>
                      <a
                        href={founder.facebook}
                        target="_blank"
                        rel="noreferrer"
                        className="pill group inline-flex items-center gap-2 border border-border px-5 py-2.5 text-sm font-medium transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                      >
                        <Facebook className="size-4" /> Follow on Facebook
                        <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" />
                      </a>
                    </Magnetic>
                  </div>
                </TiltCard>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="mx-auto mt-32 max-w-7xl px-5 lg:px-8">
          <Reveal>
            <span className="eyebrow">Our Approach</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-display mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
              How we make a difference
            </h2>
          </Reveal>
          <ul className="mt-14 border-t border-border">
            {approach.map(([Icon, t, d], i) => (
              <Reveal
                as="li"
                key={t}
                delay={i * 80}
                variant="left"
                className="group relative grid items-center gap-4 border-b border-border py-10 transition-all duration-500 hover:pl-6 md:grid-cols-[80px_1fr_1fr_48px]"
              >
                <span className="font-mono text-primary">0{i + 1}</span>
                <h3 className="text-3xl font-semibold tracking-tight transition-colors group-hover:text-primary md:text-4xl">
                  {t}
                </h3>
                <p className="text-muted-foreground">{d}</p>
                <span className="hidden size-12 items-center justify-center rounded-full border border-border transition-all duration-500 group-hover:rotate-12 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground md:inline-flex">
                  <Icon className="size-5" />
                </span>
              </Reveal>
            ))}
          </ul>
        </section>

        {/* Testimonials */}
        <section className="mx-auto mt-32 max-w-7xl px-5 lg:px-8">
          <Reveal>
            <span className="eyebrow">Testimonials</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-display mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
              What clients tell us
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {quotes.map(([c, q], i) => (
              <Reveal key={c} delay={i * 100} variant="blur">
                <TiltCard className="h-full p-8">
                  <Quote className="size-8 text-primary" />
                  <blockquote className="mt-5 text-lg leading-relaxed">“{q}”</blockquote>
                  <figcaption className="mt-6 font-semibold text-primary">— {c}</figcaption>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto my-32 max-w-7xl px-5 lg:px-8">
          <Reveal variant="scale">
            <div className="relative overflow-hidden rounded-[2rem] bg-primary p-12 text-primary-foreground md:p-20">
              <div
                aria-hidden
                className="animate-spin-slow absolute -right-20 -top-20 size-80 rounded-full border-2 border-dashed border-primary-foreground/20"
              />
              <h2 className="text-display relative max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
                Senior growth squads, ready when you are.
              </h2>
              <p className="relative mt-5 max-w-xl opacity-80">
                Plug our cross-functional team into your workflow to design, build and grow your
                next big thing.
              </p>
              <a
                href={CALENDLY}
                target="_blank"
                rel="noreferrer"
                className="pill group relative mt-10 inline-flex items-center gap-2 bg-ink px-7 py-3.5 font-medium text-foreground transition-transform hover:scale-105"
              >
                Start a Project{" "}
                <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" />
              </a>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </div>
  );
}
