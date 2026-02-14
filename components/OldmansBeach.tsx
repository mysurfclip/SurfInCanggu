'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function OldmansBeach() {
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll progress across whole section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  // Subtle parallax movement
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#2c4d48] h-[180vh]"
    >
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen flex items-center">
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-16 lg:gap-24 items-center">

            {/* Left — Cinematic Image */}
            <div>
              <motion.div
                style={{
                  y: imageY,
                  scale: imageScale,
                }}
                className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl shadow-black/30"
              >
                <img
                  src="/images/oldmans-beach.svg"
                  alt="Oldman's Beach"
                  className="w-full h-full object-cover"
                />

                {/* Subtle overlay depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </motion.div>
            </div>

            {/* Right — Flowing Text */}
            <div className="space-y-16">

              {/* Eyebrow */}
              <div className="text-[11px] tracking-[3px] uppercase text-white/40">
                The Spot
              </div>

              {/* Title */}
              <div className="space-y-4">
                <h2 className="font-['Costa_Brisa',sans-serif] italic text-[48px] sm:text-[64px] lg:text-[86px] leading-[1.1] text-white tracking-[1.66px]">
                  Oldman's Beach,
                </h2>
                <h2 className="font-['Costa_Brisa',sans-serif] italic text-[48px] sm:text-[64px] lg:text-[86px] leading-[1.1] text-white tracking-[1.66px]">
                  Canggu
                </h2>
                <div className="bg-[#e49355] h-[2px] w-[120px]" />
              </div>

              {/* Description */}
              <div className="space-y-8 max-w-[560px]">
                <p className="text-[20px] sm:text-[22px] leading-[1.6] text-white/85">
                  For 12 years, Luqman has been stationed at Oldman's beach,
                  Canggu's most iconic surf spot.
                </p>

                <p className="text-[16px] leading-[1.7] text-white/60">
                  From dawn patrol to sunset sessions, every wave is captured in crystal-clear HD.
                  Whether you're a beginner finding your first barrel or a pro throwing airs,
                  your moment is preserved forever.
                </p>
              </div>

              {/* Features */}
              <div className="space-y-12 pt-8">

                <div className="border-t border-white/10 pt-8">
                  <h3 className="text-[24px] text-white mb-4">
                    Perfect Coverage
                  </h3>
                  <p className="text-white/60 max-w-[520px]">
                    Positioned at the optimal angle to catch every ride from paddle-out to the beach.
                  </p>
                </div>

                <div className="border-t border-white/10 pt-8">
                  <h3 className="text-[24px] text-white mb-4">
                    Daily Uploads
                  </h3>
                  <p className="text-white/60 max-w-[520px]">
                    All clips uploaded within hours so you never miss your best wave.
                  </p>
                </div>

                <div className="border-t border-white/10 pt-8">
                  <h3 className="text-[24px] text-white mb-4">
                    HD Quality
                  </h3>
                  <p className="text-white/60 max-w-[520px]">
                    Professional cinema-grade equipment ensures every detail is captured.
                  </p>
                </div>

              </div>

              {/* CTA */}
              <div className="pt-12">
                <Link
                  href="#clips"
                  className="group inline-flex items-center gap-4 text-white hover:text-[#e49355] transition-all duration-300"
                >
                  <span className="relative">
                    View Today's Session
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#e49355] group-hover:w-full transition-all duration-500" />
                  </span>
                  <svg
                    className="group-hover:translate-x-2 transition-transform duration-300"
                    width="18"
                    height="18"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M3 8h10M8 3l5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
