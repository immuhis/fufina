export const metadata = { title: 'Privacy Policy' };

export default function PrivacyPage() {
  return (
    <div className="container-responsive space-y-6">
      <header>
        <h1 className="section-title">Privacy policy</h1>
        <p className="text-sm text-charcoal/70">
          We are committed to safeguarding your personal data in accordance with GDPR and global privacy laws.
        </p>
      </header>
      <div className="space-y-4 rounded-2xl bg-white p-8 shadow-soft text-sm text-charcoal/70">
        <section className="space-y-2">
          <h2 className="font-heading text-xl text-charcoal">Data collection</h2>
          <p>
            We collect information you provide during account creation, checkout, and newsletter sign-up. Data
            is stored securely on encrypted servers.
          </p>
        </section>
        <section className="space-y-2">
          <h2 className="font-heading text-xl text-charcoal">Usage</h2>
          <p>
            Personal data is used to fulfil orders, provide customer support, and send marketing communications
            when consented. We do not sell your data.
          </p>
        </section>
        <section className="space-y-2">
          <h2 className="font-heading text-xl text-charcoal">Your rights</h2>
          <p>
            You may request data access, corrections, deletion, or portability at any time via your account or
            by emailing privacy@fufina.com.
          </p>
        </section>
      </div>
    </div>
  );
}
