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
  const user = await prisma.user.findUnique({
    where: { email: body.email },
  });
  if (user)
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  const new_user = await prisma.user.create({
    data: { name: body.name, email: body.email },
  });
  return NextResponse.json(new_user, { status: 200 });
}
