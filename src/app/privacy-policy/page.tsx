import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Sridurga Packers & Movers Vizianagaram',
  description: 'Privacy policy for Sridurga Packers & Movers Vizianagaram detailing how we protect customer data.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-slate-800">
        <div>
          <span className="text-xs font-bold text-orange-600 uppercase tracking-wider bg-orange-50 px-3 py-1 rounded-full">
            Legal Information
          </span>
          <h1 className="text-3xl sm:text-4xl font-black font-heading mt-3 text-slate-900">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-500 mt-2">
            Last Updated: January 2026 ? Sridurga Packers &amp; Movers, Vizianagaram
          </p>
        </div>

        <div className="space-y-6 text-sm sm:text-base leading-relaxed text-slate-700">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 font-heading">1. Introduction</h2>
            <p>
              Sridurga Packers &amp; Movers (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) operates the website sridurgapackers.com and provides professional packing, shifting, and freight transportation services. We are dedicated to respecting your privacy and protecting the contact information you provide when requesting a moving estimate.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 font-heading">2. Information We Collect</h2>
            <p>
              When you submit a quote request via our website or initiate a conversation on WhatsApp/phone, we collect:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-sm">
              <li>Your Name and Phone / WhatsApp number</li>
              <li>Pickup Address (Moving From) and Destination Address (Moving To)</li>
              <li>Requested moving dates and preferred schedules</li>
              <li>Approximate household inventory details or BHK size</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 font-heading">3. How We Use Your Information</h2>
            <p>
              The information you share is strictly utilized to:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-sm">
              <li>Formulate and transmit accurate relocation quotes via WhatsApp or phone call</li>
              <li>Dispatch appropriate packing crew, supplies, and container truck sizes</li>
              <li>Provide live transit milestone updates during your household move</li>
            </ul>
            <p className="text-sm font-semibold text-slate-900">
              We never sell, rent, trade, or distribute your personal telephone number or address to third-party marketing companies.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 font-heading">4. Contact Us</h2>
            <p>
              If you have any questions regarding your data privacy, contact our Vizianagaram office directly at <strong>085001 44488</strong> or email us at <strong>sridurgapackers.vzm@gmail.com</strong>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
