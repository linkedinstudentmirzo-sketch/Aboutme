import { NextResponse } from "next/server";
import { eq, sql } from "drizzle-orm";
import { db } from "@/db";
import { siteStats } from "@/db/schema";

const METRIC = "profile_views";

export async function GET() {
  try {
    const [row] = await db
      .select()
      .from(siteStats)
      .where(eq(siteStats.metric, METRIC));
    return NextResponse.json({ value: row?.value ?? 0 });
  } catch {
    return NextResponse.json({ value: 0 });
  }
}

export async function POST() {
  try {
    const [row] = await db
      .insert(siteStats)
      .values({ metric: METRIC, value: 1 })
      .onConflictDoUpdate({
        target: siteStats.metric,
        set: { value: sql`${siteStats.value} + 1` },
      })
      .returning({ value: siteStats.value });
    return NextResponse.json({ value: row?.value ?? 1 }, { status: 201 });
  } catch (err) {
    console.error("[views] increment failed:", err);
    return NextResponse.json({ value: 0 }, { status: 500 });
  }
}
