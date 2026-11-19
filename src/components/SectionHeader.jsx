import React from 'react';

// Poster-style section header: bold uppercase title, a hairline rule, optional right-side note.
const SectionHeader = ({ title, aside }) => (
  <div className="flex items-center gap-4 sm:gap-6 mb-10 sm:mb-14">
    <h2 className="shrink-0 text-xl sm:text-2xl font-extrabold uppercase tracking-wide text-text">{title}</h2>
    <span className="h-px flex-1 bg-line" aria-hidden="true"></span>
    {aside && (
      <span className="hidden sm:inline shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-muted">{aside}</span>
    )}
  </div>
);

export default SectionHeader;
