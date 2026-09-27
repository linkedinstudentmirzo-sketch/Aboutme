import { NextResponse } from "next/server";
import { db } from "@/db";
import { messages } from "@/db/schema";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function sanitize(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  const name = sanitize(body.name);
  const email = sanitize(body.email);
  const subject = sanitize(body.subject);
  const message = sanitize(body.message);

  const errors: Record<string, string> = {};
  if (name.length < 2 || name.length > 120)
    errors.name = "Please enter your name (2–120 characters).";
  if (!EMAIL_RE.test(email) || email.length > 180)
    errors.email = "Please enter a valid email address.";
  if (subject.length < 3 || subject.length > 200)
    errors.subject = "Subject must be 3–200 characters.";
  if (message.length < 10 || message.length > 4000)
    errors.message = "Message must be 10–4000 characters.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  try {
    await db.insert(messages).values({ name, email, subject, message });
    return NextResponse.json(
      { ok: true, message: "Message received. I'll get back to you soon!" },
      { status: 201 },
    );
  } catch (err) {
    console.error("[contact] insert failed:", err);
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again later." },
      { status: 500 },
    );
  }
}
