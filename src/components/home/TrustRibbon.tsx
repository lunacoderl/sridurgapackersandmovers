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
    <div className="relative -mt-6 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 bg-white p-4 sm:p-6 rounded-3xl shadow-xl border border-slate-200/80">
        {stats.map((s, idx) => {
          const Icon = s.icon;
          return (
            <div
              key={idx}
              className={`flex items-center gap-3.5 p-3 sm:p-4 rounded-2xl border ${s.bg} transition-transform hover:-translate-y-0.5`}
            >
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0">
                <Icon className={`w-6 h-6 ${s.color}`} />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-slate-900 font-heading tracking-tight leading-none">
                  {s.metric}
                </p>
                <p className="text-xs font-semibold text-slate-600 mt-1 leading-tight">
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
