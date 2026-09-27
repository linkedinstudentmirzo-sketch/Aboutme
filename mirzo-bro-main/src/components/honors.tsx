"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { AWARDS, LEADERSHIP } from "@/lib/data";
import SectionHeading from "./section-heading";

export default function Honors() {
  return (
    <section id="honors" className="relative py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading
          eyebrow="Recognition"
          title={
            <>
              Honors &amp; <span className="gradient-text">Achievements</span>
            </>
          }
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {AWARDS.map((award, i) => {
            const Icon = award.icon;
            return (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.55,
                  delay: (i % 5) * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group card-lift rounded-2xl border border-slate-200/80 bg-white/70 p-5 backdrop-blur dark:border-slate-800 dark:bg-slate-900/60"
              >
                <span className="mb-4 inline-grid h-11 w-11 place-items-center rounded-xl bg-slate-100 text-slate-600 transition-colors duration-300 group-hover:bg-slate-900 group-hover:text-white dark:bg-slate-800 dark:text-slate-300 dark:group-hover:bg-white dark:group-hover:text-slate-900">
                  <Icon size={20} />
                </span>
                <h3 className="text-sm leading-snug font-bold">
                  {award.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                  {award.detail}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Leadership */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col items-center gap-4 rounded-3xl border border-slate-200/80 bg-white/70 p-7 backdrop-blur md:flex-row md:gap-6 dark:border-slate-800 dark:bg-slate-900/60"
        >
          <div className="flex items-center gap-2.5 text-sm font-bold whitespace-nowrap">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900">
              <Users size={18} />
            </span>
            Leadership &amp; Community
          </div>
          <div className="flex flex-wrap justify-center gap-2 md:justify-start">
            {LEADERSHIP.map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-xs font-semibold text-slate-600 dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-300"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
