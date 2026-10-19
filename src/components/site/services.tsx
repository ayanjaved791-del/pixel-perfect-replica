import { useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
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
    title: "Mobile App Design",
    badge: "Mobile App Design",
    category: "Design",
    tags: ["iOS & Android", "UI/UX", "Mobile Systems", "Prototyping"],
    copy: "Design intuitive, engaging mobile experiences that delight users and drive retention across iOS and Android devices.",
    image: "https://cms.six2eight.com/wp-content/uploads/2025/06/mobile-app.webp",
    link: "/services/web-development",
  },
  {
    title: "Webflow Development Services Company",
    badge: "Webflow Development",
    category: "Development",
    tags: ["Custom Webflow", "CMS Solutions", "Responsive Design", "No-Code Speed"],
    copy: "Clean, responsive Webflow builds engineered for performance, marketing independence, and rapid iteration.",
    image: "https://cms.six2eight.com/wp-content/uploads/2025/06/webflow-development.webp",
    link: "/services/web-development",
  },
  {
    title: "Motion Graphics Design",
    badge: "Motion Graphics",
    category: "Design",
    tags: ["3D Animation", "Brand Motion", "Product Teasers", "Interactive FX"],
    copy: "Captivate your audience with dynamic motion design, 3D graphics, and micro-interactions that bring your brand to life.",
    image: "https://cms.six2eight.com/wp-content/uploads/2025/02/motion-graphic.png",
    link: "/services/web-development",
  },
  {
    title: "Branding Identity and Design Services",
    badge: "Brand Identity",
    category: "Branding",
    tags: ["Logo Systems", "Brand Guidelines", "Packaging", "Visual Language"],
    copy: "Craft iconic brand identities, packaging, and cohesive design systems that make your business instantly recognizable.",
    image: "https://cms.six2eight.com/wp-content/uploads/2025/12/brand-identity-hero.webp",
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
    title: "Web Development Services",
    badge: "Web Development",
    category: "Development",
    tags: ["Custom Dev", "API Development", "CMS Development", "Fast & Secure"],
    copy: "Your website should work flawlessly on any device and load in seconds. We build fast, secure, and scalable sites that perform as good as they look.",
    image: "https://cms.six2eight.com/wp-content/uploads/2025/06/web-developement.webp",
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
    title: "Shopify Development Services",
    badge: "Shopify Development",
    category: "Development",
    tags: ["Online Stores", "Custom Theme", "Checkout", "High Conversion"],
    copy: "Turn your storefront into a clear path to purchase, with thoughtful product pages, high-converting checkout, and connected shopping experiences.",
    image: "https://cms.six2eight.com/wp-content/uploads/2025/06/shopify-development.webp",
    link: "/services/web-development",
  },
  {
    title: "SaaS & Web Application Design",
    badge: "SaaS Design",
    category: "Design",
    tags: ["Web Apps", "Dashboards", "Design Systems", "Complex UX"],
    copy: "Enterprise-grade web application and SaaS interfaces built for power users with uncompromising visual polish.",
    image: "https://cms.six2eight.com/wp-content/uploads/2025/06/sass-web-application.webp",
    link: "/services/web-development",
  },
];

