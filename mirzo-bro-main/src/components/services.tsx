"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/lib/data";
import SectionHeading from "./section-heading";

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading
          eyebrow="What I Do"
          title={
            <>
              Areas of <span className="gradient-text">Focus</span>
            </>
          }
          description="From machine learning models to shipped products — the disciplines I work across."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: (i % 3) * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group card-lift rounded-3xl border border-slate-200/80 bg-white/70 p-7 backdrop-blur hover:border-slate-300 hover:shadow-xl hover:shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-slate-700 dark:hover:shadow-black/20"
              >
                <div className="mb-5 inline-grid h-14 w-14 place-items-center rounded-2xl bg-slate-900 text-white transition-transform duration-500 group-hover:scale-105 dark:bg-white dark:text-slate-900">
                  <Icon size={26} />
                </div>

                <h3 className="font-display mb-2.5 text-lg font-bold">
                  {service.title}
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-500 dark:bg-slate-800 dark:text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
