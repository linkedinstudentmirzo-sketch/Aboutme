"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, FolderGit2 } from "lucide-react";
import {
  CATEGORY_LABELS,
  PROJECT_FILTERS,
  type ProjectCategory,
} from "@/lib/data";
import { GithubIcon } from "./social-icons";
import { cn } from "@/lib/utils";
import type { Project } from "@/db/schema";

export default function PortfolioGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<ProjectCategory>("all");

  const visible =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div>
      {/* Filters */}
      <div className="mb-12 flex flex-wrap items-center justify-center gap-2.5">
        {PROJECT_FILTERS.map((f) => {
          const active = filter === f.value;
          return (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={cn(
                "relative rounded-full px-5 py-2 text-sm font-semibold transition-colors duration-300",
                active
                  ? "text-white dark:text-slate-900"
                  : "border border-slate-200 bg-white/70 text-slate-500 hover:border-slate-400 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-400 dark:hover:border-slate-500 dark:hover:text-white",
              )}
            >
              {active && (
                <motion.span
                  layoutId="portfolio-filter-pill"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  className="absolute inset-0 rounded-full bg-slate-900 shadow-sm dark:bg-white"
                />
              )}
              <span className="relative z-10">{f.label}</span>
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <motion.div layout className="grid gap-7 sm:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.article
              layout
              key={project.slug}
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="group card-lift overflow-hidden rounded-3xl border border-slate-200/80 bg-white/70 backdrop-blur hover:shadow-xl hover:shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:shadow-black/20"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Category badge */}
                <span className="absolute top-4 left-4 rounded-full border border-white/15 bg-slate-950/55 px-3 py-1 text-[10px] font-bold tracking-widest text-slate-200 uppercase backdrop-blur-md">
                  {CATEGORY_LABELS[project.category] ?? project.category}
                </span>

                {/* Status badge */}
                {project.status === "in-progress" && (
                  <span className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full border border-white/15 bg-slate-950/55 px-3 py-1 text-[10px] font-bold tracking-widest text-slate-200 uppercase backdrop-blur-md">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute h-full w-full animate-ping rounded-full bg-white opacity-70" />
                      <span className="relative h-1.5 w-1.5 rounded-full bg-white" />
                    </span>
                    Building
                  </span>
                )}

                {/* Hover links */}
                <div className="absolute right-4 bottom-4 flex translate-y-3 gap-2.5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <a
                    href={project.liveUrl}
                    aria-label={`Open ${project.title} live demo`}
                    className="grid h-10 w-10 place-items-center rounded-xl bg-white/15 text-white backdrop-blur-md transition-colors hover:bg-white hover:text-slate-900"
                  >
                    <ExternalLink size={17} />
                  </a>
                  <a
                    href={project.githubUrl}
                    aria-label={`View ${project.title} source on GitHub`}
                    className="grid h-10 w-10 place-items-center rounded-xl bg-white/15 text-white backdrop-blur-md transition-colors hover:bg-white hover:text-slate-900"
                  >
                    <GithubIcon size={17} />
                  </a>
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                <h3 className="font-display mb-2 text-lg font-bold decoration-slate-300 underline-offset-4 group-hover:underline dark:decoration-slate-600">
                  {project.title}
                </h3>
                <p className="mb-5 line-clamp-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-500 dark:bg-slate-800 dark:text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {visible.length === 0 && (
        <div className="flex flex-col items-center gap-3 py-16 text-slate-400">
          <FolderGit2 size={36} />
          <p className="text-sm font-medium">
            No projects in this category yet — check back soon.
          </p>
        </div>
      )}
    </div>
  );
}
