import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="w-full bg-[#fafaf8]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[120px] py-8 sm:py-12 lg:py-[60px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* Left Column - Text & Stats */}
          <div className="flex flex-col gap-6 lg:gap-[45px] order-2 lg:order-1">

            {/* Title */}
            <div className="flex flex-col gap-4 lg:gap-[25px]">
              <h1 className="font-['Costa_Brisa',sans-serif] italic text-[48px] sm:text-[64px] lg:text-[86px] leading-[1.2] lg:leading-[86px] text-[#2c4d48] tracking-[1.98px]">
                12 Years<br />
                Capturing Waves
              </h1>
              <div className="bg-[#e49355] h-[1px] w-[96px]" />
            </div>

            {/* Stats */}
            <div className="border-t border-[rgba(44,77,72,0.1)] pt-8 lg:pt-[32.55px]">
              <div className="grid grid-cols-3 gap-4 lg:gap-0">
                <div className="flex flex-col gap-2">
                  <div className="font-light text-[28px] sm:text-[36px] leading-[1.2] text-[#2c4d48] tracking-[0.37px]">
                    12+
                  </div>
                  <div className="font-normal text-[10px] sm:text-[12px] leading-[16px] text-[rgba(44,77,72,0.4)] tracking-[0.6px] uppercase">
                    Years
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="font-light text-[28px] sm:text-[36px] leading-[1.2] text-[#2c4d48] tracking-[0.37px]">
                    365
                  </div>
                  <div className="font-normal text-[10px] sm:text-[12px] leading-[16px] text-[rgba(44,77,72,0.4)] tracking-[0.6px] uppercase">
                    Days
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="font-light text-[28px] sm:text-[36px] leading-[1.2] text-[#2c4d48] tracking-[0.37px]">
                    HD
                  </div>
                  <div className="font-normal text-[10px] sm:text-[12px] leading-[16px] text-[rgba(44,77,72,0.4)] tracking-[0.6px] uppercase">
                    Quality
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Links */}
            <div className="flex flex-col gap-3 lg:gap-[13px]">
              {/* Get in Touch */}
              <div className="pt-4">
                <div className="flex flex-col gap-4">
                  <div className="font-normal text-[12px] leading-[16px] text-[rgba(44,77,72,0.4)] tracking-[2.4px] uppercase">
                    Get in Touch
                  </div>
                  <a
                    href="#"
                    className="flex items-center justify-between pb-2 border-b border-[rgba(44,77,72,0.2)] group hover:border-[#e49355] transition-colors"
                  >
                    <span className="font-normal text-[14px] sm:text-[16px] leading-[24px] text-[#2c4d48] tracking-[-0.31px]">
                      WhatsApp
                    </span>
                    <svg className="text-[rgba(44,77,72,0.4)] group-hover:text-[#e49355] transition-colors" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Get Your Clips */}
              <div className="pt-4">
                <div className="flex flex-col gap-4">
                  <div className="font-normal text-[12px] leading-[16px] text-[rgba(44,77,72,0.4)] tracking-[2.4px] uppercase">
                    Get Your Clips
                  </div>
                  <a
                    href="#"
                    className="flex items-center justify-between pb-2 border-b border-[rgba(44,77,72,0.2)] group hover:border-[#e49355] transition-colors"
                  >
                    <span className="font-normal text-[14px] sm:text-[16px] leading-[24px] text-[#2c4d48] tracking-[-0.31px]">
                      View on ClipDays
                    </span>
                    <svg className="text-[rgba(44,77,72,0.4)] group-hover:text-[#e49355] transition-colors" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image Card */}
          <div className="order-1 lg:order-2 w-full max-w-[420px] lg:max-w-none mx-auto">
            <div className="flex items-start gap-2 lg:gap-0">
              {/* Photographer Badge */}
              <div className="hidden lg:flex flex-col items-center gap-2 bg-[#e49355] rounded-full px-2 py-4 shadow-lg">
                <div className="flex items-center justify-center h-[163px] w-[15px]">
                  <div className="rotate-90 whitespace-nowrap">
                    <p className="font-medium text-[10px] leading-[15px] text-white tracking-[3.12px] uppercase">
                      Your Photographer
                    </p>
                  </div>
                </div>
                <div className="w-1 h-1 rounded-full bg-[rgba(255,255,255,0.8)]" />
              </div>

              {/* Image Card */}
              <div className="flex-1 lg:ml-0">
                <div className="relative w-full rounded-2xl overflow-hidden">
                  {/* Image */}
                  <div className="relative aspect-[389/436]">
                    <img
                      src="/images/sic-photographer-luqman.jpeg"
                      alt="Surfer at Oldman's Beach"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[rgba(228,147,85,0.08)] via-transparent to-[rgba(44,77,72,0.12)]" />

                    {/* Bottom Info Card */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[rgba(44,77,72,0.9)] via-[rgba(44,77,72,0.6)] to-transparent px-6 sm:px-8 pt-8 pb-6 sm:pb-8">
                      <div className="flex items-end justify-between mb-4 sm:mb-6">
                        <div>
                          <h3 className="font-light text-[20px] sm:text-[24px] leading-[32px] text-white tracking-[-0.53px]">
                            Luqman
                          </h3>
                          <p className="font-normal text-[12px] leading-[16px] text-[rgba(255,255,255,0.6)] tracking-[3.6px] uppercase">
                            Est. 2013
                          </p>
                        </div>
                        <button className="w-[48px] h-[48px] rounded-full border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.1)] flex items-center justify-center hover:bg-[rgba(255,255,255,0.2)] transition-colors">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M7 4l6 6-6 6M13 4l6 6-6 6" stroke="white" strokeOpacity="0.8" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </button>
                      </div>

                      {/* Stats */}
                      <div className="flex items-center gap-6 pt-4 border-t border-[rgba(255,255,255,0.1)]">
                        <div className="flex items-baseline gap-2">
                          <span className="font-light text-[16px] sm:text-[20px] leading-[28px] text-white tracking-[-0.45px]">
                            12
                          </span>
                          <span className="font-normal text-[10px] leading-[15px] text-[rgba(255,255,255,0.5)] tracking-[0.62px] uppercase">
                            Years
                          </span>
                        </div>
                        <div className="w-px h-3 bg-[rgba(255,255,255,0.2)]" />
                        <div className="flex items-baseline gap-2">
                          <span className="font-light text-[16px] sm:text-[20px] leading-[28px] text-white tracking-[-0.45px]">
                            ∞
                          </span>
                          <span className="font-normal text-[10px] leading-[15px] text-[rgba(255,255,255,0.5)] tracking-[0.62px] uppercase">
                            Waves
                          </span>
                        </div>
                        <div className="w-px h-3 bg-[rgba(255,255,255,0.2)]" />
                        <div className="flex items-baseline gap-2">
                          <span className="font-light text-[16px] sm:text-[20px] leading-[28px] text-white tracking-[-0.45px]">
                            01
                          </span>
                          <span className="font-normal text-[10px] leading-[15px] text-[rgba(255,255,255,0.5)] tracking-[0.62px] uppercase">
                            Beach
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mt-4 lg:mt-[21px] max-w-[387px]">
                  <p className="font-normal text-[20px] sm:text-[24px] leading-[1.625] text-[#2c4d48] tracking-[0.07px] mb-4">
                    by Luqman at Oldman's beach.
                  </p>
                  <p className="font-normal text-[14px] sm:text-[16px] leading-[1.625] text-[rgba(44,77,72,0.6)] tracking-[-0.31px]">
                    Every session, every wave, captured and uploaded daily to ClipDays. With over a decade of experience at this iconic break, Luqman knows exactly when and where to be.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
