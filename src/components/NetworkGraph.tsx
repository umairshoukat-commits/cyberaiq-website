"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

// Node data: label, position, color
const NODES = [
  { id: 0, label: "AI", pos: [0, 0, 0] as [number, number, number], color: "#F47920" },
  { id: 1, label: "Cloud", pos: [3, 1.5, -1] as [number, number, number], color: "#2B7EC1" },
  { id: 2, label: "Cyber", pos: [-3, 1, 0.5] as [number, number, number], color: "#F47920" },
  { id: 3, label: "Quantum", pos: [1, -2.5, 1] as [number, number, number], color: "#2B7EC1" },
  { id: 4, label: "", pos: [-1.5, 2.5, -2] as [number, number, number], color: "#F47920" },
  { id: 5, label: "", pos: [2.5, -1, 2] as [number, number, number], color: "#2B7EC1" },
  { id: 6, label: "", pos: [-2, -1.5, -1.5] as [number, number, number], color: "#F47920" },
  { id: 7, label: "", pos: [0.5, 2, 2.5] as [number, number, number], color: "#2B7EC1" },
];

const EDGES = [
  [0, 1], [0, 2], [0, 3], [1, 4], [1, 5], [2, 6],
  [3, 5], [3, 7], [4, 7], [5, 6], [6, 2], [7, 0],
];

function NodeMesh({ pos, color, pulseOffset }: { pos: [number, number, number]; color: string; pulseOffset: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();
    const scale = 1 + Math.sin(t * 1.8 + pulseOffset) * 0.07;
    meshRef.current.scale.setScalar(scale);
  });

  const col = useMemo(() => new THREE.Color(color), [color]);

  return (
    <mesh ref={meshRef} position={pos}>
      <sphereGeometry args={[0.10, 16, 16]} />
      <meshStandardMaterial
        color={col}
        emissive={col}
        emissiveIntensity={2.2}
        transparent
        opacity={0.7}
        roughness={0.2}
        metalness={0.4}
      />
    </mesh>
  );
}

function Edges() {
  const lineRefs = useRef<THREE.Line[]>([]);

  const edges = useMemo(() => {
    return EDGES.map(([a, b]) => {
      const start = new THREE.Vector3(...NODES[a].pos);
      const end = new THREE.Vector3(...NODES[b].pos);
      const points = [];
      for (let i = 0; i <= 20; i++) {
        points.push(start.clone().lerp(end, i / 20));
      }
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      return { geometry, colorA: NODES[a].color, colorB: NODES[b].color };
    });
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    lineRefs.current.forEach((line, i) => {
      if (!line) return;
      const mat = line.material as THREE.LineBasicMaterial;
      mat.opacity = 0.15 + 0.12 * Math.sin(t * 0.8 + i * 0.5);
    });
  });

  return (
    <>
      {edges.map((edge, i) => (
        <primitive
          key={i}
          object={new THREE.Line(
            edge.geometry,
            new THREE.LineBasicMaterial({
              color: new THREE.Color(i % 2 === 0 ? "#F47920" : "#2B7EC1"),
              transparent: true,
              opacity: 0.2,
              linewidth: 1,
            })
          )}
          ref={(el: THREE.Line) => {
            if (el) lineRefs.current[i] = el;
          }}
        />
      ))}
    </>
  );
}

function Scene() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime();
    groupRef.current.rotation.y = t * 0.08;
    groupRef.current.rotation.x = Math.sin(t * 0.05) * 0.15;
  });

  return (
    <group ref={groupRef}>
      <Edges />
      {NODES.map((node, i) => (
        <NodeMesh key={node.id} pos={node.pos} color={node.color} pulseOffset={i * 0.8} />
      ))}
    </group>
  );
}

export default function NetworkGraph() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#F47920" />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#2B7EC1" />
      <Scene />
      <EffectComposer>
        <Bloom
          luminanceThreshold={0.35}
          luminanceSmoothing={0.9}
          intensity={1.8}
          radius={0.6}
        />
      </EffectComposer>
    </>
  );
}
