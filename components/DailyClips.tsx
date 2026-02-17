'use client';

import Link from 'next/link';
import ClipCard from './ClipCard';
import { mockClips } from '@/lib/clipData';

export default function DailyClips() {
  return (
    <section id="clips" className="w-full bg-neutral-cream">
      <div className="mx-auto max-w-[1440px] px-[24px] md:px-[60px] lg:px-[120px] py-[60px] lg:py-[120px]">
        
        {/* =========================
            SECTION HEADER
        ========================= */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-12 mb-[60px]">

          {/* Left */}
          <div className="flex flex-col gap-6">
            <h2 className="reveal font-display text-hero md:text-hero-lg text-primary-forest">
              Daily Clips
            </h2>

            <div className="w-[96px] h-[1px] bg-accent-orange" />
          </div>

          {/* Right */}
          <div className="reveal reveal-delay-1 max-w-[420px]">
            <p className="text-bodyBase text-neutral-textSecondary mb-6">
              Every single wave recorded, available in stunning HD quality.
              Browse today's sessions and find your clips.
            </p>

            <Link 
              href="https://clipdays.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-forest hover:text-accent-orange transition-colors group"
            >
              <span className="text-bodySm">
                Browse Clipdays
              </span>

              <svg
                className="group-hover:translate-x-1 transition-transform duration-300"
                width="16"
                height="16"
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

        {/* =========================
            CLIPS GRID
        ========================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-[60px]">
          {mockClips.map((clip, index) => (
            <div
              key={clip.id}
              className={`reveal reveal-delay-${Math.min(index + 1, 5)}`}
            >
              <ClipCard clip={clip} />
            </div>
          ))}
        </div>

        {/* =========================
            CTA BUTTON
        ========================= */}
        <div className="reveal reveal-delay-3 flex justify-center">
          <Link
            href="https://clipdays.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hover inline-flex items-center gap-3 bg-primary-forest hover:bg-primary-forestHover text-white px-8 py-4 rounded-full"
          >
            <span className="text-bodySm">
              Browse Full Library
            </span>

            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
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
