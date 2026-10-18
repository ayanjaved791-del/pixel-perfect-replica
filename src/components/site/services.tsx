import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { clientLogos } from "@/data/site";
import { Reveal } from "./reveal";
import { Magnetic } from "./magnetic";

export type FeaturedService = {
  title: string;
  badge: string;
  category: string;
  tags: string[];
  copy: string;
  image: string;
  link: string;
};

export const featuredServices: FeaturedService[] = [
  {
    title: "Web Development Services",
    badge: "Web Development",
    category: "Development",
    tags: ["Custom Dev", "API Development", "CMS Development", "Fast & Secure"],
    copy: "Your website should work flawlessly on any device and load in seconds. We build fast, secure, and scalable sites that perform as good as they look.",
    image: "https://cms.six2eight.com/wp-content/uploads/2025/06/web-developement.webp",
    link: "/services/web-development",
  },
  {
    title: "WordPress Development Services",
    badge: "WordPress Development",
    category: "Development",
    tags: ["Custom Themes", "WooCommerce", "Headless", "Speed Optimization"],
    copy: "Your WordPress site should do more than just look good. We build high-speed, SEO-friendly websites with custom functionality that drives results.",
    image: "https://cms.six2eight.com/wp-content/uploads/2025/02/wordpress-service-cards.webp",
    link: "/services/web-development",
  },
  {
    title: "UI & UX Design Services",
    badge: "UI / UX Design",
    category: "Design",
    tags: ["Wireframes", "Prototypes", "Design System", "User Research"],
    copy: "A great product starts with understanding the user. We design clean, intuitive interfaces that make every interaction feel effortless and purposeful.",
    image: "https://cms.six2eight.com/wp-content/uploads/2025/06/ui-ux-service.webp",
    link: "/services/web-development",
  },
  {
    title: "Web Design Services",
    badge: "Web Design",
    category: "Design",
    tags: ["Navigation", "User Flow", "Sitemap", "Conversion UI"],
    copy: "You need a website that's easy to navigate and visually stunning. We design seamless user flows that guide visitors effortlessly from start to conversion.",
    image: "https://cms.six2eight.com/wp-content/uploads/2025/02/web_design_service_image.webp",
    link: "/services/web-development",
  },
  {
    title: "E-commerce Development",
    badge: "E-commerce",
    category: "Development",
    tags: ["Online Stores", "Product Pages", "Checkout", "Shopify"],
    copy: "Turn your storefront into a clear path to purchase, with thoughtful product pages, high-converting checkout, and connected shopping experiences.",
    image:
      "https://b4550151.smushcdn.com/4550151/wp-content/uploads/2025/06/shopify-development.webp",
    link: "/services/web-development",
  },
  {
    title: "AI Automation & CRM",
    badge: "AI Automation",
    category: "Automation",
    tags: ["AI Support", "Workflows", "CRM Integration", "Smart Ops"],
    copy: "Connect your tools, automate repetitive workflows, and support customer enquiries with practical AI and CRM systems built for scale.",
    image:
      "https://b4550151.smushcdn.com/4550151/wp-content/uploads/2025/06/sass-web-application.webp",
    link: "/services/web-development",
  },
];

