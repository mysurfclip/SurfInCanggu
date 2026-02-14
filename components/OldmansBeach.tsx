'use client'

import Link from 'next/link'

export default function OldmansBeach() {
  return (
    <section className="relative bg-[#2c4d48] py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px]">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* LEFT - Sticky Image */}
          <div className="relative">
            <div className="lg:sticky lg:top-32">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.5)]">
                <img
                  src="/images/oldmans-beach.svg"
                  alt="Oldman's Beach"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* RIGHT - Scrolling Content */}
          <div className="space-y-24">

            <div className="space-y-8">
              <div className="uppercase tracking-[4px] text-white/40 text-sm">
                The Spot
              </div>

              <h2 className="font-['Costa_Brisa',sans-serif] italic text-[72px] leading-[1.05] text-white">
                Oldman's Beach,<br />
                Canggu
              </h2>

              <div className="w-24 h-[2px] bg-[#e49355]" />
            </div>

            <div className="space-y-8 max-w-[560px]">
              <p className="text-white/80 text-xl leading-relaxed">
                For 12 years, Luqman has been stationed at Oldman's beach,
                Canggu’s most iconic surf spot.
              </p>

              <p className="text-white/60 leading-relaxed">
                From dawn patrol to sunset sessions, every wave is captured
                in crystal-clear HD. Whether you're a beginner or a pro,
                your moment is preserved forever.
              </p>
            </div>

            <Link
              href="#clips"
              className="inline-flex items-center gap-3 text-white hover:text-[#e49355] transition-colors"
            >
              View Today’s Session →
            </Link>

          </div>

        </div>
      </div>
    </section>
  )
}
