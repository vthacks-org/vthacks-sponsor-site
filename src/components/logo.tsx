import { Heatmap } from "@paper-design/shaders-react";
import logo from "../assets/logo.svg";

export default function Logo() {

    return (
        <div className="flex justify-end items-center my-8">
            <Heatmap
                width="180"
                height="90"
                image={logo}
                colors={["#534f4fff", "#ffffffff"]}
                colorBack="#000000ff"
                contour={0.9}
                angle={230}
                noise={0.7}
                innerGlow={0.5}
                outerGlow={0}
                speed={0.7}
                scale={1}
            />
        </div>
    );
}
