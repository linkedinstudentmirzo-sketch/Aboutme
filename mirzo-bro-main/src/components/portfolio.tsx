import { asc, eq } from "drizzle-orm";
import { db } from "@/db";
import { projects, type Project } from "@/db/schema";
import SectionHeading from "./section-heading";
import PortfolioGrid from "./portfolio-grid";

export const revalidate = 60;

async function getProjects(): Promise<Project[]> {
  try {
    return await db
      .select()
      .from(projects)
      .where(eq(projects.published, true))
      .orderBy(asc(projects.sortOrder));
  } catch {
    // Database unavailable — render section without crashing the page.
    return [];
  }
}

export default async function Portfolio() {
  const list = await getProjects();

  return (
    <section id="portfolio" className="relative py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading
          eyebrow="My Work"
          title={
            <>
              Featured <span className="gradient-text">Projects</span>
            </>
          }
          description="A selection of projects served live from a PostgreSQL database — the same stack I build products with."
        />
        {list.length > 0 ? (
          <PortfolioGrid projects={list} />
        ) : (
          <p className="py-14 text-center text-sm text-slate-400">
            Projects are loading… please refresh in a moment.
          </p>
        )}
      </div>
    </section>
  );
}
