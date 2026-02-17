"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

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
      <div className="relative z-10 h-full flex items-end">
        <div className="
          container
          px-6 md:px-sectionX
          pt-[80px] md:pt-[100px]
          pb-12 md:pb-[60px]
        ">

          {/* Label */}
          <p className="text-caption tracking-[2px] text-white/60 uppercase mb-6">
            Start Today
          </p>

          <div className="flex flex-col lg:flex-row lg:justify-between gap-12">

            {/* Left Content */}
            <div>
              <h1 className="font-display text-hero md:text-hero-lg text-white mb-2">
                Ready to see
              </h1>

              <h1 className="font-display text-hero md:text-hero-lg text-accent-orange mb-10">
                your waves?
              </h1>
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

            {/* Stats */}
            <div className="flex items-end gap-10 lg:pb-6">
              <Stat number="12+" label="Years" />
              <Divider />
              <Stat number="365" label="Days" />
              <Divider />
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
      <div className="font-beckman text-white text-h2 md:text-h2-lg font-semibold">
        {number}
      </div>
      <div className="font-body text-label text-white/40 uppercase">
        {label}
      </div>
    </div>
  );
}

/* =========================
   DIVIDER
========================= */

function Divider() {
  return <div className="w-[1px] h-12 bg-white/20" />;
}
