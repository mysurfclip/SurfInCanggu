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

      {/* Content Layer */}
      <div className="relative z-10 flex min-h-screen items-end">

        {/* FULL WIDTH WRAPPER */}
        <div className="w-full">

          {/* INNER CONTAINER (ONLY FOR CONTENT ALIGNMENT) */}
          <div className="max-w-content mx-auto px-[15px] md:px-[35px] lg:px-[80px] xl:px-[100px] 2xl:px-[120px] pb-16 md:pb-20">

            {/* Label */}
            <p className="text-caption tracking-[0.2em] text-white/60 uppercase mb-6">
              Start Today
            </p>

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 lg:gap-16">

              {/* Left Content */}
              <div className="max-w-[700px]">
                <h1 className="font-display text-hero text-white leading-[1.05]">
                  Ready to see
                </h1>

                <h1 className="font-display text-hero text-accent-orange leading-[1.05] mt-2 md:mt-3">
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
                    <span className="text-bodyBase">
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
      </div>
    </section>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex flex-col">
      <div className="font-beckman text-white text-h2 font-semibold leading-none">
        {number}
      </div>
      <div className="text-label text-white/40 uppercase mt-2">
        {label}
      </div>
    </div>
  );
}
