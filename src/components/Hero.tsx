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
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  const bio = "Machine Learning Engineer at Verizon specializing in the end-to-end lifecycle of Generative AI. From a Master’s in Data Science at UNC Charlotte to architecting autonomous agentic workflows, I bridge the gap between complex neural architectures and enterprise-scale business intelligence.";

  return (
    <ContentSection id="hero" className="min-h-screen py-0">
      <motion.div 
        ref={containerRef}
        style={{ opacity, scale }}
        className="flex flex-col items-center justify-center text-center max-w-7xl mx-auto pt-32"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <h1 className="text-7xl md:text-9xl font-bold font-outfit tracking-tighter mb-4">
            AKHILESH <span className="reveal-text">POTHURI</span>
          </h1>
          <p className="text-brand-cyan tracking-[0.6em] uppercase text-sm font-bold drop-shadow-md">
            The Neural Architect
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
            className="text-xl md:text-3xl text-[#F5F5F5] font-light leading-relaxed mb-12"
          >
            {bio.split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ 
                  delay: 0.8 + i * 0.05,
                  duration: 0.8,
                  ease: "easeOut"
                }}
                className="inline-block"
                style={{ marginRight: '0.35em' }}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 2.5, duration: 2 }}
            className="absolute -inset-4 bg-brand-cyan/5 blur-3xl -z-10 rounded-full"
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5, duration: 1 }}
          className="mt-20 flex flex-col items-center gap-4"
        >
          <span className="text-white/20 text-[10px] uppercase tracking-[0.5em]">Explore the Odyssey</span>
          <ArrowDown className="text-brand-cyan/50 animate-bounce" size={20} />
        </motion.div>
      </motion.div>
    </ContentSection>
  );
}
