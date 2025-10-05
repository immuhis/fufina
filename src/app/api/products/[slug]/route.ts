import { NextResponse } from 'next/server';
import { demoProducts } from '@/lib/demo-data';

export async function GET(_request: Request, { params }: { params: { slug: string } }) {
  const product = demoProducts.find((item) => item.slug === params.slug);
  if (!product) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }
  return NextResponse.json(product);
}
