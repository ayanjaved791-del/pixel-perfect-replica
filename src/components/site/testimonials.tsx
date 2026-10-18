import { ArrowUpRight, Quote, Star } from "lucide-react";
import { CALENDLY, stats, testimonials } from "@/data/site";
import { Reveal } from "./reveal";
import { Magnetic } from "./magnetic";
import { CountUp } from "./count-up";

export function Testimonials() {
  return (
    <section className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal as="p" className="eyebrow" variant="left">
          <span className="size-1.5 rounded-full bg-primary animate-glow-pulse" />
          Client Feedback · Placeholders
        </Reveal>
        <Reveal variant="blur" delay={80}>
          <h2 className="text-display mt-6 max-w-3xl text-3xl sm:text-5xl">
            Space for Verified Client Perspectives
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} variant="up" delay={(i % 3) * 110} className="h-full">
              <figure className="glass-card glass-polish hover-lift sheen-hover flex h-full flex-col justify-between p-6 sm:p-7">
                <Quote className="size-7 text-primary" />
                <blockquote className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <span className="pill flex size-10 items-center justify-center bg-primary text-sm font-semibold text-primary-foreground">
                    {t.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-foreground">{t.name}</span>
                    <span className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="size-3 fill-primary text-primary" />
                      ))}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex flex-col items-center gap-5 text-center" variant="scale">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Verified reviews pending.</span> Cards
            and stars are placeholders, not client endorsements or ratings.
          </p>
          <Magnetic>
            <a
              href={CALENDLY}
              target="_blank"
              rel="noreferrer"
              className="pill press sheen-hover inline-flex items-center gap-2 bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              Tell Us Your Challenge <ArrowUpRight className="size-4" />
            </a>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  );
}

export function Strategy() {
  return (
    <section id="strategy" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal as="p" className="eyebrow" variant="left">
          <span className="size-1.5 rounded-full bg-primary animate-glow-pulse" />
          Strategy
        </Reveal>
        <Reveal variant="blur" delay={80}>
          <h2 className="text-display mt-6 max-w-3xl text-3xl sm:text-5xl">
            Connected <span className="text-primary">digital growth.</span> Verified results to
            follow.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.label} variant="up" delay={(i % 3) * 110} className="h-full">
              <div className="group h-full bg-surface p-8 transition-colors hover:bg-surface-2">
                <CountUp
                  value={s.value}
                  className="text-display block text-4xl text-primary sm:text-5xl"
                />
                <h3 className="mt-3 text-base font-medium text-foreground">{s.label}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
