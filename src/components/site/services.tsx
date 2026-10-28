import { useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { siteData } from "@/data/webdev/siteData";
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

export type SubServiceCardItem = {
  heading: string;
  description: string;
  image: string;
  link?: string;
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

export const subServicesCardsList: SubServiceCardItem[] = [
  ...siteData.subservices.cards.map((c) => ({
    heading: c.heading,
    description: c.description,
    image: c.image,
    link: "/services/web-development",
  })),
  {
    heading: "UI & UX Design",
    description:
      "A great product starts with understanding the user. We design clean, intuitive interfaces that make every interaction feel effortless and purposeful.",
    image: "https://cms.six2eight.com/wp-content/uploads/2025/06/ui-ux-service.webp",
    link: "/services/web-development",
  },
  {
    heading: "Mobile App Design",
    description:
      "Design intuitive, engaging mobile experiences that delight users and drive retention across iOS and Android devices.",
    image: "https://cms.six2eight.com/wp-content/uploads/2025/06/mobile-app.webp",
    link: "/services/web-development",
  },
  {
    heading: "Webflow Development",
    description:
      "Clean, responsive Webflow builds engineered for performance, marketing independence, and rapid iteration.",
    image: "https://cms.six2eight.com/wp-content/uploads/2025/06/webflow-development.webp",
    link: "/services/web-development",
  },
  {
    heading: "Shopify Development",
    description:
      "Turn your storefront into a clear path to purchase, with thoughtful product pages, high-converting checkout, and connected shopping experiences.",
    image: "https://cms.six2eight.com/wp-content/uploads/2025/06/shopify-development.webp",
    link: "/services/web-development",
  },
  {
    heading: "Brand Identity Systems",
    description:
      "Craft iconic brand identities, packaging, and cohesive design systems that make your business instantly recognizable.",
    image: "https://cms.six2eight.com/wp-content/uploads/2025/12/brand-identity-hero.webp",
    link: "/services/web-development",
  },
  {
    heading: "WordPress Development",
    description:
      "High-speed, SEO-friendly WordPress websites with custom functionality and headless architecture that drives results.",
    image: "https://cms.six2eight.com/wp-content/uploads/2025/02/wordpress-service-cards.webp",
    link: "/services/web-development",
  },
];

export function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const isHovered = useRef(false);
  const isDown = useRef(false);
  const startX = useRef(0);
  const dragStartOffset = useRef(0);
  const isDraggingRef = useRef(false);

  // Smooth continuous GPU-accelerated requestAnimationFrame infinite loop
  useEffect(() => {
    let animId: number;

    const tick = () => {
      const track = trackRef.current;
      if (!track) {
        animId = requestAnimationFrame(tick);
        return;
      }

      // Automatically move continuously if not hovered or actively dragging
      if (!isHovered.current && !isDown.current) {
        offsetRef.current -= 1.0;
      }

      // Seamless infinite looping wrap
      const halfWidth = track.scrollWidth / 2;
      if (halfWidth > 0) {
        if (offsetRef.current <= -halfWidth) {
          offsetRef.current += halfWidth;
        } else if (offsetRef.current > 0) {
          offsetRef.current -= halfWidth;
        }
      }

      track.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, []);

  const handleMouseEnter = () => {
    isHovered.current = true;
  };

  const handleMouseLeave = () => {
    isHovered.current = false;
    isDown.current = false;
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    isDown.current = true;
    isDraggingRef.current = false;
    startX.current = e.pageX;
    dragStartOffset.current = offsetRef.current;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current) return;
    const diff = e.pageX - startX.current;
    if (Math.abs(diff) > 5) {
      isDraggingRef.current = true;
    }
    offsetRef.current = dragStartOffset.current + diff;
  };

  const handleMouseUp = () => {
    isDown.current = false;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    isHovered.current = true;
    isDown.current = true;
    isDraggingRef.current = false;
    startX.current = e.touches[0].pageX;
    dragStartOffset.current = offsetRef.current;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDown.current) return;
    const diff = e.touches[0].pageX - startX.current;
    if (Math.abs(diff) > 5) {
      isDraggingRef.current = true;
    }
    offsetRef.current = dragStartOffset.current + diff;
  };

  const handleTouchEnd = () => {
    isHovered.current = false;
    isDown.current = false;
  };

  const scroll = (direction: "left" | "right") => {
    const shift = 380;
    offsetRef.current += direction === "left" ? shift : -shift;
    if (trackRef.current) {
      const halfWidth = trackRef.current.scrollWidth / 2;
      if (halfWidth > 0) {
        if (offsetRef.current <= -halfWidth) {
          offsetRef.current += halfWidth;
        } else if (offsetRef.current > 0) {
          offsetRef.current -= halfWidth;
        }
      }
      trackRef.current.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
    }
  };

  const handleCardClick = (e: React.MouseEvent) => {
    if (isDraggingRef.current) {
      e.preventDefault();
    }
  };

  const displayCards = [...subServicesCardsList, ...subServicesCardsList];

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
              {/* Showreel Video Pill inside headline matching reference animation */}
              <span
                data-showreel-target
                onClick={() => {
                  const showcase = document.getElementById("showcase-reveal-section");
                  if (showcase) {
                    showcase.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                title="Click to view full showreel"
                className="inline-flex items-center align-middle mx-1.5 sm:mx-2.5 -translate-y-1 h-[36px] w-[86px] sm:h-[46px] sm:w-[110px] lg:h-[58px] lg:w-[134px] overflow-hidden rounded-full border border-white/20 bg-black shadow-[inset_0_2px_8px_rgba(0,0,0,0.8)] relative shrink-0 cursor-pointer group"
              >
                <video
                  data-pill-video
                  src="/showreel.mp4"
                  poster="/showreel-poster.jpg"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="size-full object-cover scale-110 pointer-events-none transition-transform duration-300 group-hover:scale-125"
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
                    className="pill flex size-11 items-center justify-center border border-white/20 bg-black/70 text-white backdrop-blur-md transition-all hover:border-white hover:bg-white hover:text-black active:scale-95 cursor-pointer"
                  >
                    <ArrowLeft className="size-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => scroll("right")}
                    aria-label="Next services"
                    className="pill flex size-11 items-center justify-center border border-white/20 bg-black/70 text-white backdrop-blur-md transition-all hover:border-white hover:bg-white hover:text-black active:scale-95 cursor-pointer"
                  >
                    <ArrowRight className="size-4" />
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* SubServices Cards Continuous Infinite Horizontal Carousel */}
      <div
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="mt-14 sm:mt-18 w-full overflow-hidden select-none cursor-grab active:cursor-grabbing pb-8 pt-2"
      >
        <div
          ref={trackRef}
          className="flex gap-5 sm:gap-6 w-max will-change-transform pl-5 sm:pl-8"
        >
          {displayCards.map((card, idx) => (
            <div
              key={`${card.heading}-${idx}`}
              className="w-[290px] sm:w-[340px] md:w-[380px] shrink-0"
            >
              <Link
                to={card.link || "/services/web-development"}
                onClick={handleCardClick}
                className="service-card sub-service-card relative bg-center bg-cover rounded-[20px] lg:rounded-[24px] flex justify-between flex-col overflow-hidden group h-[440px] md:h-[520px] lg:h-[580px] select-none cursor-pointer shadow-md block"
                style={{ backgroundImage: `url(${card.image})` }}
              >
                {/* Top block spacer with explore arrow */}
                <div className="top-block flex justify-end pt-[28px] pr-[28px] sm:pt-[32px] sm:pr-[32px]">
                  <div className="flex size-10 md:size-11 items-center justify-center rounded-full bg-black/40 border border-white/20 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-[#9AFD0D] group-hover:text-black group-hover:border-[#9AFD0D] group-hover:scale-105 shadow-sm">
                    <ArrowUpRight className="size-4 md:size-5 stroke-[2.5]" />
                  </div>
                </div>

                {/* Bottom expanding panel */}
                <div className="botton-block relative z-10 p-[20px] sm:p-[24px] lg:p-[32px] block rounded-b-[20px] lg:rounded-b-[24px]">
                  <h3
                    className="text-[22px] md:text-[28px] lg:text-[32px] leading-[1.14] font-semibold text-white tracking-tight transform transition-transform duration-300 ease-out"
                    style={{ fontFamily: "'Manrope', sans-serif" }}
                  >
                    {card.heading}
                  </h3>
                  <div className="excerpt-content text-[#ededed] text-[14px] md:text-[15px] leading-[23px] font-normal">
                    {card.description}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ClientLogos() {
  const { brands } = siteData;

  const renderLogoGroup = (items: { title: string; url: string }[]) => {
    // 4 repetitions guarantees completely seamless -50% marquee looping
    const displayItems = [...items, ...items, ...items, ...items];

    return (
      <div className="flex items-center gap-8 sm:gap-14 md:gap-20 shrink-0 py-2">
        {displayItems.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center shrink-0 w-[140px] sm:w-[170px] md:w-[200px] h-[54px] sm:h-[68px] md:h-[76px] px-3 sm:px-4 transition-all duration-300 opacity-80 hover:opacity-100 hover:scale-105"
          >
            <img
              src={item.url}
              alt={item.title}
              className="max-h-[34px] sm:max-h-[42px] md:max-h-[48px] w-auto object-contain filter grayscale contrast-125 hover:grayscale-0 transition-all duration-300 block"
              decoding="async"
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden relative border-y border-neutral-100">
      {/* Left and right gradient fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 md:w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 md:w-48 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

      <div className="flex flex-col gap-6 sm:gap-8 md:gap-10">
        {/* Row 1: Leftward Marquee */}
        <div className="marquee-container">
          <div className="marquee-track" style={{ animationDuration: "36s" }}>
            {renderLogoGroup(brands.topRow)}
          </div>
        </div>

        {/* Row 2: Rightward Marquee (Reverse) */}
        <div className="marquee-container">
          <div className="marquee-track reverse" style={{ animationDuration: "32s" }}>
            {renderLogoGroup(brands.middleRow)}
          </div>
        </div>

        {/* Row 3: Leftward Marquee */}
        <div className="marquee-container">
          <div className="marquee-track" style={{ animationDuration: "38s" }}>
            {renderLogoGroup(brands.bottomRow)}
          </div>
        </div>
      </div>
    </section>
  );
}
