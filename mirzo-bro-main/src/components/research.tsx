"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText, Sparkles } from "lucide-react";
import {
  PUBLICATIONS,
  RESEARCH_INTERESTS,
  RESEARCH_SKILLS,
} from "@/lib/data";
import SectionHeading from "./section-heading";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Research() {
  return (
    <section id="research" className="relative overflow-hidden py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading
          eyebrow="Research"
          title={
            <>
              Publications &amp; <span className="gradient-text">Inquiry</span>
            </>
          }
          description="I research what I build — two published papers across environmental prediction and medical AI."
        />

        {/* Interests */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease }}
          className="mb-10 flex flex-wrap items-center justify-center gap-2.5"
        >
          <span className="flex items-center gap-1.5 text-xs font-bold tracking-wider text-slate-400 uppercase dark:text-slate-500">
            <Sparkles size={13} />
            Research interests
          </span>
          {RESEARCH_INTERESTS.map((interest) => (
            <span
              key={interest}
              className="rounded-full border border-slate-200 bg-white/60 px-4 py-1.5 text-xs font-semibold text-slate-600 backdrop-blur dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-300"
            >
              {interest}
            </span>
          ))}
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-5">
          {/* Publications */}
          <div className="space-y-6 lg:col-span-3">
            {PUBLICATIONS.map((paper, i) => (
              <motion.article
                key={paper.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.12, ease }}
                className="group card-lift rounded-3xl border border-slate-200/80 bg-white/70 p-7 backdrop-blur dark:border-slate-800 dark:bg-slate-900/60"
              >
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3.5 py-1.5 text-[11px] font-bold tracking-wider text-white uppercase shadow-sm dark:bg-white dark:text-slate-900">
                    <FileText size={12} />
                    {paper.venue}
                  </span>
                </div>
                <h3 className="font-display mb-2.5 text-xl font-bold tracking-tight text-balance">
                  {paper.title}
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  {paper.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {paper.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-500 dark:bg-slate-800 dark:text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>

          {/* What I bring */}
          <motion.aside
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15, ease }}
            className="flex flex-col gap-6 lg:col-span-2"
          >
            <div className="rounded-3xl border border-slate-200/80 bg-white/70 p-7 backdrop-blur dark:border-slate-800 dark:bg-slate-900/60">
              <h3 className="font-display mb-5 text-lg font-bold">
                What I bring to a{" "}
                <span className="gradient-text">research team</span>
              </h3>
              <ul className="space-y-3.5">
                {RESEARCH_SKILLS.map((skill, i) => {
                  const Icon = skill.icon;
                  return (
                    <motion.li
                      key={skill.label}
                      initial={{ opacity: 0, x: 18 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: 0.2 + i * 0.07, ease }}
                      className="flex items-center gap-3 text-sm font-medium"
                    >
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                        <Icon size={16} />
                      </span>
                      {skill.label}
                    </motion.li>
                  );
                })}
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-200/80 bg-white/70 p-7 backdrop-blur dark:border-slate-800 dark:bg-slate-900/60">
              <h3 className="font-display mb-2 text-lg font-bold">
                Seeking research opportunities
              </h3>
              <p className="mb-5 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                Looking to join a lab as a research assistant — AI, data
                science, or environmental modeling. I work fast, document
                everything, and love reproducing hard papers.
              </p>
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group/btn inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-slate-700 active:scale-95 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
              >
                Get in touch
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover/btn:translate-x-1"
                />
              </button>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
