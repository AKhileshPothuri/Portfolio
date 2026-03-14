"use client";

import { useRef, useState, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, Float, PointMaterial, Points } from "@react-three/drei";
import * as THREE from "three";

const skillClusters = [
  {
    name: "GenAI/LLMs",
    color: "#00f2ff",
    position: [2, 1, 0],
    skills: ["RAG", "LoRA", "LangChain", "Fine-tuning", "Gemma", "Llama"],
  },
  {
    name: "Data Engineering",
    color: "#8b5cf6",
    position: [-2, -1, 0],
    skills: ["SQL", "Spark", "Azure", "PostgreSQL", "BigQuery", "Databricks"],
  },
  {
    name: "Machine Learning",
    color: "#ffffff",
    position: [0, -2, -2],
    skills: ["NLP", "CV", "PyTorch", "TensorFlow", "Scikit-Learn", "FastAPI"],
  },
];

function SkillCluster({ cluster, onHover, dim = 1 }: { cluster: any; onHover: (name: string | null) => void; dim?: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (groupRef.current) {
      const t = state.clock.getElapsedTime();
      groupRef.current.position.y += Math.sin(t + cluster.position[0]) * 0.002;
    }
  });

  return (
    <group
      ref={groupRef}
      position={cluster.position}
      onPointerOver={() => {
        setHovered(true);
        onHover(cluster.name);
      }}
      onPointerOut={() => {
        setHovered(false);
        onHover(null);
      }}
    >
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial
            color={cluster.color}
            emissive={cluster.color}
            emissiveIntensity={hovered ? 2 : 0.5 * dim}
            transparent
            opacity={0.2 * dim}
          />
        </mesh>
        <Text
          position={[0, 0.8, 0]}
          fontSize={0.25}
          color="white"
          anchorX="center"
          anchorY="middle"
          fillOpacity={dim}
        >
          {cluster.name}
        </Text>
      </Float>

      {cluster.skills.map((skill: string, i: number) => {
        const angle = (i / cluster.skills.length) * Math.PI * 2;
        const radius = hovered ? 1.2 : 0.8;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        return (
          <Text
            key={skill}
            position={[x, y, 0]}
            fontSize={0.12}
            color="white"
            fillOpacity={(hovered ? 1 : 0.4) * dim}
            anchorX="center"
            anchorY="middle"
          >
            {skill}
          </Text>
        );
      })}
    </group>
  );
}

export default function SkillsNebula({ dim = 1 }: { dim?: number }) {
  const [activeCluster, setActiveCluster] = useState<string | null>(null);

  return (
    <group>
      {skillClusters.map((cluster) => (
        <SkillCluster
          key={cluster.name}
          cluster={cluster}
          onHover={setActiveCluster}
          dim={dim}
        />
      ))}
      
      <PointsComponent dim={dim} />
    </group>
  );
}

function PointsComponent({ dim = 1 }: { dim?: number }) {
    const ref = useRef<THREE.Points>(null);
    const stride = 3;
    const count = 2000;
    const positions = useMemo(() => {
        const pos = new Float32Array(count * stride);
        for(let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 10;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
        }
        return pos;
    }, []);

    useFrame((state, delta) => {
        if(ref.current) {
            ref.current.rotation.y += delta * 0.05;
        }
    });

    return (
        <Points ref={ref} positions={positions} stride={stride}>
            <PointMaterial
                transparent
                color="#8b5cf6"
                size={0.02}
                sizeAttenuation={true}
                depthWrite={false}
                opacity={0.2 * dim}
            />
        </Points>
    );
}
