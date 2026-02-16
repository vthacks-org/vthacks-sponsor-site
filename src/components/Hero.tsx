import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import micImage from "../assets/mic.jpeg";
import logo from "../assets/logo.svg";
import { useDimensions } from "@/hooks/use-Dimensions";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { width, height } = useDimensions();
  // Track scroll progress while the hero section is in view
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Animate from full width -> 1280px as you scroll.
  // Hero stays full height; only inner content shrinks in width.
  const targetMaxWidth = Math.min(1280, width);
  const maxWidth = useTransform(
    scrollYProgress,
    [0, .25],
    [`${width}px`, `${targetMaxWidth}px`]
  );

  // Compute container height so the scroll distance for the shrink
  // feels consistent across different viewport sizes. On mobile (width <= 1280)
  // there's nothing to shrink, so use zero extra height to avoid scroll buffer.
  const needsShrink = width > 1280;
  // const widthDiff = Math.max(width - 1280, 0);
  const baseScrollDistance = 350;
  const shrinkScrollDistance = needsShrink
    ? baseScrollDistance
    : 0;
  const containerHeight = height + shrinkScrollDistance;

  return (
    // Extra height on the container so the hero can shrink
    // while staying in frame, then hand off to normal scrolling.
    <div
      ref={containerRef}
      className="relative"
      style={{ height: containerHeight || undefined }}
    >
      {/* Full-width hero with image */}
      <motion.div
        className="sticky top-0 h-screen w-full bg-[#050404] relative overflow-hidden"
      >
        {/* One animated “grid container” used everywhere */}
        <motion.div
          className="absolute inset-0 mx-auto pointer-events-none"
          style={{ maxWidth }}
        >
          {/* Grid-aligned dashed vertical lines */}
          <div className="absolute inset-0 pointer-events-none z-30">
            <div className="absolute left-0 top-0 bottom-0 w-[1px] border-l border-dashed border-zinc-500/30" />
            <div className="absolute right-0 top-0 bottom-0 w-[1px] border-r border-dashed border-zinc-500/30" />
          </div>

          {/* Hero image — fitted inside the animated container */}
          <motion.div
            className="w-full md:w-[60%] h-full absolute right-0 top-0 z-0 pointer-events-auto"
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="w-full h-full relative">
              <img
                src={micImage}
                alt="VTHacks event with sponsors and attendees"
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                  maskImage: "linear-gradient(to right, transparent, black 15%)",
                  WebkitMaskImage:
                    "linear-gradient(to right, transparent, black 15%)",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#050404] via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050404] via-[#050404]/0 to-transparent opacity-60 pointer-events-none" />
            </div>
          </motion.div>

          {/* Logo */}
          <div className="absolute top-0 left-0 right-0 z-50 pointer-events-auto pt-8 md:pt-12">
            <a href="https://vthacks.com">
              <img
                src={logo}
                alt="VTHacks Logo"
                className="pl-16 w-24 md:w-36 lg:w-38 invert"
              />
            </a>
          </div>

          {/* Text content */}
          <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-auto pb-16 md:pb-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3, ease: "easeIn" }}
            >
              <motion.h1 className="pl-16 text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-[0.9]">
                inspire
              </motion.h1>
              <motion.h1 className="pl-16 text-6xl pt-6 md:text-7xl lg:text-9xl font-bold text-white leading-[0.9]">
                brilliance
              </motion.h1>
            </motion.div>
          </div>
        </motion.div>

        {/* Subtle gradient overlay (still full-bleed within hero) */}
        <div className="absolute inset-0 bg-linear-to-br from-zinc-900/20 via-transparent to-zinc-900/20 pointer-events-none z-10" />
      </motion.div>
    </div>
  );
}
