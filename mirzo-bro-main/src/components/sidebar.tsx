"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { IDENTITY, NAV_ITEMS } from "@/lib/data";
import { SocialIcon } from "./social-icons";
import { cn } from "@/lib/utils";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const isScrolling = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrolling.current) return;
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 },
    );

    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (targetId: string) => {
    setActiveSection(targetId);
    setIsOpen(false);
    isScrolling.current = true;
    const el = document.getElementById(targetId);
    if (el) {
      const top = targetId === "home" ? 0 : el.offsetTop;
      window.scrollTo({ top, behavior: "smooth" });
    }
    window.setTimeout(() => {
      isScrolling.current = false;
    }, 900);
  };

  return (
    <>
      {/* Mobile hamburger */}
      <button
        onClick={() => setIsOpen((v) => !v)}
        aria-label="Toggle navigation menu"
        className="fixed top-5 left-5 z-[115] grid h-11 w-11 place-items-center rounded-xl border border-slate-200/80 bg-white/80 text-slate-600 shadow-lg backdrop-blur-xl transition-colors lg:hidden dark:border-slate-700/60 dark:bg-slate-900/80 dark:text-slate-300"
      >
        {isOpen ? <X size={21} /> : <Menu size={21} />}
      </button>

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-[105] flex w-72 flex-col items-center overflow-y-auto border-r border-slate-200/70 bg-white/85 px-6 py-8 shadow-2xl shadow-slate-900/5 backdrop-blur-2xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:translate-x-0 dark:border-slate-800/70 dark:bg-slate-900/85",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        {/* Profile */}
        <div className="mb-6 w-full text-center">
          <div className="group relative mx-auto mb-4 w-28">
            <div className="relative rounded-full bg-white p-1 ring-1 ring-slate-200 transition-colors duration-300 group-hover:ring-slate-300 dark:bg-slate-900 dark:ring-slate-700 dark:group-hover:ring-slate-600">
              <Image
                src="/images/profile.jpg"
                alt={`${IDENTITY.firstName} ${IDENTITY.lastName} — ${IDENTITY.role}`}
                width={112}
                height={112}
                priority
                className="h-28 w-28 rounded-full object-cover object-[50%_22%]"
              />
            </div>
            <span className="absolute right-1 bottom-1 h-4 w-4 rounded-full border-2 border-white bg-emerald-500 dark:border-slate-900" />
          </div>
          <h1 className="font-display text-xl font-bold tracking-tight">
            {IDENTITY.firstName}
          </h1>
          <h2 className="font-display text-base font-semibold text-slate-500 dark:text-slate-400">
            {IDENTITY.lastName}
          </h2>
          <span className="mt-2.5 inline-block rounded-full bg-slate-100 px-3 py-1 text-[10px] font-bold tracking-[0.14em] text-slate-600 uppercase dark:bg-slate-800 dark:text-slate-300">
            {IDENTITY.role}
          </span>
        </div>

        {/* Socials */}
        <div className="mb-6 flex gap-3">
          {IDENTITY.socials.map((link) => (
            <motion.a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.94 }}
              className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white text-slate-500 transition-colors duration-300 hover:border-slate-400 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-400 dark:hover:border-slate-500 dark:hover:text-white"
            >
              <SocialIcon type={link.key} size={17} />
            </motion.a>
          ))}
        </div>

        <div className="mb-6 h-px w-full bg-slate-200/80 dark:bg-slate-800" />

        {/* Navigation */}
        <nav className="w-full flex-1 space-y-1.5">
          {NAV_ITEMS.map((item) => {
            const active = activeSection === item.id;
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "group relative flex w-full items-center gap-3.5 rounded-2xl px-4 py-3.5 text-left font-medium transition-colors duration-300",
                  active
                    ? "text-white dark:text-slate-900"
                    : "text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/70 dark:hover:text-white",
                )}
              >
                {active && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 rounded-2xl bg-slate-900 shadow-sm dark:bg-white"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <Icon
                  size={19}
                  className={cn(
                    "relative z-10 transition-colors",
                    active
                      ? "text-white dark:text-slate-900"
                      : "text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300",
                  )}
                />
                <span className="relative z-10">{item.name}</span>
              </button>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="mt-6 w-full border-t border-slate-200/80 pt-6 text-center dark:border-slate-800">
          <p className="text-[10px] font-medium text-slate-400 dark:text-slate-500">
            © {new Date().getFullYear()} {IDENTITY.firstName} {IDENTITY.lastName}
          </p>
          <p className="mt-1 text-[10px] text-slate-400/80 dark:text-slate-600">
            Crafted with Next.js &amp; PostgreSQL
          </p>
        </div>
      </aside>

      {/* Mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[100] bg-slate-950/50 backdrop-blur-sm lg:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}
