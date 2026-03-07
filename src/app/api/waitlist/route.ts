import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email, name, stores, wants_beta, referral_source } = body;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "invalid_email" }, { status: 400 });
  }

  const { error } = await supabase.from("waitlist").insert({
    email: email.trim().toLowerCase(),
    name: name?.trim() || null,
    stores: stores?.length ? stores : null,
    wants_beta: wants_beta ?? false,
    referral_source: referral_source || null,
  });

  if (error) {
    if (error.code === "23505") {
      return NextResponse.json({ error: "already_registered" }, { status: 409 });
    }
    return NextResponse.json({ error: "server_error" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
