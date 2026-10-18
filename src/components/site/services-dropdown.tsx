import { serviceHref } from "@/lib/utils";
import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { services } from "@/data/site";
import { cn } from "@/lib/utils";

export function ServicesDropdown() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const itemsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const closeTimer = useRef<number | undefined>(undefined);
  const menuId = useId();
  const pendingFocus = useRef<number | null>(null);

  useEffect(() => {
    if (open && pendingFocus.current !== null) {
      const i = pendingFocus.current;
      pendingFocus.current = null;
      focusItem(i);
    }
  }, [open]);

  const focusItem = (i: number) => {
    const n = services.length;
    itemsRef.current[((i % n) + n) % n]?.focus();
  };

  const close = (returnFocus = false) => {
    setOpen(false);
    if (returnFocus) triggerRef.current?.focus();
  };

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  const onTriggerKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      const target = e.key === "ArrowDown" ? 0 : services.length - 1;
      if (open) focusItem(target);
      else {
        pendingFocus.current = target;
        setOpen(true);
      }
    } else if (e.key === "Escape" && open) {
      e.preventDefault();
      close(true);
    }
  };

  const onMenuKey = (e: KeyboardEvent<HTMLDivElement>) => {
    const idx = itemsRef.current.findIndex((el) => el === document.activeElement);
    const cols = 2;
    const map: Partial<Record<string, number>> = {
      ArrowDown: idx + cols,
      ArrowUp: idx - cols,
      ArrowRight: idx + 1,
      ArrowLeft: idx - 1,
      Home: 0,
      End: services.length - 1,
    };
    if (e.key === "Escape") {
      e.preventDefault();
      close(true);
    } else if (e.key in map) {
      e.preventDefault();
      focusItem(map[e.key] ?? 0);
    }
  };

  return (
    <div
      ref={wrapRef}
      className="relative"
      onMouseEnter={() => {
        window.clearTimeout(closeTimer.current);
        setOpen(true);
      }}
      onMouseLeave={() => {
        closeTimer.current = window.setTimeout(() => setOpen(false), 150);
      }}
      onBlur={(e) => {
        if (!wrapRef.current?.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={() => setOpen((o) => !o)}
        onKeyDown={onTriggerKey}
        className={cn("nav-trigger", open && "text-foreground bg-surface-2")}
      >
        Services
        <ChevronDown
          aria-hidden
          className={cn("size-3.5 transition-transform duration-300", open && "rotate-180")}
        />
      </button>

      <div
        id={menuId}
        data-open={open}
        onKeyDown={onMenuKey}
        className="absolute left-1/2 top-full w-[580px] -translate-x-1/2 pt-3"
        inert={!open}
        style={{ pointerEvents: open ? "auto" : "none" }}
      >
        <div
          data-open={open}
          className="dropdown-panel rounded-2xl border border-border bg-surface/95 p-3 shadow-2xl backdrop-blur-xl"
        >
          <ul className="grid grid-cols-2 gap-1">
            {services.map((s, i) => (
              <li
                key={s.title}
                className="dropdown-item"
                style={{ ["--item-delay" as string]: `${i * 40}ms` }}
              >
                <a
                  ref={(el) => {
                    itemsRef.current[i] = el;
                  }}
                  href={serviceHref(s.title)}
                  onClick={() => setOpen(false)}
                  className="dropdown-link group/item"
                >
                  <span className="relative size-12 shrink-0 overflow-hidden rounded-lg">
                    <img
                      src={s.image}
                      alt=""
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-500 group-hover/item:scale-110 group-focus-visible/item:scale-110"
                    />
                  </span>
                  <span className="flex-1 text-sm text-foreground">{s.title}</span>
                  <ArrowUpRight
                    aria-hidden
                    className="size-4 -translate-x-1 text-primary opacity-0 transition-all duration-300 group-hover/item:translate-x-0 group-hover/item:opacity-100 group-focus-visible/item:translate-x-0 group-focus-visible/item:opacity-100"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
