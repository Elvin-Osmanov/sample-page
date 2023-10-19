import { NextRequest, NextResponse } from "next/server";
import badges from "./badges.json";

export async function GET(request: NextRequest): Promise<NextResponse> {
  return NextResponse.json(badges);
}
