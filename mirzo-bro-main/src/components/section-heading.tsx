"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto mb-14 max-w-2xl text-center"
    >
      <span className="mb-4 inline-block rounded-full border border-slate-200 bg-white/60 px-4 py-1.5 text-xs font-semibold tracking-[0.16em] text-slate-500 uppercase backdrop-blur dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-400">
        {eyebrow}
      </span>
      <div className="mx-auto mb-6 mt-4 h-px w-12 bg-slate-300 dark:bg-slate-700" />
      <h2 className="font-display text-3xl font-bold tracking-tight text-balance md:text-[2.75rem] md:leading-[1.1]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-slate-500 dark:text-slate-400">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