export function Services() {
  return (
    <section id="services" className="relative border-t border-border py-20 sm:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Eyebrow Tag */}
        <Reveal as="div" variant="left" className="flex items-center">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-[#6060603D] px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
            <span className="size-2.5 rounded-full bg-[#9AFD0D] shadow-[0_0_12px_#9AFD0D] animate-pulse" />
            Services
          </span>
        </Reveal>

        {/* Heading Section: Left Title with Inline Eye Loop Video Pill, Right Copy & Button */}
        <div className="mt-6 grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <Reveal variant="blur">
            <h2
              className="text-display text-3xl sm:text-5xl lg:text-[54px] font-semibold tracking-tight text-white leading-[1.12] sm:leading-[1.15]"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              <span>We help </span>
              {/* Looping Eye Video Pill inside headline */}
              <span className="inline-flex items-center align-middle mx-1.5 sm:mx-2.5 -translate-y-1 h-[36px] w-[86px] sm:h-[46px] sm:w-[110px] lg:h-[58px] lg:w-[134px] overflow-hidden rounded-full border border-white/20 bg-black shadow-[inset_0_2px_8px_rgba(0,0,0,0.8)] relative shrink-0">
                <video
                  src="/eye-loop.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="size-full object-cover scale-110 pointer-events-none"
                />
              </span>
              <span>you design</span>
              <br className="hidden sm:inline" />
              <span> and build better digital products. All in ONE place!</span>
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <div className="lg:pl-4">
              <p className="text-base sm:text-lg lg:text-[19px] text-[#B5B5B5] font-normal leading-[28px] sm:leading-[32px]">
                You need a partner who gets your business and covers everything. From branding to
                UI/UX design and web development, you can rely on us for everything.
              </p>
              <div className="mt-8">
                <Magnetic>
                  <Link
                    to="/services/web-development"
                    className="pill press sheen-hover inline-flex items-center gap-3 border border-white/25 bg-black/90 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white hover:text-black hover:border-white group shadow-lg"
                  >
                    <span>See All Services</span>
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </Magnetic>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Featured Service Cards Grid matching Video 1 */}
        <div className="mt-14 sm:mt-18 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((s, i) => (
            <Reveal key={s.title} variant="scale" delay={(i % 3) * 110}>
              <article className="group glass-card glass-polish hover-lift sheen-hover flex h-full flex-col overflow-hidden rounded-[24px] border border-white/10 bg-[#121212] transition-all duration-500 hover:border-[#9AFD0D]/40 hover:shadow-[0_20px_50px_-20px_rgba(154,253,13,0.15)]">
                {/* Visual Media with floating pill badge */}
                <div className="relative h-52 sm:h-60 overflow-hidden bg-surface">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                  {/* Service Badge Pill Overlay */}
                  <div className="absolute left-4 bottom-4">
                    <span className="pill inline-flex items-center gap-1.5 border border-white/25 bg-black/75 px-3.5 py-1.5 text-xs font-semibold text-white backdrop-blur-md transition-colors group-hover:border-[#9AFD0D]/60 group-hover:text-[#9AFD0D]">
                      <span className="size-1.5 rounded-full bg-[#9AFD0D]" />
                      {s.badge}
                      <ArrowUpRight className="size-3.5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>

                {/* Card Content & Tags */}
                <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                  <div>
                    <h3 className="text-display text-xl sm:text-2xl font-semibold text-white tracking-tight">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#B5B5B5]">{s.copy}</p>
                  </div>

                  <div className="mt-6 border-t border-white/8 pt-5">
                    <div className="flex flex-wrap gap-2">
                      {s.tags.map((t) => (
                        <span
                          key={t}
                          className="pill border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-white/70 backdrop-blur-xs transition-colors hover:text-white hover:border-white/25"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function LogoPill({ name, slug }: { name: string; slug: string }) {
  return (
    <span className="pill group flex shrink-0 items-center gap-2.5 border border-border bg-surface px-4 py-2.5 transition-colors hover:border-primary/50 hover:bg-surface-2 sm:gap-3 sm:px-7 sm:py-3">
      <img
        src={`https://cdn.simpleicons.org/${slug}/9ca3af`}
        alt={`${name} logo`}
        loading="lazy"
        width={24}
        height={24}
        className="size-5 shrink-0 object-contain transition-opacity sm:size-6"
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      />
      <span className="whitespace-nowrap text-sm font-medium tracking-tight text-muted-foreground transition-colors group-hover:text-foreground sm:text-lg">
        {name}
      </span>
    </span>
  );
}

export function ClientLogos() {
  const row1 = clientLogos.slice(0, 15);
  const row2 = clientLogos.slice(15);

  return (
    <section className="border-t border-border py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="eyebrow justify-center w-full text-center">
          Brand Landscape · Not Client Endorsements
        </p>
      </div>
      <div className="mt-8 space-y-4 sm:mt-10 sm:space-y-6">
        {[row1, row2].map((row, idx) => (
          <div key={idx} className="marquee-mask overflow-hidden">
            <div
              className={
                idx % 2
                  ? "flex w-max gap-3 animate-marquee-rev"
                  : "flex w-max gap-3 animate-marquee"
              }
              style={{ ["--marquee-duration" as string]: idx % 2 ? "55s" : "45s" }}
            >
              {[...row, ...row].map((c, i) => (
                <LogoPill key={`${c.name}-${i}`} name={c.name} slug={c.slug} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
