import { NextResponse } from 'next/server';
import { demoProducts } from '@/lib/demo-data';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q')?.toLowerCase() ?? '';
  const collection = searchParams.get('collection');

  const results = demoProducts.filter((product) => {
    const matchesQuery = query
      ? [product.title, product.subtitle, product.collection].some((field) =>
          field.toLowerCase().includes(query)
        )
      : true;
    const matchesCollection = collection ? product.collection.toLowerCase() === collection : true;
    return matchesQuery && matchesCollection;
  });

  return NextResponse.json({ products: results });
}
