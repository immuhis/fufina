const highlights = [
  'Hand-finished in our Lisbon atelier with couture techniques.',
  'Fabric sourced from certified mills with low environmental impact.',
  'Inclusive sizing with complimentary alterations on request.',
  'Comes with branded garment bag and gift-ready packaging.'
];

export function ProductHighlights() {
  return (
    <section className="rounded-2xl border border-rose/20 bg-background/70 p-6">
      <h2 className="font-heading text-lg text-charcoal">Highlights</h2>
      <ul className="mt-4 space-y-3 text-sm text-charcoal/70">
        {highlights.map((highlight) => (
          <li key={highlight} className="flex items-start gap-2">
            <span aria-hidden className="mt-1 inline-flex h-2 w-2 rounded-full bg-rose" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
