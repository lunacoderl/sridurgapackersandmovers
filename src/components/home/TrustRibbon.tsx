import React from 'react';
import { Award, Star, Truck, ShieldCheck } from 'lucide-react';

export function TrustRibbon() {
  const stats = [
    {
      icon: Award,
      metric: '12+ Years',
      label: 'Excellence in Vizianagaram',
      color: 'text-orange-600',
      bg: 'bg-orange-50 border-orange-200/60',
    },
    {
      icon: Star,
      metric: '4.9 ?',
      label: '292+ Real Google Reviews',
      color: 'text-amber-500',
      bg: 'bg-amber-50 border-amber-200/60',
    },
    {
      icon: Truck,
      metric: '10,000+',
      label: 'Successful Shifts Executed',
      color: 'text-blue-600',
      bg: 'bg-blue-50 border-blue-200/60',
    },
    {
      icon: ShieldCheck,
      metric: '100%',
      label: 'Zero-Damage Track Record',
      color: 'text-emerald-600',
      bg: 'bg-emerald-50 border-emerald-200/60',
    },
  ];

  return (
    <div className="relative -mt-6 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-full overflow-hidden">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 bg-white p-3 sm:p-6 rounded-3xl shadow-xl border border-slate-200/80">
        {stats.map((s, idx) => {
          const Icon = s.icon;
          return (
            <div
              key={idx}
              className={`flex items-center gap-2.5 sm:gap-3.5 p-2.5 sm:p-4 rounded-2xl border ${s.bg} transition-transform hover:-translate-y-0.5 min-w-0`}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0">
                <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${s.color}`} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-base sm:text-2xl font-black text-slate-900 font-heading tracking-tight leading-none truncate">
                  {s.metric}
                </p>
                <p className="text-[10px] sm:text-xs font-semibold text-slate-600 mt-1 leading-tight line-clamp-2">
                  {s.label}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
