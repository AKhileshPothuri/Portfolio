"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    company: "Verizon",
    role: "Machine Learning Engineer - GenAI",
    period: "2024 - Present",
    description:
      "Architecting QVerse and leading reward-based fine-tuning on H100 clusters.",
    highlights: ["LLM Observability", "Multi-Agent Orchestration", "GRPO / SFT"],
  },
  {
    company: "UNC Charlotte Football",
    role: "Data Scientist",
    period: "2023",
    description:
      "Built CNN tracking systems and advanced computer vision pipelines.",
    highlights: ["Computer Vision", "Real-time Tracking", "Neural Networks"],
  },
  {
    company: "Hewlett Packard R&D",
    role: "Data Scientist",
    period: "2020 - 2022",
    description:
      "Developed NLP recommendation engines and demand forecasting models.",
    highlights: ["Time Series", "Transformers", "Anomaly Detection"],
  },
];

export default function WorkHistory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["20%", "-40%"]);

  return (
    <div ref={containerRef} className="relative h-[300vh] bg-transparent">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-24 px-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="flex-shrink-0 w-[80vw] md:w-[600px] glass p-12 rounded-[40px] border border-white/5 relative group"
            >
              <div className="absolute top-0 right-0 p-8 text-white/10 text-9xl font-bold font-outfit select-none">
                0{index + 1}
              </div>
              <div className="relative z-10">
                <span className="text-brand-cyan tracking-widest text-xs uppercase mb-2 block font-medium">
                  {exp.period}
                </span>
                <h3 className="text-4xl font-bold font-outfit mb-2 text-white">
                  {exp.company}
                </h3>
                <p className="text-xl text-white/40 mb-8 font-light italic">
                  {exp.role}
                </p>
                <p className="text-white/70 text-lg leading-relaxed mb-8">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {exp.highlights.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 bg-brand-cyan/10 border border-brand-cyan/20 rounded-full text-xs text-brand-cyan"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Cinematic Title Overlay */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 pointer-events-none">
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="text-8xl md:text-[12rem] font-bold font-outfit text-white/5 text-center leading-none"
        >
          EXPERIENCE
        </motion.h2>
      </div>
    </div>
  );
}
