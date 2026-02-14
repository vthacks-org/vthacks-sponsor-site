import { BentoCard, BentoGrid } from "./ui/bento-grid";
import LogoLoop from "./ui/LogoLoop";
import DeckMap from "./DeckMap";
import databricksLogo from "@/assets/logos/databricks.svg";
import mlhLogo from "@/assets/logos/mlh.svg";
import accentureLogo from "@/assets/logos/accenture.svg";
import metaLogo from "@/assets/logos/meta.svg";
import bloombergLogo from "@/assets/logos/bloomberg.svg";
import warpLogo from "@/assets/logos/warp.svg";
import { MapPin } from "lucide-react";

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
          <div className="text-[11px] text-zinc-500 mt-1.5 uppercase tracking-[0.16em]">
            {item.label}
          </div>
        </div>
      ))}
    </div>
    <div className="text-sm uppercase tracking-[0.2em] text-zinc-500 font-medium">
      always profound
    </div>
  </div>
);

const features = [
  {
    name: "Our Partners",
    description: "",
    href: "#",
    cta: "",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="h-full w-full flex flex-col items-center justify-center p-6 gap-5">
        <div className="flex-1 flex items-center justify-center w-full">
          <LogoLoop
            logos={[
              { src: databricksLogo, alt: "Databricks" },
              { src: mlhLogo, alt: "MLH" },
              { src: accentureLogo, alt: "Accenture" },
              { src: metaLogo, alt: "Meta" },
              { src: bloombergLogo, alt: "Bloomberg" },
              { src: warpLogo, alt: "Warp" },
            ]}
            speed={80}
            direction="left"
            logoHeight={32}
            gap={48}
            fadeOut
            fadeOutColor="#0a0a0a"
            ariaLabel="Partners marquee"
          />
        </div>
        <div className="text-sm uppercase tracking-[0.2em] text-zinc-500 font-medium">
          Our partners
        </div>
      </div>
    ),
  },
  {
    name: "Notifications",
    description: "",
    href: "#",
    cta: "",
    className: "col-span-3 lg:col-span-2",
    background: <StatGrid />,
  },
  {
    name: "Integrations",
    description: "",
    href: "#",
    cta: "",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="h-full min-h-[320px] w-full relative flex flex-col">
        <div className="flex-1 relative">
          <DeckMap height="100%" width="100%" />
          <a
            href="https://maps.app.goo.gl/U1TAJKN1SAbD8LhG7"
            target="_blank"
            rel="noreferrer"
            className="absolute top-4 right-4 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/15 hover:bg-black/70 hover:border-white/30 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
            title="Open in Google Maps"
          >
            <MapPin className="w-4 h-4 text-white/90" />
          </a>
        </div>
        <div className="text-center text-sm uppercase tracking-[0.2em] text-zinc-500 font-medium py-4">
          3 hrs from Washington D.C.
        </div>
      </div>
    ),
  },
  {
    name: "Calendar",
    description: "",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "",
    background: (
      <div className="h-full w-full flex items-center justify-center text-center px-8">
        <div>
          <div className="text-2xl font-bold text-white mb-3 leading-tight">
            Make VTHacks yours
          </div>
          <div className="text-sm uppercase tracking-[0.2em] text-zinc-500 font-medium">
            with 5 simple tiers
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
