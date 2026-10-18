import { useState, type FormEvent } from "react";
import { ArrowUpRight, MapPin } from "lucide-react";
import { toast } from "sonner";

const budgets = ["$1k to 10k", "$10k to 20k", "$20k to $50k", "$100k+"];
const serviceOptions = [
  "Branding & Strategy",
  "UI/UX Experiences",
  "Web Development",
  "SEO & Organic Growth",
  "Paid Advertising",
  "Lead Generation",
  "AI Automation & CRM",
  "E-commerce",
];

export function Contact() {
  const [budget, setBudget] = useState(budgets[0]);
  const [service, setService] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success(
      "Demo form only — no enquiry was sent. Please use the consultation link to discuss your challenge.",
    );
    e.currentTarget.reset();
    setService("");
  };

  return (
    <section id="contact" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="eyebrow">
              <span className="size-1.5 rounded-full bg-primary" />
              Get in Touch
            </p>
            <h2 className="text-display mt-6 text-3xl sm:text-5xl">
              LET&rsquo;S BUILD <span className="text-primary">WHAT&rsquo;S NEXT.</span>
            </h2>
            <p className="mt-5 max-w-md text-muted-foreground">
              Tell us where your business wants to go. We&rsquo;ll help you identify the right
              digital solutions to move forward.
            </p>

            <div className="glass-card glass-polish mt-10 flex gap-4 p-6">
              <MapPin className="mt-0.5 size-5 shrink-0 text-primary" />
              <div>
                <p className="text-sm font-medium text-foreground">Headquarters</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  921 Town Centre Blvd, #266, Clayton
                  <br />
                  North Carolina 27520, US
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="glass-card glass-polish p-7 sm:p-9">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Your name" name="name" placeholder="Your name" required />
              <Field
                label="Email"
                name="email"
                type="email"
                placeholder="you@company.com"
                required
              />
            </div>

            <fieldset className="mt-7">
              <legend className="text-sm text-muted-foreground">I need help with</legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {serviceOptions.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setService(s)}
                    className={
                      "pill cursor-pointer border px-4 py-2 text-sm transition-colors " +
                      (service === s
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border text-muted-foreground hover:text-foreground")
                    }
                  >
                    {s}
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset className="mt-7">
              <legend className="text-sm text-muted-foreground">Budget range</legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {budgets.map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => setBudget(b)}
                    className={
                      "pill cursor-pointer border px-4 py-2 text-sm transition-colors " +
                      (budget === b
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border text-muted-foreground hover:text-foreground")
                    }
                  >
                    {b}
                  </button>
                ))}
              </div>
            </fieldset>

            <label className="mt-7 block">
              <span className="text-sm text-muted-foreground">Your growth challenge</span>
              <textarea
                name="message"
                rows={4}
                placeholder="Tell us about your business, goals, and challenges…"
                className="mt-2 w-full rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
              />
            </label>

            <button
              type="submit"
              className="pill mt-7 inline-flex w-full cursor-pointer items-center justify-center gap-2 bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.01]"
            >
              Start a Project <ArrowUpRight className="size-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-sm text-muted-foreground">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
      />
    </label>
  );
}
