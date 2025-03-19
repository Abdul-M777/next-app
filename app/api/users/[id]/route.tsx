import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

interface Props {
  params: { id: number };
}

export function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  if (params.id > 10) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  } else {
    return NextResponse.json({ id: params.id, name: "John Doe" });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  if (params.id > 10) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json({ id: params.id, name: body.name }, { status: 200 });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  if (params.id > 10) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json({ id: params.id, deleted: true }, { status: 200 });
}
