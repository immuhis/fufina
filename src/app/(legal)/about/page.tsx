export const metadata = { title: 'About Fufina Boutique' };

export default function AboutPage() {
  return (
    <div className="container-responsive space-y-6">
      <header className="space-y-3">
        <h1 className="section-title">Our story</h1>
        <p className="text-sm text-charcoal/70">
          Fufina Boutique celebrates the intimacy of motherhood and the elegance of European craftsmanship.
        </p>
      </header>
      <div className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-2xl bg-white p-8 shadow-soft">
          <h2 className="font-heading text-xl text-charcoal">Artistry rooted in family</h2>
          <p className="mt-3 text-sm text-charcoal/70">
            Founded by Elena Fidalgo in Lisbon, Fufina blends her couture background with a deep appreciation
            for family traditions. Each garment is designed to feel heirloom-worthy, using sustainably sourced
            fabrics and handcrafted embellishments.
          </p>
        </article>
        <article className="rounded-2xl bg-white p-8 shadow-soft">
          <h2 className="font-heading text-xl text-charcoal">Atelier craftsmanship</h2>
          <p className="mt-3 text-sm text-charcoal/70">
            Our atelier partners with European artisans who specialise in delicate smocking, fine embroidery,
            and bespoke tailoring. Collections are produced in limited runs to ensure quality and exclusivity.
          </p>
        </article>
      </div>
    </div>
  );
}
