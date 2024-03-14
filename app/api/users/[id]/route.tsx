import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  return NextResponse.json(user, { status: 200 });
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: number } }
) {
  const body = await req.json();
  if (params.id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  if (!body.name)
    return NextResponse.json({ error: "Name is required" }, { status: 404 });
  return NextResponse.json({ id: 1, name: body.name }, { status: 200 });
}

export async function DELETE(
  req: NextRequest,
  { params: { id } }: { params: { id: number } }
) {
  const body = await req.json();
  if (id > 10)
    return NextResponse.json({ error: "User not exists" }, { status: 400 });
  return NextResponse.json({}, { status: 200 });
}
