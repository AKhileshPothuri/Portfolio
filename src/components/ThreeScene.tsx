"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial, Float, useScroll, ScrollControls, Scroll } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { useState, useRef, Suspense } from "react";
import * as THREE from "three";
import { Bloom, EffectComposer, Noise, Vignette } from "@react-three/postprocessing";
import SkillsNebula from "./SkillsNebula";

function Particles({ dim = 1, ...props }: any) {
  const ref = useRef<any>(null);
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(6000), { radius: 1.5 }) as Float32Array
  );

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          transparent
          color="#00f2ff"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.4 * dim}
        />
      </Points>
    </group>
  );
}

function SceneContent() {
  const { camera } = useThree();
  const scroll = useScroll();
  const [dim, setDim] = useState(1);

  useFrame((state) => {
    // Scroll-based camera pathing
    const s = scroll.offset; // 0 to 1
    
    // Dimming logic: Dim when scroll is in the middle of sections
    // Content sections are roughly at 0.2, 0.4, 0.6, 0.8
    const dimFactor = 1 - (Math.abs(Math.sin(s * Math.PI * 5)) * 0.5);
    setDim(dimFactor);

    camera.position.x = THREE.MathUtils.lerp(camera.position.x, state.mouse.x * 0.5 + Math.sin(s * Math.PI) * 2, 0.05);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, state.mouse.y * 0.5 - s * 10, 0.05);
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, 5 - s * 2, 0.05);
    
    camera.lookAt(0, -s * 5, 0);
  });

  return (
    <>
      <color attach="background" args={["#050505"]} />
      <ambientLight intensity={0.2 * dim} />
      <pointLight position={[10, 10, 10]} intensity={2 * dim} color="#8b5cf6" />
      <pointLight position={[-10, -10, -10]} intensity={1.5 * dim} color="#00f2ff" />
      
      <group>
        <Particles dim={dim} />
        <SkillsNebula dim={dim} />
      </group>

      <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
        <mesh position={[0, -2, -8]}>
          <icosahedronGeometry args={[4, 20]} />
          <meshStandardMaterial
            color="#ffffff"
            wireframe
            transparent
            opacity={0.03 * dim}
          />
        </mesh>
      </Float>

      <EffectComposer multisampling={4}>
        <Bloom 
          luminanceThreshold={0.1} 
          mipmapBlur 
          intensity={1.2} 
          radius={0.3} 
        />
        <Noise opacity={0.03} />
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
      </EffectComposer>
    </>
  );
}

export default function ThreeScene() {
  return (
    <div className="fixed inset-0 -z-10 bg-[#050505]">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }} dpr={[1, 2]}>
        <Suspense fallback={null}>
          <ScrollControls pages={5} damping={0.2}>
            <SceneContent />
          </ScrollControls>
        </Suspense>
      </Canvas>
    </div>
  );
}
