import { NextResponse } from 'next/server';

const reviews: { id: string; productId: string; rating: number; comment: string }[] = [];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const productId = searchParams.get('productId');
  const filtered = productId ? reviews.filter((review) => review.productId === productId) : reviews;
  return NextResponse.json({ reviews: filtered });
}

export async function POST(request: Request) {
  const body = await request.json();
  const review = {
    id: crypto.randomUUID(),
    productId: body.productId,
    rating: body.rating ?? 5,
    comment: body.comment ?? ''
  };
  reviews.push(review);
  return NextResponse.json(review, { status: 201 });
}
