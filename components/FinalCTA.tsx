import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section className="w-full bg-[#2c4d48]">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-24 py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          
          {/* Left - Heading and CTA */}
          <div className="flex flex-col gap-8 lg:gap-12">
            <div className="flex flex-col gap-4 lg:gap-[25px]">
              <div className="font-normal text-[12px] leading-[16px] text-[rgba(255,255,255,0.4)] tracking-[2.4px] uppercase">
                Start Today
              </div>
              <h2 className="font-['Costa_Brisa',sans-serif] text-[40px] sm:text-[56px] lg:text-[72px] leading-[1.2]">
                <span className="text-white tracking-[1.66px]">Ready to see<br /></span>
                <span className="italic text-[#e49355] tracking-[1.66px]">your waves?</span>
              </h2>
              <div className="bg-[#e49355] h-[1px] w-[96px]" />
            </div>
            
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-3 bg-white hover:bg-[#fafaf8] text-[#2c4d48] px-8 py-4 rounded-full transition-colors w-full sm:w-auto"
            >
              <span className="font-light text-[14px] tracking-[-0.15px]">Get Your Clips</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>

            {/* About Box */}
            <div className="hidden lg:flex flex-col gap-6 pt-8 border-t border-[rgba(255,255,255,0.1)]">
              <h3 className="font-normal text-[24px] leading-[32px] text-white tracking-[-0.53px]">
                Surfing in<br />Canggu
              </h3>
              <p className="font-normal text-[14px] sm:text-[16px] leading-[1.625] text-[rgba(255,255,255,0.6)] tracking-[-0.31px] max-w-md">
                Luqman has been shooting on location at all the surf breaks in and around Canggu for over 12 years of his career. With an extensive portfolio of clients all around the world.
              </p>
              <Link 
                href="#about"
                className="inline-flex items-center gap-3 text-white hover:text-[#e49355] transition-colors group w-fit"
              >
                <span className="font-normal text-[14px] leading-[24px] tracking-[-0.31px]">
                  About Luqman & Oldman's Beach
                </span>
                <svg className="group-hover:translate-x-1 transition-transform" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right - Stats and Links */}
          <div className="flex flex-col gap-8 lg:gap-12">
            
            {/* Stats */}
            <div className="border-t border-[rgba(255,255,255,0.1)] pt-8">
              <div className="grid grid-cols-3 gap-4 lg:gap-0">
                <div className="flex flex-col gap-2">
                  <div className="font-light text-[28px] sm:text-[36px] leading-[1.2] text-white tracking-[0.37px]">
                    12+
                  </div>
                  <div className="font-normal text-[10px] sm:text-[12px] leading-[16px] text-[rgba(255,255,255,0.4)] tracking-[0.6px] uppercase">
                    Years
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="font-light text-[28px] sm:text-[36px] leading-[1.2] text-white tracking-[0.37px]">
                    365
                  </div>
                  <div className="font-normal text-[10px] sm:text-[12px] leading-[16px] text-[rgba(255,255,255,0.4)] tracking-[0.6px] uppercase">
                    Days
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="font-light text-[28px] sm:text-[36px] leading-[1.2] text-white tracking-[0.37px]">
                    HD
                  </div>
                  <div className="font-normal text-[10px] sm:text-[12px] leading-[16px] text-[rgba(255,255,255,0.4)] tracking-[0.6px] uppercase">
                    Quality
                  </div>
                </div>
              </div>
            </div>

            {/* Resources */}
            <div className="border-t border-[rgba(255,255,255,0.1)] pt-8">
              <h4 className="font-normal text-[12px] leading-[16px] text-[rgba(255,255,255,0.4)] tracking-[2.4px] uppercase mb-6">
                Resources
              </h4>
              <div className="flex flex-col gap-4">
                <Link href="#clips" className="flex items-center justify-between group hover:border-b hover:border-[rgba(255,255,255,0.2)] pb-2 transition-all">
                  <span className="font-normal text-[14px] sm:text-[16px] leading-[24px] text-white tracking-[-0.31px]">
                    Daily Clips
                  </span>
                  <svg className="text-[rgba(255,255,255,0.4)] group-hover:text-[#e49355] group-hover:translate-x-1 transition-all" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link href="#about" className="flex items-center justify-between group hover:border-b hover:border-[rgba(255,255,255,0.2)] pb-2 transition-all">
                  <span className="font-normal text-[14px] sm:text-[16px] leading-[24px] text-white tracking-[-0.31px]">
                    About
                  </span>
                  <svg className="text-[rgba(255,255,255,0.4)] group-hover:text-[#e49355] group-hover:translate-x-1 transition-all" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link href="#contact" className="flex items-center justify-between group hover:border-b hover:border-[rgba(255,255,255,0.2)] pb-2 transition-all">
                  <span className="font-normal text-[14px] sm:text-[16px] leading-[24px] text-white tracking-[-0.31px]">
                    Contact
                  </span>
                  <svg className="text-[rgba(255,255,255,0.4)] group-hover:text-[#e49355] group-hover:translate-x-1 transition-all" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Connect */}
            <div className="border-t border-[rgba(255,255,255,0.1)] pt-8">
              <h4 className="font-normal text-[12px] leading-[16px] text-[rgba(255,255,255,0.4)] tracking-[2.4px] uppercase mb-6">
                Connect
              </h4>
              <div className="flex flex-col gap-4">
                <Link 
                  href="https://instagram.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(228,147,85,0.15)] border border-[rgba(255,255,255,0.1)] hover:border-[rgba(228,147,85,0.3)] px-6 py-4 rounded-full transition-all group"
                >
                  <svg className="flex-shrink-0" width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="17.5" cy="6.5" r="0.5" fill="white"/>
                  </svg>
                  <span className="font-normal text-[14px] leading-[24px] text-white tracking-[-0.31px]">
                    Instagram
                  </span>
                </Link>
                <Link 
                  href="https://wa.me/1234567890" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(228,147,85,0.15)] border border-[rgba(255,255,255,0.1)] hover:border-[rgba(228,147,85,0.3)] px-6 py-4 rounded-full transition-all group"
                >
                  <svg className="flex-shrink-0" width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M21 15.46l-3.09 3.09c-.49.49-1.13.73-1.77.73-3.69 0-7.13-1.43-9.7-4.03-2.56-2.56-3.98-5.99-3.98-9.66 0-.64.24-1.28.73-1.77L6.28 1l3.69 4.92L8.62 7.27c-.24.24-.31.61-.15.92.51 1.02 1.21 1.95 2.08 2.82.87.87 1.8 1.57 2.82 2.08.31.16.68.09.92-.15l1.35-1.35L21 15.46z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="font-normal text-[14px] leading-[24px] text-white tracking-[-0.31px]">
                    WhatsApp
                  </span>
                </Link>
              </div>
            </div>

            {/* Mobile About Box */}
            <div className="lg:hidden flex flex-col gap-6 pt-8 border-t border-[rgba(255,255,255,0.1)]">
              <h3 className="font-normal text-[24px] leading-[32px] text-white tracking-[-0.53px]">
                Surfing in Canggu
              </h3>
              <p className="font-normal text-[14px] sm:text-[16px] leading-[1.625] text-[rgba(255,255,255,0.6)] tracking-[-0.31px]">
                Luqman has been shooting on location at all the surf breaks in and around Canggu for over 12 years of his career.
              </p>
              <Link 
                href="#about"
                className="inline-flex items-center gap-3 text-white hover:text-[#e49355] transition-colors group w-fit"
              >
                <span className="font-normal text-[14px] leading-[24px] tracking-[-0.31px]">
                  About Luqman
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
