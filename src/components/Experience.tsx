"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Network, Cpu, Database } from "lucide-react";
import ContentSection from "./ContentSection";

interface ModuleProps {
  title: string;
  summary: string;
  date: string;
  details: string;
  icon: any;
  tech: string[];
  index: number;
}

function CinematicModule({ title, summary, date, details, icon: Icon, tech, index }: ModuleProps) {
  const isEven = index % 2 === 0;

  return (
    <div className={`flex flex-col md:flex-row gap-12 items-center mb-32 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      <motion.div
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="glass-cinematic p-12 md:p-16 rounded-[3rem] w-full md:w-2/3 relative group"
      >
        <div className="absolute top-0 right-0 p-12 text-brand-cyan/5 group-hover:text-brand-cyan/10 transition-colors pointer-events-none">
          <Icon size={120} />
        </div>

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <span className="text-brand-cyan text-xs font-bold uppercase tracking-[0.4em] mb-4 block">
                {summary}
              </span>
              <h3 className="text-3xl md:text-5xl font-bold font-outfit text-white drop-shadow-xl pl-4 py-2">
                {title}
              </h3>
            </div>
            <span className="px-5 py-2 rounded-full border border-white/10 text-xs font-mono text-white/40">
              {date}
            </span>
          </div>

          <p className="text-lg md:text-xl text-[#F5F5F5]/70 font-light leading-relaxed mb-10 max-w-2xl">
            {details}
          </p>

          <div className="flex flex-wrap gap-3">
            {tech.map((t) => (
              <span key={t} className="skill-tag">
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
      <div className="hidden md:block w-1/3" />
    </div>
  );
}

export default function Experience() {
  const modules = [
    {
      summary: "The Agentic Core",
      title: "Verizon | GenAI",
      date: "2024 - Present",
      details: "Architecting QVerse and Talk2Report—high-scale multi-agent sequences using LangGraph and ReAct. Optimized systems for sub-second latency across complex enterprise BI workflows.",
      icon: Briefcase,
      tech: ["LangGraph", "Multi-Agent Systems", "ReAct", "Agentic Workflows"]
    },
    {
      summary: "Intelligence Optimization",
      title: "Verizon | ML",
      date: "2024 - Present",
      details: "Leading supervised fine-tuning for Gemma and Llama models on H100 clusters using LoRA/GRPO. Developed ThinkForge, achieving 60% cache efficiency for distributed LLM inference.",
      icon: Cpu,
      tech: ["LoRA/GRPO", "H100 Clusters", "Model Optimization", "ThinkForge"]
    },
    {
      summary: "Commercial Impact",
      title: "HP R&D",
      date: "2020 - 2022",
      details: "Transformed global logistics through Spark-based ETL and demand forecasting models. Delivered an anticipated $26M ROI by streamlining spare-part replacement pipelines.",
      icon: Database,
      tech: ["PySpark", "ETL Pipelines", "Forecasting", "ROI Analytics"]
    },
    {
      summary: "Foundation & Research",
      title: "UNCC / SNU",
      date: "2016 - 2023",
      details: "Master’s in Data Science from UNC Charlotte with honors. Foundational research in distributed systems and Knowledge Graph publications during B.Tech.",
      icon: GraduationCap,
      tech: ["Neural Networks", "Knowledge Graphs", "Distributed Systems"]
    }
  ];

  return (
    <section className="pt-48 pb-24 px-6 max-w-7xl mx-auto overflow-visible">
      <div className="text-center mb-32">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-6xl md:text-8xl font-bold font-outfit mb-6"
        >
          THE ODYSSEY
        </motion.h2>
        <p className="text-white/30 tracking-[0.5em] uppercase text-sm">Professional Journey & Narrative Pillars</p>
      </div>

      {modules.map((m, i) => (
        <CinematicModule key={i} {...m} index={i} />
      ))}
    </section>
  );
}
