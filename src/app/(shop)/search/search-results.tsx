import { demoProducts } from '@/lib/demo-data';
import { CatalogGrid } from '../catalog/(components)/catalog-grid';

export async function SearchResults({ query }: { query: string }) {
  const normalized = query.toLowerCase();
  const results = demoProducts.filter((product) =>
    [product.title, product.collection, product.subtitle].some((field) =>
      field.toLowerCase().includes(normalized)
    )
  );

  if (!query) {
    return (
      <div className="rounded-2xl border border-rose/20 bg-background/70 p-6 text-sm text-charcoal/70">
        Start typing to explore our catalog.
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="rounded-2xl border border-rose/20 bg-background/70 p-6 text-sm text-charcoal/70">
        No pieces matched your search. Try different keywords or explore our collections.
      </div>
    );
  }

  return <CatalogGrid products={results} />;
}
