"use client";

import { motion } from "framer-motion";
import { INFO_ITEMS, SKILLS, TECH_STACK } from "@/lib/data";
import SectionHeading from "./section-heading";

const ease = [0.22, 1, 0.36, 1] as const;

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading
          eyebrow="About Me"
          title={
            <>
              Passionate Developer &amp;{" "}
              <span className="gradient-text">Problem Solver</span>
            </>
          }
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — bio + info cards */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
          >
            <p className="mb-5 text-base leading-relaxed text-slate-500 dark:text-slate-400">
              I&apos;m an incoming Computer Science student at the University of
              Toronto Mississauga —aiming for an AI specialization— and a Golden
              Medal high school graduate from Namangan, Uzbekistan. I don&apos;t
              just study AI; I build with it: air-quality forecasting,
              crop-disease detection, and deepfake defense.
            </p>
            <p className="mb-9 text-base leading-relaxed text-slate-500 dark:text-slate-400">
              Both of my parents are teachers — my mother taught me English from
              childhood, and my father, an Informatics teacher, put me in front
              of a computer before I could read. Growing up in a village, I
              learned to read the weather from clouds and wind; now I teach
              machines to do it with satellite data. My mission: practical AI
              for the real problems of Uzbekistan and beyond.
            </p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {INFO_ITEMS.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08, ease }}
                    className="card-lift rounded-2xl border border-slate-200/80 bg-white/70 p-4 backdrop-blur dark:border-slate-800 dark:bg-slate-900/60"
                  >
                    <div className="mb-1.5 flex items-center gap-2">
                      <span className="text-slate-500 dark:text-slate-400">
                        <Icon size={17} />
                      </span>
                      <span className="text-xs font-semibold tracking-wide text-slate-400 uppercase dark:text-slate-500">
                        {item.label}
                      </span>
                    </div>
                    <p className="text-sm font-semibold">{item.value}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right — skill bars */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
            className="rounded-3xl border border-slate-200/80 bg-white/70 p-7 backdrop-blur md:p-8 dark:border-slate-800 dark:bg-slate-900/60"
          >
            <h3 className="font-display mb-7 text-xl font-bold">
              Technical <span className="gradient-text">Proficiency</span>
            </h3>
            <div className="space-y-5">
              {SKILLS.map((skill, i) => (
                <div key={skill.name}>
                  <div className="mb-1.5 flex items-center justify-between text-sm">
                    <span className="font-semibold">{skill.name}</span>
                    <span className="font-mono text-xs text-slate-400 dark:text-slate-500">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{
                        duration: 1.1,
                        delay: 0.1 + i * 0.06,
                        ease,
                      }}
                      className="h-full rounded-full bg-slate-800 dark:bg-slate-200"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Tech marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative mt-16 overflow-hidden"
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent dark:from-slate-950" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent dark:from-slate-950" />
        <div className="animate-marquee flex w-max gap-3 py-2">
          {[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="rounded-full border border-slate-200/80 bg-white/80 px-5 py-2 text-sm font-medium whitespace-nowrap text-slate-600 backdrop-blur dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
