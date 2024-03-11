import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: number } }
) {
  const body = await req.json();
  if (params.id > 10)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  if (!body.name)
    return NextResponse.json({ error: "Name is required" }, { status: 404 });
  if (!body.price)
    return NextResponse.json({ error: "Price is required" }, { status: 404 });
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
