"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface ContentSectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  title?: string;
  subtitle?: string;
  cinematicSummary?: string;
}

export default function ContentSection({
  children,
  id,
  className = "",
  title,
  subtitle,
  cinematicSummary,
}: ContentSectionProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Z-Axis Approaching Effect
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const translateZ = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  return (
    <section
      id={id}
      ref={ref}
      className={`relative min-h-screen flex flex-col justify-center items-center px-6 py-24 overflow-visible ${className}`}
      style={{ perspective: "1000px" }}
    >
      <motion.div
        style={{ 
          scale, 
          opacity,
          z: translateZ,
        }}
        className="max-w-5xl w-full"
      >
        {(title || subtitle || cinematicSummary) && (
          <div className="mb-12 text-center">
            {cinematicSummary && (
              <motion.span
                className="text-brand-cyan uppercase tracking-[0.5em] text-[10px] font-bold mb-4 block opacity-50"
              >
                {cinematicSummary}
              </motion.span>
            )}
            {subtitle && (
              <span className="text-white/40 uppercase tracking-widest text-sm font-medium mb-3 block">
                {subtitle}
              </span>
            )}
            {title && (
              <h2 className="text-6xl md:text-8xl font-bold font-outfit reveal-text mb-4 flicker">
                {title}
              </h2>
            )}
          </div>
        )}
        
        <div className="glass-cinematic p-8 md:p-16 rounded-[3rem] relative overflow-hidden group">
          {/* Holographic Shimmer */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/10 via-transparent to-brand-violet/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          
          <div className="relative z-10 text-lg md:text-2xl text-[#F5F5F5] leading-relaxed font-light">
            {children}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
