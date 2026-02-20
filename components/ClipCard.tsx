'use client'

import Link from 'next/link'
import type { Clip } from '@/lib/types'

interface ClipCardProps {
  clip: Clip
}

export default function ClipCard({ clip }: ClipCardProps) {
  if (!clip) return null

  return (
    <article className="group">
      <Link
        href={clip.videoUrl ?? '#'}
        className="block bg-neutral-cream rounded-xl2 overflow-hidden transition-all duration-300 hover:shadow-soft"
        aria-label={`Watch clip: ${clip.title}`}
      >
        {/* ================= THUMBNAIL ================= */}
        <div className="relative aspect-[16/10] overflow-hidden rounded-t-xl2">

          <img
            src={clip.thumbnail}
            alt={clip.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Time Badge */}
          {clip.time && (
            <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-primary-forest text-caption font-medium px-3 py-1 rounded-full">
              {clip.time}
            </span>
          )}

          {/* Duration Badge */}
          {clip.duration && (
            <span className="absolute bottom-4 right-4 bg-primary-forest/90 text-white text-caption font-medium px-3 py-1 rounded-full">
              {clip.duration}
            </span>
          )}

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-soft group-hover:scale-110 transition duration-300">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M8 5v14l11-7L8 5z" fill="#2c4d48" />
              </svg>
            </div>
          </div>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="px-6 py-5 bg-white">

          {/* Title */}
          <h3 className="text-h3 text-primary-forest">
            {clip.title}
          </h3>

          {/* Location + Watch Row */}
          <div className="flex items-center justify-between mt-3 border-t border-neutral-border pt-3">

            <span className="text-label text-neutral-textSecondary uppercase tracking-[0.3em]">
              {clip.location}
            </span>

            <span className="flex items-center gap-2 text-bodyBase font-medium text-primary-forest group-hover:text-accent-orange transition">
              Watch
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  d="M3 8h10M8 3l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>

          </div>
        </div>
      </Link>
    </article>
  )
}
