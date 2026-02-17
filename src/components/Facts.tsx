import { BentoCard, BentoGrid } from "./ui/bento-grid";
import LogoLoop from "./ui/LogoLoop";
import DeckMap from "./DeckMap";
import WordRotate from "./ui/WordRotate";
import { MapPin } from "lucide-react";
import { imageLogos } from "@/data/imageLogos";

const stats = [
  { value: "850+", label: "Attendees" },
  { value: "51+", label: "Universities" },
  { value: "35%", label: "Underrepresented" },
  { value: "#10", label: "MLH University" },
  { value: "2nd", label: "East Coast" },
];

const StatGrid = () => (
  <div className="h-full w-full flex flex-col items-center justify-center px-6 py-6 gap-6">
    <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
      {stats.map((item, i) => (
        <div key={i} className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-white leading-none">
            {item.value}
          </div>
          <div className="text-[11px] text-zinc-600 mt-1.5 uppercase tracking-[0.16em] font-mono">
            {item.label}
          </div>
        </div>
      ))}
    </div>

  </div>
);

const features = [
  {
    name: "Our Partners",
    description: "",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="h-full w-full flex flex-col items-center justify-center p-6 gap-5">
        <div className="flex-1 flex items-center justify-center w-full">
          <LogoLoop
            logos={imageLogos}
            speed={80}
            direction="left"
            logoHeight={32}
            gap={48}
            fadeOut
            fadeOutColor="#0a0a0a"
            ariaLabel="Partners marquee"
          />
        </div>
        <div className="text-[11px] uppercase tracking-[0.2em] text-zinc-600 font-mono">
          Partners
        </div>
      </div>
    ),
  },
  {
    name: "Stats",
    description: "",
    className: "col-span-3 lg:col-span-2",
    background: <StatGrid />,
  },
  {
    name: "Location",
    description: "",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="h-full min-h-[320px] w-full relative flex flex-col">
        <div className="flex-1 relative">
          <DeckMap height="100%" width="100%" />
          {/* Bold overlay text */}
          <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none text-center">
            <WordRotate
              duration={2000}
              className="text-2xl md:text-3xl font-bold text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]"
              words={[
                "3 hrs from D.C.",
                "3 hrs from Richmond",
                "3 hrs from Charlotte",
                "3 hrs from Raleigh",
                "4 hrs from Maryland",
                "4 hrs from NYC",
                "4 hrs from Atlanta",
              ]}
            />
          </div>
          <a
            href="https://maps.app.goo.gl/U1TAJKN1SAbD8LhG7"
            target="_blank"
            rel="noreferrer"
            className="absolute top-4 right-4 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-dashed border-zinc-500/30 hover:bg-black/70 hover:border-zinc-500 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
            title="Open in Google Maps"
          >
            <MapPin className="w-4 h-4 text-white/90" />
          </a>
        </div>
      </div>
    ),
  },
  {
    name: "Tiers",
    description: "",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="h-full w-full flex items-center justify-center text-center px-8">
        <div>
          <div className="text-2xl font-bold text-white mb-3 leading-tight">
            5 Tiers to
            <br />
            match your goals
          </div>

        </div>
      </div>
    ),
  },
];

export function Facts() {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}
