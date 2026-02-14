'use client'

import Link from 'next/link'

export default function OldmansBeach() {
  return (
    <section className="w-full bg-[#2c4d48] py-20 md:py-28 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Image */}
          <div className="w-full rounded-2xl overflow-hidden">
            <img
              src="/images/oldmans-beach.svg"
              alt="Oldman's Beach"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-8">

            <div>
              <div className="text-xs uppercase tracking-[2px] text-white/40 mb-4">
                The Spot
              </div>

              <h2 className="font-['Costa_Brisa'] text-5xl md:text-6xl lg:text-7xl text-white leading-tight">
                Oldman's Beach,<br />Canggu
              </h2>

              <div className="w-20 h-[1px] bg-[#e49355] mt-6" />
            </div>

            <div className="space-y-4">
              <p className="text-white/80 text-lg leading-relaxed">
                For 12 years, Luqman has been stationed at Oldman's beach,
                Canggu's most iconic surf spot.
              </p>

              <p className="text-white/60 leading-relaxed">
                From dawn patrol to sunset sessions, every wave is captured
                in crystal-clear HD. Whether you're a beginner or a pro,
                your moment is preserved forever.
              </p>
            </div>

            <div className="space-y-6 pt-6 border-t border-white/10">

              <div>
                <h3 className="text-xl text-white mb-2">
                  Perfect Coverage
                </h3>
                <p className="text-white/60">
                  Positioned at the optimal angle to catch every ride.
                </p>
              </div>

              <div>
                <h3 className="text-xl text-white mb-2">
                  Daily Uploads
                </h3>
                <p className="text-white/60">
                  All clips uploaded to ClipDays within hours.
                </p>
              </div>

              <div>
                <h3 className="text-xl text-white mb-2">
                  HD Quality
                </h3>
                <p className="text-white/60">
                  Professional cinema-grade equipment ensures every detail.
                </p>
              </div>

            </div>

            <div className="pt-6">
              <Link
                href="#clips"
                className="inline-flex items-center gap-2 text-white hover:text-[#e49355] transition-colors"
              >
                View Today's Session →
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
