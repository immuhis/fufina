export const metadata = { title: 'Account · Addresses' };

const addresses = [
  {
    id: 'home',
    name: 'Home',
    recipient: 'Elena Fidalgo',
    lines: ['Rua das Flores 21', 'Lisbon, Portugal'],
    phone: '+351 910 000 123',
    isDefault: true
  },
  {
    id: 'studio',
    name: 'Atelier',
    recipient: 'Fufina Atelier',
    lines: ['Av. da Liberdade 185', 'Lisbon, Portugal'],
    phone: '+351 210 123 456',
    isDefault: false
  }
];

export default function AccountAddressesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="font-heading text-2xl text-charcoal">Saved addresses</h2>
          <p className="text-sm text-charcoal/60">Manage shipping and billing addresses.</p>
        </div>
        <button type="button" className="btn-primary">
          Add address
        </button>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {addresses.map((address) => (
          <article key={address.id} className="rounded-2xl bg-white p-6 shadow-soft">
            <div className="flex items-center justify-between">
              <h3 className="font-heading text-lg text-charcoal">{address.name}</h3>
              {address.isDefault ? (
                <span className="rounded-full bg-rose/10 px-3 py-1 text-xs font-semibold text-rose">Default</span>
              ) : null}
            </div>
            <div className="mt-3 space-y-1 text-sm text-charcoal/70">
              <p className="font-medium text-charcoal">{address.recipient}</p>
              {address.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <p>{address.phone}</p>
            </div>
            <div className="mt-4 flex gap-3 text-xs font-semibold text-rose">
              <button type="button">Edit</button>
              <button type="button">Delete</button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
