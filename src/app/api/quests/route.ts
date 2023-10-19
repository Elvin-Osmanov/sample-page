import { NextRequest, NextResponse } from "next/server";
import quests from "./quests.json";

export async function GET(request: NextRequest): Promise<NextResponse> {
  return NextResponse.json(quests);
}
