import LogoLoop from "./ui/LogoLoop";

import databricksLogo from "@/assets/logos/databricks.svg";
import mlhLogo from "@/assets/logos/mlh.svg";
import accentureLogo from "@/assets/logos/accenture.svg";
import metaLogo from "@/assets/logos/meta.svg";
import bloombergLogo from "@/assets/logos/bloomberg.svg";
import warpLogo from "@/assets/logos/warp.svg";

const imageLogos = [
  {
    src: databricksLogo,
    alt: "Databricks",
    href: "https://www.databricks.com/",
  },
  { src: mlhLogo, alt: "MLH", href: "https://mlh.io/" },
  { src: accentureLogo, alt: "Accenture", href: "https://www.accenture.com/" },
  { src: metaLogo, alt: "Meta", href: "https://about.meta.com/" },
  { src: bloombergLogo, alt: "Bloomberg", href: "https://www.bloomberg.com/" },
  { src: warpLogo, alt: "Warp", href: "https://www.warp.dev/" },
];

export default function Sponsors() {
  return (
    <div>
      <div
        style={{ height: "120px", position: "relative", overflow: "hidden" }}
        className="pt-20"
      >
        <LogoLoop
          logos={imageLogos}
          speed={80}
          direction="left"
          logoHeight={45}
          gap={70}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#050404"
          ariaLabel="Sponsors"
        />
      </div>
    </div>
  );
}
