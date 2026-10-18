import React, { useState, useEffect } from "react";
import { siteData } from "@/data/webdev/siteData";
import { Star, CheckCircle, ArrowUpRight } from "lucide-react";
import { GreenHerringboneBackground } from "./GreenHerringboneBackground";

export const ContactForm: React.FC = () => {
  const { contact } = siteData;
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Form states matching user's design
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>(["Web Development"]);
  const [budget, setBudget] = useState("$1k to 10k");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % contact.testimonials.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [contact.testimonials.length]);

  const currentT = contact.testimonials[activeTestimonial]!;

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

  const budgetOptions = ["$1k to 10k", "$10k to 20k", "$20k to $50k", "$100k+"];

  const toggleService = (srv: string) => {
    if (selectedServices.includes(srv)) {
      setSelectedServices(selectedServices.filter((s) => s !== srv));
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) return;
    setIsSubmitted(true);
  };

  return (
    <section
      id="contact-us-form"
      className="contact-forms relative z-10 px-[16px] lg:px-6 py-[64px] sm:py-[80px] lg:py-[120px] overflow-hidden bg-[#456828]"
    >
      {/* Pure TSX & Canvas programmatic green herringbone tile background */}
      <GreenHerringboneBackground />

      {/* Subtle edge-fade overlay to seamlessly transition with adjacent dark sections */}
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-[#111111]/35 via-transparent to-[#111111]/45"
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row overflow-hidden rounded-[24px] lg:rounded-[32px] border border-white/10 shadow-[0_24px_64px_rgba(0,0,0,0.65)] bg-[#141416]/95 backdrop-blur-md">
          {/* Left Column: Testimonial Showcase (Desktop) */}
          <div className="hidden lg:flex w-full lg:w-1/2 bg-white border-b lg:border-b-0 lg:border-r border-neutral-200/80 flex-col justify-between p-[36px] xl:p-[48px] min-h-[720px] text-neutral-900">
            {/* Top Company Badge */}
            <div className="flex items-center gap-3">
              <div className="w-[52px] h-[52px] rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0 border border-neutral-200/80 p-2 overflow-hidden">
                <img
                  src={currentT.avatar}
                  alt={currentT.company}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-[18px] font-semibold text-[#050414]">{currentT.company}</span>
            </div>

            {/* Testimonial Quote */}
            <div className="my-auto py-8">
              <div className="space-y-4">
                <p
                  className="text-[26px] xl:text-[32px] leading-[1.3] font-semibold text-[#050414]"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  "{currentT.quote}"
                </p>
                <p
                  className="text-[16px] xl:text-[18px] leading-[28px] font-normal text-[#535862]"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {currentT.subquote}
                </p>
              </div>

              {/* Author & Avatar */}
              <div className="flex items-center gap-3.5 mt-8">
                <div className="w-[56px] h-[56px] rounded-full overflow-hidden border-2 border-white shadow-sm shrink-0 bg-neutral-100">
                  <img
                    src={currentT.avatar}
                    alt={currentT.company}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p
                    className="text-[18px] font-semibold text-[#050414]"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {currentT.company}
                  </p>
                  <p
                    className="text-sm text-neutral-500"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Verified Client
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Rating & Progress Indicator */}
            <div className="pt-6 border-t border-neutral-200">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-[#FBBF24] text-[#FBBF24]" />
                  ))}
                </div>
              </div>
              <p className="text-sm text-neutral-600 font-medium">
                200+ happy Customers based on complement and customer reviews on Clutch
              </p>

              {/* Progress bars */}
              <div className="flex gap-2 items-center mt-6">
                {contact.testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveTestimonial(idx)}
                    className="h-1 flex-1 rounded-full bg-neutral-200 overflow-hidden cursor-pointer"
                    aria-label={`Go to slide ${idx + 1}`}
                  >
                    {activeTestimonial === idx && (
                      <div
                        className="h-full bg-[#87e00c] animate-[contactProgressGrow_linear_forwards]"
                        style={{ animationDuration: "5.5s" }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="w-full lg:w-1/2 bg-[#161618] flex flex-col justify-between p-[24px] sm:p-[36px] xl:p-[44px] min-h-[720px] text-white">
            {isSubmitted ? (
              <div className="my-auto text-center py-12 px-4 animate-fadeIn">
                <div className="w-16 h-16 bg-[#9AFD0D]/20 text-black rounded-full flex items-center justify-center mx-auto mb-6 border border-[#9AFD0D]/30">
                  <CheckCircle className="w-10 h-10 text-[#9AFD0D]" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  Thank You, {fullName}!
                </h3>
                <p className="text-neutral-400 max-w-md mx-auto mb-8">
                  Your project details have been received. Our directors will review your growth
                  challenge and get back to you within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="secondary-buttons button-slide cursor-pointer text-sm"
                >
                  <div className="button-text-wrapper">
                    <span className="button-text">Send Another Message</span>
                    <span className="button-text button-text-hover">Send Another Message</span>
                  </div>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 h-full justify-between">
                <div className="space-y-6">
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-neutral-300 mb-2">
                        Your name
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Your name"
                        className="w-full px-4 py-3.5 rounded-xl bg-[#202023] border border-[#333338] text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-400 focus:ring-1 focus:ring-neutral-400 transition-all text-sm sm:text-base"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@company.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-[#202023] border border-[#333338] text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-400 focus:ring-1 focus:ring-neutral-400 transition-all text-sm sm:text-base"
                      />
                    </div>
                  </div>

                  {/* I need help with */}
                  <div>
                    <label className="block text-sm sm:text-base font-medium text-neutral-300 mb-3">
                      I need help with
                    </label>
                    <div className="flex flex-wrap gap-3 sm:gap-3.5">
                      {serviceOptions.map((srv) => {
                        const isSelected = selectedServices.includes(srv);
                        return (
                          <button
                            key={srv}
                            type="button"
                            onClick={() => toggleService(srv)}
                            className={`px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all cursor-pointer border ${
                              isSelected
                                ? "bg-white text-black border-white font-semibold shadow-sm scale-[1.02]"
                                : "bg-[#202023] text-neutral-300 border-[#333338] hover:text-white hover:border-neutral-500 hover:bg-[#26262a]"
                            }`}
                          >
                            {srv}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Budget range */}
                  <div>
                    <label className="block text-sm sm:text-base font-medium text-neutral-300 mb-3">
                      Budget range
                    </label>
                    <div className="flex flex-wrap gap-3 sm:gap-3.5">
                      {budgetOptions.map((b) => {
                        const isSelected = budget === b;
                        return (
                          <button
                            key={b}
                            type="button"
                            onClick={() => setBudget(b)}
                            className={`px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all cursor-pointer border ${
                              isSelected
                                ? "bg-[#9AFD0D] text-black border-[#9AFD0D] font-semibold shadow-sm scale-[1.02]"
                                : "bg-[#202023] text-neutral-300 border-[#333338] hover:text-white hover:border-neutral-500 hover:bg-[#26262a]"
                            }`}
                          >
                            {b}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Your growth challenge */}
                  <div>
                    <label className="block text-sm sm:text-base font-medium text-neutral-300 mb-2">
                      Your growth challenge
                    </label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about your business, goals, and challenges..."
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#202023] border border-[#333338] text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-400 focus:ring-1 focus:ring-neutral-400 transition-all text-sm sm:text-base resize-y min-h-[110px]"
                    />
                  </div>
                </div>

                {/* Submit Button: Start a Project ↗ */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#9AFD0D] text-[#070707] font-semibold text-base sm:text-lg py-4 rounded-full flex items-center justify-center gap-2 hover:bg-[#aefe2b] hover:shadow-[0_0_24px_rgba(154,253,13,0.35)] transition-all cursor-pointer"
                  >
                    <span>Start a Project</span>
                    <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
