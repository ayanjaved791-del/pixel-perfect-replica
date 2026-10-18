const designServices = [
  "Branding & Strategy",
  "UI/UX Experiences",
  "SEO & Organic Growth",
  "Paid Advertising",
  "Lead Generation",
];
const devServices = ["Web Development", "E-commerce", "AI Automation & CRM", "Web Applications"];
const company = ["About Us", "FAQs", "Blogs", "Team", "Career"];
const socials = ["Dribbble", "Instagram", "Behance", "LinkedIn", "Facebook"];

export function Footer() {
  return (
    <footer className="border-t border-border bg-ink pt-16 pb-20 lg:pb-6">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="flex items-baseline text-2xl font-semibold tracking-tight">
              six<span className="text-primary">2</span>eight
            </span>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              A full-service digital growth agency connecting strategy, design, technology, and
              marketing to move businesses forward.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {socials.map((s) => (
                <span
                  key={s}
                  className="pill cursor-pointer border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <FooterCol title="Strategy & Growth" items={designServices} />
          <FooterCol title="Technology & Systems" items={devServices} />
          <FooterCol title="Company" items={company} />
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border py-7 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026. six2eight. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="cursor-pointer transition-colors hover:text-foreground">
              Privacy Policy
            </span>
            <span className="cursor-pointer transition-colors hover:text-foreground">
              Terms of use
            </span>
          </div>
        </div>
      </div>

      <p
        aria-hidden
        className="text-display select-none px-5 pb-6 text-center text-[15vw] leading-none text-foreground/5"
      >
        six2eight
      </p>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-sm font-medium text-foreground">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {items.map((i) => (
          <li key={i}>
            <span className="cursor-pointer text-sm text-muted-foreground transition-colors hover:text-primary">
              {i}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
