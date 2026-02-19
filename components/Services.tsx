'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Services() {
  return (
    <section id="services" className="w-full bg-neutral-cream">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-24 py-24 md:py-32">

        {/* Section Header */}
        <div className="flex flex-col gap-6 mb-24">
          <h2 className="font-['Costa_Brisa',sans-serif] italic text-[42px] sm:text-[56px] lg:text-[72px] leading-[1.2] text-[#2c4d48]">
            Everything you<br />need in Canggu
          </h2>
          <div className="bg-[#e49355] h-[2px] w-[96px]" />
        </div>

        <div className="flex flex-col gap-40">

          {/* ================================================= */}
          {/* 01 — SURF CLIPS */}
          {/* ================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center border-b border-[rgba(44,77,72,0.08)] pb-32">

            {/* Animated Stacked Images */}
            <div className="relative h-[420px] md:h-[500px]">

              <motion.img
                src="/images/sample1.jpg"
                className="absolute top-0 left-0 w-[65%] rounded-3xl shadow-xl cursor-pointer"
                animate={{ y: [0, -18, 0] }}
                whileHover={{
                  scale: 1.06,
                  zIndex: 50,
                }}
                transition={{
                  y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
                  scale: { duration: 0.3 },
                }}
              />

              <motion.img
                src="/images/sample2.jpg"
                className="absolute top-20 right-0 w-[60%] rounded-3xl shadow-xl cursor-pointer"
                animate={{ y: [0, -22, 0] }}
                whileHover={{
                  scale: 1.06,
                  zIndex: 50,
                }}
                transition={{
                  y: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 },
                  scale: { duration: 0.3 },
                }}
              />

              <motion.img
                src="/images/sample1.jpg"
                className="absolute bottom-0 left-24 w-[55%] rounded-3xl shadow-xl cursor-pointer"
                animate={{ y: [0, -14, 0] }}
                whileHover={{
                  scale: 1.06,
                  zIndex: 50,
                }}
                transition={{
                  y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
                  scale: { duration: 0.3 },
                }}
              />



            </div>

            {/* Content */}
            <div className="flex flex-col gap-10">

              <div className="text-[12px] tracking-[4px] uppercase text-[rgba(44,77,72,0.4)]">
                01
              </div>

              <h3 className="text-[44px] text-[#2c4d48] leading-[1.1]">
                Surf Clips
              </h3>

              <p className="text-[18px] text-[rgba(44,77,72,0.85)] leading-[1.7] max-w-[520px]">
                Filmed daily at Oldman’s Beach. With over a decade of experience
                capturing this iconic break, we know exactly where to position
                ourselves to catch your best waves.
              </p>

              <div className="grid grid-cols-2 gap-y-5 gap-x-14 text-[14px] text-[#2c4d48]">

                <div className="flex items-center gap-3">
                  <span className="w-4 h-[1px] bg-[#e49355]" />
                  <span>12+ years at Oldman’s</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="w-4 h-[1px] bg-[#e49355]" />
                  <span>Daily uploads</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="w-4 h-[1px] bg-[#e49355]" />
                  <span>48-hour delivery</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="w-4 h-[1px] bg-[#e49355]" />
                  <span>Crystal-clear HD</span>
                </div>

              </div>

              <Link
                href="#clips"
                className="
                  inline-flex items-center gap-3
                  bg-[#2c4d48]
                  text-white
                  px-8 py-4
                  rounded-full
                  uppercase text-sm tracking-[1px]
                  transition-all duration-300
                  hover:bg-[#e49355]
                  hover:scale-105
                  shadow-lg hover:shadow-xl
                  w-fit
                "
              >
                View Today’s Surf Clips →
              </Link>

            </div>
          </div>

          {/* ================================================= */}
          {/* 02 — SURF LESSONS */}
          {/* ================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center border-b border-[rgba(44,77,72,0.08)] pb-32">

            <div className="flex flex-col gap-10 order-2 lg:order-1">

              <div className="text-[12px] tracking-[4px] uppercase text-[rgba(44,77,72,0.4)]">
                02
              </div>

              <h3 className="text-[44px] text-[#2c4d48] leading-[1.1]">
                Surf Lessons
              </h3>

              <p className="text-[18px] text-[rgba(44,77,72,0.85)] leading-[1.7] max-w-[520px]">
                Personalized coaching for beginners and advanced surfers alike.
                Improve faster with instructors who surf these waves every day.
              </p>

              <div className="grid grid-cols-2 gap-y-5 gap-x-14 text-[14px] text-[#2c4d48]">
                <div className="flex items-center gap-3">
                  <span className="w-4 h-[1px] bg-[#e49355]" />
                  <span>2-hour sessions</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-4 h-[1px] bg-[#e49355]" />
                  <span>All levels welcome</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-4 h-[1px] bg-[#e49355]" />
                  <span>Equipment included</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-4 h-[1px] bg-[#e49355]" />
                  <span>From $50</span>
                </div>
              </div>

              <Link
                href="#contact"
                className="
                  inline-flex items-center gap-3
                  bg-[#2c4d48]
                  text-white
                  px-8 py-4
                  rounded-full
                  uppercase text-sm tracking-[1px]
                  transition-all duration-300
                  hover:bg-[#e49355]
                  hover:scale-105
                  shadow-lg hover:shadow-xl
                  w-fit
                "
              >
                Book Your Lesson →
              </Link>

            </div>

            <motion.img
              src="/images/sample1.jpg"
              className="rounded-3xl shadow-xl order-1 lg:order-2"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />

          </div>

          {/* ================================================= */}
          {/* 03 — TRAVEL PHOTO & VIDEO */}
          {/* ================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

            <motion.img
              src="/images/sample1.jpg"
              className="rounded-3xl shadow-xl"
              animate={{ y: [0, -18, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="flex flex-col gap-10">

              <div className="text-[12px] tracking-[4px] uppercase text-[rgba(44,77,72,0.4)]">
                03
              </div>

              <h3 className="text-[44px] text-[#2c4d48] leading-[1.1]">
                Travel Photo & Video
              </h3>

              <p className="text-[18px] text-[rgba(44,77,72,0.85)] leading-[1.7] max-w-[520px]">
                Cinematic storytelling across Bali. From surf trips to travel
                productions, we create visuals that feel powerful, natural,
                and timeless.
              </p>

              <div className="grid grid-cols-2 gap-y-5 gap-x-14 text-[14px] text-[#2c4d48]">
                <div className="flex items-center gap-3">
                  <span className="w-4 h-[1px] bg-[#e49355]" />
                  <span>Photo + Video</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-4 h-[1px] bg-[#e49355]" />
                  <span>Bali-wide coverage</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-4 h-[1px] bg-[#e49355]" />
                  <span>1–2 week delivery</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-4 h-[1px] bg-[#e49355]" />
                  <span>Custom quote</span>
                </div>
              </div>

              <Link
                href="#contact"
                className="
                  inline-flex items-center gap-3
                  bg-[#2c4d48]
                  text-white
                  px-8 py-4
                  rounded-full
                  uppercase text-sm tracking-[1px]
                  transition-all duration-300
                  hover:bg-[#e49355]
                  hover:scale-105
                  shadow-lg hover:shadow-xl
                  w-fit
                "
              >
                Get Your Custom Quote →
              </Link>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
