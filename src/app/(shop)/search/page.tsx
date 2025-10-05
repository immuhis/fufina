import { Suspense } from 'react';
import { SearchResults } from './search-results';

export const metadata = {
  title: 'Search'
};

export default function SearchPage({ searchParams }: { searchParams: Record<string, string | string[]> }) {
  const query = typeof searchParams.q === 'string' ? searchParams.q : '';
  return (
    <div className="container-responsive space-y-6">
      <div className="space-y-3">
        <h1 className="section-title text-3xl">Search</h1>
        <p className="text-sm text-charcoal/70">
          Discover products across all collections. Use the filters for the most relevant matches.
        </p>
      </div>
      <Suspense fallback={<p className="text-sm text-charcoal/60">Searching...</p>}>
        <SearchResults query={query} />
      </Suspense>
    </div>
  );
}
