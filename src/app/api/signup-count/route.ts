import { NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase";

export const revalidate = 60;

export async function GET() {
  const client = createServerClient();
  const { count, error } = await client
    .from("waitlist")
    .select("*", { count: "exact", head: true });

  if (error) {
    return NextResponse.json({ count: 0 });
  }

  return NextResponse.json({ count: count ?? 0 });
}
