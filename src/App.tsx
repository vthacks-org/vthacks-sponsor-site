import { motion } from "motion/react";
import Hero from "./components/Hero";
import SponsorTable from "./components/SponsorTable";
import { Facts } from "./components/Facts";

function App() {
  return (
    <div className="min-h-screen bg-[#050404] text-white selection:bg-white/20 relative">
      {/* Subtle edge glow effects */}
      <div className="fixed inset-0 pointer-events-none z-50">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/15 to-transparent" />
      </div>

      <Hero />

      {/* Main grid container — max-width with dashed vertical borders */}
      <div className="relative max-w-[1280px] mx-auto">
        {/* Left dashed border line */}
        <div className="absolute left-0 top-0 bottom-0 w-[1px] border-l border-dashed border-zinc-500/30" />
        {/* Right dashed border line */}
        <div className="absolute right-0 top-0 bottom-0 w-[1px] border-r border-dashed border-zinc-500/30" />

        {/* ─── Section: About / Facts ─── */}
        <motion.section
          id="about"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative"
        >
          {/* Horizontal dashed divider */}
          <div className="border-t border-dashed border-zinc-500/30" />

          {/* Section label */}
          <div className="px-6 md:px-12 lg:px-16 pt-8 pb-4">
            <span className="text-[11px] uppercase tracking-[0.25em] text-zinc-600 font-mono">
              [ About ]
            </span>
          </div>

          {/* Section heading */}
          <div className="px-6 md:px-12 lg:px-16 pb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Virginia's Largest Hackathon.
            </h2>
            <p className="text-zinc-500 text-lg md:text-xl mt-4 max-w-2xl">
              850+ hackers from 51+ universities compete, build, and innovate every year at Virginia Tech.
            </p>
          </div>

          {/* Bento grid with inner padding */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="px-6 md:px-12 lg:px-16 pb-16"
          >
            <Facts />
          </motion.div>
        </motion.section>

        {/* ─── Section: Sponsorship Tiers ─── */}
        <motion.section
          id="sponsors"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
          className="relative"
        >
          {/* Horizontal dashed divider */}
          <div className="border-t border-dashed border-zinc-500/30" />

          {/* Section label */}
          <div className="px-6 md:px-12 lg:px-16 pt-8 pb-4">
            <span className="text-[11px] uppercase tracking-[0.25em] text-zinc-600 font-mono">
              [ Sponsorship Tiers ]
            </span>
          </div>

          {/* Section heading */}
          <div className="px-6 md:px-12 lg:px-16 pb-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Make VTHacks yours.
            </h2>
            <p className="text-zinc-500 text-lg md:text-xl mt-4 max-w-2xl">
              Choose from five tiers designed to match your goals!
            </p>
          </div>

          {/* Table */}
          <div className="px-6 md:px-12 lg:px-16 pb-16">
            <SponsorTable />
          </div>
        </motion.section>

        {/* ─── Section: Get in Touch ─── */}
        <motion.section
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="relative"
        >
          {/* Horizontal dashed divider */}
          <div className="border-t border-dashed border-zinc-500/30" />

          {/* Section label */}
          <div className="px-6 md:px-12 lg:px-16 pt-8 pb-4">

          </div>

          {/* CTA content */}
          <div className="px-6 md:px-12 lg:px-16 pb-24">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-center">
              We Are Bespoke
            </h2>
            <p className="text-zinc-500 text-lg md:text-xl mb-12 max-w-xl mx-auto text-center">
              Reach out and we'll craft the perfect partnership.
            </p>

            {/* Contact links styled as grid cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <a
                href="https://vthacks.com"
                className="group relative p-6 border border-dashed border-zinc-500/30 rounded-sm hover:border-zinc-600 transition-all duration-300 overflow-hidden text-left"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:16px_16px] opacity-50" />
                <div className="relative">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-zinc-600 font-mono mb-2">Website</div>
                  <div className="text-white font-medium group-hover:text-blue-400 transition-colors">vthacks.com</div>
                </div>
              </a>
              <a
                href="mailto:sponsorship@vthacks.com"
                className="group relative p-6 border border-dashed border-zinc-500/30 rounded-sm hover:border-zinc-600 transition-all duration-300 overflow-hidden text-left"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:16px_16px] opacity-50" />
                <div className="relative">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-zinc-600 font-mono mb-2">Email</div>
                  <div className="text-white font-medium group-hover:text-blue-400 transition-colors break-all text-sm md:text-base">sponsorship@vthacks.com</div>
                </div>
              </a>
              <a
                href="https://instagram.com/vthacks"
                className="group relative p-6 border border-dashed border-zinc-500/30 rounded-sm hover:border-zinc-600 transition-all duration-300 overflow-hidden text-left"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:16px_16px] opacity-50" />
                <div className="relative">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-zinc-600 font-mono mb-2">Instagram</div>
                  <div className="text-white font-medium group-hover:text-blue-400 transition-colors">@vthacks</div>
                </div>
              </a>
            </div>
          </div>

          {/* Bottom dashed border */}
          <div className="border-t border-dashed border-zinc-500/30" />
        </motion.section>

        {/* ─── Footer ─── */}
        <div className="px-6 md:px-12 lg:px-16 py-8 flex items-center justify-between text-[11px] uppercase tracking-[0.25em] text-zinc-700 font-mono">
          <span>© 2026 VTHacks</span>
          <span>Blacksburg, VA</span>
        </div>
      </div>
    </div>
  );
}

export default App;
