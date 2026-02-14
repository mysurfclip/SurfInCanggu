'use client';

import Link from 'next/link';

export default function Services() {
  return (
    <section id="services" className="w-full bg-[#fafaf8]">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-24 py-16 md:py-24 lg:py-32">
        
        {/* Section Header */}
        <div className="flex flex-col gap-6 md:gap-8 mb-16 md:mb-20 lg:mb-24">
          <h2 className="font-['Costa_Brisa',sans-serif] italic text-[40px] sm:text-[56px] lg:text-[72px] leading-[1.2] text-[#2c4d48] tracking-[1.66px]">
            Everything you<br />need in Canggu
          </h2>
          <div className="bg-[#e49355] h-[1px] w-[96px]" />
        </div>

        <div className="flex flex-col gap-16 md:gap-20 lg:gap-24">
          
          {/* Surf Clips */}
          <div className="group relative overflow-hidden">
            {/* Accent Bar */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#e49355] to-[#2c4d48] opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-full group-hover:translate-x-0" />
            
            {/* Background Highlight */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-2xl -m-4 md:-m-6 lg:-m-8 -z-10" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 pb-16 md:pb-20 lg:pb-24 border-b border-[rgba(44,77,72,0.06)] group-hover:border-[rgba(228,147,85,0.2)] transition-all duration-500 group-hover:translate-x-2 pl-0 group-hover:pl-4">
              <div className="lg:pr-8 transition-all duration-500">
                <h3 className="font-normal text-[28px] sm:text-[36px] lg:text-[48px] leading-[1.2] text-[#2c4d48] tracking-[-1.11px] group-hover:text-[#e49355] transition-colors duration-300">
                  Surf Clips
                </h3>
              </div>
              <div className="flex flex-col gap-8 lg:gap-10">
                <p className="font-normal text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.625] text-[rgba(44,77,72,0.7)] group-hover:text-[rgba(44,77,72,0.9)] tracking-[-0.45px] transition-colors duration-300">
                  Surfing ideally stay at Oldman's beach in Canggu. With 12 years of experience at this iconic surf spot, we're here to capture your every ride in crystal-clear HD quality. Just surf and order, we'll do the rest.
                </p>
                
                {/* Service Details Grid */}
                <div className="grid grid-cols-2 gap-x-12 gap-y-10 py-8 border-y border-[rgba(44,77,72,0.06)] group-hover:border-[rgba(228,147,85,0.15)] transition-all duration-300">
                  <div className="group/item">
                    <div className="font-normal text-[11px] leading-[16px] text-[rgba(44,77,72,0.35)] group-hover/item:text-[rgba(228,147,85,0.6)] tracking-[2.6px] uppercase mb-3 transition-colors duration-300">
                      Duration
                    </div>
                    <div className="font-normal text-[16px] sm:text-[18px] leading-[26px] text-[#2c4d48] tracking-[-0.39px] group-hover/item:translate-x-1 transition-transform duration-300">
                      2-5 Min Waves
                    </div>
                  </div>
                  <div className="group/item">
                    <div className="font-normal text-[11px] leading-[16px] text-[rgba(44,77,72,0.35)] group-hover/item:text-[rgba(228,147,85,0.6)] tracking-[2.6px] uppercase mb-3 transition-colors duration-300">
                      Quality
                    </div>
                    <div className="font-normal text-[16px] sm:text-[18px] leading-[26px] text-[#2c4d48] tracking-[-0.39px] group-hover/item:translate-x-1 transition-transform duration-300">
                      HD Video
                    </div>
                  </div>
                  <div className="group/item">
                    <div className="font-normal text-[11px] leading-[16px] text-[rgba(44,77,72,0.35)] group-hover/item:text-[rgba(228,147,85,0.6)] tracking-[2.6px] uppercase mb-3 transition-colors duration-300">
                      Delivery
                    </div>
                    <div className="font-normal text-[16px] sm:text-[18px] leading-[26px] text-[#2c4d48] tracking-[-0.39px] group-hover/item:translate-x-1 transition-transform duration-300">
                      Same Day
                    </div>
                  </div>
                  <div className="group/item">
                    <div className="font-normal text-[11px] leading-[16px] text-[rgba(44,77,72,0.35)] group-hover/item:text-[rgba(228,147,85,0.6)] tracking-[2.6px] uppercase mb-3 transition-colors duration-300">
                      Price
                    </div>
                    <div className="font-normal text-[16px] sm:text-[18px] leading-[26px] text-[#2c4d48] tracking-[-0.39px] group-hover/item:translate-x-1 transition-transform duration-300">
                      From $10
                    </div>
                  </div>
                </div>

                <Link 
                  href="#clips"
                  className="inline-flex items-center gap-3 text-[#2c4d48] hover:text-[#e49355] transition-all duration-300 ease-out group/link w-fit relative"
                >
                  <span className="font-medium text-[12px] sm:text-[14px] leading-[20px] tracking-[0.55px] uppercase relative">
                    Browse Clips
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#e49355] group-hover/link:w-full transition-all duration-300 ease-out" />
                  </span>
                  <svg className="group-hover/link:translate-x-1 transition-transform duration-300 ease-out" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Surf Lessons */}
          <div className="group relative overflow-hidden">
            {/* Accent Bar */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#e49355] to-[#2c4d48] opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-full group-hover:translate-x-0" />
            
            {/* Background Highlight */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-2xl -m-4 md:-m-6 lg:-m-8 -z-10" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 pb-16 md:pb-20 lg:pb-24 border-b border-[rgba(44,77,72,0.06)] group-hover:border-[rgba(228,147,85,0.2)] transition-all duration-500 group-hover:translate-x-2 pl-0 group-hover:pl-4">
              <div className="lg:pr-8 transition-all duration-500">
                <h3 className="font-normal text-[28px] sm:text-[36px] lg:text-[48px] leading-[1.2] text-[#2c4d48] tracking-[-1.11px] group-hover:text-[#e49355] transition-colors duration-300">
                  Surf Lessons
                </h3>
              </div>
              <div className="flex flex-col gap-8 lg:gap-10">
                <p className="font-normal text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.625] text-[rgba(44,77,72,0.7)] group-hover:text-[rgba(44,77,72,0.9)] tracking-[-0.45px] transition-colors duration-300">
                  Learn to surf or improve your skills with experienced local instructors. We offer personalized lessons for all levels, from complete beginners to advanced surfers looking to perfect their technique.
                </p>
                
                {/* Service Details Grid */}
                <div className="grid grid-cols-2 gap-x-12 gap-y-10 py-8 border-y border-[rgba(44,77,72,0.06)] group-hover:border-[rgba(228,147,85,0.15)] transition-all duration-300">
                  <div className="group/item">
                    <div className="font-normal text-[11px] leading-[16px] text-[rgba(44,77,72,0.35)] group-hover/item:text-[rgba(228,147,85,0.6)] tracking-[2.6px] uppercase mb-3 transition-colors duration-300">
                      Duration
                    </div>
                    <div className="font-normal text-[16px] sm:text-[18px] leading-[26px] text-[#2c4d48] tracking-[-0.39px] group-hover/item:translate-x-1 transition-transform duration-300">
                      2 Hours
                    </div>
                  </div>
                  <div className="group/item">
                    <div className="font-normal text-[11px] leading-[16px] text-[rgba(44,77,72,0.35)] group-hover/item:text-[rgba(228,147,85,0.6)] tracking-[2.6px] uppercase mb-3 transition-colors duration-300">
                      Level
                    </div>
                    <div className="font-normal text-[16px] sm:text-[18px] leading-[26px] text-[#2c4d48] tracking-[-0.39px] group-hover/item:translate-x-1 transition-transform duration-300">
                      All Levels
                    </div>
                  </div>
                  <div className="group/item">
                    <div className="font-normal text-[11px] leading-[16px] text-[rgba(44,77,72,0.35)] group-hover/item:text-[rgba(228,147,85,0.6)] tracking-[2.6px] uppercase mb-3 transition-colors duration-300">
                      Equipment
                    </div>
                    <div className="font-normal text-[16px] sm:text-[18px] leading-[26px] text-[#2c4d48] tracking-[-0.39px] group-hover/item:translate-x-1 transition-transform duration-300">
                      Included
                    </div>
                  </div>
                  <div className="group/item">
                    <div className="font-normal text-[11px] leading-[16px] text-[rgba(44,77,72,0.35)] group-hover/item:text-[rgba(228,147,85,0.6)] tracking-[2.6px] uppercase mb-3 transition-colors duration-300">
                      Price
                    </div>
                    <div className="font-normal text-[16px] sm:text-[18px] leading-[26px] text-[#2c4d48] tracking-[-0.39px] group-hover/item:translate-x-1 transition-transform duration-300">
                      From $50
                    </div>
                  </div>
                </div>

                <Link 
                  href="#contact"
                  className="inline-flex items-center gap-3 text-[#2c4d48] hover:text-[#e49355] transition-all duration-300 ease-out group/link w-fit relative"
                >
                  <span className="font-medium text-[12px] sm:text-[14px] leading-[20px] tracking-[0.55px] uppercase relative">
                    Book Lesson
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#e49355] group-hover/link:w-full transition-all duration-300 ease-out" />
                  </span>
                  <svg className="group-hover/link:translate-x-1 transition-transform duration-300 ease-out" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Travel Photo & Video */}
          <div className="group relative overflow-hidden">
            {/* Accent Bar */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#e49355] to-[#2c4d48] opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-full group-hover:translate-x-0" />
            
            {/* Background Highlight */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-2xl -m-4 md:-m-6 lg:-m-8 -z-10" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 group-hover:translate-x-2 transition-all duration-500 pl-0 group-hover:pl-4">
              <div className="lg:pr-8 transition-all duration-500">
                <h3 className="font-normal text-[28px] sm:text-[36px] lg:text-[48px] leading-[1.2] text-[#2c4d48] tracking-[-1.11px] group-hover:text-[#e49355] transition-colors duration-300">
                  Travel Photo<br />& Video
                </h3>
              </div>
              <div className="flex flex-col gap-8 lg:gap-10">
                <p className="font-normal text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.625] text-[rgba(44,77,72,0.7)] group-hover:text-[rgba(44,77,72,0.9)] tracking-[-0.45px] transition-colors duration-300">
                  Professional photography and videography services for your Bali adventure. From surf trips to travel vlogs, we capture your journey with cinematic quality and creative storytelling.
                </p>
                
                {/* Service Details Grid */}
                <div className="grid grid-cols-2 gap-x-12 gap-y-10 py-8 border-y border-[rgba(44,77,72,0.06)] group-hover:border-[rgba(228,147,85,0.15)] transition-all duration-300">
                  <div className="group/item">
                    <div className="font-normal text-[11px] leading-[16px] text-[rgba(44,77,72,0.35)] group-hover/item:text-[rgba(228,147,85,0.6)] tracking-[2.6px] uppercase mb-3 transition-colors duration-300">
                      Services
                    </div>
                    <div className="font-normal text-[16px] sm:text-[18px] leading-[26px] text-[#2c4d48] tracking-[-0.39px] group-hover/item:translate-x-1 transition-transform duration-300">
                      Photo + Video
                    </div>
                  </div>
                  <div className="group/item">
                    <div className="font-normal text-[11px] leading-[16px] text-[rgba(44,77,72,0.35)] group-hover/item:text-[rgba(228,147,85,0.6)] tracking-[2.6px] uppercase mb-3 transition-colors duration-300">
                      Location
                    </div>
                    <div className="font-normal text-[16px] sm:text-[18px] leading-[26px] text-[#2c4d48] tracking-[-0.39px] group-hover/item:translate-x-1 transition-transform duration-300">
                      Bali Wide
                    </div>
                  </div>
                  <div className="group/item">
                    <div className="font-normal text-[11px] leading-[16px] text-[rgba(44,77,72,0.35)] group-hover/item:text-[rgba(228,147,85,0.6)] tracking-[2.6px] uppercase mb-3 transition-colors duration-300">
                      Delivery
                    </div>
                    <div className="font-normal text-[16px] sm:text-[18px] leading-[26px] text-[#2c4d48] tracking-[-0.39px] group-hover/item:translate-x-1 transition-transform duration-300">
                      1-2 Weeks
                    </div>
                  </div>
                  <div className="group/item">
                    <div className="font-normal text-[11px] leading-[16px] text-[rgba(44,77,72,0.35)] group-hover/item:text-[rgba(228,147,85,0.6)] tracking-[2.6px] uppercase mb-3 transition-colors duration-300">
                      Price
                    </div>
                    <div className="font-normal text-[16px] sm:text-[18px] leading-[26px] text-[#2c4d48] tracking-[-0.39px] group-hover/item:translate-x-1 transition-transform duration-300">
                      Custom Quote
                    </div>
                  </div>
                </div>

                <Link 
                  href="#contact"
                  className="inline-flex items-center gap-3 text-[#2c4d48] hover:text-[#e49355] transition-all duration-300 ease-out group/link w-fit relative"
                >
                  <span className="font-medium text-[12px] sm:text-[14px] leading-[20px] tracking-[0.55px] uppercase relative">
                    Get Quote
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#e49355] group-hover/link:w-full transition-all duration-300 ease-out" />
                  </span>
                  <svg className="group-hover/link:translate-x-1 transition-transform duration-300 ease-out" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
