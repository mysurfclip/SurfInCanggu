import Link from 'next/link';

export default function OldmansBeach() {
  return (
    <section className="w-full bg-[#2c4d48]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[120px] py-12 sm:py-16 lg:py-[100px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <img
                src="/images/oldmans-beach.svg"
                alt="Oldman's Beach wave"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(228,147,85,0.08)] via-transparent to-[rgba(44,77,72,0.12)]" />
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2">
            <div className="flex flex-col gap-6 lg:gap-[45px]">
              
              {/* Header */}
              <div className="flex flex-col gap-4 lg:gap-[25px]">
                <div className="font-normal text-[12px] leading-[16px] text-[rgba(255,255,255,0.4)] tracking-[2.4px] uppercase">
                  The Spot
                </div>
                <h2 className="font-['Costa_Brisa',sans-serif] italic text-[40px] sm:text-[56px] lg:text-[72px] leading-[1.2] text-white tracking-[1.66px]">
                  Oldman's Beach,<br />Canggu
                </h2>
                <div className="bg-[#e49355] h-[1px] w-[96px]" />
              </div>

              {/* Description */}
              <div className="flex flex-col gap-6">
                <p className="font-normal text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.625] text-[rgba(255,255,255,0.8)] tracking-[-0.45px]">
                  For 12 years, Luqman has been stationed at Oldman's beach, Canggu's most iconic surf spot.
                </p>
                <p className="font-normal text-[14px] sm:text-[16px] leading-[1.625] text-[rgba(255,255,255,0.6)] tracking-[-0.31px]">
                  From dawn patrol to sunset sessions, every wave is captured in crystal-clear HD. Whether you're a beginner finding your first barrel or a pro throwing airs, your moment is preserved forever.
                </p>
              </div>

              {/* Features */}
              <div className="flex flex-col gap-6 lg:gap-8">
                <div className="border-t border-[rgba(255,255,255,0.1)] pt-6">
                  <h3 className="font-normal text-[18px] sm:text-[20px] lg:text-[24px] leading-[32px] text-white tracking-[-0.53px] mb-3">
                    Perfect Coverage
                  </h3>
                  <p className="font-normal text-[14px] sm:text-[16px] leading-[1.625] text-[rgba(255,255,255,0.6)] tracking-[-0.31px]">
                    Positioned at the optimal angle to catch every ride from paddle-out to the beach. No wave goes unnoticed.
                  </p>
                </div>

                <div className="border-t border-[rgba(255,255,255,0.1)] pt-6">
                  <h3 className="font-normal text-[18px] sm:text-[20px] lg:text-[24px] leading-[32px] text-white tracking-[-0.53px] mb-3">
                    Daily Uploads
                  </h3>
                  <p className="font-normal text-[14px] sm:text-[16px] leading-[1.625] text-[rgba(255,255,255,0.6)] tracking-[-0.31px]">
                    All clips uploaded to ClipDays within hours. Browse, purchase, and share your best waves the same day.
                  </p>
                </div>

                <div className="border-t border-[rgba(255,255,255,0.1)] pt-6">
                  <h3 className="font-normal text-[18px] sm:text-[20px] lg:text-[24px] leading-[32px] text-white tracking-[-0.53px] mb-3">
                    HD Quality
                  </h3>
                  <p className="font-normal text-[14px] sm:text-[16px] leading-[1.625] text-[rgba(255,255,255,0.6)] tracking-[-0.31px]">
                    Professional cinema-grade equipment ensures every detail is captured, from spray off the lip to your stoke-filled smile.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-4">
                <Link 
                  href="#clips"
                  className="inline-flex items-center gap-3 text-white hover:text-[#e49355] transition-colors group"
                >
                  <span className="font-normal text-[14px] sm:text-[16px] leading-[24px] tracking-[-0.31px]">
                    View Today's Session
                  </span>
                  <svg className="group-hover:translate-x-1 transition-transform" width="16" height="16" viewBox="0 0 16 16" fill="none">
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
