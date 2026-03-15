"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Cpu, GraduationCap, Briefcase, Network, Database } from "lucide-react";

interface TimelineEvent {
  title: string;
  subtitle: string;
  date: string;
  description: string;
  icon: any;
  projects?: { name: string; details: string; tech: string[] }[];
  education?: string;
}

const timelineData: TimelineEvent[] = [
  {
    title: "Verizon | GenAI",
    subtitle: "Machine Learning Engineer",
    date: "2024 - Present",
    icon: Briefcase,
    description: "Architecting enterprise agentic workflows and multi-agent systems for high-scale Conversational BI.",
    projects: [
      {
        name: "QVerse Ecosystem",
        details: "Orchestrated self-serve BI with Talk2Report and ThinkForge. Implemented ReAct-based agentic internal search and ThinkForge semantic caching.",
        tech: ["LangGraph", "Talk2Report", "ThinkForge", "LangChain"]
      },
      {
        name: "Model Optimization",
        details: "Led reward-based fine-tuning for Gemma/Llama models using LoRA and GRPO on H100 GPU clusters.",
        tech: ["LoRA", "PyTorch", "H100", "Fine-tuning"]
      }
    ]
  },
  {
    title: "UNC Charlotte",
    subtitle: "Master of Science in Data Science",
    date: "2022 - 2023",
    icon: GraduationCap,
    description: "Deep specialization in Neural Networks, Computer Vision, and Advanced Business Analytics.",
    education: "MS in Data Science"
  },
  {
    title: "Hackathon Winner",
    subtitle: "#ReinventTheWheel Hackathon",
    date: "2021",
    icon: Cpu,
    description: "Winner of the #ReinventTheWheel Hackathon for building an innovative data-driven solution.",
  },
  {
    title: "Hewlett Packard R&D",
    subtitle: "Data Scientist",
    date: "2020 - 2022",
    icon: Briefcase,
    description: "Developed spare-part replacement recommendation engines and architected end-to-end data pipelines for global logistics.",
  },
  {
    title: "Published Researcher",
    subtitle: "IOP Science | Knowledge Graphs",
    date: "2021",
    icon: Network,
    description: "Published 'Knowledge graph augmented advanced learning models for commonsense reasoning' in IOP Conference Series.",
  },
  {
    title: "Shiv Nadar University",
    subtitle: "Bachelor of Technology",
    date: "2016 - 2020",
    icon: GraduationCap,
    description: "B.Tech in Computer Science and Engineering. Solid foundation in distributed systems and Mathematics.",
    education: "B.Tech in CSE"
  }
];

function TimelineCard({ event, index }: { event: TimelineEvent; index: number }) {
  const isEven = index % 2 === 0;
  const isEducation = event.icon === GraduationCap;

  return (
    <div className={`mb-32 flex flex-col md:flex-row items-center w-full ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      <div className="w-full md:w-1/2 flex justify-center px-8">
        <motion.div
          initial={{ opacity: 0, x: isEven ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
          className={`glass p-8 md:p-16 rounded-[2.5rem] w-full relative group border-2 ${isEducation ? 'border-brand-violet/20' : 'border-brand-cyan/20'} overflow-visible px-10 md:px-20`}
        >
          <div className="absolute top-0 right-0 p-8 text-white/5 group-hover:text-brand-cyan/10 transition-colors pointer-events-none">
            <event.icon size={100} />
          </div>

          <span className={`text-sm tracking-[0.3em] font-bold uppercase mb-4 block ${isEducation ? 'text-brand-violet' : 'text-brand-cyan'}`}>
            {event.date}
          </span>
          <h3 className="text-4xl md:text-5xl font-bold font-outfit mb-4 text-white drop-shadow-lg leading-tight break-words">{event.title}</h3>
          <p className="text-xl text-[#F5F5F5]/60 mb-8 font-medium">{event.subtitle}</p>
          <p className="text-lg md:text-xl text-[#F5F5F5] leading-relaxed mb-10 font-light">{event.description}</p>

          {event.projects && (
            <div className="space-y-8">
              {event.projects.map((proj) => (
                <div key={proj.name} className="glass-dark p-8 rounded-3xl border border-white/10 shadow-inner">
                  <h4 className="text-brand-cyan text-xl font-bold mb-3 flex items-center gap-3">
                    <Database size={20} /> {proj.name}
                  </h4>
                  <p className="text-[#F5F5F5]/70 mb-6 leading-relaxed">{proj.details}</p>
                  <div className="flex flex-wrap gap-3">
                    {proj.tech.map(t => (
                      <span key={t} className="skill-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>

      {/* Central Timeline Point */}
      <div className="hidden md:flex flex-col items-center justify-center relative z-10 w-8">
        <div className={`w-6 h-6 rounded-full shadow-[0_0_20px_rgba(0,242,255,0.8)] ${isEducation ? 'bg-brand-violet' : 'bg-brand-cyan'}`} />
        <div className="w-[1px] h-full bg-gradient-to-b from-brand-cyan to-transparent absolute top-6" />
      </div>

      <div className="hidden md:block w-1/2" />
    </div>
  );
}

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="relative py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-32">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-bold font-outfit reveal-text mb-6"
        >
          THE ODYSSEY
        </motion.h2>
        <p className="text-white/40 tracking-widest uppercase text-sm">A Chronicle of Intelligence</p>
      </div>

      <div className="relative">
        {/* Central vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 hidden md:block -translate-x-1/2" />

        {timelineData.map((event, index) => (
          <TimelineCard key={index} event={event} index={index} />
        ))}
      </div>
    </section>
  );
}
