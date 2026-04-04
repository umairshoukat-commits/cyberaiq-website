"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import NetworkGraph from "./NetworkGraph";

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 60 }}
      dpr={[1, 1.5]}
      gl={{ antialias: false, alpha: true }}
      style={{ position: "absolute", inset: 0 }}
    >
      <Suspense fallback={null}>
        <NetworkGraph />
      </Suspense>
    </Canvas>
  );
}
