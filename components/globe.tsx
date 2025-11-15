"use client";

import { useEffect, useRef } from "react";

export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    let phi = 0;
    let globeInstance: any = null;
    const canvas = canvasRef.current;

    import("cobe")
      .then(({ default: createGlobe }) => {
        globeInstance = createGlobe(canvas, {
          devicePixelRatio: 2,
          width: 900,
          height: 900,
          phi: 0,
          theta: 0,
          dark: 1,
          diffuse: 1.2,
          scale: 1,
          mapSamples: 16000,
          mapBrightness: 6,
          baseColor: [1, 1, 1],
          markerColor: [1, 1, 1],
          glowColor: [1, 1, 1],
          offset: [0, 0],
          markers: [
            { location: [1.3521, 103.8198], size: 0.1 }, // Singapore
            { location: [23.6978, 120.9605], size: 0.05 }, // Taiwan
            { location: [32.7157, -117.1611], size: 0.05 }, // San Diego, California
            { location: [30.7333, 76.7794], size: 0.05 }, // Chandigarh, India
          ],

          onRender: (state: any) => {
            state.phi = phi;
            phi += 0.01;
          },
        });
      })
      .catch((error) => {
        console.error("Error loading cobe:", error);
      });

    // Cleanup function
    return () => {
      if (globeInstance) {
        globeInstance.destroy();
      }
    };
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto my-12">
      <canvas
        ref={canvasRef}
        id="cobe"
        style={{ width: "100%", height: "500px", maxWidth: "1000px" }}
        width="1000"
        height="1000"
      />
    </div>
  );
}
