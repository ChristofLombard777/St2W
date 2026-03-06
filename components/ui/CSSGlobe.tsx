"use client";

import { useEffect, useRef, useCallback } from "react";
import createGlobe, { COBEOptions } from "cobe";

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 1,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [0.1, 0.18, 0.32],
  markerColor: [0.75, 0.66, 0.43],
  glowColor: [0.18, 0.28, 0.5],
  markers: [
    { location: [-33.9249, 18.4241], size: 0.05 },
    { location: [51.5074, -0.1278], size: 0.04 },
    { location: [40.7128, -74.006], size: 0.04 },
    { location: [35.6762, 139.6503], size: 0.04 },
    { location: [48.8566, 2.3522], size: 0.03 },
    { location: [-23.5505, -46.6333], size: 0.04 },
    { location: [1.3521, 103.8198], size: 0.03 },
    { location: [25.2048, 55.2708], size: 0.04 },
  ],
};

interface GlobeProps {
  className?: string;
  config?: Partial<COBEOptions>;
}

export function Globe({ className = "", config = {} }: GlobeProps) {
  const phiRef = useRef(0);
  const widthRef = useRef(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const globeRef = useRef<ReturnType<typeof createGlobe> | null>(null);

  const updatePointerInteraction = (val: number | null) => {
    pointerInteracting.current = val;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = val !== null ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
    }
  };

  const onRender = useCallback(
    (state: Record<string, number>) => {
      if (!pointerInteracting.current) phiRef.current += 0.003;
      state["phi"] = phiRef.current + pointerInteractionMovement.current / 200;
      state["width"] = widthRef.current * 2;
      state["height"] = widthRef.current * 2;
    },
    []
  );

  const onResize = () => {
    if (canvasRef.current) {
      widthRef.current = canvasRef.current.offsetWidth;
    }
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);

    const canvas = canvasRef.current;
    if (!canvas) return;

    let frameId: number;

    const init = () => {
      onResize();
      if (widthRef.current === 0) {
        frameId = requestAnimationFrame(init);
        return;
      }

      globeRef.current = createGlobe(canvas, {
        ...GLOBE_CONFIG,
        ...config,
        width: widthRef.current * 2,
        height: widthRef.current * 2,
        onRender,
      });

      setTimeout(() => { canvas.style.opacity = "1"; }, 100);
    };

    frameId = requestAnimationFrame(init);

    return () => {
      cancelAnimationFrame(frameId);
      globeRef.current?.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className={`relative w-full h-full ${className}`}>
      <canvas
        ref={canvasRef}
        style={{ width: "100%", height: "100%" }}
        className="opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"
        onPointerDown={(e) => updatePointerInteraction(e.clientX - pointerInteractionMovement.current)}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) => e.touches[0] && updateMovement(e.touches[0].clientX)}
      />
    </div>
  );
}

export default Globe;
