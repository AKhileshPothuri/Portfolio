"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial, Float, useScroll, ScrollControls, Scroll } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { useState, useRef, Suspense } from "react";
import * as THREE from "three";
import { Bloom, EffectComposer, Noise, Vignette } from "@react-three/postprocessing";

function SynapticBackground({ dim = 1 }: { dim: number }) {
  const ref = useRef<any>(null);
  const [points] = useState(() =>
    random.inSphere(new Float32Array(30000), { radius: 1.5 }) as Float32Array
  );

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 20;
      ref.current.rotation.y -= delta / 30;
      
      // Reactive to scroll speed
      const scrollSpeed = Math.abs(state.mouse.x + state.mouse.y) * 0.1;
      ref.current.rotation.z += scrollSpeed;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={points}
        stride={3}
        frustumCulled={false}
      >
        <PointMaterial
          transparent
          color="#00f2ff"
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.15 * dim}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

function SceneContent() {
  const { camera, mouse, viewport } = useThree();
  const scroll = useScroll();
  const [dim, setDim] = useState(1);
  const flashlightRef = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    const s = scroll.offset;
    
    // Dimming logic removed to prevent flashing
    const dimFactor = 1;
    
    // Flashlight logic (Mouse follow)
    if (flashlightRef.current) {
      flashlightRef.current.position.set(
        (mouse.x * viewport.width) / 2,
        (mouse.y * viewport.height) / 2,
        2
      );
    }

    // Z-Axis Scrollytelling: Camera zooms through the world
    // We path the camera along Z and rotate slightly
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, 6 - s * 15, 0.05);
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, mouse.x * 0.2 + Math.sin(s * Math.PI * 2) * 0.5, 0.05);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, mouse.y * 0.2, 0.05);
    
    camera.lookAt(0, 0, -10);
  });

  return (
    <>
      <color attach="background" args={["#020202"]} />
      <ambientLight intensity={0.1 * dim} />
      
      {/* Flashlight Effect */}
      <pointLight 
        ref={flashlightRef} 
        intensity={20} 
        distance={5} 
        color="#00f2ff" 
        decay={2}
      />
      
      <pointLight position={[10, 10, 10]} intensity={2 * dim} color="#8b5cf6" />
      
      <group>
        <SynapticBackground dim={dim} />
      </group>

      <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
        <mesh position={[0, 0, -10]}>
          <icosahedronGeometry args={[8, 40]} />
          <meshStandardMaterial
            color="#ffffff"
            wireframe
            transparent
            opacity={0.02 * dim}
          />
        </mesh>
      </Float>

      <EffectComposer multisampling={4}>
        <Bloom 
          luminanceThreshold={0.2} 
          mipmapBlur 
          intensity={1.5} 
          radius={0.4} 
        />
        <Noise opacity={0.05} />
        <Vignette eskil={false} offset={0.1} darkness={1.2} />
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
