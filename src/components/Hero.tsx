import { motion } from "motion/react";
import micImage from "../assets/mic.jpeg";
import logo from "../assets/logo.svg";

export default function Hero() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-[#050404] relative overflow-hidden">
      <div className="absolute top-8 md:top-16 left-8 md:left-16 z-50">
        <img
          src={logo}
          alt="VTHacks Logo"
          className="w-26 md:w-40 lg:w-39 invert pt-3"
        />
      </div>

      <div className="absolute inset-0 bg-linear-to-br from-zinc-900/20 via-transparent to-zinc-900/20 pointer-events-none z-10" />

      <div className="w-full h-full flex flex-col md:flex-row relative">
        <div className="w-full md:w-1/2 h-full flex items-end justify-start px-8 md:px-16 pb-16 md:pb-24 z-20">
          <div className="max-w-2xl">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white ">
              inspire
            </h1>
            <h1 className="text-6xl pt-1 md:text-8xl lg:text-9xl font-bold text-white ">
              brilliance
            </h1>
          </div>
        </div>

        <motion.div
          className="w-full md:w-[65%] h-full absolute right-0 top-0 z-0"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        >
          <div className="w-full h-full relative">
            <img
              src={micImage}
              alt="VTHacks event with sponsors and attendees"
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                maskImage: "linear-gradient(to right, transparent, black 40%)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent, black 40%)",
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#050404] via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050404] via-[#050404]/0 to-transparent opacity-60 pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
