import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const params = req.nextUrl.searchParams;
  const id = params.get("id");

  return NextResponse.json({ 
    id: process.env[id || "DEFAULT_ID"],
  });
};