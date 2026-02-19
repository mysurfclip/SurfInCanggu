'use client'

import Link from 'next/link'
import { Clip } from '@/lib/types'

interface ClipCardProps {
  clip: Clip
}

export default function ClipCard({ clip }: ClipCardProps) {
  return (
    <Link
      href="#"
      className="
        group
        block
        cursor-pointer
        rounded-2xl
        overflow-hidden
        bg-[#f6f3ec]
        transition-all
        duration-500
        ease-[cubic-bezier(0.22,1,0.36,1)]
        hover:-translate-y-3
        hover:shadow-[0_20px_40px_rgba(44,77,72,0.15)]
      "
    >
      {/* Thumbnail */}
      <div className="relative aspect-[16/10] overflow-hidden">

        <img
          src={clip.thumbnail}
          alt={clip.title}
          className="
            w-full h-full object-cover
            transition-transform duration-700
            ease-[cubic-bezier(0.22,1,0.36,1)]
            group-hover:scale-110
          "
        />

        {/* Time Badge */}
        <div className="absolute top-4 left-4 bg-white/90 text-[#2c4d48] text-xs px-3 py-1 rounded-full">
          {clip.time}
        </div>

        {/* Duration Badge */}
        {clip.duration && (
          <div className="absolute bottom-4 right-4 bg-[#2c4d48] text-white text-xs px-3 py-1 rounded-full">
            {clip.duration}
          </div>
        )}

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className="
              w-16 h-16
              bg-white/90
              rounded-full
              flex items-center justify-center
              shadow-lg
              transition-all duration-500
              ease-[cubic-bezier(0.22,1,0.36,1)]
              group-hover:scale-125
            "
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M8 5v14l11-7L8 5z" fill="#2c4d48" />
            </svg>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-5 bg-[#f3f1eb]">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium text-[#2c4d48] group-hover:text-[#e49355] transition-colors">
            {clip.title}
          </h3>
        </div>

        <div className="mt-2 text-sm text-[#2c4d48]/60">
          {clip.location}
        </div>
      </div>
    </Link>
  )
}
