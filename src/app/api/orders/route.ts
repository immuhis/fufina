import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  const orderNumber = `FUF-${Math.floor(Math.random() * 1000000)}`;
  return NextResponse.json({ orderNumber, status: 'pending', received: data });
}

export async function GET() {
  return NextResponse.json({ orders: [] });
}
