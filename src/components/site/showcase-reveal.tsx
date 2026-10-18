import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, Play, Pause, Maximize2 } from "lucide-react";

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export function ShowcaseReveal() {
  const sectionRef = useRef<HTMLElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);

  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showControls, setShowControls] = useState(true);

  // Smooth scroll-driven zoom/scale animation
  useEffect(() => {
    const section = sectionRef.current;
    const media = mediaRef.current;
    if (!section || !media) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      media.style.transform = "translate3d(-50%, -50%, 0) scale(1)";
      media.style.opacity = "1";
      return;
    }

    let raf = 0;
    let target = 0;
    let current = -1;

    const readProgress = () => {
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      const travel = rect.height - vh;
      return clamp(travel > 0 ? -rect.top / travel : 0);
    };

    const render = (p: number) => {
      const w = window.innerWidth;
      const e = easeOutCubic(p);

      const mobile = w < 640;
      const tablet = w >= 640 && w < 1024;
      const startY = mobile ? 12 : tablet ? 15 : 18; // vh
      const startScale = mobile ? 0.72 : tablet ? 0.65 : 0.58;

      const y = startY * (1 - e);
      const s = startScale + (1 - startScale) * e;
      const vh = window.innerHeight;

      // Phase 2: shrink into the headline pill in the next section
      const pillEl = document.querySelector<HTMLElement>("[data-showreel-target]");
      const sticky = stickyRef.current;
      let m = 0;
      let dx = 0;
      let dy = 0;
      const W0 = Math.min(w * 0.94, 1700);
      const H0 = vh * (mobile ? 0.86 : 0.88);
      let mw = W0;
      let mh = H0;
      if (pillEl && sticky) {
        const pr = pillEl.getBoundingClientRect();
        const cr = sticky.getBoundingClientRect();
        const raw = clamp((vh - pr.top) / (vh * 0.7));
        m = raw < 0.5 ? 4 * raw * raw * raw : 1 - Math.pow(-2 * raw + 2, 3) / 2;
        const ccx = cr.left + cr.width / 2;
        const ccy = cr.top + cr.height / 2;
        const startCy = ccy + (y * vh) / 100;
        dx = (pr.left + pr.width / 2 - ccx) * m;
        dy = (startCy - ccy) + (pr.top + pr.height / 2 - startCy) * m;
        mw = W0 + (pr.width - W0) * m;
        mh = H0 + (pr.height - H0) * m;
        media.style.setProperty("--r", `${28 + (mh / 2 - 28) * m}px`);
        media.style.setProperty("--pad", `${(mobile ? 8 : 14) * (1 - m)}px`);
        media.classList.toggle("showreel-shrunk", m > 0.15);
        pillEl.style.setProperty("--eye", m > 0.02 ? "0" : "1");
      }
      const sc = m > 0 ? 1 + (s - 1) * (1 - m) : s;
      media.style.width = `${mw.toFixed(2)}px`;
      media.style.height = `${mh.toFixed(2)}px`;
      media.style.transform =
        m > 0
          ? `translate3d(calc(-50% + ${dx.toFixed(2)}px), calc(-50% + ${dy.toFixed(2)}px), 0) scale(${sc.toFixed(4)})`
          : `translate3d(-50%, calc(-50% + ${y.toFixed(3)}vh), 0) scale(${s.toFixed(4)})`;
      media.style.opacity = String(0.7 + 0.3 * clamp(e * 1.5));
      if (glowRef.current) glowRef.current.style.opacity = String(0.4 * (1 - e));
    };

    const loop = () => {
      const diff = target - current;
      current += Math.abs(diff) < 0.0005 ? diff : diff * 0.12;
      render(current);
      raf = requestAnimationFrame(loop);
    };

    const onScroll = () => {
      target = readProgress();
    };

    target = readProgress();
    current = target;
    render(current);
    raf = requestAnimationFrame(loop);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Update progress bar as video plays
  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100);
    }
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const nextMuted = !videoRef.current.muted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const toggleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    } else {
      video.requestFullscreen().catch(() => {});
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = clamp(clickX / rect.width);
    if (videoRef.current && videoRef.current.duration) {
      videoRef.current.currentTime = ratio * videoRef.current.duration;
      setProgress(ratio * 100);
    }
  };

  return (
    <section
      ref={sectionRef}
      aria-label="Selected work showcase video"
      className="relative z-20 -mt-8 h-[220vh] sm:h-[240vh]"
    >
      <div ref={stickyRef} className="sticky top-0 h-screen">
        {/* Ambient background glow */}
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            ref={glowRef}
            className="absolute left-1/2 top-1/3 h-[420px] w-[720px] -translate-x-1/2 rounded-full blur-[160px]"
            style={{ background: "var(--color-primary)", opacity: 0.35 }}
          />
        </div>

        {/* Scaled media container on scroll */}
        <div
          ref={mediaRef}
          className="absolute left-1/2 top-1/2 w-[94vw] max-w-[1700px] will-change-transform"
          style={{ transformOrigin: "50% 50%" }}
        >
          {/* Card frame */}
          <div
            className="relative h-full overflow-hidden border border-border bg-ink shadow"
            style={{ borderRadius: "var(--r, 28px)", padding: "var(--pad, 14px)" }}
          >
          <div className="hidden shadow-[0_60px_140px_-40px_rgba(0,0,0,0.95)]">
            {/* Inner video player container (matches focused selector) */}
            <div
              className="group relative h-full w-full cursor-pointer overflow-hidden bg-black"
              style={{ borderRadius: "max(calc(var(--r, 28px) - var(--pad, 14px)), 0px)" }}
              onClick={togglePlay}
              onMouseEnter={() => setShowControls(true)}
            >
              <video
                ref={videoRef}
                src="/showreel.mp4"
                poster="/showreel-poster.jpg"
                autoPlay
                loop
                muted={isMuted}
                playsInline
                preload="auto"
                onTimeUpdate={handleTimeUpdate}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
              />

              {/* Top Bar Overlay */}
              <div
                data-overlay
                className={`pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between p-4 sm:p-6 bg-gradient-to-b from-black/80 via-black/30 to-transparent transition-opacity duration-300 ${
                  showControls ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/50 px-3.5 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                    <span className="size-2 rounded-full bg-[#9AFD0D] animate-ping" />
                    <span className="size-2 rounded-full bg-[#9AFD0D] -ml-4" />
                    six2eight Showreel
                  </span>
                  <span className="hidden sm:inline text-xs text-white/60">
                    Define · Design · Deliver
                  </span>
                </div>

                <div className="pointer-events-auto flex items-center gap-2">
                  <button
                    onClick={toggleFullscreen}
                    className="flex size-9 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md transition-colors hover:bg-white/20"
                    aria-label="Toggle fullscreen"
                  >
                    <Maximize2 className="size-4" />
                  </button>
                </div>
              </div>

              {/* Center Play/Pause Indicator (when paused) */}
              {!isPlaying && (
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-xs">
                  <div className="flex size-20 items-center justify-center rounded-full border border-white/30 bg-black/70 text-white shadow-2xl">
                    <Play className="size-8 translate-x-0.5 fill-white" />
                  </div>
                </div>
              )}

              {/* Bottom Interactive Area */}
              <div data-overlay className="absolute inset-x-0 bottom-0 p-4 sm:p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                {/* Timeline Progress Bar */}
                <div
                  className="mb-4 h-1.5 w-full cursor-pointer rounded-full bg-white/20 transition-all hover:h-2.5 group/progress"
                  onClick={handleSeek}
                  title="Click to seek"
                >
                  <div
                    className="h-full rounded-full bg-[#9AFD0D] transition-all duration-100"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <div className="flex items-end justify-between">
                  <div className="hidden sm:block">
                    <p className="text-xs font-semibold tracking-wider uppercase text-[#9AFD0D]">
                      Digital Growth Agency
                    </p>
                    <p className="text-sm font-medium text-white/90">
                      Strategy · Design · Technology · Marketing
                    </p>
                  </div>

                  {/* Signature Neon Green Audio Toggle Button */}
                  <button
                    type="button"
                    onClick={toggleMute}
                    aria-label={isMuted ? "Unmute video audio" : "Mute video audio"}
                    className="group/btn relative flex size-12 sm:size-16 lg:size-20 items-center justify-center rounded-full bg-[#9AFD0D] text-black shadow-[0_10px_35px_rgba(154,253,13,0.45)] transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-[0_15px_45px_rgba(154,253,13,0.6)] cursor-pointer z-20"
                  >
                    {isMuted ? (
                      <VolumeX className="size-6 sm:size-8 lg:size-10 stroke-[2.2] transition-transform group-hover/btn:scale-110" />
                    ) : (
                      <Volume2 className="size-6 sm:size-8 lg:size-10 stroke-[2.2] transition-transform group-hover/btn:scale-110" />
                    )}
                    <span className="sr-only">{isMuted ? "Unmute" : "Mute"}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
