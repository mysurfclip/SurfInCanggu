import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-[#fafaf8] border-t border-[rgba(44,77,72,0.1)]">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-24 py-16 md:py-20 lg:py-24">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 lg:gap-16 mb-12 md:mb-16">
          
          {/* Brand */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="relative w-[120px] h-[56px] mb-6">
              <img
                src="/images/sic-logo.png"
                alt="Surfing Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="font-normal text-[14px] leading-[1.625] text-[rgba(44,77,72,0.6)] tracking-[-0.31px] max-w-xs">
              12+ years capturing waves at Oldman's Beach, Canggu. Professional surf photography and videography services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-normal text-[12px] leading-[16px] text-[rgba(44,77,72,0.4)] tracking-[2.4px] uppercase mb-6">
              Quick Links
            </h4>
            <div className="flex flex-col gap-4">
              <Link href="#clips" className="font-normal text-[14px] leading-[24px] text-[rgba(44,77,72,0.8)] hover:text-[#e49355] tracking-[-0.31px] transition-colors">
                Daily Clips
              </Link>
              <Link href="#about" className="font-normal text-[14px] leading-[24px] text-[rgba(44,77,72,0.8)] hover:text-[#e49355] tracking-[-0.31px] transition-colors">
                About
              </Link>
              <Link href="#services" className="font-normal text-[14px] leading-[24px] text-[rgba(44,77,72,0.8)] hover:text-[#e49355] tracking-[-0.31px] transition-colors">
                Services
              </Link>
              <Link href="#contact" className="font-normal text-[14px] leading-[24px] text-[rgba(44,77,72,0.8)] hover:text-[#e49355] tracking-[-0.31px] transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-normal text-[12px] leading-[16px] text-[rgba(44,77,72,0.4)] tracking-[2.4px] uppercase mb-6">
              Services
            </h4>
            <div className="flex flex-col gap-3">
              <Link href="#services" className="font-normal text-[14px] leading-[24px] text-[rgba(44,77,72,0.8)] hover:text-[#e49355] tracking-[-0.31px] transition-colors">
                Surf Clips
              </Link>
              <Link href="#services" className="font-normal text-[14px] leading-[24px] text-[rgba(44,77,72,0.8)] hover:text-[#e49355] tracking-[-0.31px] transition-colors">
                Surf Lessons
              </Link>
              <Link href="#services" className="font-normal text-[14px] leading-[24px] text-[rgba(44,77,72,0.8)] hover:text-[#e49355] tracking-[-0.31px] transition-colors">
                Photo & Video
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-normal text-[12px] leading-[16px] text-[rgba(44,77,72,0.4)] tracking-[2.4px] uppercase mb-6">
              Contact
            </h4>
            <div className="flex flex-col gap-3">
              <p className="font-normal text-[14px] leading-[24px] text-[rgba(44,77,72,0.8)] tracking-[-0.31px]">
                Oldman's Beach
              </p>
              <p className="font-normal text-[14px] leading-[24px] text-[rgba(44,77,72,0.8)] tracking-[-0.31px]">
                Canggu, Bali
              </p>
              <p className="font-normal text-[14px] leading-[24px] text-[rgba(44,77,72,0.8)] tracking-[-0.31px]">
                Indonesia
              </p>
              <Link 
                href="mailto:info@surfingcanggu.com"
                className="font-normal text-[14px] leading-[24px] text-[rgba(44,77,72,0.8)] hover:text-[#e49355] tracking-[-0.31px] transition-colors"
              >
                info@surfingcanggu.com
              </Link>
            </div>
          </div>
        </div>

        {/* Social Links - Mobile/Tablet */}
        <div className="flex gap-4 mb-10 pb-10 border-b border-[rgba(44,77,72,0.1)] lg:hidden">
          <Link 
            href="https://instagram.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full border border-[rgba(44,77,72,0.2)] hover:border-[#e49355] hover:bg-[rgba(228,147,85,0.05)] transition-all"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
            </svg>
          </Link>
          <Link 
            href="https://wa.me/1234567890" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full border border-[rgba(44,77,72,0.2)] hover:border-[#e49355] hover:bg-[rgba(228,147,85,0.05)] transition-all"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M21 15.46l-3.09 3.09c-.49.49-1.13.73-1.77.73-3.69 0-7.13-1.43-9.7-4.03-2.56-2.56-3.98-5.99-3.98-9.66 0-.64.24-1.28.73-1.77L6.28 1l3.69 4.92L8.62 7.27c-.24.24-.31.61-.15.92.51 1.02 1.21 1.95 2.08 2.82.87.87 1.8 1.57 2.82 2.08.31.16.68.09.92-.15l1.35-1.35L21 15.46z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-[rgba(44,77,72,0.1)]">
          <p className="font-normal text-[12px] sm:text-[14px] leading-[20px] text-[rgba(44,77,72,0.4)] tracking-[-0.31px]">
            © 2024 Surfing in Canggu. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="font-normal text-[12px] sm:text-[14px] leading-[20px] text-[rgba(44,77,72,0.6)] hover:text-[#e49355] tracking-[-0.31px] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="font-normal text-[12px] sm:text-[14px] leading-[20px] text-[rgba(44,77,72,0.6)] hover:text-[#e49355] tracking-[-0.31px] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
