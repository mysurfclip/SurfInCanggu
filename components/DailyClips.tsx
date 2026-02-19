'use client';

import Link from 'next/link';
import ClipCard from './ClipCard';
import { mockClips } from '@/lib/clipData';

export default function DailyClips() {
  return (
    <section id="clips" className="bg-neutral-cream">
      <div className="container py-sectionYMobile lg:py-sectionYDesktop">

        {/* ===================================== */}
        {/* SECTION HEADER */}
        {/* ===================================== */}

        <div className="flex flex-col gap-8 mb-16">

          {/* Micro Label */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-px bg-accent-orange" />
            <span className="text-label text-neutral-textTertiary uppercase tracking-[0.3em]">
              Live Updates
            </span>
          </div>

          {/* Title + Description */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">

            <div className="flex flex-col gap-6 max-w-[720px]">
              <h2 className="font-display text-[40px] sm:text-[56px] lg:text-[72px] leading-[1.05] text-neutral-textPrimary">
                Today’s Surf Clips
              </h2>

              <p className="text-bodyLarge text-neutral-textSecondary max-w-[600px]">
                Luqman and crew upload throughout the day to ClipDays.
                Browse by session, spot, or time and grab your waves instantly.
              </p>
            </div>

            {/* Aggressive CTA */}
            <Link
              href="https://clipdays.com"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                inline-flex items-center gap-3
                bg-neutral-textPrimary
                text-white
                px-6 py-4
                rounded-full
                uppercase tracking-[0.2em]
                text-[12px] font-medium
                transition-all duration-300
                hover:bg-accent-orange
              "
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-0.5">
                View on ClipDays
              </span>
              <svg
                className="transition-transform duration-300 group-hover:translate-x-1"
                width="18"
                height="18"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M3 8h10M8 3l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

          </div>
        </div>

        {/* ===================================== */}
        {/* CLIP GRID */}
        {/* ===================================== */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

          {mockClips.map((clip) => (
            <ClipCard key={clip.id} clip={clip} />
          ))}

        </div>

        {/* ===================================== */}
        {/* Bottom CTA Strip */}
        {/* ===================================== */}

        <div className="mt-16 pt-10 border-t border-neutral-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">

          <p className="text-bodySmall text-neutral-textSecondary">
            Looking for your clip? Head to ClipDays and filter by spot or time.
          </p>

          <Link
            href="https://clipdays.com"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              inline-flex items-center gap-3
              border border-neutral-textPrimary
              text-neutral-textPrimary
              px-6 py-3
              rounded-full
              uppercase tracking-[0.2em]
              text-[12px]
              transition-all duration-300
              hover:bg-neutral-textPrimary
              hover:text-white
            "
          >
            <span>Open ClipDays</span>
            <svg
              className="transition-transform duration-300 group-hover:translate-x-1"
              width="18"
              height="18"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M3 8h10M8 3l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

        </div>

      </div>
    </section>
  );
}
