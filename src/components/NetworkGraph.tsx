"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import {
  EffectComposer,
  Bloom,
} from "@react-three/postprocessing";
import * as THREE from "three";

const NODE_COUNT = 50;
const SPHERE_RADIUS = 3.0;
const CONNECT_DIST = 1.5;

function fibonacciSphere(count: number, radius: number): THREE.Vector3[] {
  const points: THREE.Vector3[] = [];
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = goldenAngle * i;
    points.push(
      new THREE.Vector3(
        Math.cos(theta) * r * radius,
        y * radius,
        Math.sin(theta) * r * radius
      )
    );
  }
  return points;
}

const nodeVertexShader = /* glsl */ `
  varying vec3 vNormal;
  varying vec3 vViewDir;
  void main() {
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    vNormal = normalize(normalMatrix * normal);
    vViewDir = normalize(-mvPosition.xyz);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const nodeFragmentShader = /* glsl */ `
  uniform vec3 uColor;
  uniform float uPulse;
  varying vec3 vNormal;
  varying vec3 vViewDir;
  void main() {
    float fresnel = pow(1.0 - max(dot(vViewDir, vNormal), 0.0), 2.5);
    float intensity = (0.15 + fresnel * 0.6) * uPulse;
    gl_FragColor = vec4(uColor * intensity, 1.0);
  }
`;

function Nodes({ positions }: { positions: THREE.Vector3[] }) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const uniforms = useMemo(
    () => ({
      uColor: { value: new THREE.Color("#F47920").multiplyScalar(1.5) },
      uPulse: { value: 1.0 },
    }),
    []
  );

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();

    if (materialRef.current) {
      materialRef.current.uniforms.uPulse.value =
        Math.sin(t * 0.5) * 0.3 + 0.7;
    }

    for (let i = 0; i < positions.length; i++) {
      dummy.position.copy(positions[i]);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, positions.length]}>
      <icosahedronGeometry args={[0.06, 1]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={nodeVertexShader}
        fragmentShader={nodeFragmentShader}
        uniforms={uniforms}
        toneMapped={false}
        transparent
      />
    </instancedMesh>
  );
}

function Edges({ positions }: { positions: THREE.Vector3[] }) {
  const geometry = useMemo(() => {
    const verts: number[] = [];
    for (let i = 0; i < positions.length; i++) {
      for (let j = i + 1; j < positions.length; j++) {
        if (positions[i].distanceTo(positions[j]) < CONNECT_DIST) {
          verts.push(
            positions[i].x, positions[i].y, positions[i].z,
            positions[j].x, positions[j].y, positions[j].z
          );
        }
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(verts, 3)
    );
    return geo;
  }, [positions]);

  return (
    <lineSegments geometry={geometry}>
      <lineBasicMaterial
        color="#F47920"
        transparent
        opacity={0.06}
        depthWrite={false}
      />
    </lineSegments>
  );
}

function Scene() {
  const groupRef = useRef<THREE.Group>(null);
  const positions = useMemo(() => fibonacciSphere(NODE_COUNT, SPHERE_RADIUS), []);

  useFrame(() => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += 0.0002;
  });

  return (
    <group ref={groupRef}>
      <Nodes positions={positions} />
      <Edges positions={positions} />
    </group>
  );
}

export default function NetworkGraph() {
  return (
    <>
      <Scene />
      <EffectComposer multisampling={0}>
        <Bloom
          luminanceThreshold={0.9}
          intensity={0.3}
          mipmapBlur
        />
      </EffectComposer>
    </>
  );
}
