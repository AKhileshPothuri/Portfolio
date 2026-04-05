"use client";

import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import SkillsArsenal from "@/components/SkillsArsenal";
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
        {/* Identity & Bio */}
        <Hero />

        {/* The Arsenal: Categorized Expertise */}
        <SkillsArsenal />

        {/* Spacer for visual depth */}
        <div className="h-64" aria-hidden="true" />

        {/* The Odyssey: Cinematic Experience */}
        <Experience />

        {/* The Vault: High-Impact Showcases */}
        <ProjectVault />

        {/* Footer */}
        <footer className="py-24 border-t border-white/5 text-center bg-black/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
              <div className="text-left font-outfit">
                <h2 className="text-2xl font-bold mb-1">AKHILESH POTHURI</h2>
                <p className="text-brand-cyan/60 text-xs tracking-[0.2em] uppercase font-bold">ML Engineer | GenAI</p>
              </div>
              <div className="flex flex-wrap justify-center gap-8 text-white/40 text-sm uppercase tracking-widest font-bold">
                <a href="https://www.linkedin.com/in/akhilesh-pothuri/" className="hover:text-brand-cyan transition-colors">LinkedIn</a>
                <a href="https://github.com/AKhileshPothuri" className="hover:text-brand-cyan transition-colors">GitHub</a>
                <a href={process.env.NODE_ENV === 'production' ? "/Portfolio/resume.pdf" : "/resume.pdf"} target="_blank" className="hover:text-brand-cyan transition-colors">Resume</a>
                <a href="mailto:pothuriakhilesh@yahoo.com" className="hover:text-brand-cyan transition-colors">Email</a>
              </div>
            </div>

          </div>
        </footer>
      </main>
    </>
  );
}
