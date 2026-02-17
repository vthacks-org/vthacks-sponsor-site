import { imageLogos } from "@/data/imageLogos";
import LogoLoop from "./ui/LogoLoop";


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
