import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest) {
  return NextResponse.json(
    [
      { id: 1, name: "Milk", price: 2.5 },
      { id: 2, name: "Bread", price: 3.5 },
    ],
    { status: 200 }
  );
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  if (!body.name)
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  if (!body.price)
    return NextResponse.json({ error: "Price is required" }, { status: 400 });
  return NextResponse.json(
    { id: 1, name: body.name, price: body.price },
    { status: 201 }
  );
}