export function Services() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const isHovered = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animId: number;
    let scrollPos = el.scrollLeft;

    const tick = () => {
      if (!isHovered.current && !isDown.current && el) {
        scrollPos += 0.85;
        const half = el.scrollWidth / 2;
        if (half > 0 && scrollPos >= half) {
          scrollPos -= half;
        }
        el.scrollLeft = scrollPos;
      } else if (el) {
        scrollPos = el.scrollLeft;
      }
      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animId);
    };
  }, []);

  const handleMouseEnter = () => {
    isHovered.current = true;
  };

  const handleMouseLeave = () => {
    isHovered.current = false;
    isDown.current = false;
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDown.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollStart.current = scrollRef.current.scrollLeft;
  };

  const handleMouseUp = () => {
    isDown.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollStart.current - walk;
  };

  const handleTouchStart = () => {
    isHovered.current = true;
  };

  const handleTouchEnd = () => {
    isHovered.current = false;
  };

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const distance = 360;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -distance : distance,
      behavior: "smooth",
    });
  };

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
              <span
                data-showreel-target
                className="inline-flex items-center align-middle mx-1.5 sm:mx-2.5 -translate-y-1 h-[36px] w-[86px] sm:h-[46px] sm:w-[110px] lg:h-[58px] lg:w-[134px] overflow-hidden rounded-full border border-white/20 bg-black shadow-[inset_0_2px_8px_rgba(0,0,0,0.8)] relative shrink-0"
              >
                <video
                  src="/eye-loop.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="size-full object-cover scale-110 pointer-events-none transition-opacity duration-300"
                  style={{ opacity: "var(--eye, 1)" }}
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
              <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                <Magnetic>
                  <Link
                    to="/services/web-development"
                    className="pill press sheen-hover inline-flex items-center gap-3 border border-white/25 bg-black/90 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white hover:text-black hover:border-white group shadow-lg"
                  >
                    <span>See All Services</span>
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </Magnetic>

                {/* Carousel navigation controls */}
                <div className="flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => scroll("left")}
                    aria-label="Previous services"
                    className="pill flex size-11 items-center justify-center border border-white/20 bg-black/70 text-white backdrop-blur-md transition-all hover:border-white hover:bg-white hover:text-black active:scale-95"
                  >
                    <ArrowLeft className="size-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => scroll("right")}
                    aria-label="Next services"
                    className="pill flex size-11 items-center justify-center border border-white/20 bg-black/70 text-white backdrop-blur-md transition-all hover:border-white hover:bg-white hover:text-black active:scale-95"
                  >
                    <ArrowRight className="size-4" />
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Featured Service Cards Continuous Floating Marquee Carousel */}
        <div
          ref={scrollRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="mt-14 sm:mt-18 flex gap-5 sm:gap-6 overflow-x-auto pb-6 scrollbar-none no-scrollbar cursor-grab active:cursor-grabbing select-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {[...featuredServices, ...featuredServices].map((s, i) => (
            <div key={`${s.title}-${i}`} className="w-[280px] sm:w-[320px] md:w-[350px] shrink-0">
              <article className="group relative aspect-[3/4] sm:aspect-[4/5] min-h-[400px] sm:min-h-[460px] w-full overflow-hidden rounded-[20px] sm:rounded-[24px] border border-white/10 bg-[#121212] transition-all duration-500 hover:border-white/30 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8)]">
                {/* div 1: Visual Media with subtle hover zoom & gradient shift */}
                <div className="absolute inset-0 size-full overflow-hidden bg-surface">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 via-50% to-transparent pointer-events-none transition-opacity duration-500 group-hover:opacity-0" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 via-65% to-transparent/30 pointer-events-none opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/10 pointer-events-none" />
                </div>

                {/* div 2: Bottom Title & Expandable Hover Details */}
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7 z-10 pointer-events-none transition-all duration-500">
                  <h3
                    className="text-display text-xl sm:text-2xl font-bold text-white tracking-tight leading-[1.2] transition-colors group-hover:text-white"
                    style={{ fontFamily: "'Manrope', sans-serif" }}
                  >
                    {s.title}
                  </h3>

                  {/* Expandable Details on Hover */}
                  <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-500 ease-out group-hover:grid-rows-[1fr] group-hover:opacity-100 group-hover:mt-3">
                    <div className="overflow-hidden">
                      <p className="text-xs sm:text-sm text-[#D4D4D4] font-normal leading-relaxed line-clamp-3">
                        {s.copy}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {s.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="pill inline-flex items-center border border-white/20 bg-white/10 px-2.5 py-0.5 text-[11px] font-medium text-white/90 backdrop-blur-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="mt-3.5 flex items-center justify-between border-t border-white/10 pt-2.5">
                        <span className="text-xs font-semibold text-[#9AFD0D] flex items-center gap-1.5">
                          <span>Explore Service</span>
                        </span>
                        <div className="flex size-7 items-center justify-center rounded-full bg-[#9AFD0D] text-black transition-transform group-hover:scale-105">
                          <ArrowUpRight className="size-3.5 stroke-[2.5]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Link
                  to={s.link}
                  className="absolute inset-0 z-20 focus:outline-none focus:ring-2 focus:ring-[#9AFD0D] rounded-[inherit]"
                  aria-label={s.title}
                />
              </article>
            </div>
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
