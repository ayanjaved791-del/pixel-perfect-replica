import React, { useState, useRef, useEffect } from "react";
import { siteData } from "@/data/webdev/siteData";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion, useMotionValue, animate } from "motion/react";

export const Testimonials: React.FC = () => {
  const { testimonials } = siteData;
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(testimonials.items.length - 1);
  const [cardWidth, setCardWidth] = useState(520);
  const gap = 24;

  const x = useMotionValue(0);

  useEffect(() => {
    const updateDimensions = () => {
      if (!containerRef.current) return;
      const containerWidth = containerRef.current.offsetWidth;
      let width = 520;
      if (window.innerWidth < 640) {
        width = 300;
      } else if (window.innerWidth < 1024) {
        width = 420;
      }
      setCardWidth(width);

      const totalTrackWidth = testimonials.items.length * (width + gap) - gap;
      const maxScroll = Math.max(0, totalTrackWidth - containerWidth + 32);
      const computedMax = Math.ceil(maxScroll / (width + gap));
      setMaxIndex(Math.max(0, computedMax));
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [testimonials.items.length]);

  useEffect(() => {
    const targetX = -currentIndex * (cardWidth + gap);
    animate(x, targetX, {
      type: "spring",
      damping: 28,
      stiffness: 220,
      mass: 0.8,
    });
  }, [currentIndex, cardWidth, gap, x]);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section className="testimonials-sections bg-[#F7F8F9] pt-[64px] md:pt-[100px] lg:pt-[140px] pb-[64px] md:pb-[100px] overflow-hidden select-none">
      <div className="container mx-auto px-[16px] 2xl:px-0">
        {/* Header */}
        <div className="mb-[40px] md:mb-[60px] text-center max-w-4xl mx-auto">
          <div className="mb-4">
            <span className="bg-[#070707] text-white text-[15px] md:text-[16px] font-medium leading-[24px] rounded-[40px] px-[16px] py-[8px] inline-flex items-center">
              <span className="w-[10px] h-[10px] md:w-[12px] md:h-[12px] bg-[#9AFD0D] rounded-full mr-[12px] inline-flex" />
              {testimonials.block_title}
            </span>
          </div>

          <h2
            className="text-[32px] sm:text-[44px] md:text-[54px] lg:text-[clamp(32px,4.25vw,72px)] leading-[1.18] font-semibold tracking-tight text-[#070707]"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            {testimonials.mainTitle}
          </h2>
        </div>

        {/* Testimonials Slider Viewport */}
        <div
          ref={containerRef}
          className="w-full overflow-hidden cursor-grab active:cursor-grabbing pb-8 pt-2 px-1"
        >
          <motion.div
            style={{ x }}
            drag="x"
            dragConstraints={{
              left: -(
                testimonials.items.length * (cardWidth + gap) -
                (containerRef.current?.offsetWidth || 1000) +
                40
              ),
              right: 0,
            }}
            dragElastic={0.12}
            onDragEnd={() => {
              const currentX = x.get();
              const newIndex = Math.round(-currentX / (cardWidth + gap));
              setCurrentIndex(Math.max(0, Math.min(maxIndex, newIndex)));
            }}
            className="flex gap-[20px] md:gap-[24px] w-max will-change-transform"
          >
            {testimonials.items.map((item, idx) => (
              <div key={idx} style={{ width: `${cardWidth}px` }} className="shrink-0">
                <div className="testimonial-card relative flex flex-col justify-between gap-[28px] md:gap-[40px] bg-white p-[24px] sm:p-[32px] md:p-[40px] rounded-[24px] shadow-md border border-neutral-200/60 h-full min-h-[380px]">
                  {/* Client Meta Top */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      {item.avatar ? (
                        <div className="w-[52px] h-[52px] md:w-[60px] md:h-[60px] rounded-full overflow-hidden border-2 border-neutral-100 shrink-0 bg-neutral-100">
                          <img
                            src={item.avatar}
                            alt={item.clientName}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      ) : (
                        <div className="w-[52px] h-[52px] rounded-full bg-neutral-900 text-white font-bold flex items-center justify-center">
                          {item.clientName.charAt(0)}
                        </div>
                      )}
                      <div>
                        <h4 className="text-[18px] md:text-[20px] font-semibold text-[#070707] leading-tight">
                          {item.clientName}
                        </h4>
                        <p className="text-[13px] md:text-[14px] text-[#717680] mt-0.5">
                          {item.clientTitle}
                        </p>
                      </div>
                    </div>

                    {/* Rating Stars */}
                    <div className="flex items-center gap-1 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-100">
                      {[...Array(5)].map((_, sIdx) => (
                        <Star key={sIdx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>

                  {/* Review Quote Body */}
                  <div className="flex-1">
                    <h3
                      className="text-[20px] md:text-[24px] font-semibold text-[#050414] leading-[1.3] mb-3"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      "{item.reviewTitle}"
                    </h3>
                    <p
                      className="text-[#535862] text-[15px] md:text-[16px] leading-[26px]"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {item.reviewText.replace(/<[^>]*>/g, "").trim()}
                    </p>
                  </div>

                  {/* Card footer */}
                  <div className="pt-4 border-t border-neutral-100 flex items-center justify-end text-xs text-neutral-400">
                    <span>Source: Clutch</span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Bar: Rating Score + Slider Controls */}
        <div className="mt-8 pt-8 border-t border-neutral-200/80 flex flex-col md:flex-row items-center justify-between gap-6 px-4">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="flex items-center gap-2">
              <span
                className="text-[28px] font-bold text-[#070707] tracking-tight"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {testimonials.ratingScore}
              </span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-5 h-5 fill-[#FBBF24] text-[#FBBF24]" />
                ))}
              </div>
            </div>
            <div className="h-4 w-px bg-neutral-300 hidden sm:block" />
            <p
              className="text-[15px] text-[#535862] max-w-sm"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {testimonials.clutchText}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <button
                type="button"
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className={`w-11 h-11 rounded-full border border-neutral-300 bg-white text-neutral-800 flex items-center justify-center transition-all cursor-pointer shadow-sm active:scale-95 ${
                  currentIndex === 0
                    ? "opacity-40 cursor-not-allowed"
                    : "hover:bg-black hover:text-white"
                }`}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                disabled={currentIndex >= maxIndex}
                className={`w-11 h-11 rounded-full border border-neutral-300 bg-white text-neutral-800 flex items-center justify-center transition-all cursor-pointer shadow-sm active:scale-95 ${
                  currentIndex >= maxIndex
                    ? "opacity-40 cursor-not-allowed"
                    : "hover:bg-[#9AFD0D] hover:text-black hover:border-[#9AFD0D]"
                }`}
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <a
              href={testimonials.consultationUrl}
              target="_blank"
              rel="noreferrer"
              className="secondary-buttons button-slide text-sm cursor-pointer whitespace-nowrap"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <div className="button-text-wrapper">
                <span className="button-text" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Book a Free Consultation
                </span>
                <span
                  className="button-text button-text-hover"
                  aria-hidden="true"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Book a Free Consultation
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
