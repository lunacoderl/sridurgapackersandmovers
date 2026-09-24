import React from 'react';
import { Star, ShieldCheck, Award, Clock } from 'lucide-react';

export function TrustBadgeGroup() {
  return (
    <div className="inline-flex flex-wrap items-center gap-3 sm:gap-4 p-2 bg-slate-900/60 backdrop-blur-md rounded-2xl border border-slate-800 text-white text-xs">
      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 font-bold">
        <Star className="w-3.5 h-3.5 fill-amber-400" />
        <span>4.9★ Google Rating (292+ Reviews)</span>
      </div>
      <div className="flex items-center gap-1.5 px-2.5 py-1 text-slate-300">
        <Award className="w-3.5 h-3.5 text-orange-400" />
        <span>Est. 2014 • 12+ Yrs</span>
      </div>
      <div className="flex items-center gap-1.5 px-2.5 py-1 text-slate-300">
        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
        <span>Zero-Damage Guarantee</span>
      </div>
    </div>
  );
}
