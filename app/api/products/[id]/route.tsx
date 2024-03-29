import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: number } }
) {
  const body = await req.json();
  const validation = schema.safeParse(body);
  const product = await prisma.product.findUnique({ where: { id: params.id } });

  if (!product)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 404 });
  return NextResponse.json(product, { status: 200 });
}

export async function DELETE(
  req: NextRequest,
  { params: { id } }: { params: { id: number } }
) {
  const body = await req.json();
  const product = await prisma.product.findUnique({ where: { id: id } });
  if (!product)
    return NextResponse.json({ error: "Product not exists" }, { status: 400 });
  return NextResponse.json(product);
}
