'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-[#2c4d48]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        
        {/* CTA Section */}
        <div className="pt-16 md:pt-20 lg:pt-24 pb-12 md:pb-16 lg:pb-20">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-12">
            
            {/* Left: Heading + Button */}
            <div className="flex flex-col gap-8 lg:gap-10">
              {/* Main Heading */}
              <div>
                <h2 className="font-['Costa_Brisa',sans-serif] italic text-[48px] md:text-[64px] lg:text-[80px] leading-[1.1] text-white tracking-tight mb-2">
                  Ready to see
                </h2>
                <h2 className="font-['Costa_Brisa',sans-serif] italic text-[48px] md:text-[64px] lg:text-[80px] leading-[1.1] text-[#e49355] tracking-tight">
                  your waves?
                </h2>
              </div>

              {/* CTA Button */}
              <Link
                href="#clips"
                className="btn-hover inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-full transition-all duration-300 w-fit group"
              >
                <span className="font-normal text-[16px] leading-[24px] tracking-[-0.31px]">
                  Get Your Clips
                </span>
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M8 3l5 5-5 5" stroke="#2c4d48" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </Link>
            </div>

            {/* Right: Stats */}
            <div className="flex items-center gap-8 lg:gap-12 lg:pt-24">
              <div className="flex flex-col gap-2">
                <div className="font-light text-[40px] md:text-[48px] leading-[1.1] text-white tracking-tight">
                  12+
                </div>
                <div className="font-normal text-[10px] leading-[15px] tracking-[1.5px] uppercase text-white/40">
                  Years
                </div>
              </div>
              
              <div className="w-[1px] h-12 bg-white/10" />
              
              <div className="flex flex-col gap-2">
                <div className="font-light text-[40px] md:text-[48px] leading-[1.1] text-white tracking-tight">
                  365
                </div>
                <div className="font-normal text-[10px] leading-[15px] tracking-[1.5px] uppercase text-white/40">
                  Days
                </div>
              </div>
              
              <div className="w-[1px] h-12 bg-white/10" />
              
              <div className="flex flex-col gap-2">
                <div className="font-light text-[40px] md:text-[48px] leading-[1.1] text-white tracking-tight">
                  HD
                </div>
                <div className="font-normal text-[10px] leading-[15px] tracking-[1.5px] uppercase text-white/40">
                  Quality
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full h-[1px] bg-white/10" />

        {/* Main Footer Content */}
        <div className="py-16 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            
            {/* Left Column - About */}
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="font-normal text-[28px] md:text-[32px] leading-[1.2] text-white tracking-tight mb-1">
                  Surfing in
                </h3>
                <h3 className="font-normal text-[28px] md:text-[32px] leading-[1.2] text-white tracking-tight">
                  Canggu
                </h3>
                <div className="w-12 h-[2px] bg-[#e49355] mt-4" />
              </div>
              
              <p className="font-normal text-[15px] leading-[1.7] text-white/60 max-w-[320px]">
                Luqman has been shooting surf sessions at Oldman's beach in Canggu for 12 years. Daily uploads to ClipDays, plus surf lessons and travel photography across Bali.
              </p>

              {/* Location Badge */}
              <div className="inline-flex items-center gap-2 border border-white/20 rounded-full px-4 py-2.5 w-fit">
                <div className="w-2 h-2 rounded-full bg-[#e49355]" />
                <span className="font-normal text-[13px] leading-[1] text-white/80">
                  Oldman's Beach, Canggu
                </span>
              </div>
            </div>

            {/* Middle Column - Services */}
            <div className="flex flex-col gap-6">
              <div className="font-normal text-[10px] leading-[15px] tracking-[2.6px] uppercase text-white/40">
                Services
              </div>
              
              <div className="flex flex-col gap-4">
                <Link
                  href="#clips"
                  className="group flex items-center justify-between pb-3 border-b border-white/10 hover:border-white/30 transition-all duration-300"
                >
                  <span className="font-normal text-[16px] leading-[24px] text-white/80 group-hover:text-white transition-colors duration-300">
                    Surf Clips
                  </span>
                  <svg 
                    className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 16 16" 
                    fill="none"
                  >
                    <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>

                <Link
                  href="#services"
                  className="group flex items-center justify-between pb-3 border-b border-white/10 hover:border-white/30 transition-all duration-300"
                >
                  <span className="font-normal text-[16px] leading-[24px] text-white/80 group-hover:text-white transition-colors duration-300">
                    Surf Lessons
                  </span>
                  <svg 
                    className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 16 16" 
                    fill="none"
                  >
                    <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>

                <Link
                  href="#services"
                  className="group flex items-center justify-between pb-3 border-b border-white/10 hover:border-white/30 transition-all duration-300"
                >
                  <span className="font-normal text-[16px] leading-[24px] text-white/80 group-hover:text-white transition-colors duration-300">
                    Travel Photography
                  </span>
                  <svg 
                    className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 16 16" 
                    fill="none"
                  >
                    <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right Column - Connect */}
            <div className="flex flex-col gap-6">
              <div className="font-normal text-[10px] leading-[15px] tracking-[2.6px] uppercase text-white/40">
                Connect
              </div>
              
              <div className="flex flex-col gap-4">
                {/* WhatsApp Card */}
                <Link
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 border border-white/20 hover:border-white/40 rounded-2xl px-6 py-4 transition-all duration-300 hover:translate-y-[-2px]"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M21 15.46l-3.09 3.09c-.49.49-1.13.73-1.77.73-3.69 0-7.13-1.43-9.7-4.03-2.56-2.56-3.98-5.99-3.98-9.66 0-.64.24-1.28.73-1.77L6.28 1l3.69 4.92L8.62 7.27c-.24.24-.31.61-.15.92.51 1.02 1.21 1.95 2.08 2.82.87.87 1.8 1.57 2.82 2.08.31.16.68.09.92-.15l1.35-1.35L21 15.46z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-normal text-[11px] leading-[1] tracking-[1px] uppercase text-white/50">
                        Message
                      </span>
                      <span className="font-normal text-[16px] leading-[1.5] text-white mt-1">
                        WhatsApp
                      </span>
                    </div>
                  </div>
                  <svg 
                    className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 16 16" 
                    fill="none"
                  >
                    <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>

                {/* Instagram Card */}
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 border border-white/20 hover:border-white/40 rounded-2xl px-6 py-4 transition-all duration-300 hover:translate-y-[-2px]"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="17.5" cy="6.5" r="0.5" fill="white"/>
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-normal text-[11px] leading-[1] tracking-[1px] uppercase text-white/50">
                        Follow
                      </span>
                      <span className="font-normal text-[16px] leading-[1.5] text-white mt-1">
                        Instagram
                      </span>
                    </div>
                  </div>
                  <svg 
                    className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 16 16" 
                    fill="none"
                  >
                    <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Left - Copyright */}
            <div className="font-normal text-[13px] leading-[1.5] text-white/40">
              © 2026 SURFING IN CANGGU
            </div>

            {/* Right - Credits */}
            <div className="flex items-center gap-3 text-white/60">
              <span className="font-normal text-[13px] leading-[1.5]">
                Shot by Luqman
              </span>
              <div className="w-1 h-1 rounded-full bg-white/30" />
              <span className="font-normal text-[13px] leading-[1.5]">
                Oldman's Beach
              </span>
              <div className="w-1 h-1 rounded-full bg-white/30" />
              <span className="font-normal text-[13px] leading-[1.5]">
                Est. 2013
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
