"use client";

import dynamic from "next/dynamic";
import ContentSection from "@/components/ContentSection";
import WorkHistory from "@/components/WorkHistory";
import Timeline from "@/components/Timeline";
import ProjectVault from "@/components/ProjectVault";
import { motion } from "framer-motion";
import { ArrowDown, Cpu, Network, Zap } from "lucide-react";

const ThreeScene = dynamic(() => import("@/components/ThreeScene"), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-black" />,
});

export default function Home() {
  return (
    <>
      <ThreeScene />

      <main className="relative">
        {/* Landing Section */}
        <section className="h-screen flex flex-col justify-center items-center text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-brand-cyan tracking-[0.6em] uppercase text-sm mb-6 font-bold drop-shadow-md"
          >
            Machine Learning Engineer
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-7xl md:text-9xl font-bold font-outfit mb-8 tracking-tighter drop-shadow-[0_0_30px_rgba(255,255,255,0.2)] text-white"
          >
            AKHILESH <span className="reveal-text">POTHURI</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-xl md:text-2xl text-[#F5F5F5]/70 max-w-3xl font-light leading-relaxed mb-16"
          >
            Architecting the future of <span className="text-white font-medium">Generative AI</span> and <span className="text-white font-medium">Autonomous Agentic Workflows</span>.
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
          >
            <span className="text-brand-cyan/60 text-xs uppercase tracking-[0.5em] font-bold">
              Decrypt Protocol
            </span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-brand-cyan to-transparent animate-pulse" />
          </motion.div>
        </section>

        {/* Hero Moment 1: QVerse */}
        <ContentSection
          subtitle="The Architectural Scale"
          title="QVerse Engine"
          id="qverse"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xl text-white/80 leading-relaxed mb-6">
                Architected an enterprise-grade Self-Serve Conversational BI
                platform utilizing a hierarchical{" "}
                <span className="text-brand-cyan">
                  Planner → Orchestrator → Reflector
                </span>{" "}
                pattern.
              </p>
              <div className="space-y-4 text-white/60">
                <div className="flex items-center gap-4">
                  <Cpu className="text-brand-cyan" size={20} />
                  <span>Sub-second latency for 10,000+ daily queries.</span>
                </div>
                <div className="flex items-center gap-4">
                  <Network className="text-brand-cyan" size={20} />
                  <span>
                    Scalable metadata builder for PostgreSQL & BigQuery.
                  </span>
                </div>
              </div>
            </div>
            <div className="aspect-square glass-dark rounded-2xl flex items-center justify-center border border-white/5 relative overflow-hidden">
              <div className="absolute inset-0 bg-brand-cyan/5 animate-pulse" />
              <pre className="text-[10px] text-brand-cyan/40 font-mono">
                {`[SYSTEM ARCHITECTURE]
Planner(Request)
  -> Reason(Context)
    -> Orchestrate(Tools)
      -> Reflect(Response)`}
              </pre>
            </div>
          </div>
        </ContentSection>

        {/* Hero Moment 2: Synaptic Tuner */}
        <ContentSection
          subtitle="Model Optimization"
          title="Synaptic Tuner"
          id="tuner"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 aspect-video glass-dark rounded-2xl flex items-center justify-center border border-white/5 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-tr from-brand-violet/20 to-transparent" />
            </div>
            <div className="order-1 md:order-2">
              <p className="text-xl text-white/80 leading-relaxed mb-6">
                Rewriting the weights of intelligence. Led reward-based
                fine-tuning of <span className="text-brand-violet">Gemma and Llama</span> models on
                distributed NVIDIA H100 clusters.
              </p>
              <div className="space-y-4 text-white/60">
                <div className="flex items-center gap-4">
                  <Zap className="text-brand-violet" size={20} />
                  <span>25% accuracy boost using LoRA and GRPO.</span>
                </div>
                <div className="flex items-center gap-4">
                  <Cpu className="text-brand-violet" size={20} />
                  <span>Programmatic reward functions for CoT evaluation.</span>
                </div>
              </div>
            </div>
          </div>
        </ContentSection>

        {/* Hero Moment 3: Agentic Visionary */}
        <ContentSection
          subtitle="Autonomous Reasoners"
          title="Agentic Visionary"
          id="agentic"
        >
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-2xl text-white/90 font-light mb-12">
              Building autonomous systems that reason, search, and cite using{" "}
              <span className="text-brand-cyan/80">LangGraph</span> and agentic{" "}
              <span className="text-brand-violet/80">ReAct</span> workflows.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                "Talk2Report Agent",
                "Intelligent Routing",
                "MCP Implementation",
                "A2A Communication",
                "RAG Observability",
                "VES Metrics",
              ].map((skill) => (
                <div
                  key={skill}
                  className="px-4 py-3 glass-dark rounded-full text-sm text-white/60 border border-white/5"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </ContentSection>

        {/* The Odyssey: Vertical Scrollytelling Timeline */}
        <Timeline />

        {/* The Vault: Project Bento Grid */}
        <ProjectVault />

        {/* Footer */}
        <footer className="py-24 border-t border-white/5 text-center bg-black/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
              <div className="text-left">
                <h2 className="text-2xl font-bold font-outfit mb-2">AKHILESH POTHURI</h2>
                <p className="text-white/30 text-sm tracking-widest uppercase">The Neural Architect</p>
              </div>
              <div className="flex gap-8 text-white/40 text-sm uppercase tracking-widest font-medium">
                <a href="https://www.linkedin.com/in/akhilesh-pothuri/" className="hover:text-brand-cyan transition-colors">LinkedIn</a>
                <a href="https://github.com/AKhileshPothuri" className="hover:text-brand-cyan transition-colors">GitHub</a>
                <a href="/resume.pdf" target="_blank" className="hover:text-brand-cyan transition-colors text-brand-cyan">Resume</a>
              </div>
            </div>
            <p className="text-white/20 text-[10px] tracking-[0.5em] uppercase">
              Designed for the Latent Space &copy; 2024
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
