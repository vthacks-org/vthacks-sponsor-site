import { motion } from "motion/react";
import Hero from "./components/Hero";
import SponsorTable from "./components/SponsorTable";
import { Facts } from "./components/Facts";

function App() {
  return (
    <div className="min-h-screen bg-[#050404] text-white selection:bg-white/20">
      <Hero />

      <motion.div
        id="sponsors"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full px-8 md:px-16 lg:px-24 py-24 md:py-32"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="w-full mx-auto opacity-40 hover:opacity-100 transition-opacity duration-500"
          >
            <Facts />
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
        className="w-full px-8 md:px-16 lg:px-24"
      >
        <div className="max-w-6xl mx-auto">
          <SponsorTable />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        className="w-full px-8 md:px-16 lg:px-24 pb-16"
      >
        <div className="max-w-6xl mx-auto border-t border-zinc-800 pt-12 text-center">
          <h2 className="text-2xl font-semibold mb-6">Reach out!</h2>
          <div className="flex justify-center gap-8 text-zinc-500 flex-wrap">
            <a
              href="https://vthacks.com"
              className="hover:text-white transition-colors"
            >
              vthacks.com
            </a>
            <a
              href="mailto:sponsorship@vthacks.com"
              className="hover:text-white transition-colors"
            >
              sponsorship@vthacks.com
            </a>
            <a
              href="https://instagram.com/vthacks"
              className="hover:text-white transition-colors"
            >
              @vthacks
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default App;
