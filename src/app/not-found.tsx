import Link from 'next/link';
import { Truck, Home, Phone, ArrowLeft } from 'lucide-react';
import { companyData } from '@/data/company';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 text-center bg-[#FAF9F6]">
      <div className="max-w-lg space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-orange-100 text-orange-600 flex items-center justify-center mx-auto shadow-md">
          <Truck className="w-10 h-10 animate-bounce" />
        </div>

        <span className="text-xs font-black uppercase tracking-wider text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
          Error 404 • Destination Not Found
        </span>

        <h1 className="text-3xl sm:text-4xl font-black font-heading text-slate-900 tracking-tight">
          Looks Like This Route Has Changed!
        </h1>

        <p className="text-slate-600 text-sm leading-relaxed">
          The page or route you were looking for doesn't exist or has moved to a new URL. Let's get you back on track safely.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-orange-600/20 transition-all hover:scale-105"
          >
            <Home className="w-4 h-4" />
            <span>Return To Home</span>
          </Link>

          <a
            href={`tel:${companyData.phoneRaw}`}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all"
          >
            <Phone className="w-4 h-4 text-orange-400" />
            <span>Call Helpline</span>
          </a>
        </div>
      </div>
    </div>
  );
}
