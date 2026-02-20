'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-[#2c4d48] text-white">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 md:px-10">

        {/* ================= MAIN CONTENT ================= */}
        <div className="py-14 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr_1fr] gap-12 lg:gap-16">

            {/* ================= LEFT — BRAND ================= */}
            <div className="flex flex-col gap-6">

              <Image
                src="/images/SIC_LOGO_SIC_LOGO_DRG.svg"
                alt="Surfing in Canggu"
                width={260}
                height={120}
                className="w-[200px] sm:w-[240px] h-auto"
                priority
              />

              <div className="w-10 h-[2px] bg-[#e49355]" />

              <p className="text-white/60 text-[14px] leading-[1.7] max-w-[420px]">
                Luqman has been shooting surf sessions at Oldman's Beach in
                Canggu for 12 years. Daily uploads to ClipDays, plus surf
                lessons and travel photography across Bali.
              </p>

              <div className="inline-flex items-center gap-3 border border-white/15 rounded-full px-4 py-2 w-fit">
                <div className="w-2 h-2 rounded-full bg-[#e49355]" />
                <span className="text-white/70 text-[13px]">
                  Oldman's Beach, Canggu
                </span>
              </div>
            </div>

            {/* ================= SERVICES ================= */}
            <div className="flex flex-col gap-6">
              <span className="text-white/40 text-[11px] tracking-[3px] uppercase">
                Services
              </span>

              <div className="flex flex-col gap-5">
                {[
                  { name: 'Surf Clips', href: '#clips' },
                  { name: 'Surf Lessons', href: '#services' },
                  { name: 'Travel Photography', href: '#services' },
                ].map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="group flex justify-between items-center border-b border-white/10 pb-3 hover:border-white/30 transition"
                  >
                    <span className="text-white/70 group-hover:text-white transition text-[14px]">
                      {item.name}
                    </span>
                    <span className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition">
                      →
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* ================= CONNECT ================= */}
            <div className="flex flex-col gap-6">
              <span className="text-white/40 text-[11px] tracking-[3px] uppercase">
                Connect
              </span>

              <div className="flex flex-col gap-4">

                {/* WhatsApp */}
                <Link
                  href="https://wa.me/6285792835235"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group border border-white/15 hover:border-white rounded-xl px-5 py-4 transition"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-white/40 text-[10px] uppercase tracking-[2px]">
                        Message
                      </div>
                      <div className="text-white text-[15px] mt-1">
                        WhatsApp
                      </div>
                    </div>
                    <span className="text-white/40 group-hover:text-white transition">
                      →
                    </span>
                  </div>
                </Link>

                {/* Instagram */}
                <Link
                  href="https://www.instagram.com/surfingincanggu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group border border-white/15 hover:border-white rounded-xl px-5 py-4 transition"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-white/40 text-[10px] uppercase tracking-[2px]">
                        Follow
                      </div>
                      <div className="text-white text-[15px] mt-1">
                        Instagram
                      </div>
                    </div>
                    <span className="text-white/40 group-hover:text-white transition">
                      →
                    </span>
                  </div>
                </Link>

              </div>
            </div>

          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10" />

        {/* Bottom Bar */}
        <div className="py-6 flex flex-col items-center md:flex-row md:justify-between gap-3 text-white/40 text-[12px] text-center md:text-left">
          <div>© 2026 SURFING IN CANGGU</div>

          <div className="flex items-center gap-3 flex-wrap justify-center md:justify-end">
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