import { useEffect, useState } from "react";
import { ArrowUpRight, Calendar, Mail, Phone, ExternalLink, X, ChevronRight } from "lucide-react";
import { CALENDLY, services } from "@/data/site";
import { serviceHref, cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

export function MobileBottomBar() {
  const [activeTab, setActiveTab] = useState<"home" | "services" | "work" | "more">("home");
  const [contactOpen, setContactOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  // Update active tab based on scroll position or pathname
  useEffect(() => {
    const handleScrollOrLocation = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;

      if (path === "/about") {
        setActiveTab("more");
        return;
      }
      if (path.startsWith("/services")) {
        setActiveTab("services");
        return;
      }

      if (hash === "#work") {
        setActiveTab("work");
        return;
      }
      if (hash === "#services") {
        setActiveTab("services");
        return;
      }

      // Check section in viewport on homepage
      const workEl = document.getElementById("work");
      const servicesEl = document.getElementById("services");

      if (workEl) {
        const rect = workEl.getBoundingClientRect();
        if (rect.top <= 200 && rect.bottom >= 200) {
          setActiveTab("work");
          return;
        }
      }

      if (servicesEl) {
        const rect = servicesEl.getBoundingClientRect();
        if (rect.top <= 200 && rect.bottom >= 200) {
          setActiveTab("services");
          return;
        }
      }

      if (window.scrollY < 300) {
        setActiveTab("home");
      }
    };

    handleScrollOrLocation();
    window.addEventListener("scroll", handleScrollOrLocation, { passive: true });
    window.addEventListener("popstate", handleScrollOrLocation);

    return () => {
      window.removeEventListener("scroll", handleScrollOrLocation);
      window.removeEventListener("popstate", handleScrollOrLocation);
    };
  }, []);

  const handleNav = (target: "home" | "services" | "work", href: string) => {
    setActiveTab(target);
    const path = window.location.pathname;

    if (target === "home") {
      if (path === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        window.location.href = "/#top";
      }
      return;
    }

    if (target === "services") {
      const el = document.getElementById("services");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = "/#services";
      }
      return;
    }

    if (target === "work") {
      const el = document.getElementById("work");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = "/#work";
      }
      return;
    }
  };

  const handleChatFab = () => {
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    } else {
      setContactOpen(true);
    }
  };

  return (
    <>
      {/* Bottom Floating Navigation Dock — visible on mobile & small screens */}
      <nav
        aria-label="Mobile Navigation"
        className="fixed bottom-0 inset-x-0 z-50 lg:hidden pointer-events-auto select-none"
      >
        <div className="relative w-full max-w-lg mx-auto">
          {/* SVG Background with smooth concave cutout notch for the center FAB */}
          <div className="absolute inset-x-0 bottom-0 top-0 flex pointer-events-none drop-shadow-[0_-8px_24px_rgba(0,0,0,0.85)]">
            {/* Left Wing */}
            <div className="flex-1 bg-[#070707] border-t border-white/10 rounded-tl-[24px]" />

            {/* Center Notched Scoop */}
            <div className="w-[104px] h-[64px] shrink-0 relative">
              <svg
                width="104"
                height="64"
                viewBox="0 0 104 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full block"
              >
                {/* Solid Background Fill */}
                <path
                  d="M 0 0 C 14 0, 22 4, 28 14 C 34 24, 42 34, 52 34 C 62 34, 70 24, 76 14 C 82 4, 90 0, 104 0 L 104 64 L 0 64 Z"
                  fill="#070707"
                />
                {/* Continuous Top Specular Stroke */}
                <path
                  d="M 0 0 C 14 0, 22 4, 28 14 C 34 24, 42 34, 52 34 C 62 34, 70 24, 76 14 C 82 4, 90 0, 104 0"
                  stroke="rgba(255, 255, 255, 0.12)"
                  strokeWidth="1"
                  fill="none"
                />
              </svg>
            </div>

            {/* Right Wing */}
            <div className="flex-1 bg-[#070707] border-t border-white/10 rounded-tr-[24px]" />
          </div>

          {/* Underfill to ensure no gap on devices with home indicator (safe-area-inset-bottom) */}
          <div className="absolute inset-x-0 -bottom-10 h-10 bg-[#070707] pointer-events-none" />

          {/* Elevated Center Floating Action Button (FAB) with Neon Lime Glow */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-5 z-20">
            {/* Pulsing Radial Lime Glow Halo */}
            <div
              aria-hidden="true"
              className="absolute -inset-2 rounded-full bg-[#9AFD0D]/35 blur-[14px] pointer-events-none animate-pulse"
            />
            <div
              aria-hidden="true"
              className="absolute -inset-1 rounded-full bg-[#9AFD0D]/50 blur-[6px] pointer-events-none"
            />

            {/* Circular FAB Button */}
            <button
              type="button"
              onClick={handleChatFab}
              aria-label="Contact and Discovery Chat"
              className="relative flex size-[52px] items-center justify-center rounded-full bg-[#0a0a0a] border border-[#9AFD0D]/60 shadow-[0_0_20px_rgba(154,253,13,0.45),inset_0_1px_2px_rgba(255,255,255,0.2)] transition-transform duration-200 active:scale-95 cursor-pointer"
            >
              {/* Custom Chat Speech Bubble Icon with 2 text lines inside matching the image */}
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="#9AFD0D"
                className="shrink-0 drop-shadow-[0_0_4px_rgba(154,253,13,0.8)]"
              >
                <path d="M4 4C2.9 4 2 4.9 2 6v9c0 1.1.9 2 2 2h2v3.5c0 .4.5.7.8.4L11.3 17H20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4zm4 4h8c.55 0 1 .45 1 1s-.45 1-1 1H8c-.55 0-1-.45-1-1s.45-1 1-1zm0 4h5c.55 0 1 .45 1 1s-.45 1-1 1H8c-.55 0-1-.45-1-1s.45-1 1-1z" />
              </svg>
            </button>
          </div>

          {/* Navigation Items Grid (2 left, center spacer, 2 right) */}
          <div className="relative z-10 flex items-center justify-between h-[64px] px-3 pb-[max(env(safe-area-inset-bottom,0px),4px)]">
            {/* 1. Home Button */}
            <button
              type="button"
              onClick={() => handleNav("home", "/#top")}
              className="flex flex-1 flex-col items-center justify-center py-1 transition-colors duration-200 group"
            >
              <div
                className={cn(
                  "flex items-center justify-center transition-transform group-active:scale-90",
                  activeTab === "home" ? "text-[#9AFD0D]" : "text-[#9ca3af] group-hover:text-white",
                )}
              >
                {/* Rounded pentagon / home with interior line matching image */}
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 3.5 C12.5 3.5 13 3.8 13.3 4.2 L20.2 11.5 C20.7 12 21 12.6 21 13.3 L21 18 C21 19.7 19.7 21 18 21 L6 21 C4.3 21 3 19.7 3 18 L3 13.3 C3 12.6 3.3 12 3.8 11.5 L10.7 4.2 C11 3.8 11.5 3.5 12 3.5 Z" />
                  <path d="M9.5 15 C10.3 16.2 13.7 16.2 14.5 15" />
                </svg>
              </div>
              <span
                className={cn(
                  "text-[11px] font-medium tracking-tight mt-0.5",
                  activeTab === "home" ? "text-[#9AFD0D] font-semibold" : "text-[#9ca3af]",
                )}
              >
                Home
              </span>
            </button>

            {/* 2. Services Button */}
            <button
              type="button"
              onClick={() => handleNav("services", "/#services")}
              className="flex flex-1 flex-col items-center justify-center py-1 transition-colors duration-200 group"
            >
              <div
                className={cn(
                  "flex items-center justify-center transition-transform group-active:scale-90",
                  activeTab === "services"
                    ? "text-[#9AFD0D]"
                    : "text-[#9ca3af] group-hover:text-white",
                )}
              >
                {/* Briefcase / bag icon matching image */}
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 6 V5 C9 3.9 9.9 3 11 3 H13 C14.1 3 15 3.9 15 5 V6" />
                  <rect x="3" y="6" width="18" height="15" rx="4" />
                  <path d="M3 11 C8 13.5 16 13.5 21 11" />
                  <rect
                    x="10.5"
                    y="10"
                    width="3"
                    height="4"
                    rx="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </div>
              <span
                className={cn(
                  "text-[11px] font-medium tracking-tight mt-0.5",
                  activeTab === "services" ? "text-[#9AFD0D] font-semibold" : "text-[#9ca3af]",
                )}
              >
                Services
              </span>
            </button>

            {/* Center Spacer for Floating FAB cutout */}
            <div className="w-[84px] shrink-0" aria-hidden="true" />

            {/* 3. Work Button */}
            <button
              type="button"
              onClick={() => handleNav("work", "/#work")}
              className="flex flex-1 flex-col items-center justify-center py-1 transition-colors duration-200 group"
            >
              <div
                className={cn(
                  "flex items-center justify-center transition-transform group-active:scale-90",
                  activeTab === "work" ? "text-[#9AFD0D]" : "text-[#9ca3af] group-hover:text-white",
                )}
              >
                {/* Target / bullseye with arrow hitting center matching image */}
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11.5" cy="12.5" r="8.5" />
                  <circle cx="11.5" cy="12.5" r="4.5" />
                  <path d="M11.5 12.5 L19.5 4.5" />
                  <path d="M15.5 4.5 H19.5 V8.5" />
                </svg>
              </div>
              <span
                className={cn(
                  "text-[11px] font-medium tracking-tight mt-0.5",
                  activeTab === "work" ? "text-[#9AFD0D] font-semibold" : "text-[#9ca3af]",
                )}
              >
                Work
              </span>
            </button>

            {/* 4. More Button */}
            <button
              type="button"
              onClick={() => setMoreOpen(true)}
              className="flex flex-1 flex-col items-center justify-center py-1 transition-colors duration-200 group"
            >
              <div
                className={cn(
                  "flex items-center justify-center transition-transform group-active:scale-90",
                  activeTab === "more" ? "text-[#9AFD0D]" : "text-[#9ca3af] group-hover:text-white",
                )}
              >
                {/* Staggered 3 horizontal bars matching image */}
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                >
                  <line x1="8" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="11" y1="17" x2="20" y2="17" />
                </svg>
              </div>
              <span
                className={cn(
                  "text-[11px] font-medium tracking-tight mt-0.5",
                  activeTab === "more" ? "text-[#9AFD0D] font-semibold" : "text-[#9ca3af]",
                )}
              >
                More
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* "More" Slide-up Drawer */}
      <Sheet open={moreOpen} onOpenChange={setMoreOpen}>
        <SheetContent
          side="bottom"
          className="bg-[#0f0f10] border-t border-white/10 text-white rounded-t-[28px] p-6 pb-10 max-h-[85vh] overflow-y-auto"
        >
          <SheetHeader className="text-left pb-4 border-b border-white/10">
            <div className="flex items-center justify-between">
              <SheetTitle className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
                six<span className="text-[#9AFD0D]">2</span>eight
                <span className="inline-block size-1.5 rounded-full bg-[#9AFD0D]" />
              </SheetTitle>
              <SheetClose className="size-8 rounded-full bg-white/10 flex items-center justify-center text-neutral-300 hover:text-white">
                <X className="size-4" />
              </SheetClose>
            </div>
            <p className="text-xs text-neutral-400 mt-1">Full-Service Digital Growth Agency</p>
          </SheetHeader>

          {/* Quick Nav Links */}
          <div className="grid grid-cols-1 gap-2 pt-4">
            <a
              href="/#top"
              onClick={() => setMoreOpen(false)}
              className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
            >
              <span className="text-sm font-medium">Home</span>
              <ChevronRight className="size-4 text-neutral-500" />
            </a>

            <div className="rounded-xl bg-white/5 overflow-hidden">
              <button
                type="button"
                onClick={() => setServicesOpen(!servicesOpen)}
                className="w-full flex items-center justify-between p-3.5 hover:bg-white/10 transition-colors text-left"
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">Services</span>
                  <span className="text-[10px] font-semibold uppercase bg-[#9AFD0D]/15 text-[#9AFD0D] px-2 py-0.5 rounded-full">
                    {services.length} Specialities
                  </span>
                </div>
                <ChevronRight
                  className={cn(
                    "size-4 text-neutral-500 transition-transform duration-200",
                    servicesOpen && "rotate-90",
                  )}
                />
              </button>

              {servicesOpen && (
                <div className="border-t border-white/5 bg-black/40 px-3 py-2 space-y-1">
                  <a
                    href="/services/web-development"
                    onClick={() => setMoreOpen(false)}
                    className="flex items-center justify-between p-2.5 rounded-lg text-sm text-[#9AFD0D] hover:bg-white/5 font-medium"
                  >
                    <span>Web Development (Featured)</span>
                    <ArrowUpRight className="size-3.5 text-[#9AFD0D]" />
                  </a>
                  {services.map((s) => (
                    <a
                      key={s.title}
                      href={serviceHref(s.title)}
                      onClick={() => setMoreOpen(false)}
                      className="block p-2 text-xs text-neutral-300 hover:text-white hover:bg-white/5 rounded-md"
                    >
                      {s.title}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="/#work"
              onClick={() => setMoreOpen(false)}
              className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
            >
              <span className="text-sm font-medium">Selected Work</span>
              <ChevronRight className="size-4 text-neutral-500" />
            </a>

            <a
              href="/about"
              onClick={() => setMoreOpen(false)}
              className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
            >
              <span className="text-sm font-medium">About six2eight</span>
              <ChevronRight className="size-4 text-neutral-500" />
            </a>

            <a
              href="/#process"
              onClick={() => setMoreOpen(false)}
              className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
            >
              <span className="text-sm font-medium">Our Process</span>
              <ChevronRight className="size-4 text-neutral-500" />
            </a>

            <a
              href="/#faq"
              onClick={() => setMoreOpen(false)}
              className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
            >
              <span className="text-sm font-medium">FAQs</span>
              <ChevronRight className="size-4 text-neutral-500" />
            </a>
          </div>

          {/* Primary Action Button */}
          <div className="pt-6">
            <a
              href={CALENDLY}
              target="_blank"
              rel="noreferrer"
              className="pill w-full flex items-center justify-center gap-2 bg-[#9AFD0D] text-black py-3.5 px-6 font-semibold text-sm transition-transform active:scale-[0.98] shadow-[0_0_24px_rgba(154,253,13,0.35)]"
            >
              Start a Project
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </SheetContent>
      </Sheet>

      {/* Direct Contact Dialog if not on a page with #contact */}
      <Sheet open={contactOpen} onOpenChange={setContactOpen}>
        <SheetContent
          side="bottom"
          className="bg-[#0f0f10] border-t border-white/10 text-white rounded-t-[28px] p-6 pb-10"
        >
          <SheetHeader className="text-left pb-4 border-b border-white/10">
            <div className="flex items-center justify-between">
              <SheetTitle className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
                <span className="size-2 rounded-full bg-[#9AFD0D] animate-ping" />
                Let's Talk Growth
              </SheetTitle>
              <SheetClose className="size-8 rounded-full bg-white/10 flex items-center justify-center text-neutral-300 hover:text-white">
                <X className="size-4" />
              </SheetClose>
            </div>
            <p className="text-xs text-neutral-400 mt-1">
              Ready to turn digital challenges into measurable opportunities?
            </p>
          </SheetHeader>

          <div className="pt-5 space-y-3">
            <a
              href={CALENDLY}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-4 rounded-2xl bg-[#9AFD0D] text-black font-semibold text-sm shadow-[0_0_20px_rgba(154,253,13,0.3)] transition-transform active:scale-[0.98]"
            >
              <div className="flex items-center gap-3">
                <Calendar className="size-5" />
                <div>
                  <div className="font-bold">Book a 30-min Strategy Call</div>
                  <div className="text-xs text-black/75 font-normal">
                    Direct with our growth directors
                  </div>
                </div>
              </div>
              <ArrowUpRight className="size-4" />
            </a>

            <a
              href="mailto:hello@six2eight.com"
              className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Mail className="size-5 text-[#9AFD0D]" />
                <div>
                  <div className="text-sm font-medium">Email Our Team</div>
                  <div className="text-xs text-neutral-400">hello@six2eight.com</div>
                </div>
              </div>
              <ChevronRight className="size-4 text-neutral-500" />
            </a>

            <a
              href="/#contact"
              onClick={() => {
                setContactOpen(false);
                setTimeout(() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }, 200);
              }}
              className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Phone className="size-5 text-[#9AFD0D]" />
                <div>
                  <div className="text-sm font-medium">Complete Intake Form</div>
                  <div className="text-xs text-neutral-400">Detailed project scope & budget</div>
                </div>
              </div>
              <ChevronRight className="size-4 text-neutral-500" />
            </a>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
