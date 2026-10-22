import { NextResponse } from "next/server";
import { validateContact, type ContactFields } from "@/lib/contact";

const hits = new Map<string, number[]>();
const windowMs = 10 * 60 * 1000;
const maxHits = 5;

function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((time) => now - time < windowMs);
  if (recent.length >= maxHits) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (limited(ip)) {
    return NextResponse.json(
      { delivered: false, reason: "rate_limited" },
      { status: 429, headers: { "Cache-Control": "no-store" } },
    );
  }

  let body: Partial<ContactFields> & { vefur?: string };
  try {
    body = (await request.json()) as Partial<ContactFields> & { vefur?: string };
  } catch {
    return NextResponse.json(
      { delivered: false, reason: "invalid" },
      { status: 400, headers: { "Cache-Control": "no-store" } },
    );
  }

  if (typeof body.vefur === "string" && body.vefur.trim().length > 0) {
    return NextResponse.json(
      { delivered: false, reason: "rejected" },
      { status: 400, headers: { "Cache-Control": "no-store" } },
    );
  }

  const fields: ContactFields = {
    name: String(body.name ?? ""),
    email: String(body.email ?? ""),
    phone: String(body.phone ?? ""),
    category: String(body.category ?? ""),
    message: String(body.message ?? ""),
  };
  const errors = validateContact(fields);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { delivered: false, reason: "validation", errors },
      { status: 400, headers: { "Cache-Control": "no-store" } },
    );
  }

  const webhook = process.env.CONTACT_WEBHOOK_URL?.trim();
  if (!webhook) {
    return NextResponse.json(
      { delivered: false, reason: "unconfigured" },
      { status: 503, headers: { "Cache-Control": "no-store" } },
    );
  }

  try {
    const response = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: fields.name.trim(),
        email: fields.email.trim(),
        phone: fields.phone.trim(),
        category: fields.category,
        message: fields.message.trim(),
        source: "driveon-vefur",
      }),
      signal: AbortSignal.timeout(8000),
      redirect: "error",
    });

    if (!response.ok) {
      return NextResponse.json(
        { delivered: false, reason: "delivery_failed" },
        { status: 502, headers: { "Cache-Control": "no-store" } },
      );
    }
  } catch {
    return NextResponse.json(
      { delivered: false, reason: "delivery_failed" },
      { status: 502, headers: { "Cache-Control": "no-store" } },
    );
  }

  return NextResponse.json(
    { delivered: true },
    { status: 200, headers: { "Cache-Control": "no-store" } },
  );
}
