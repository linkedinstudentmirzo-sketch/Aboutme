import {
  pgTable,
  serial,
  text,
  varchar,
  integer,
  boolean,
  timestamp,
  jsonb,
  bigint,
} from "drizzle-orm/pg-core";

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 120 }).notNull(),
  slug: varchar("slug", { length: 140 }).notNull().unique(),
  description: text("description").notNull(),
  image: varchar("image", { length: 255 }).notNull(),
  category: varchar("category", { length: 24 }).notNull().default("ml"),
  status: varchar("status", { length: 20 }).notNull().default("completed"),
  tags: jsonb("tags").$type<string[]>().notNull().default([]),
  liveUrl: varchar("live_url", { length: 255 }).notNull().default("#"),
  githubUrl: varchar("github_url", { length: 255 }).notNull().default("#"),
  sortOrder: integer("sort_order").notNull().default(0),
  published: boolean("published").notNull().default(true),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const messages = pgTable("messages", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 120 }).notNull(),
  email: varchar("email", { length: 180 }).notNull(),
  subject: varchar("subject", { length: 200 }).notNull(),
  message: text("message").notNull(),
  read: boolean("read").notNull().default(false),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const siteStats = pgTable("site_stats", {
  id: serial("id").primaryKey(),
  metric: varchar("metric", { length: 60 }).notNull().unique(),
  value: bigint("value", { mode: "number" }).notNull().default(0),
});

export type Project = typeof projects.$inferSelect;
export type Message = typeof messages.$inferSelect;
export type SiteStat = typeof siteStats.$inferSelect;
