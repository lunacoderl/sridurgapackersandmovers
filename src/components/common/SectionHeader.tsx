import React from 'react';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  highlightedText?: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeader({
  badge,
  title,
  highlightedText,
  subtitle,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`max-w-3xl mb-12 ${centered ? 'mx-auto text-center' : 'text-left'}`}>
      {badge && (
        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider mb-3.5 ${
          light 
            ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' 
            : 'bg-orange-100 text-orange-700 border border-orange-200'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
          {badge}
        </div>
      )}

      <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-black font-heading tracking-tight leading-tight ${
        light ? 'text-white' : 'text-slate-900'
      }`}>
        {title}{' '}
        {highlightedText && (
          <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
            {highlightedText}
          </span>
        )}
      </h2>

      {subtitle && (
        <p className={`mt-3.5 text-sm sm:text-base leading-relaxed ${
          light ? 'text-slate-300' : 'text-slate-600'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
