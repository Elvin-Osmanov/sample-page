import { NextRequest, NextResponse } from "next/server";
import posts from "./posts.json";

export async function GET(request: NextRequest): Promise<NextResponse> {
  return NextResponse.json(posts);
}
