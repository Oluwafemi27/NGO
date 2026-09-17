import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const KENBURNS_VARIANTS = ["animate-kenburns-a", "animate-kenburns-b", "animate-kenburns-c"];

export function HeroCarousel({
  slides,
  interval = 6000,
  parallax = true,
}: {
  slides: { src: string; alt: string }[];
  interval?: number;
  parallax?: boolean;
}) {
  const [index, setIndex] = useState(0);
  // Bumped every time a slide (re)activates so we can force a remount of its
  // <img>, which restarts the Ken Burns animation — the "replay" that makes
  // the hero feel like a looping video reel instead of a static photo.
  const [plays, setPlays] = useState<number[]>(() => slides.map(() => 0));
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => {
        const next = (i + 1) % slides.length;
        setPlays((p) => p.map((count, slideIndex) => (slideIndex === next ? count + 1 : count)));
        return next;
      });
    }, interval);
    return () => clearInterval(id);
  }, [slides.length, interval]);

  useEffect(() => {
    if (!parallax) return;
    const onScroll = () => setOffset(Math.min(window.scrollY * 0.25, 160));
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [parallax]);

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden={false}>
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translate3d(0, ${offset}px, 0)` }}
      >
        {slides.map((slide, i) => (
          <img
            // Remount on every replay of this slide so the CSS animation
            // restarts from its `from` keyframe instead of freezing at 100%.
            key={`${slide.src}-${plays[i]}`}
            src={slide.src}
            alt={slide.alt}
            width={1920}
            height={1280}
            loading={i === 0 ? "eager" : "lazy"}
            className={cn(
              "absolute inset-0 size-full object-cover transition-opacity duration-[1600ms]",
              KENBURNS_VARIANTS[i % KENBURNS_VARIANTS.length],
              i === index ? "opacity-100" : "opacity-0",
            )}
            style={{ animationDuration: `${interval + 2000}ms` }}
          />
        ))}
      </div>
      <div
        className="absolute inset-0"
        style={{ backgroundImage: "var(--gradient-ink)" }}
        aria-hidden="true"
      />
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Show slide ${i + 1}`}
            aria-current={i === index}
            onClick={() => {
              setIndex(i);
              setPlays((p) => p.map((count, slideIndex) => (slideIndex === i ? count + 1 : count)));
            }}
            className={cn(
              "h-1.5 rounded-full bg-current text-ink-foreground transition-all duration-500",
              i === index ? "w-10 opacity-100" : "w-4 opacity-50 hover:opacity-80",
            )}
          />
        ))}
      </div>
    </div>
  );
}
