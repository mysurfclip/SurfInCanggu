'use client';

import Link from 'next/link';
import { ClipData } from '@/lib/clipData';

interface ClipCardProps {
  clip: ClipData;
}

export default function ClipCard({ clip }: ClipCardProps) {
  return (
    <Link 
      href={clip.clipdaysUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video bg-gradient-to-br from-[#87CEEB] to-[#4682B4] overflow-hidden">
        <img
          src={clip.thumbnail}
          alt={clip.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        
        {/* Play Icon Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-white transition-all duration-500 shadow-lg">
            <svg width="24" height="28" viewBox="0 0 24 28" fill="none" className="ml-1">
              <path d="M22.5 11.6699C24.5 12.8944 24.5 15.8556 22.5 17.0801L4.5 27.5167C2.5 28.7412 0 27.2606 0 24.8116V3.93844C0 1.48945 2.5 0.00881601 4.5 1.23331L22.5 11.6699Z" fill="#2c4d48"/>
            </svg>
          </div>
        </div>

        {/* Duration Badge */}
        <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-[#2c4d48]/90 backdrop-blur-sm text-white text-xs sm:text-sm px-3 py-1.5 rounded-full font-medium group-hover:bg-[#e49355] transition-colors duration-300">
          {clip.duration}
        </div>

        {/* Time Badge */}
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-white/90 backdrop-blur-sm text-[#2c4d48] text-xs sm:text-sm px-3 py-1.5 rounded-full font-medium">
          {clip.time}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="font-normal text-[18px] sm:text-[20px] lg:text-[24px] leading-[1.4] text-[#2c4d48] tracking-[-0.53px] group-hover:text-[#e49355] transition-colors duration-300">
            {clip.title}
          </h3>
          <svg className="flex-shrink-0 mt-1 text-[rgba(44,77,72,0.4)] group-hover:text-[#e49355] group-hover:translate-x-1 transition-all duration-300" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="flex items-center gap-2 text-[rgba(44,77,72,0.6)]">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 14c3.314 0 6-2.686 6-6S11.314 2 8 2 2 4.686 2 8s2.686 6 6 6z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 4v4l2.5 1.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="font-normal text-[13px] sm:text-[14px] leading-[20px] tracking-[-0.31px]">
            {clip.location}
          </span>
        </div>
      </div>
    </Link>
  );
}
