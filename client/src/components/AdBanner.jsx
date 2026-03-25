import React from 'react';

export default function AdBanner({ slot = 'top', className = '' }) {
  const height = slot === 'top' ? 'h-20' : 'h-24';
  return (
    <div
      className={`ad-banner ${height} ${className} flex items-center justify-center`}
      data-ad-slot={slot}
      aria-label="Advertisement"
    >
      <span className="select-none opacity-30 text-xs uppercase tracking-widest text-gray-500">
        Advertisement
      </span>
    </div>
  );
}
