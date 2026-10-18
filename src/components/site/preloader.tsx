import { useEffect, useState } from "react";
import { greetings } from "@/data/site";

export function Preloader() {
  const [index, setIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => {
        if (i >= greetings.length - 1) {
          window.clearInterval(id);
          window.setTimeout(() => setDone(true), 260);
          return i;
        }
        return i + 1;
      });
    }, 170);
    return () => window.clearInterval(id);
  }, []);

  if (done) return null;

  return (
    <div
      aria-hidden
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink transition-opacity duration-500"
    >
      <p className="flex items-end gap-2 text-3xl font-light tracking-tight text-foreground sm:text-5xl">
        {greetings[index]}
        <span className="mb-2 inline-block size-2 bg-primary" />
      </p>
    </div>
  );
}
