import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

type ServiceItem = {
  title: string;
  subtitle: string;
  icon: string;
  href: string;
};

const designServices: ServiceItem[] = [
  {
    title: "UI & UX Design Services",
    subtitle: "Web & Mobile app design",
    icon: "/assets/dropdown/ui-ux-design.svg",
    href: "/#services",
  },
  {
    title: "Web Design Services | Custom Website Design",
    subtitle: "Modern websites that convert.",
    icon: "/assets/dropdown/web-design.svg",
    href: "/#services",
  },
  {
    title: "Mobile App Design Services",
    subtitle: "Seamless iOS & Android design.",
    icon: "/assets/dropdown/mobile-app.svg",
    href: "/#services",
  },
  {
    title: "Branding Identity and Design Services",
    subtitle: "Identity that stands out.",
    icon: "/assets/dropdown/branding.svg",
    href: "/#services",
  },
];

const developmentServices: ServiceItem[] = [
  {
    title: "Web Development Services | Custom Website Solutions",
    subtitle: "Built for speed & growth.",
    icon: "/assets/dropdown/web-development.svg",
    href: "/services/web-development",
  },
  {
    title: "WordPress Development Services",
    subtitle: "Easy to manage & scale.",
    icon: "/assets/dropdown/wordpress-1.svg",
    href: "/#services",
  },
  {
    title: "Shopify Development Services",
    subtitle: "Sell more with Shopify.",
    icon: "/assets/dropdown/shopify-1.svg",
    href: "/#services",
  },
  {
    title: "Webflow Development Services Company",
    subtitle: "Custom sites, no compromises.",
    icon: "/assets/dropdown/webflow-1.svg",
    href: "/#services",
  },
];

export function ServicesDropdown() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<number | undefined>(undefined);
  const menuId = useId();

  const handleMouseEnter = () => {
    window.clearTimeout(closeTimer.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimer.current = window.setTimeout(() => setOpen(false), 200);
  };

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  return (
    <div
      ref={wrapRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger Button */}
      <button
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1.5 text-[15px] font-medium text-[#E0E0E0] hover:text-white transition-colors cursor-pointer py-1"
      >
        <span>Services</span>
        <ChevronDown
          aria-hidden
          className={`size-3.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown Menu Modal */}
      <div
        id={menuId}
        data-open={open}
        className={`absolute left-1/2 top-full -translate-x-[180px] sm:-translate-x-[200px] pt-3 z-50 transition-all duration-200 ${
          open
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible pointer-events-none -translate-y-2"
        }`}
        style={{ pointerEvents: open ? "auto" : "none" }}
      >
        {/* Top Notch Pointer Arrow */}
        <div
          aria-hidden="true"
          className="absolute top-1.5 left-[180px] sm:left-[200px] size-3.5 rotate-45 bg-white border-t border-l border-black/10 z-20"
        />

        {/* Main White Dropdown Card */}
        <div className="relative rounded-[28px] sm:rounded-[32px] bg-white p-6 sm:p-7 shadow-[0_24px_70px_rgba(0,0,0,0.18)] border border-black/10 w-[680px] max-w-[95vw]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 items-start">
            {/* Column 1: Design Services */}
            <div className="flex flex-col">
              {/* Header Badge */}
              <div className="inline-block rounded-xl bg-[#F6F4FF] px-4 py-2 mb-3.5 w-fit">
                <span className="text-[17px] font-bold text-[#111111]">Design Services</span>
              </div>

              {/* Service Items */}
              <div className="flex flex-col gap-1.5">
                {designServices.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-start gap-3.5 p-2 rounded-xl hover:bg-black/[0.03] transition-colors"
                  >
                    <div className="size-10 rounded-full bg-[#161616] shrink-0 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                      <img src={item.icon} alt="" className="size-5 object-contain" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-[14px] font-bold text-[#111111] leading-tight group-hover:text-black">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#666666] font-normal leading-snug mt-1">
                        {item.subtitle}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Development Services */}
            <div className="flex flex-col">
              {/* Header Badge */}
              <div className="inline-block rounded-xl bg-[#FFF5ED] px-4 py-2 mb-3.5 w-fit">
                <span className="text-[17px] font-bold text-[#111111]">Development Services</span>
              </div>

              {/* Service Items */}
              <div className="flex flex-col gap-1.5">
                {developmentServices.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-start gap-3.5 p-2 rounded-xl hover:bg-black/[0.03] transition-colors"
                  >
                    <div className="size-10 rounded-full bg-[#161616] shrink-0 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                      <img src={item.icon} alt="" className="size-5 object-contain" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-[14px] font-bold text-[#111111] leading-tight group-hover:text-black">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#666666] font-normal leading-snug mt-1">
                        {item.subtitle}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
