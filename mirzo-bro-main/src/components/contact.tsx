"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { CONTACT_INFO } from "@/lib/data";
import SectionHeading from "./section-heading";
import { cn } from "@/lib/utils";

type Status = "idle" | "sending" | "sent" | "error";

const initialForm = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  const update =
    (key: keyof typeof initialForm) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setFeedback("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (res.ok && data.ok) {
        setStatus("sent");
        setFeedback(data.message ?? "Message sent successfully.");
        setForm(initialForm);
      } else {
        setStatus("error");
        const firstError = data.errors
          ? (Object.values(data.errors)[0] as string)
          : data.error;
        setFeedback(firstError ?? "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setFeedback("Network error — please check your connection and retry.");
    }
  }

  const inputClass = cn(
    "w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm font-medium outline-none transition-all duration-300",
    "placeholder:text-slate-400 focus:border-slate-500 focus:ring-4 focus:ring-slate-400/15",
    "dark:border-slate-700 dark:bg-slate-900/70 dark:placeholder:text-slate-500 dark:focus:border-slate-400",
  );

  return (
    <section id="contact" className="relative overflow-hidden py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading
          eyebrow="Get In Touch"
          title={
            <>
              Let&apos;s Work <span className="gradient-text">Together</span>
            </>
          }
          description="Open to research assistantships, AI collaborations, and ambitious projects — messages land directly in my database, and I read every single one."
        />

        <div className="grid gap-10 lg:grid-cols-5">
          {/* Info cards */}
          <div className="space-y-5 lg:col-span-2">
            {CONTACT_INFO.map((info, i) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={info.title}
                  href={info.link}
                  initial={{ opacity: 0, x: -28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.55,
                    delay: i * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="card-lift flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white/70 p-5 backdrop-blur hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-slate-600"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900">
                    <Icon size={20} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold tracking-wide text-slate-400 uppercase dark:text-slate-500">
                      {info.title}
                    </span>
                    <span className="block truncate text-sm font-semibold">
                      {info.value}
                    </span>
                  </span>
                </motion.a>
              );
            })}

            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-slate-200/80 bg-white/70 p-5 backdrop-blur dark:border-slate-800 dark:bg-slate-900/60"
            >
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>
                <span className="text-sm font-bold text-slate-700 dark:text-slate-200">
                  Open to research &amp; collaborations
                </span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                Seeking research assistant roles in AI, data science, and
                environmental modeling. I typically reply within 24 hours.
              </p>
            </motion.div>
          </div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl border border-slate-200/80 bg-white/70 p-7 backdrop-blur md:p-9 lg:col-span-3 dark:border-slate-800 dark:bg-slate-900/60"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-xs font-bold tracking-wide text-slate-500 uppercase dark:text-slate-400"
                >
                  Your Name
                </label>
                <input
                  id="contact-name"
                  required
                  value={form.name}
                  onChange={update("name")}
                  placeholder="John Doe"
                  className={inputClass}
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-xs font-bold tracking-wide text-slate-500 uppercase dark:text-slate-400"
                >
                  Your Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={update("email")}
                  placeholder="john@example.com"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="mt-5">
              <label
                htmlFor="contact-subject"
                className="mb-2 block text-xs font-bold tracking-wide text-slate-500 uppercase dark:text-slate-400"
              >
                Subject
              </label>
              <input
                id="contact-subject"
                required
                value={form.subject}
                onChange={update("subject")}
                placeholder="Project inquiry"
                className={inputClass}
              />
            </div>

            <div className="mt-5">
              <label
                htmlFor="contact-message"
                className="mb-2 block text-xs font-bold tracking-wide text-slate-500 uppercase dark:text-slate-400"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                required
                rows={5}
                value={form.message}
                onChange={update("message")}
                placeholder="Tell me about your project…"
                className={cn(inputClass, "resize-none")}
              />
            </div>

            <motion.button
              type="submit"
              disabled={status === "sending"}
              whileHover={{ scale: status === "sending" ? 1 : 1.02 }}
              whileTap={{ scale: status === "sending" ? 1 : 0.97 }}
              className="mt-7 flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 px-8 py-4 font-semibold text-white shadow-sm transition-colors hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
            >
              {status === "sending" ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </motion.button>

            <AnimatePresence>
              {(status === "sent" || status === "error") && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className={cn(
                    "mt-4 flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold",
                    status === "sent"
                      ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-300"
                      : "bg-rose-500/10 text-rose-600 dark:text-rose-300",
                  )}
                >
                  {status === "sent" ? (
                    <CheckCircle2 size={17} />
                  ) : (
                    <AlertCircle size={17} />
                  )}
                  {feedback}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
