import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammadmirzo Ismoilov — AI Developer & Researcher",
  description:
    "Portfolio of Muhammadmirzo Ismoilov — incoming Computer Science student at the University of Toronto Mississauga, published researcher, and AI developer building machine learning solutions for real-world problems in Uzbekistan and beyond.",
  keywords: [
    "AI Developer",
    "Machine Learning",
    "PyTorch",
    "Computer Vision",
    "Data Science",
    "Research",
    "University of Toronto",
    "Portfolio",
    "Uzbekistan",
  ],
  authors: [{ name: "Muhammadmirzo Ismoilov" }],
  openGraph: {
    title: "Muhammadmirzo Ismoilov — AI Developer & Researcher",
    description:
      "Incoming UofT CS student and published researcher building AI for real-world impact.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
  ],
};

const themeScript = `
(function () {
  try {
    var saved = localStorage.getItem("portfolio-theme");
    var dark = saved ? saved === "dark" : false;
    var root = document.documentElement;
    root.classList.toggle("dark", dark);
    root.classList.toggle("light", !dark);
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body className="bg-white text-slate-900 antialiased transition-colors duration-500 dark:bg-slate-950 dark:text-slate-100">
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {children}
      </body>
    </html>
  );
}
