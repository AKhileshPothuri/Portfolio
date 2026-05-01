import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail, FileText, Terminal, Database, BrainCircuit, ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="bg-glow" />

      <main className="max-w-7xl mx-auto px-6 py-12 md:py-24 relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-24">

        {/* Left Column: Sticky Profile */}
        <header className="lg:w-1/2 lg:sticky lg:top-24 lg:h-[calc(100vh-6rem)] flex flex-col text-slate-200">
          <div>
            <h1 className="text-5xl font-bold tracking-tight text-white mb-4">Akhilesh Pothuri</h1>
            <h2 className="text-xl font-medium text-gradient-primary mb-6">AI & Machine Learning Engineer</h2>
            <p className="text-base text-neutral-400 leading-relaxed max-w-md">
              Specializing in Agentic Workflows, MCP Infrastructure, and LLM FinOps. I build retrieval systems that are fast, verifiable, and highly efficient.
            </p>
          </div>

          {/* Quick Nav */}
          <nav className="hidden lg:flex flex-col gap-4 mt-16 font-medium text-sm text-neutral-500 uppercase tracking-widest">
            <a href="#experience" className="hover:text-white transition-colors w-min whitespace-nowrap">01. Experience</a>
            <a href="#projects" className="hover:text-white transition-colors w-min whitespace-nowrap">02. Projects</a>
            <a href="#expertise" className="hover:text-white transition-colors w-min whitespace-nowrap">03. Expertise</a>
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-6 mt-12 lg:mt-auto">
            <a href="https://github.com/AKhileshPothuri" target="_blank" className="hover:text-white text-neutral-400 transition-colors" aria-label="GitHub"><Github size={24} /></a>
            <a href="https://www.linkedin.com/in/akhilesh-pothuri/" target="_blank" className="hover:text-white text-neutral-400 transition-colors" aria-label="LinkedIn"><Linkedin size={24} /></a>
            <a href="mailto:pothuriakhilesh@yahoo.com" className="hover:text-white text-neutral-400 transition-colors" aria-label="Email"><Mail size={24} /></a>
            <a href="/resume.pdf" target="_blank" className="flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-700 hover:border-brand-cyan hover:text-white text-neutral-300 text-sm font-medium transition-all">
              View PDF Resume
            </a>
          </div>
        </header>

        {/* Right Column: Scroll Content */}
        <div className="lg:w-1/2 flex flex-col gap-24 pt-12 lg:pt-0">

          {/* Experience Section */}
          <section id="experience" className="space-y-12 scroll-mt-24">
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-xl font-bold text-white uppercase tracking-wider">Experience</h3>
              <div className="h-[1px] bg-neutral-800 flex-grow" />
            </div>

            <div className="space-y-12 text-slate-300">
              {/* Verizon */}
              <div className="relative group">
                <div className="absolute -left-4 top-1 w-2 h-2 rounded-full bg-neutral-700 group-hover:bg-brand-cyan transition-colors" />
                <header className="mb-4">
                  <h4 className="text-lg font-semibold text-white">Lead AI/ML Engineer</h4>
                  <div className="flex gap-2 text-sm text-neutral-400 font-medium mt-1">
                    <span>Verizon</span> • <span>Jan 2024 — Present</span>
                  </div>
                </header>
                <div className="space-y-3 text-sm leading-relaxed text-neutral-400">
                  <p><span className="text-white font-medium">Architected QAgent:</span> Designed and engineered a "super agent" harness that orchestrates specialized sub-agents, persistent memory, and secure sandboxes to execute complex tasks. Built as a highly extensible framework powered by modular skills.</p>
                  <p><span className="text-white font-medium">Architected QVerse:</span> Enterprise-grade Conversational BI platform utilizing a hierarchical Planner → Orchestrator → Reflector pattern to process 10,000+ daily queries with sub-second latency.</p>
                  <p><span className="text-white font-medium">Talk2Report Core:</span> Developed ReAct agentic workflow with pgvector semantic search and citation tracking for verifiable RAG responses.</p>
                  <p><span className="text-white font-medium">ThinkForge Engine:</span> Built a query optimization engine using hybrid semantic caching, reducing LLM API costs by 40% and hitting a 60% cache rate.</p>
                  <p><span className="text-white font-medium">LLM Fine-Tuning:</span> Led distributed fine-tuning (SFT + GRPO) of Gemma/Llama models on NVIDIA H100 clusters, utilizing LoRA adapters to boost SQL generation accuracy by 25%.</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="skill-pill">Multi-Agent Systems</span>
                  <span className="skill-pill">LangGraph</span>
                  <span className="skill-pill">pgvector</span>
                  <span className="skill-pill">LoRA/SFT</span>
                </div>
              </div>

              {/* UNC */}
              <div className="relative group">
                <div className="absolute -left-4 top-1 w-2 h-2 rounded-full bg-neutral-700 group-hover:bg-brand-cyan transition-colors" />
                <header className="mb-4">
                  <h4 className="text-lg font-semibold text-white">Data Scientist</h4>
                  <div className="flex gap-2 text-sm text-neutral-400 font-medium mt-1">
                    <span>UNC Charlotte Football</span> • <span>Aug 2023 — Dec 2023</span>
                  </div>
                </header>
                <p className="text-sm leading-relaxed text-neutral-400">
                  Built an automated live tracking system using CNNs & advanced computer vision for real-time player and jersey number recognition, saving 5 hours of manual analysis daily.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="skill-pill">Computer Vision</span>
                  <span className="skill-pill">CNNs</span>
                </div>
              </div>

              {/* HP */}
              <div className="relative group">
                <div className="absolute -left-4 top-1 w-2 h-2 rounded-full bg-neutral-700 group-hover:bg-brand-cyan transition-colors" />
                <header className="mb-4">
                  <h4 className="text-lg font-semibold text-white">Data Scientist</h4>
                  <div className="flex gap-2 text-sm text-neutral-400 font-medium mt-1">
                    <span>Hewlett Packard R&D</span> • <span>Feb 2020 — Jul 2022</span>
                  </div>
                </header>
                <p className="text-sm leading-relaxed text-neutral-400">
                  Built a spare part replacement recommendation engine using Transformer NLP models, reducing customer wait time to 15s. Fine-tuned PyTorch LSTM models for supply chain forecasting, yielding an anticipated $26M ROI.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="skill-pill">Transformers</span>
                  <span className="skill-pill">PyTorch</span>
                  <span className="skill-pill">Azure Databricks</span>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="space-y-8 scroll-mt-24">
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-xl font-bold text-white uppercase tracking-wider">Projects</h3>
              <div className="h-[1px] bg-neutral-800 flex-grow" />
            </div>

            <div className="grid gap-6">
              <a href="https://costline.dev/" target="_blank" className="p-6 rounded-2xl glass-card block group">
                <h4 className="text-lg font-semibold text-white flex justify-between items-center mb-2">CostLine <ExternalLink size={18} className="text-neutral-500 group-hover:text-brand-cyan transition-colors" /></h4>
                <p className="text-sm text-neutral-400 mb-4 leading-relaxed">
                  Infrastructure-level proxy that enforces hard budget limits and tracks per-user/per-feature unit economics for LLM applications with sub-10ms overhead.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="skill-pill">Go / Proxies</span>
                  <span className="skill-pill">Kubernetes</span>
                  <span className="skill-pill">LLM FinOps</span>
                </div>
              </a>

              <a href="https://nexus-graph.dev/" target="_blank" className="p-6 rounded-2xl glass-card block group">
                <h4 className="text-lg font-semibold text-white flex justify-between items-center mb-2">Nexus-Graph <ExternalLink size={18} className="text-neutral-500 group-hover:text-brand-cyan transition-colors" /></h4>
                <p className="text-sm text-neutral-400 mb-4 leading-relaxed">
                  An open-source MCP server / CLI tool reducing AI token usage by 95%. Parses ASTs via Tree-sitter to build high-performance SQLite symbol graphs for Claude and Cursor.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="skill-pill">AST & Graph</span>
                  <span className="skill-pill">SQLite</span>
                  <span className="skill-pill">MCP</span>
                </div>
              </a>
            </div>
          </section>

          {/* Expertise Section */}
          <section id="expertise" className="space-y-8 scroll-mt-24">
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-xl font-bold text-white uppercase tracking-wider">Expertise</h3>
              <div className="h-[1px] bg-neutral-800 flex-grow" />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="glass-card p-6 rounded-2xl">
                <BrainCircuit className="text-brand-cyan mb-4" size={28} />
                <h4 className="text-base font-semibold text-white mb-2">Agentic Orchestration</h4>
                <p className="text-xs text-neutral-400 leading-relaxed">ReAct, Chain-of-Thought (CoT), LangGraph, Model Context Protocol (MCP), Intent Routing.</p>
              </div>
              <div className="glass-card p-6 rounded-2xl">
                <Database className="text-brand-violet mb-4" size={28} />
                <h4 className="text-base font-semibold text-white mb-2">RAG & Fine-Tuning</h4>
                <p className="text-xs text-neutral-400 leading-relaxed">SFT, LoRA, GRPO, pgvector, ChromaDB, Semantic Search, Citation grounding.</p>
              </div>
              <div className="glass-card p-6 rounded-2xl">
                <Terminal className="text-brand-cyan mb-4" size={28} />
                <h4 className="text-base font-semibold text-white mb-2">Cloud Infrastructure</h4>
                <p className="text-xs text-neutral-400 leading-relaxed">Kubernetes, Docker, Azure, GCP (BigQuery), PostgreSQL, Snowflake, CI/CD.</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
