import Link from 'next/link';
import ClipCard from './ClipCard';
import { mockClips } from '@/lib/clipData';

export default function DailyClips() {
  return (
    <section id="clips" className="w-full bg-[#fafaf8]">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-24 py-16 md:py-24 lg:py-32">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-12 mb-10 lg:mb-[60px]">
          <div className="flex flex-col gap-4 lg:gap-[25px]">
            <h2 className="font-['Costa_Brisa',sans-serif] italic text-[48px] sm:text-[64px] lg:text-[86px] leading-[1.2] lg:leading-[86px] text-[#2c4d48] tracking-[1.98px]">
              Daily Clips
            </h2>
            <div className="bg-[#e49355] h-[1px] w-[96px]" />
          </div>
          <div className="max-w-[387px]">
            <p className="font-normal text-[14px] sm:text-[16px] leading-[1.625] text-[rgba(44,77,72,0.6)] tracking-[-0.31px] mb-4">
              Every single wave recorded, available in stunning HD quality. Browse today's sessions and find your clips.
            </p>
            <Link 
              href="https://clipdays.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#2c4d48] hover:text-[#e49355] transition-colors"
            >
              <span className="font-normal text-[14px] leading-[24px] tracking-[-0.31px]">
                Browse Clipdays
              </span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Clips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-10 lg:mb-[60px]">
          {mockClips.map((clip) => (
            <ClipCard key={clip.id} clip={clip} />
          ))}
        </div>

        {/* Browse Full Library Button */}
        <div className="flex justify-center">
          <Link
            href="https://clipdays.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#2c4d48] hover:bg-[#3d5f5a] text-white px-8 py-4 rounded-full transition-colors"
          >
            <span className="font-light text-[14px] tracking-[-0.15px]">Browse Full Library</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
