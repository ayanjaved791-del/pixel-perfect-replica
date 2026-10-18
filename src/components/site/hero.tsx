import { ArrowUpRight, Star } from "lucide-react";
import { CALENDLY, heroImages } from "@/data/site";
import { FallingCards } from "./falling-cards";

function Strip({ reverse, duration }: { reverse?: boolean; duration: string }) {
  const items = [...heroImages, ...heroImages];
  return (
    <div className="marquee-mask overflow-hidden">
      <div
        className={
          reverse ? "flex w-max gap-4 animate-marquee-rev" : "flex w-max gap-4 animate-marquee"
        }
        style={{ ["--marquee-duration" as string]: duration }}
      >
        {items.map((img, i) => (
          <div
            key={`${img.src}-${i}`}
            className="h-32 w-52 shrink-0 overflow-hidden rounded-2xl border border-border bg-surface sm:h-40 sm:w-64"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="size-full object-cover opacity-80 transition-opacity duration-300 hover:opacity-100"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-32">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 rounded-full opacity-25 blur-[140px]"
        style={{ background: "var(--color-primary)" }}
      />

      <FallingCards />

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-4xl text-center animate-fade-up">
          <p className="eyebrow justify-center">
            <span className="size-1.5 rounded-full bg-primary" />
            Full-Service Digital Growth Agency
          </p>
          <h1 className="text-display mt-6 text-4xl sm:text-6xl lg:text-7xl">
            <span className="animate-word-in" style={{ ["--word-delay" as string]: "0.05s" }}>
              WE BUILD
            </span>
            <span className="mx-2 inline-flex translate-y-1 items-center align-middle sm:mx-3">
              {heroImages.slice(0, 3).map((img, i) => (
                <span
                  key={img.src}
                  className="animate-card-drop -ml-4 h-8 w-12 overflow-hidden rounded-lg border border-border bg-surface shadow-lg first:ml-0 sm:h-12 sm:w-20 sm:rounded-xl"
                  style={{
                    ["--drop-delay" as string]: `${0.5 + i * 0.16}s`,
                    ["--drop-tilt" as string]: `${(i - 1) * 7}deg`,
                    zIndex: 3 - i,
                  }}
                >
                  <img src={img.src} alt="" loading="lazy" className="size-full object-cover" />
                </span>
              ))}
            </span>
            <span
              className="animate-word-in italic font-light text-primary"
              style={{ ["--word-delay" as string]: "0.25s" }}
            >
              DIGITAL
            </span>{" "}
            <span className="animate-word-in" style={{ ["--word-delay" as string]: "1.05s" }}>
              SYSTEMS
            </span>
            <br className="hidden sm:block" />{" "}
            <span className="animate-word-in" style={{ ["--word-delay" as string]: "1.25s" }}>
              THAT DRIVE
            </span>{" "}
            <span className="animate-word-in" style={{ ["--word-delay" as string]: "1.45s" }}>
              GROWTH.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
            We combine strategy, design, technology, and digital marketing to help ambitious
            businesses attract customers, streamline operations, and scale with confidence.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <a
              href={CALENDLY}
              target="_blank"
              rel="noreferrer"
              className="pill inline-flex items-center gap-2 bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              Tell Us Your Challenge
              <ArrowUpRight className="size-4" />
            </a>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {heroImages.slice(0, 4).map((img) => (
                  <img
                    key={img.src}
                    src={img.src}
                    alt=""
                    className="size-9 rounded-full border-2 border-background object-cover"
                  />
                ))}
              </div>
              <a href="#services" className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-3.5 fill-primary text-primary" />
                ))}
                <span className="ml-1">Explore Our Services</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-16 space-y-4">
        <Strip duration="60s" />
        <Strip reverse duration="75s" />
      </div>
    </section>
  );
}
