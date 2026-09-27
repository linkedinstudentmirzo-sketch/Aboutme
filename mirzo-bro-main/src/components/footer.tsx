"use client";

import { useEffect, useState } from "react";
import { Eye, Heart } from "lucide-react";
import { IDENTITY } from "@/lib/data";

export default function Footer({ initialViews }: { initialViews: number }) {
  const [views, setViews] = useState(initialViews);

  useEffect(() => {
    // Count one profile view per browser session.
    if (sessionStorage.getItem("profile-view-counted")) return;
    sessionStorage.setItem("profile-view-counted", "1");

    fetch("/api/views", { method: "POST" })
      .then((r) => r.json())
      .then((d) => {
        if (typeof d.value === "number" && d.value > 0) setViews(d.value);
      })
      .catch(() => {
        /* non-critical */
      });
  }, []);

  return (
    <footer className="border-t border-slate-200/70 py-10 dark:border-slate-800/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-center md:flex-row md:px-10 md:text-left">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} {IDENTITY.firstName} {IDENTITY.lastName}.
          Crafted with{" "}
          <Heart
            size={13}
            className="inline -translate-y-px fill-slate-400 text-slate-400"
          />{" "}
          and Next.js
        </p>

        <div className="flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/70 px-4 py-1.5 text-xs font-semibold text-slate-500 backdrop-blur dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-400">
          <Eye size={14} />
          <span className="font-mono tabular-nums">
            {views.toLocaleString()}
          </span>
          profile views
        </div>
      </div>
    </footer>
  );
}
