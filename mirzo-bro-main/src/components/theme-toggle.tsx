"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.9, rotate: 15 }}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="fixed top-5 right-5 z-[110] grid h-11 w-11 place-items-center rounded-xl border border-slate-200/80 bg-white/80 text-slate-500 shadow-lg shadow-slate-900/5 backdrop-blur-xl transition-colors duration-300 hover:text-slate-900 dark:border-slate-700/60 dark:bg-slate-900/80 dark:text-slate-400 dark:hover:text-white"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? "sun" : "moon"}
          initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
          transition={{ duration: 0.25 }}
        >
          {isDark ? <Sun size={19} /> : <Moon size={19} />}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}
