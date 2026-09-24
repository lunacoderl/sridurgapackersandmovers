import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Sridurga Packers & Movers Vizianagaram',
  description: 'Terms and conditions for household and commercial relocation with Sridurga Packers & Movers.',
};

export default function TermsPage() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-slate-800">
        <div>
          <span className="text-xs font-bold text-orange-600 uppercase tracking-wider bg-orange-50 px-3 py-1 rounded-full">
            Service Terms
          </span>
          <h1 className="text-3xl sm:text-4xl font-black font-heading mt-3 text-slate-900">
            Terms &amp; Conditions
          </h1>
          <p className="text-xs text-slate-500 mt-2">
            Effective Date: January 2026 ? Sridurga Packers &amp; Movers, Vizianagaram
          </p>
        </div>

        <div className="space-y-6 text-sm sm:text-base leading-relaxed text-slate-700">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 font-heading">1. Scope of Service</h2>
            <p>
              Sridurga Packers &amp; Movers agrees to furnish packaging, loading, transport, unloading, and basic placement services as specified in the confirmed estimate for the customer&apos;s relocation from origin to destination.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 font-heading">2. Excluded &amp; Restricted Items</h2>
            <p>
              Customers must personally transport and retain possession of:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-sm">
              <li>Cash, currency notes, coins, and bullion</li>
              <li>Fine jewelry, precious gems, and luxury watches</li>
              <li>Original legal deeds, passports, academic certificates, and property documents</li>
              <li>Hazardous materials: gas cylinders, petrol, chemicals, crackers, and inflammables</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 font-heading">3. Payment Terms</h2>
            <p>
              Our quotations are transparent and all-inclusive. Standard payment milestones:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-sm">
              <li>Token advance upon booking slot confirmation</li>
              <li>Substantial portion payable upon completion of packing and loading at origin</li>
              <li>Final balance payable upon delivery and unloading at destination</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 font-heading">4. Jurisdictional Law</h2>
            <p>
              All contracts and relocation engagements are governed under the jurisdictional courts of Vizianagaram, Andhra Pradesh, India.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
