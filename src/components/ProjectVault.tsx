"use client";

import { motion } from "framer-motion";
import { Code, Layers, ShieldCheck, Zap } from "lucide-react";

interface Project {
  title: string;
  category: string;
  description: string;
  tech: string[];
  gridSpan?: string;
  accent: string;
}

const projects: Project[] = [
  {
    title: "KG Research",
    category: "Academic Publication",
    description: "Published researcher in Knowledge Graphs and distributed systems. Developed semantic schemas for complex relationship mapping in large-scale data environments.",
    tech: ["Knowledge Graphs", "SPARQL", "Distributed Systems"],
    gridSpan: "md:col-span-2",
    accent: "brand-violet",
  },
  {
    title: "Hackathon Champion",
    category: "Competitive Drive",
    description: "Multi-time hackathon winner in AI/ML tracks. Demonstrated rapid prototype development and competitive architectural design under technical constraints.",
    tech: ["FastAPI", "Rapid Prototyping", "Agentic Vision"],
    accent: "brand-cyan",
  },
  {
    title: "Zillow Analysis",
    category: "Predictive Analytics",
    description: "Built a personalized recommendation engine for property discovery using Collaborative Filtering and high-dimensional XGBoost models.",
    tech: ["XGBoost", "Recommenders", "Collaborative Filtering"],
    gridSpan: "md:col-span-2",
    accent: "brand-violet",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return ( project.accent === "brand-cyan" ? (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className={`relative rounded-[3rem] glass-cinematic group h-full flex flex-col border border-white/10 ${project.gridSpan || ""}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[3rem]" />
      
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none rounded-[3rem]">
         <div className="w-full h-full p-8 flex items-center justify-center">
            <div className="w-full h-full border-2 border-dashed border-brand-cyan rounded-full animate-[spin_20s_linear_infinite]" />
         </div>
      </div>

      <div className="relative z-10 p-10 md:p-14 flex flex-col h-full">
        <div className="flex justify-between items-start mb-8">
          <div className="p-4 bg-brand-cyan/10 rounded-2xl border border-brand-cyan/20">
            <Code className="text-brand-cyan" size={28} />
          </div>
        </div>
        
        <span className="text-[12px] uppercase tracking-[0.4em] text-brand-cyan font-bold mb-4 drop-shadow-md">
          {project.category}
        </span>
        <h3 className="text-3xl md:text-4xl font-bold font-outfit mb-4 text-white drop-shadow-lg leading-tight">
          {project.title}
        </h3>
        <p className="text-[#F5F5F5]/70 text-lg leading-relaxed mb-10 flex-grow font-light">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-3">
          {project.tech.map(t => (
            <span key={t} className="skill-tag">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  ) : (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className={`relative rounded-[3rem] glass-cinematic group h-full flex flex-col border border-white/10 ${project.gridSpan || ""}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand-violet/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[3rem]" />
      
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none rounded-[3rem] overflow-hidden">
         {[...Array(3)].map((_, i) => (
           <div 
             key={i} 
             className="absolute h-1 bg-brand-violet/40 rounded-full animate-[pan_3s_linear_infinite]"
             style={{
                top: `${30 + i * 20}%`,
                width: '100%',
                left: '-100%',
                animationDelay: `${i * 0.5}s`
             }}
           />
         ))}
      </div>

      <div className="relative z-10 p-10 md:p-14 flex flex-col h-full">
        <div className="flex justify-between items-start mb-8">
          <div className="p-4 bg-brand-violet/10 rounded-2xl border border-brand-violet/20">
            <Zap className="text-brand-violet" size={28} />
          </div>
        </div>
        
        <span className="text-[12px] uppercase tracking-[0.4em] text-brand-violet font-bold mb-4 drop-shadow-md">
          {project.category}
        </span>
        <h3 className="text-3xl md:text-4xl font-bold font-outfit mb-4 text-white drop-shadow-lg leading-tight">
          {project.title}
        </h3>
        <p className="text-[#F5F5F5]/70 text-lg leading-relaxed mb-10 flex-grow font-light">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-3">
          {project.tech.map(t => (
            <span key={t} className="skill-tag">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  ));
}

export default function ProjectVault() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div>
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-7xl font-bold font-outfit reveal-text"
          >
            THE VAULT
          </motion.h2>
          <p className="text-white/30 tracking-[0.5em] uppercase text-sm mt-4">Restricted Prototypes & Contributions</p>
        </div>
        <div className="flex gap-4 pb-2">
           <div className="flex items-center gap-2 text-brand-cyan text-xs uppercase tracking-widest font-bold">
              <ShieldCheck size={14} /> Encrypted
           </div>
           <div className="w-[1px] h-4 bg-white/10" />
           <div className="text-white/20 text-xs uppercase tracking-widest">
              Level 04 Clearance
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
        {projects.map((proj, i) => (
          <ProjectCard key={i} project={proj} />
        ))}
      </div>
      
      <style jsx>{`
        @keyframes pan {
          0% { transform: translateX(-100%) skewX(45deg); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(200%) skewX(45deg); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
