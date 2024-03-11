import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
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
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  return NextResponse.json(
    { id: 1, name: body.name, price: body.price },
    { status: 201 }
  );
}
