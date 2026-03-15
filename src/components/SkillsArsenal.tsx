"use client";

import { motion } from "framer-motion";
import { Cpu, Zap, Database, BrainCircuit, Workflow, Layers } from "lucide-react";

const categories = [
  {
    title: "Agentic AI",
    icon: BrainCircuit,
    skills: ["LangGraph", "ReAct", "Chain-of-Thought", "MCP Implementation", "Autonomous Reasoners"],
    accent: "brand-cyan"
  },
  {
    title: "Core ML/Ops",
    icon: Workflow,
    skills: ["PyTorch", "LoRA/GRPO Fine-tuning", "LLM Optimization", "Docker", "Kubernetes"],
    accent: "brand-violet"
  },
  {
    title: "Data Engineering",
    icon: Database,
    skills: ["PostgreSQL / BigQuery", "Apache Spark", "Azure Databricks", "ETL Architecture", "Data Pipelines"],
    accent: "brand-cyan"
  }
];

export default function SkillsArsenal() {
  return (
    <section id="arsenal" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-24">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-6xl md:text-8xl font-bold font-outfit reveal-text"
        >
          THE ARSENAL
        </motion.h2>
        <p className="text-white/30 tracking-[0.5em] uppercase text-sm mt-4">Technical Stack & Expert Clusters</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {categories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="glass-cinematic p-10 rounded-[3rem] border border-white/5 group hover:border-brand-cyan/20 transition-all duration-500"
          >
            <div className={`p-4 rounded-2xl bg-white/5 border border-white/10 w-fit mb-8 group-hover:scale-110 transition-transform`}>
              <category.icon className={category.accent === "brand-cyan" ? "text-brand-cyan" : "text-brand-violet"} size={32} />
            </div>
            
            <h3 className="text-3xl font-bold font-outfit text-white mb-8">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <span 
                  key={skill} 
                  className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-300 ${
                    category.accent === "brand-cyan" 
                      ? "border-brand-cyan/20 bg-brand-cyan/5 text-brand-cyan/80 hover:bg-brand-cyan hover:text-black"
                      : "border-brand-violet/20 bg-brand-violet/5 text-brand-violet/80 hover:bg-brand-violet hover:text-black"
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
