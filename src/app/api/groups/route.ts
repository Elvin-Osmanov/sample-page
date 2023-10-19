import { NextRequest, NextResponse } from "next/server";
import groups from "./groups.json";

export async function GET(request: NextRequest): Promise<NextResponse> {
  return NextResponse.json(groups);
}
