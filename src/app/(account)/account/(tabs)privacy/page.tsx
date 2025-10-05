export const metadata = { title: 'Account · Privacy Preferences' };

export default function AccountPrivacyPage() {
  return (
    <div className="space-y-6 rounded-2xl bg-white p-8 shadow-soft">
      <h2 className="font-heading text-2xl text-charcoal">Privacy preferences</h2>
      <p className="text-sm text-charcoal/60">
        Control how we communicate with you and manage your marketing preferences.
      </p>
      <form className="space-y-4 text-sm text-charcoal/80">
        <label className="flex items-start gap-3 rounded-xl border border-rose/20 bg-background/60 p-4">
          <input type="checkbox" defaultChecked className="mt-1 rounded border-rose/30 text-rose" />
          <span>
            Receive collection previews and personalised lookbooks via email.
          </span>
        </label>
        <label className="flex items-start gap-3 rounded-xl border border-rose/20 bg-background/60 p-4">
          <input type="checkbox" className="mt-1 rounded border-rose/30 text-rose" />
          <span>Allow SMS notifications for delivery updates.</span>
        </label>
        <label className="flex items-start gap-3 rounded-xl border border-rose/20 bg-background/60 p-4">
          <input type="checkbox" className="mt-1 rounded border-rose/30 text-rose" />
          <span>Share anonymous browsing data to enhance recommendations.</span>
        </label>
      </form>
      <button type="button" className="btn-primary w-full sm:w-fit">
        Save preferences
      </button>
    </div>
  );
}
