const CONTENT: Record<string, { title: string; body: string }> = {
  terms: { title: "Terms & Conditions", body: "These Terms & Conditions govern your use of the Opulent Vault platform. By accessing or using our services, you agree to be bound by these terms. Opulent Vault operates as a curated luxury lifestyle marketplace. All bookings are subject to availability and provider confirmation. Members must maintain confidentiality regarding other members and providers. Opulent Vault reserves the right to suspend or terminate membership for breach of these terms. All pricing is exclusive of VAT unless stated. Opulent Vault acts as an intermediary and is not liable for the direct actions of third-party providers." },
  privacy: { title: "Privacy Policy", body: "Opulent Vault is committed to protecting your privacy. We collect information necessary to provide our services including name, contact details, and booking preferences. Your data is stored securely and never sold to third parties. We use your information solely to fulfil bookings, improve our service, and communicate relevant offers. You have the right to access, correct, or delete your personal data at any time. Contact us at privacy@opulentvault.co.uk for any data requests. We use cookies to enhance your experience — see our Cookie Policy for details." },
  verification: { title: "Verification Policy", body: "Every provider listed on the Opulent Vault platform undergoes our 40-point verification protocol. This includes identity verification, insurance confirmation, service quality assessment, privacy standards review, and background checks. We reject approximately 92% of applicants. Verification is renewed annually. Members are encouraged to report any service that falls below our standards. Opulent Vault reserves the right to remove any provider who fails to maintain our standards at any time." },
  cancellation: { title: "Cancellation & Refund Policy", body: "Cancellation policies vary by service and provider. Generally: cancellations made 48+ hours in advance qualify for a full refund; cancellations within 48 hours may incur a 50% charge; no-shows are non-refundable. Exceptional circumstances are reviewed on a case-by-case basis by our concierge team. For bespoke and charter services, specific cancellation terms apply as stated at booking. Refunds are processed within 5-10 business days to the original payment method." },
  cookies: { title: "Cookie Policy", body: "Opulent Vault uses cookies to enhance your browsing experience. Essential cookies are required for the platform to function. Analytics cookies help us understand how members use our service so we can improve it. Marketing cookies allow us to show you relevant content. You can manage your cookie preferences at any time via your browser settings. Disabling certain cookies may affect the functionality of the platform." },
};

export default function LegalSlugPage({ params }: { params: { slug: string } }) {
  const content = CONTENT[params.slug];
  if (!content) {
    return (
      <section className="min-h-screen bg-primary-container pt-40 pb-24 px-margin-mobile md:px-margin-desktop flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display-lg text-headline-md text-on-surface mb-4">Page Not Found</h1>
          <a href="/legal/" className="text-secondary font-label-caps uppercase tracking-widest hover:text-on-surface transition-colors">Back to Legal</a>
        </div>
      </section>
    );
  }
  return (
    <section className="min-h-screen bg-primary-container pt-40 pb-24 px-margin-mobile md:px-margin-desktop">
      <div className="max-w-3xl mx-auto">
        <a href="/legal/" className="inline-flex items-center gap-2 text-secondary font-label-caps text-[11px] uppercase tracking-widest mb-10 hover:text-on-surface transition-colors">
          <span className="material-symbols-outlined text-sm">arrow_back</span> Legal
        </a>
        <h1 className="font-display-lg text-headline-md text-on-surface mb-10">{content.title}</h1>
        <p className="font-body-lg text-on-surface-variant leading-relaxed">{content.body}</p>
        <div className="mt-16 pt-10 border-t border-[#dbdad9]">
          <p className="font-body-md text-sm text-on-surface-variant">Last updated: January 2026. For questions, contact <a href="/contact/" className="text-secondary hover:text-on-surface transition-colors">our team</a>.</p>
        </div>
      </div>
    </section>
  );
}
