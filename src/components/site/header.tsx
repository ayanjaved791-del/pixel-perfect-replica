import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { CALENDLY } from "@/data/site";
import { cn } from "@/lib/utils";
import { ServicesDropdown } from "./services-dropdown";
import { MobileBottomBar } from "./mobile-bottom-bar";

const navLinks = [
  { label: "Home", href: "/#top" },
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#work" },
  { label: "About Us", href: "/about" },
  { label: "FAQs", href: "/#faq" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled ? "bg-ink/85 backdrop-blur-xl border-b border-border" : "bg-transparent",
        )}
      >
        <div className="mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="/#top" className="flex items-center gap-2" aria-label="six2eight home">
            <Logo />
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((l) =>
              l.label === "Services" ? (
                <ServicesDropdown key={l.label} />
              ) : (
                <a key={l.label} href={l.href} className="nav-trigger">
                  {l.label}
                </a>
              ),
            )}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={CALENDLY}
              target="_blank"
              rel="noreferrer"
              className="pill inline-flex items-center gap-1.5 bg-primary px-3.5 py-1.5 text-xs font-semibold text-primary-foreground transition-transform hover:scale-[1.03] sm:px-5 sm:py-2.5 sm:text-sm"
            >
              Start a Project
              <ArrowUpRight className="size-3.5 sm:size-4" />
            </a>
          </div>
        </div>
      </header>

      {/* Modern Curved Bottom Menu Bar for Mobile and Small Screens */}
      <MobileBottomBar />
    </>
  );
}

function Logo() {
  return (
    <span className="flex items-baseline text-2xl font-semibold tracking-tight text-foreground">
      six<span className="text-primary">2</span>eight
      <span className="ml-1 inline-block size-1.5 translate-y-[-2px] rounded-full bg-primary" />
    </span>
  );
}
