import { notFound } from 'next/navigation';
import { CatalogGrid } from '../catalog/(components)/catalog-grid';
import { demoProducts } from '@/lib/demo-data';

const collectionMap: Record<string, string> = {
  women: 'Women',
  kids: 'Kids',
  baby: 'Baby'
};

export function generateStaticParams() {
  return Object.keys(collectionMap).map((handle) => ({ handle }));
}

export default function CollectionPage({ params }: { params: { handle: string } }) {
  const collection = collectionMap[params.handle.toLowerCase()];
  if (!collection) {
    return notFound();
  }

  const products = demoProducts.filter((product) => product.collection === collection);

  return (
    <div className="container-responsive space-y-10">
      <header className="space-y-4 text-center">
        <h1 className="section-title">{collection} Collection</h1>
        <p className="mx-auto max-w-2xl text-sm text-charcoal/70">
          Discover curated looks for the {collection.toLowerCase()} in your life, crafted with couture-inspired
          finishing and gentle fabrics.
        </p>
      </header>
      <CatalogGrid products={products} />
    </div>
  );
}
