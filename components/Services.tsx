import Link from 'next/link';

export default function Services() {
  return (
    <section id="services" className="w-full bg-[#fafaf8]">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-24 py-16 md:py-24 lg:py-32">
        
        {/* Section Header */}
        <div className="flex flex-col gap-6 md:gap-8 mb-12 md:mb-16 lg:mb-20">
          <h2 className="font-['Costa_Brisa',sans-serif] italic text-[40px] sm:text-[56px] lg:text-[72px] leading-[1.2] text-[#2c4d48] tracking-[1.66px]">
            Everything you<br />need in Canggu
          </h2>
          <div className="bg-[#e49355] h-[1px] w-[96px]" />
        </div>

        <div className="flex flex-col gap-12 md:gap-16 lg:gap-20">
          
          {/* Surf Clips */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20 pb-12 md:pb-16 lg:pb-20 border-b border-[rgba(44,77,72,0.1)]">
            <div>
              <h3 className="font-normal text-[28px] sm:text-[36px] lg:text-[48px] leading-[1.2] text-[#2c4d48] tracking-[-1.11px]">
                Surf Clips
              </h3>
            </div>
            <div className="flex flex-col gap-6 lg:gap-8">
              <p className="font-normal text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.625] text-[rgba(44,77,72,0.8)] tracking-[-0.45px]">
                Surfing ideally stay at Oldman's beach in Canggu. With 12 years of experience at this iconic surf spot, we're here to capture your every ride in crystal-clear HD quality. Just surf and order, we'll do the rest.
              </p>
              
              {/* Service Details Grid */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-6 py-6 border-y border-[rgba(44,77,72,0.1)]">
                <div>
                  <div className="font-normal text-[12px] leading-[16px] text-[rgba(44,77,72,0.4)] tracking-[2.4px] uppercase mb-2">
                    Duration
                  </div>
                  <div className="font-normal text-[16px] sm:text-[18px] leading-[26px] text-[#2c4d48] tracking-[-0.39px]">
                    2-5 Min Waves
                  </div>
                </div>
                <div>
                  <div className="font-normal text-[12px] leading-[16px] text-[rgba(44,77,72,0.4)] tracking-[2.4px] uppercase mb-2">
                    Quality
                  </div>
                  <div className="font-normal text-[16px] sm:text-[18px] leading-[26px] text-[#2c4d48] tracking-[-0.39px]">
                    HD Video
                  </div>
                </div>
                <div>
                  <div className="font-normal text-[12px] leading-[16px] text-[rgba(44,77,72,0.4)] tracking-[2.4px] uppercase mb-2">
                    Delivery
                  </div>
                  <div className="font-normal text-[16px] sm:text-[18px] leading-[26px] text-[#2c4d48] tracking-[-0.39px]">
                    Same Day
                  </div>
                </div>
                <div>
                  <div className="font-normal text-[12px] leading-[16px] text-[rgba(44,77,72,0.4)] tracking-[2.4px] uppercase mb-2">
                    Price
                  </div>
                  <div className="font-normal text-[16px] sm:text-[18px] leading-[26px] text-[#2c4d48] tracking-[-0.39px]">
                    From $10
                  </div>
                </div>
              </div>

              <Link 
                href="#clips"
                className="inline-flex items-center gap-3 text-[#2c4d48] hover:text-[#e49355] transition-colors group w-fit"
              >
                <span className="font-medium text-[12px] sm:text-[14px] leading-[20px] tracking-[0.55px] uppercase">
                  Browse Clips
                </span>
                <svg className="group-hover:translate-x-1 transition-transform" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Surf Lessons */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 pb-12 lg:pb-20 border-b border-[rgba(44,77,72,0.1)]">
            <div>
              <h3 className="font-normal text-[28px] sm:text-[36px] lg:text-[48px] leading-[1.2] text-[#2c4d48] tracking-[-1.11px]">
                Surf Lessons
              </h3>
            </div>
            <div className="flex flex-col gap-6 lg:gap-8">
              <p className="font-normal text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.625] text-[rgba(44,77,72,0.8)] tracking-[-0.45px]">
                Learn to surf or improve your skills with experienced local instructors. We offer personalized lessons for all levels, from complete beginners to advanced surfers looking to perfect their technique.
              </p>
              
              {/* Service Details Grid */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-6 py-6 border-y border-[rgba(44,77,72,0.1)]">
                <div>
                  <div className="font-normal text-[12px] leading-[16px] text-[rgba(44,77,72,0.4)] tracking-[2.4px] uppercase mb-2">
                    Duration
                  </div>
                  <div className="font-normal text-[16px] sm:text-[18px] leading-[26px] text-[#2c4d48] tracking-[-0.39px]">
                    2 Hours
                  </div>
                </div>
                <div>
                  <div className="font-normal text-[12px] leading-[16px] text-[rgba(44,77,72,0.4)] tracking-[2.4px] uppercase mb-2">
                    Level
                  </div>
                  <div className="font-normal text-[16px] sm:text-[18px] leading-[26px] text-[#2c4d48] tracking-[-0.39px]">
                    All Levels
                  </div>
                </div>
                <div>
                  <div className="font-normal text-[12px] leading-[16px] text-[rgba(44,77,72,0.4)] tracking-[2.4px] uppercase mb-2">
                    Equipment
                  </div>
                  <div className="font-normal text-[16px] sm:text-[18px] leading-[26px] text-[#2c4d48] tracking-[-0.39px]">
                    Included
                  </div>
                </div>
                <div>
                  <div className="font-normal text-[12px] leading-[16px] text-[rgba(44,77,72,0.4)] tracking-[2.4px] uppercase mb-2">
                    Price
                  </div>
                  <div className="font-normal text-[16px] sm:text-[18px] leading-[26px] text-[#2c4d48] tracking-[-0.39px]">
                    From $50
                  </div>
                </div>
              </div>

              <Link 
                href="#contact"
                className="inline-flex items-center gap-3 text-[#2c4d48] hover:text-[#e49355] transition-colors group w-fit"
              >
                <span className="font-medium text-[12px] sm:text-[14px] leading-[20px] tracking-[0.55px] uppercase">
                  Book Lesson
                </span>
                <svg className="group-hover:translate-x-1 transition-transform" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Travel Photo & Video */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <div>
              <h3 className="font-normal text-[28px] sm:text-[36px] lg:text-[48px] leading-[1.2] text-[#2c4d48] tracking-[-1.11px]">
                Travel Photo<br />& Video
              </h3>
            </div>
            <div className="flex flex-col gap-6 lg:gap-8">
              <p className="font-normal text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.625] text-[rgba(44,77,72,0.8)] tracking-[-0.45px]">
                Professional photography and videography services for your Bali adventure. From surf trips to travel vlogs, we capture your journey with cinematic quality and creative storytelling.
              </p>
              
              {/* Service Details Grid */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-6 py-6 border-y border-[rgba(44,77,72,0.1)]">
                <div>
                  <div className="font-normal text-[12px] leading-[16px] text-[rgba(44,77,72,0.4)] tracking-[2.4px] uppercase mb-2">
                    Services
                  </div>
                  <div className="font-normal text-[16px] sm:text-[18px] leading-[26px] text-[#2c4d48] tracking-[-0.39px]">
                    Photo + Video
                  </div>
                </div>
                <div>
                  <div className="font-normal text-[12px] leading-[16px] text-[rgba(44,77,72,0.4)] tracking-[2.4px] uppercase mb-2">
                    Location
                  </div>
                  <div className="font-normal text-[16px] sm:text-[18px] leading-[26px] text-[#2c4d48] tracking-[-0.39px]">
                    Bali Wide
                  </div>
                </div>
                <div>
                  <div className="font-normal text-[12px] leading-[16px] text-[rgba(44,77,72,0.4)] tracking-[2.4px] uppercase mb-2">
                    Delivery
                  </div>
                  <div className="font-normal text-[16px] sm:text-[18px] leading-[26px] text-[#2c4d48] tracking-[-0.39px]">
                    1-2 Weeks
                  </div>
                </div>
                <div>
                  <div className="font-normal text-[12px] leading-[16px] text-[rgba(44,77,72,0.4)] tracking-[2.4px] uppercase mb-2">
                    Price
                  </div>
                  <div className="font-normal text-[16px] sm:text-[18px] leading-[26px] text-[#2c4d48] tracking-[-0.39px]">
                    Custom Quote
                  </div>
                </div>
              </div>

              <Link 
                href="#contact"
                className="inline-flex items-center gap-3 text-[#2c4d48] hover:text-[#e49355] transition-colors group w-fit"
              >
                <span className="font-medium text-[12px] sm:text-[14px] leading-[20px] tracking-[0.55px] uppercase">
                  Get Quote
                </span>
                <svg className="group-hover:translate-x-1 transition-transform" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
