import { eq } from "drizzle-orm";
import { db } from "@/db";
import { siteStats } from "@/db/schema";
import { ThemeProvider } from "@/components/theme-provider";
import Sidebar from "@/components/sidebar";
import ThemeToggle from "@/components/theme-toggle";
import ScrollProgress from "@/components/scroll-progress";
import ScrollToTop from "@/components/scroll-to-top";
import Hero from "@/components/hero";
import About from "@/components/about";
import Services from "@/components/services";
import Portfolio from "@/components/portfolio";
import Research from "@/components/research";
import Honors from "@/components/honors";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export const dynamic = "force-dynamic";

async function getViewCount(): Promise<number> {
  try {
    const [row] = await db
      .select()
      .from(siteStats)
      .where(eq(siteStats.metric, "profile_views"));
    return row?.value ?? 0;
  } catch {
    return 0;
  }
}

export default async function Page() {
  const views = await getViewCount();

  return (
    <ThemeProvider>
      <ScrollProgress />
      <ThemeToggle />
      <Sidebar />

      <main className="relative lg:pl-72">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Research />
        <Honors />
        <Contact />
        <Footer initialViews={views} />
      </main>

      <ScrollToTop />
    </ThemeProvider>
  );
}
