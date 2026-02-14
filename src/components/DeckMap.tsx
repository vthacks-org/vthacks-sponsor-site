import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

type DeckMapProps = {
  height?: string | number;
  width?: string | number;
};

const BLACKSBURG_VIEW = {
  center: [-80.4247, 37.2277] as [number, number],
  zoom: 16,
  pitch: 35,
  bearing: -15,
};

export default function DeckMap({
  height = "100%",
  width = "100%",
}: DeckMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = new maplibregl.Map({
      container: containerRef.current,
      style: "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",
      center: BLACKSBURG_VIEW.center,
      zoom: BLACKSBURG_VIEW.zoom,
      pitch: BLACKSBURG_VIEW.pitch,
      bearing: BLACKSBURG_VIEW.bearing,
      interactive: false,
      attributionControl: false,
    });

    mapRef.current = map;

    // Continuous circular rotation
    let animationId: number;
    const rotateCamera = () => {
      const currentBearing = map.getBearing();
      map.rotateTo(currentBearing + 0.1, { duration: 0 });
      animationId = requestAnimationFrame(rotateCamera);
    };

    map.on("load", () => {
      rotateCamera();
    });

    return () => {
      cancelAnimationFrame(animationId);
      map.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        height,
        width,
        position: "relative",
        overflow: "hidden",
      }}
    />
  );
}
