'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="w-full bg-neutral-cream">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 py-20 lg:py-28">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-12">

            {/* Headline */}
            <div className="space-y-6">
              <h2 className="font-['Costa_Brisa'] text-[48px] sm:text-[64px] lg:text-[86px] leading-[1] tracking-wide text-[#2c4d48]">
                12 Years <br />Capturing Waves
              </h2>

              <div className="w-24 h-[2px] bg-[#e49355]" />
            </div>

            {/* Stats */}
            <div className="border-t border-[#2c4d48]/10 pt-10 grid grid-cols-3 gap-8">

              <div>
                <div className="text-[36px] font-light text-[#2c4d48]">
                  12+
                </div>
                <div className="text-xs uppercase tracking-[2px] text-[#2c4d48]/50 mt-1">
                  Years
                </div>
              </div>

              <div>
                <div className="text-[36px] font-light text-[#2c4d48]">
                  365
                </div>
                <div className="text-xs uppercase tracking-[2px] text-[#2c4d48]/50 mt-1">
                  Days
                </div>
              </div>

              <div>
                <div className="text-[36px] font-light text-[#2c4d48]">
                  HD
                </div>
                <div className="text-xs uppercase tracking-[2px] text-[#2c4d48]/50 mt-1">
                  Quality
                </div>
              </div>

            </div>

            {/* Contact Links */}
            <div className="space-y-6 pt-6">

              <div className="pt-6">
                <div className="text-xs uppercase tracking-[3px] text-[#2c4d48]/40 mb-3">
                  Get in Touch
                </div>

                <Link
                  href="#contact"
                  className="flex justify-between items-center border-b border-[#2c4d48]/20 pb-3 group hover:text-[#e49355] transition-colors duration-300"
                >
                  <span>WhatsApp</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </Link>
              </div>

              <div className="pt-6">
                <div className="text-xs uppercase tracking-[3px] text-[#2c4d48]/40 mb-3">
                  Get Your Clips
                </div>

                <Link
                  href="#clips"
                  className="flex justify-between items-center border-b border-[#2c4d48]/20 pb-3 group hover:text-[#e49355] transition-colors duration-300"
                >
                  <span>View on ClipDays</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </Link>
              </div>

            </div>

          </div>

          {/* RIGHT CARD */}
          <div className="space-y-8">

            <div className="relative rounded-2xl overflow-hidden shadow-2xl">

              <Image
                src="/images/sic-photographer-luqman.jpeg"
                alt="Luqman - Surf Photographer"
                width={600}
                height={800}
                className="w-full h-auto object-cover"
                priority
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2c4d48]/80 via-[#2c4d48]/40 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 p-8 text-white space-y-4">

                <div>
                  <div className="text-2xl font-light">
                    Luqman
                  </div>
                  <div className="text-xs uppercase tracking-[3px] text-white/60">
                    Est. 2013
                  </div>
                </div>

                <div className="flex items-center gap-6 pt-4 border-t border-white/20 text-sm">

                  <div>
                    <span className="text-white font-light text-lg">12</span>{' '}
                    <span className="text-white/60 text-xs uppercase">Years</span>
                  </div>

                  <div className="w-px h-4 bg-white/30" />

                  <div>
                    <span className="text-white font-light text-lg">∞</span>{' '}
                    <span className="text-white/60 text-xs uppercase">Waves</span>
                  </div>

                  <div className="w-px h-4 bg-white/30" />

                  <div>
                    <span className="text-white font-light text-lg">01</span>{' '}
                    <span className="text-white/60 text-xs uppercase">Beach</span>
                  </div>

                </div>

              </div>

            </div>

            <div>
              <div className="text-2xl text-[#2c4d48]">
                by Luqman at Oldman's beach.
              </div>

              <p className="mt-4 text-[#2c4d48]/70 leading-relaxed">
                Every session, every wave, captured and uploaded daily to
                ClipDays. With over a decade of experience at this iconic break,
                Luqman knows exactly when and where to be.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
