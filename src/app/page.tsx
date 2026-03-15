"use client";

import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import ProjectVault from "@/components/ProjectVault";
import ContentSection from "@/components/ContentSection";

const ThreeScene = dynamic(() => import("@/components/ThreeScene"), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-black" />,
});

export default function Home() {
  return (
    <>
      <ThreeScene />

      <main className="relative overflow-visible">
        {/* Landing & QVerse Hero Moment */}
        <Hero />

        {/* Synaptic Tuner Module */}
        <ContentSection
          cinematicSummary="Optimization Protocols"
          title="Synaptic Tuner"
          id="tuner"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 aspect-video glass-dark rounded-[2rem] flex items-center justify-center border border-white/5 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-tr from-brand-violet/20 to-transparent" />
            </div>
            <div className="order-1 md:order-2">
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-6 font-light">
                Rewriting the weights of intelligence. Led reward-based
                fine-tuning of <span className="text-brand-violet font-medium">Gemma and Llama</span> models on
                distributed NVIDIA H100 clusters.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="skill-tag">LoRA</div>
                <div className="skill-tag">GRPO</div>
                <div className="skill-tag">PyTorch</div>
                <div className="skill-tag">H100 Clusters</div>
              </div>
            </div>
          </div>
        </ContentSection>

        {/* The Odyssey: Cinematic Experience */}
        <Experience />

        {/* The Vault: Project Showcase */}
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
