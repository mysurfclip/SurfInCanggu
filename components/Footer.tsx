'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full bg-[#2c4d48] text-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">

        {/* Main Footer Content */}
        <div className="py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

            {/* LEFT — Brand */}
            <div className="flex flex-col gap-8 max-w-[420px]">

              {/* Logo */}
              <div className="relative w-[320px] md:w-[380px]">
                <Image
                  src="/images/SIC_LOGO_SIC_LOGO_DRG.svg"
                  alt="Surfing in Canggu"
                  width={600}
                  height={200}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>

              <div className="w-16 h-[2px] bg-[#e49355]" />

              <p className="text-white/70 text-[16px] leading-[1.7]">
                Luqman has been shooting surf sessions at Oldman's Beach in
                Canggu for 12 years. Daily uploads to ClipDays, plus surf
                lessons and travel photography across Bali.
              </p>

              {/* Location Badge */}
              <div className="inline-flex items-center gap-3 border border-white/20 rounded-full px-5 py-3 w-fit">
                <div className="w-2 h-2 rounded-full bg-[#e49355]" />
                <span className="text-white/80 text-[14px]">
                  Oldman's Beach, Canggu
                </span>
              </div>
            </div>

            {/* MIDDLE — Services */}
            <div className="flex flex-col gap-8">
              <span className="text-white/40 text-[12px] tracking-[3px] uppercase">
                Services
              </span>

              <div className="flex flex-col gap-6">

                {[
                  { name: 'Surf Clips', href: '#clips' },
                  { name: 'Surf Lessons', href: '#services' },
                  { name: 'Travel Photography', href: '#services' },
                ].map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="group flex items-center justify-between border-b border-white/10 pb-4 hover:border-white/30 transition-all duration-300"
                  >
                    <span className="text-white/80 group-hover:text-white transition-colors duration-300">
                      {item.name}
                    </span>

                    <span className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
                      →
                    </span>
                  </Link>
                ))}

              </div>
            </div>

            {/* RIGHT — Connect */}
            <div className="flex flex-col gap-8">
              <span className="text-white/40 text-[12px] tracking-[3px] uppercase">
                Connect
              </span>

              <div className="flex flex-col gap-6">

                {/* WhatsApp */}
                <Link
                  href="https://wa.me/1234567890"
                  target="_blank"
                  className="group flex items-center justify-between border border-white/20 hover:border-white rounded-2xl px-6 py-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div>
                    <div className="text-white/40 text-[11px] uppercase tracking-[2px]">
                      Message
                    </div>
                    <div className="text-white text-[18px] mt-1">
                      WhatsApp
                    </div>
                  </div>

                  <span className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
                    →
                  </span>
                </Link>

                {/* Instagram */}
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  className="group flex items-center justify-between border border-white/20 hover:border-white rounded-2xl px-6 py-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div>
                    <div className="text-white/40 text-[11px] uppercase tracking-[2px]">
                      Follow
                    </div>
                    <div className="text-white text-[18px] mt-1">
                      Instagram
                    </div>
                  </div>

                  <span className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
                    →
                  </span>
                </Link>

              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10" />

        {/* Bottom Bar */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-white/50 text-[13px] tracking-[1px]">

          <div>© 2026 SURFING IN CANGGU</div>

          <div className="flex items-center gap-4">
            <span>Shot by Luqman</span>
            <div className="w-1 h-1 bg-white/30 rounded-full" />
            <span>Oldman's Beach</span>
            <div className="w-1 h-1 bg-white/30 rounded-full" />
            <span>Est. 2013</span>
          </div>

        </div>
      </div>
    </footer>
  );
}
