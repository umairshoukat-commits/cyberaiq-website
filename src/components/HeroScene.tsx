"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import NetworkGraph from "./NetworkGraph";

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ position: "absolute", inset: 0 }}
    >
      <Suspense fallback={null}>
        <NetworkGraph />
      </Suspense>
    </Canvas>
  );
}
