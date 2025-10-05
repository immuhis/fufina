import { Suspense } from 'react';
import { CatalogGrid } from './(components)/catalog-grid';
import { CatalogFilters } from './(components)/catalog-filters';
import { demoProducts } from '@/lib/demo-data';

export const metadata = {
  title: 'Catalog'
};

export default function CatalogPage({ searchParams }: { searchParams: Record<string, string | string[]> }) {
  const search = typeof searchParams.q === 'string' ? searchParams.q.toLowerCase() : '';
  const filtered = demoProducts.filter((product) =>
    product.title.toLowerCase().includes(search) || product.collection.toLowerCase().includes(search)
  );

  return (
    <div className="container-responsive grid gap-10 lg:grid-cols-[280px_1fr]">
      <aside className="space-y-6 rounded-2xl bg-white p-6 shadow-soft">
        <h1 className="section-title text-2xl">Catalog</h1>
        <CatalogFilters />
      </aside>
      <section className="space-y-6">
        <Suspense fallback={<p className="text-sm text-charcoal/60">Loading products...</p>}>
          {filtered.length > 0 ? (
            <CatalogGrid products={filtered} />
          ) : (
            <div className="rounded-2xl border border-rose/20 bg-background/70 p-8 text-sm text-charcoal/70">
              No products match your search. Try adjusting the filters or explore our highlighted collections.
            </div>
          )}
        </Suspense>
      </section>
    </div>
  );
}
