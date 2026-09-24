import React from 'react';
import { Award, Users, CheckCircle, Navigation } from 'lucide-react';

export function StatsSection() {
  const metrics = [
    {
      num: '10,000+',
      label: 'Relocations Completed',
      sub: 'Homes & offices safely shifted',
      icon: CheckCircle,
    },
    {
      num: '4.9 ?',
      label: 'Google Review Score',
      sub: 'Over 292+ authentic reviews',
      icon: Award,
    },
    {
      num: '99.8%',
      label: 'Zero-Claim Safety Ratio',
      sub: '5-layer industrial protection',
      icon: Users,
    },
    {
      num: '45+',
      label: 'Cities Networked',
      sub: 'Direct closed-container routes',
      icon: Navigation,
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div key={idx} className="space-y-2 p-4">
                <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center mx-auto text-white mb-3">
                  <Icon className="w-6 h-6" />
                </div>
                <p className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight leading-none">
                  {m.num}
                </p>
                <p className="text-sm font-bold tracking-wide uppercase text-orange-100">
                  {m.label}
                </p>
                <p className="text-xs text-orange-200">
                  {m.sub}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
