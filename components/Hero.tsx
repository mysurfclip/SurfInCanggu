"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">

      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/hero-videos.mov"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-end">
        <div className="container pb-16 md:pb-20">

          {/* Label */}
          <p className="text-caption tracking-[2px] text-white/60 uppercase mb-6">
            Start Today
          </p>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 lg:gap-16">

            {/* Left Content */}
            <div className="max-w-[700px]">

              <h1 className="font-display text-hero md:text-hero-lg text-white leading-[1.05]">
                Ready to see
              </h1>

              <h1 className="font-display text-hero md:text-hero-lg text-accent-orange leading-[1.05] mt-2 md:mt-3">
                your waves?
              </h1>

              <div className="mt-8 md:mt-10">
                <Link
                  href="#clips"
                  className="
                    inline-flex items-center gap-3
                    border border-white/30
                    px-8 py-4
                    rounded-full
                    text-white
                    transition-all duration-300
                    hover:bg-white hover:text-primary-forest
                  "
                >
                  <span className="font-body text-bodyBase">
                    Get Your Clips
                  </span>
                  →
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-end gap-10 md:gap-14 lg:pb-4">
              <Stat number="12+" label="Years" />
              <Stat number="365" label="Days" />
              <Stat number="HD" label="Quality" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================
   STAT COMPONENT
========================= */

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex flex-col">
      <div className="font-beckman text-white text-h2 md:text-h2-lg font-semibold leading-none">
        {number}
      </div>
      <div className="font-body text-label text-white/40 uppercase mt-2">
        {label}
      </div>
    </div>
  );
}
