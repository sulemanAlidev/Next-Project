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
  { params }: { params: { id: string } }
) {
  const body = await req.json();
  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  if (!body.name)
    return NextResponse.json({ error: "Name is required" }, { status: 404 });
  const updated_user = await prisma.user.update({
    where: { id: parseInt(params.id) },
    data: { email: body.email, name: body.name },
  });
  return NextResponse.json(updated_user, { status: 200 });
}

export async function DELETE(
  req: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  const body = await req.json();
  const user = await prisma.user.findUnique({
    where: { id: parseInt(id) },
  });
  if (!user)
    return NextResponse.json({ error: "User not exists" }, { status: 400 });
  const deletedUser = await prisma.user.delete({
    where: { id: parseInt(id) },
  });
  return NextResponse.json(deletedUser, { status: 200 });
}
