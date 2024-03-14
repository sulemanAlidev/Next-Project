import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function GET(req: NextRequest) {
  const users = await prisma.user.findMany();

  return NextResponse.json(users, { status: 200 });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  if (!body.name)
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  return NextResponse.json({ id: 1, name: body.name }, { status: 200 });
}
