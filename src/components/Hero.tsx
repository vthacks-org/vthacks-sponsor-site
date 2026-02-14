import { motion } from "motion/react";
import micImage from "../assets/mic.jpeg";
import logo from "../assets/logo.svg";

export default function Hero() {
  return (
    <div className="relative">
      {/* Full-width hero with image */}
      <div className="h-screen w-full bg-[#050404] relative overflow-hidden">
        {/* Grid-aligned dashed vertical lines */}
        <div className="absolute inset-0 max-w-[1280px] mx-auto pointer-events-none z-30">
          <div className="absolute left-0 top-0 bottom-0 w-[1px] border-l border-dashed border-zinc-500/30" />
          <div className="absolute right-0 top-0 bottom-0 w-[1px] border-r border-dashed border-zinc-500/30" />
        </div>

        {/* Logo — aligned to the same grid container */}
        <div className="absolute top-0 left-0 right-0 z-50">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 pt-8 md:pt-12">
            <img
              src={logo}
              alt="VTHacks Logo"
              className="w-24 md:w-36 lg:w-38 invert"
            />
          </div>
        </div>

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-zinc-900/20 via-transparent to-zinc-900/20 pointer-events-none z-10" />

        {/* Hero image — fitted inside grid container */}
        <div className="absolute inset-0 max-w-[1280px] mx-auto pointer-events-none">
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
        </div>

        {/* Text content — bottom-left, aligned to the same max-width grid */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 pb-16 md:pb-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3, ease: "easeIn" }}
            >
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-[0.9]">
                inspire
              </h1>
              <h1 className="text-6xl pt-6 md:text-7xl lg:text-9xl font-bold text-white leading-[0.9]">
                brilliance
              </h1>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
