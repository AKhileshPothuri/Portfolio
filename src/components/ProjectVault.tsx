"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Code, Layers, ShieldCheck, Zap } from "lucide-react";

interface Project {
  title: string;
  category: string;
  description: string;
  tech: string[];
  links?: { github?: string; demo?: string };
  gridSpan?: string;
  accent: string;
}

const projects: Project[] = [
  {
    title: "localGPT",
    category: "Open Source",
    description: "Architected a custom JSON loader for efficient ingestion of complex enterprise data structures, optimizing context window usage.",
    tech: ["LangChain", "ChromaDB", "Python"],
    gridSpan: "md:col-span-2",
    accent: "brand-violet",
  },
  {
    title: "Zillow Analysis",
    category: "Recommenders",
    description: "Built a personalized recommendation engine for property discovery using Collaborative Filtering and XGBoost.",
    tech: ["LightGBM", "Scikit-Learn", "Matplotlib"],
    accent: "brand-cyan",
  },
  {
    title: "Attrition Predictor",
    category: "Classification",
    description: "High-precision binary classifier for forecasting employee turnover, achieving 90%+ recall on churn metrics.",
    tech: ["XGBoost", "SMOTE", "Exploratory Data Analysis"],
    gridSpan: "md:col-span-2",
    accent: "brand-violet",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return ( project.accent === "brand-cyan" ? (
    <motion.div
      whileHover={{ y: -5 }}
      className={`relative rounded-[2.5rem] glass group h-full flex flex-col shadow-[0_0_40px_rgba(0,0,0,0.4)] border border-white/10 ${project.gridSpan || ""}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem]" />
      
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none rounded-[2.5rem]">
         <div className="w-full h-full p-8 flex items-center justify-center">
            <div className="w-full h-full border-2 border-dashed border-brand-cyan rounded-full animate-[spin_20s_linear_infinite]" />
            <div className="absolute w-2/3 h-2/3 border-2 border-dashed border-brand-cyan rounded-full animate-[spin_15s_linear_reverse_infinite]" />
         </div>
      </div>

      <div className="relative z-10 p-10 md:p-14 flex flex-col h-full">
        <div className="flex justify-between items-start mb-8">
          <div className="p-4 bg-brand-cyan/10 rounded-2xl border border-brand-cyan/20">
            <Code className="text-brand-cyan" size={28} />
          </div>
          <div className="flex gap-6">
             <Github className="text-white/40 hover:text-white transition-colors cursor-pointer" size={24} />
             <ExternalLink className="text-white/40 hover:text-white transition-colors cursor-pointer" size={24} />
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
      whileHover={{ y: -5 }}
      className={`relative rounded-[2.5rem] glass group h-full flex flex-col shadow-[0_0_40px_rgba(0,0,0,0.4)] border border-white/10 ${project.gridSpan || ""}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand-violet/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem]" />
      
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none rounded-[2.5rem] overflow-hidden">
         {[...Array(5)].map((_, i) => (
           <div 
             key={i} 
             className="absolute h-1 bg-brand-violet/40 rounded-full animate-[pan_3s_linear_infinite]"
             style={{
               top: `${i * 25}%`,
               width: `${20 + i * 15}%`,
               left: '-10%',
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
          <div className="flex gap-6">
             <Github className="text-white/40 hover:text-white transition-colors cursor-pointer" size={24} />
             <ExternalLink className="text-white/40 hover:text-white transition-colors cursor-pointer" size={24} />
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
