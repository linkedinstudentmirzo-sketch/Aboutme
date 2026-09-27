"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { HERO_STATS, IDENTITY } from "@/lib/data";
import { SocialIcon } from "./social-icons";

/* ------------------------------------------------------------------ */
/*  Typewriter                                                         */
/* ------------------------------------------------------------------ */
function useTypewriter(words: string[]) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === word) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
    } else {
      timeout = setTimeout(
        () => setText(word.substring(0, text.length + (deleting ? -1 : 1))),
        deleting ? 45 : 95,
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words]);

  return text;
}

/* ------------------------------------------------------------------ */
/*  Animated counter                                                   */
/* ------------------------------------------------------------------ */
function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const start = performance.now();
    let raf: number;

    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 4);
      setDisplay(Math.round(eased * value));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero                                                               */
/* ------------------------------------------------------------------ */
export default function Hero() {
  const typed = useTypewriter(IDENTITY.roles);

  return (
    <section
      id="home"
      className="noise relative flex min-h-screen items-center justify-center overflow-hidden scroll-mt-0"
    >
      {/* Backdrop — quiet grid + faint neutral light */}
      <div className="grid-pattern absolute inset-0" />
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(148,163,184,0.14),transparent_70%)] dark:bg-[radial-gradient(60%_50%_at_50%_0%,rgba(148,163,184,0.07),transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-2xl px-6 pt-24 pb-16 text-center lg:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/60 px-4 py-1.5 text-xs font-semibold tracking-[0.16em] text-slate-500 uppercase backdrop-blur dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Welcome to my portfolio
          </span>

          <h1 className="font-display text-[2.6rem] leading-[1.05] font-bold tracking-tight text-balance md:text-6xl">
            Hi, I&apos;m{" "}
            <span className="gradient-text">
              {IDENTITY.firstName} {IDENTITY.lastName}
            </span>
          </h1>

          <div className="mt-5 flex h-9 items-center justify-center text-xl font-medium text-slate-500 md:text-2xl dark:text-slate-400">
            <span>{typed}</span>
            <span className="animate-blink ml-1 text-slate-400 dark:text-slate-500">
              |
            </span>
          </div>

          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-slate-500 md:text-lg dark:text-slate-400">
            {IDENTITY.tagline}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <motion.a
              href="#portfolio"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("portfolio")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 rounded-2xl bg-slate-900 px-8 py-3.5 font-semibold text-white shadow-sm transition-colors hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
            >
              View My Work
              <ArrowDown size={18} />
            </motion.a>

            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 rounded-2xl border border-slate-300 px-8 py-3.5 font-semibold text-slate-600 transition-colors hover:border-slate-500 hover:text-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-500 dark:hover:text-white"
            >
              <Mail size={18} />
              Get In Touch
            </motion.a>
          </div>

          {/* Socials — mobile/quick access */}
          <div className="mt-8 flex items-center justify-center gap-3 lg:hidden">
            {IDENTITY.socials.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white/70 text-slate-500 transition-colors hover:border-slate-400 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-400 dark:hover:border-slate-500 dark:hover:text-white"
              >
                <SocialIcon type={link.key} size={17} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 grid grid-cols-3 gap-6 md:gap-10"
        >
          {HERO_STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display gradient-text text-3xl font-bold md:text-4xl">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-1.5 text-[11px] font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 text-slate-300 md:block dark:text-slate-600"
      >
        <ArrowDown size={20} />
      </motion.div>
    </section>
  );
}
