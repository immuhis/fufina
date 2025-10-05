export const metadata = { title: 'Account · Data & GDPR' };

export default function AccountGdprPage() {
  return (
    <div className="space-y-6 rounded-2xl bg-white p-8 shadow-soft">
      <h2 className="font-heading text-2xl text-charcoal">Data & GDPR</h2>
      <p className="text-sm text-charcoal/60">
        Exercise your data rights. Export your personal data or request account deletion in compliance with GDPR.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-3 rounded-2xl border border-rose/20 bg-background/60 p-6">
          <h3 className="font-heading text-lg text-charcoal">Data export</h3>
          <p className="text-sm text-charcoal/70">Receive a full export of your profile, orders, and preferences.</p>
          <button type="button" className="btn-outline w-full">
            Request export
          </button>
        </div>
        <div className="space-y-3 rounded-2xl border border-rose/20 bg-background/60 p-6">
          <h3 className="font-heading text-lg text-charcoal">Delete account</h3>
          <p className="text-sm text-charcoal/70">
            Permanently remove your data. This action cannot be undone.
          </p>
          <button type="button" className="btn-primary w-full">
            Request deletion
          </button>
        </div>
      </div>
    </div>
  );
}
