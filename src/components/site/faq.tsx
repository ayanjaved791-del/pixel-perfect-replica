import { ArrowUpRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/site";
import { Reveal } from "./reveal";
import { Magnetic } from "./magnetic";

export function Faq() {
  return (
    <section id="faq" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal variant="left">
            <p className="eyebrow">
              <span className="size-1.5 rounded-full bg-primary animate-glow-pulse" />
              FAQ
            </p>
            <h2 className="text-display mt-6 text-3xl sm:text-5xl">
              Your Growth Questions, Answered.
            </h2>
            <p className="mt-5 text-muted-foreground">Clear answers to move forward confidently.</p>
            <Magnetic className="mt-7">
              <a
                href="#contact"
                className="pill press sheen-hover inline-flex items-center gap-2 border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-surface-2"
              >
                Discuss Your Challenge <ArrowUpRight className="size-4" />
              </a>
            </Magnetic>
          </Reveal>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <Reveal key={f.q} variant="up" delay={i * 70}>
                <AccordionItem value={`item-${i}`} className="border-border">
                  <AccordionTrigger className="group text-left text-base font-medium transition-colors hover:no-underline data-[state=open]:text-primary sm:text-lg">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              </Reveal>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
