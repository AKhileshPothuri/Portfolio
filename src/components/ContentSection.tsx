"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ContentSectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  title?: string;
  subtitle?: string;
}

export default function ContentSection({
  children,
  id,
  className = "",
  title,
  subtitle,
}: ContentSectionProps) {
  return (
    <section
      id={id}
      className={`relative min-h-screen flex flex-col justify-center items-center px-6 py-24 ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: false, amount: 0.3 }}
        className="max-w-4xl w-full"
      >
        {(title || subtitle) && (
          <div className="mb-12 text-center">
            {subtitle && (
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-brand-cyan uppercase tracking-widest text-sm font-medium mb-3 block"
              >
                {subtitle}
              </motion.span>
            )}
            {title && (
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-5xl md:text-7xl font-bold font-outfit reveal-text"
              >
                {title}
              </motion.h2>
            )}
          </div>
        )}
        <div className="glass p-8 md:p-16 rounded-[2.5rem] relative overflow-hidden group shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/5 via-transparent to-brand-violet/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative z-10 text-lg md:text-xl text-[#F5F5F5] leading-relaxed font-light">
            {children}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
