"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Cpu, Network, Zap, ArrowDown, Activity } from "lucide-react";
import ContentSection from "./ContentSection";

interface NodeProps {
  label: string;
  active: boolean;
  onHover: () => void;
  onLeave: () => void;
}

function Node({ label, active, onHover, onLeave }: NodeProps) {
  return (
    <motion.div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`relative px-6 py-4 rounded-xl border transition-all duration-500 cursor-pointer ${
        active 
          ? "border-brand-cyan bg-brand-cyan/20 shadow-[0_0_20px_rgba(0,242,255,0.4)]" 
          : "border-white/10 bg-white/5 hover:border-brand-cyan/50"
      }`}
    >
      <div className="flex items-center gap-3">
        <Activity size={18} className={active ? "text-brand-cyan" : "text-white/40"} />
        <span className={`font-mono text-sm tracking-widest ${active ? "text-white" : "text-white/60"}`}>
          {label}
        </span>
      </div>
      {active && (
        <motion.div
          layoutId="node-glow"
          className="absolute -inset-1 rounded-xl bg-brand-cyan/10 blur-md -z-10"
        />
      )}
    </motion.div>
  );
}

export default function Hero() {
  const [activeNode, setActiveNode] = useState<string | null>("Planner");
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
  const blur = useTransform(scrollYProgress, [0, 0.5], [0, 20]);

  const nodes = [
    { name: "Planner", details: "Initializes reasoning and breaks down complex user intent." },
    { name: "Orchestrator", details: "Routes requests to specialized tools and manages agent state." },
    { name: "Reflector", details: "Validates output and ensures semantic consistency." }
  ];

  return (
    <ContentSection id="hero" className="min-h-screen py-0">
      <motion.div 
        ref={containerRef}
        style={{ opacity, scale, filter: `blur(${blur}px)` }}
        className="flex flex-col items-center justify-center text-center max-w-7xl mx-auto pt-32"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <h1 className="text-7xl md:text-9xl font-bold font-outfit tracking-tighter mb-4">
            AKHILESH <span className="reveal-text">POTHURI</span>
          </h1>
          <p className="text-brand-cyan tracking-[0.6em] uppercase text-sm font-bold drop-shadow-md">
            The Neural Architect
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-xl md:text-2xl text-[#F5F5F5]/70 max-w-3xl font-light leading-relaxed mb-20 px-6"
        >
          Scaling Intelligence through <span className="text-white font-medium holographic-text">Autonomous Reasoners</span> and 
          distributed <span className="text-white font-medium holographic-text">Agentic Workflows</span>.
        </motion.p>

        {/* Interactive QVerse Graph */}
        <div className="relative w-full max-w-4xl glass-cinematic p-12 rounded-[3rem] border border-white/10 overflow-hidden group">
          <div className="absolute top-8 left-12">
            <span className="text-[10px] text-brand-cyan uppercase tracking-[0.5em] font-bold opacity-40">
              Verizon: Scaling Intelligence
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-6 relative">
              {/* Connecting Lines (Simulated with CSS) */}
              <div className="absolute left-1/2 -top-4 -bottom-4 w-[1px] bg-gradient-to-b from-transparent via-brand-cyan/20 to-transparent -z-10" />
              
              {nodes.map((node) => (
                <Node 
                  key={node.name}
                  label={node.name}
                  active={activeNode === node.name}
                  onHover={() => setActiveNode(node.name)}
                  onLeave={() => {}}
                />
              ))}
            </div>

            <motion.div
              key={activeNode}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-left"
            >
              <h3 className="text-3xl font-bold font-outfit mb-4 text-white">
                {activeNode === "Planner" && "The Analytical Core"}
                {activeNode === "Orchestrator" && "The Master Conductor"}
                {activeNode === "Reflector" && "The Cognitive Mirror"}
              </h3>
              <p className="text-lg text-[#F5F5F5]/60 leading-relaxed min-h-[100px]">
                {nodes.find(n => n.name === activeNode)?.details}
              </p>
              <div className="flex gap-4 mt-8">
                <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-[10px] text-white/40 uppercase tracking-widest">
                  Active Data Pulse
                </div>
                <div className="animate-pulse w-3 h-3 rounded-full bg-brand-cyan mt-2" />
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-20 flex flex-col items-center gap-4"
        >
          <span className="text-white/20 text-[10px] uppercase tracking-[0.5em]">Dive into the Latent Space</span>
          <ArrowDown className="text-brand-cyan animate-bounce" size={20} />
        </motion.div>
      </motion.div>
    </ContentSection>
  );
}
