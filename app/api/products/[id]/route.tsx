import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: number } }
) {
  const body = await req.json();
  const validation = schema.safeParse(body);
  if (params.id > 10)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 404 });
  return NextResponse.json(
    { id: 1, name: body.name, price: body.price },
    { status: 200 }
  );
}

export async function DELETE(
  req: NextRequest,
  { params: { id } }: { params: { id: number } }
) {
  const body = await req.json();
  if (id > 10)
    return NextResponse.json({ error: "Product not exists" }, { status: 400 });
  return NextResponse.json({}, { status: 200 });
}
