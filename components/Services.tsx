'use client';

import Link from 'next/link';

export default function Services() {
  return (
    <section
      id="services"
      className="w-full bg-neutral-cream"
      aria-labelledby="services-heading"
    >
      <div className="section-wrap">

        {/* ================= Section Header ================= */}
        <header className="flex flex-col gap-6 mb-20 md:mb-24">
          <h2
            id="services-heading"
            className="font-display italic text-[42px] sm:text-[56px] lg:text-[72px] leading-[1.2] text-primary-forest"
          >
            Everything you<br />need in Canggu
          </h2>
          <div className="bg-accent-orange h-[2px] w-[96px]" />
        </header>

        <div className="flex flex-col gap-24 md:gap-32 lg:gap-40">

          {/* ================================================= */}
          {/* 01 — SURF CLIPS */}
          {/* ================================================= */}
          <article className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center border-b border-neutral-border pb-20 md:pb-28 lg:pb-32">

            {/*
              Image Stack — semua foto pakai % relative ke figure
              Tidak ada overflow — semua foto masuk dalam batas figure
              
              375px  : h-[280px]
              640px  : h-[340px]
              768px  : h-[400px]
              1024px : h-[420px]
              1280px : h-[440px]
            */}
            <figure
              className="
                group relative w-full
                h-[280px]
                sm:h-[340px]
                md:h-[400px]
                lg:h-[420px]
                xl:h-[440px]
              "
            >
              {/* Foto kiri atas — belakang */}
              <div
                className="
                  absolute top-0 left-0
                  w-[52%] h-[58%]
                  overflow-hidden rounded-2xl shadow-soft
                  rotate-[-4deg] origin-top-left
                  z-10
                  transition-all duration-500 ease-out
                  lg:group-hover:rotate-[-8deg]
                  lg:group-hover:-translate-x-2
                  lg:group-hover:-translate-y-2
                "
              >
                <img
                  src="/images/sample1.jpg"
                  alt="Surf clip example 1"
                  className="w-full h-full object-cover transition-transform duration-500 lg:group-hover:scale-105"
                />
              </div>

              {/* Foto kanan atas — belakang */}
              <div
                className="
                  absolute top-0 right-0
                  w-[48%] h-[54%]
                  overflow-hidden rounded-2xl shadow-soft
                  rotate-[3deg] origin-top-right
                  z-10
                  transition-all duration-500 ease-out
                  lg:group-hover:rotate-[7deg]
                  lg:group-hover:translate-x-2
                  lg:group-hover:-translate-y-2
                "
              >
                <img
                  src="/images/sample2.jpg"
                  alt="Surf clip example 2"
                  className="w-full h-full object-cover transition-transform duration-500 lg:group-hover:scale-105"
                />
              </div>

              {/* Foto tengah bawah — depan */}
              <div
                className="
                  absolute bottom-0 left-[18%]
                  w-[54%] h-[58%]
                  overflow-hidden rounded-2xl shadow-premium
                  rotate-[0deg]
                  z-20
                  transition-all duration-500 ease-out
                  lg:group-hover:scale-105
                  lg:group-hover:shadow-[0_40px_100px_rgba(0,0,0,0.3)]
                "
              >
                <img
                  src="/images/sample1.jpg"
                  alt="Surf clip example 3"
                  className="w-full h-full object-cover transition-transform duration-500 lg:group-hover:scale-110"
                />
              </div>

            </figure>

            {/* Content */}
            <div className="flex flex-col gap-10">
              <p className="text-[12px] tracking-[4px] uppercase text-neutral-textTertiary">01</p>
              <h3 className="text-[32px] sm:text-[38px] lg:text-[44px] text-primary-forest leading-[1.1]">
                Surf Clips
              </h3>
              <p className="text-[16px] sm:text-[18px] text-neutral-textSecondary leading-[1.7] max-w-[520px]">
                Filmed daily at Oldman's Beach. With over a decade of experience
                capturing this iconic break, we know exactly where to position
                ourselves to catch your best waves.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 sm:gap-y-5 gap-x-10 sm:gap-x-14 text-[14px] text-primary-forest">
                <li className="flex items-center gap-3">
                  <span className="w-4 h-[1px] bg-accent-orange" />
                  <span>12+ years at Oldman's</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-4 h-[1px] bg-accent-orange" />
                  <span>Daily uploads</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-4 h-[1px] bg-accent-orange" />
                  <span>48-hour delivery</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-4 h-[1px] bg-accent-orange" />
                  <span>Crystal-clear HD</span>
                </li>
              </ul>
              <Link
                href="#clips"
                className="inline-flex items-center gap-3 bg-primary-forest text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full uppercase text-xs sm:text-sm tracking-[1px] transition-all duration-300 hover:bg-accent-orange hover:scale-105 shadow-soft hover:shadow-premium w-fit"
              >
                View Today's Surf Clips →
              </Link>
            </div>

          </article>

          {/* ================================================= */}
          {/* 02 — SURF LESSONS */}
          {/* ================================================= */}
          <article className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center border-b border-neutral-border pb-20 md:pb-28 lg:pb-32">

            <div className="flex flex-col gap-10 order-2 lg:order-1">
              <p className="text-[12px] tracking-[4px] uppercase text-neutral-textTertiary">02</p>
              <h3 className="text-[32px] sm:text-[38px] lg:text-[44px] text-primary-forest leading-[1.1]">
                Surf Lessons
              </h3>
              <p className="text-[16px] sm:text-[18px] text-neutral-textSecondary leading-[1.7] max-w-[520px]">
                Personalized coaching for beginners and advanced surfers alike.
                Improve faster with instructors who surf these waves every day.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 sm:gap-y-5 gap-x-10 sm:gap-x-14 text-[14px] text-primary-forest">
                <li className="flex items-center gap-3">
                  <span className="w-4 h-[1px] bg-accent-orange" />
                  <span>2-hour sessions</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-4 h-[1px] bg-accent-orange" />
                  <span>All levels welcome</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-4 h-[1px] bg-accent-orange" />
                  <span>Equipment included</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-4 h-[1px] bg-accent-orange" />
                  <span>From $50</span>
                </li>
              </ul>
              <Link
                href="https://wa.me/6285792835235"
                className="inline-flex items-center gap-3 bg-primary-forest text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full uppercase text-xs sm:text-sm tracking-[1px] transition-all duration-300 hover:bg-accent-orange hover:scale-105 shadow-soft hover:shadow-premium w-fit"
              >
                Book Your Lesson →
              </Link>
            </div>

            <figure className="order-1 lg:order-2 overflow-hidden rounded-3xl shadow-soft w-full max-w-[520px] mx-auto lg:mx-0">
              <img
                src="/images/sample1.jpg"
                alt="Surf lesson session"
                className="w-full h-full object-cover transition-transform duration-500 lg:hover:scale-105"
              />
            </figure>

          </article>

          {/* ================================================= */}
          {/* 03 — TRAVEL PHOTO & VIDEO */}
          {/* ================================================= */}
          <article className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">

            <figure className="overflow-hidden rounded-3xl shadow-soft w-full max-w-[520px] mx-auto lg:mx-0">
              <img
                src="/images/sample1.jpg"
                alt="Travel photo and video project"
                className="w-full h-full object-cover transition-transform duration-500 lg:hover:scale-105"
              />
            </figure>

            <div className="flex flex-col gap-10">
              <p className="text-[12px] tracking-[4px] uppercase text-neutral-textTertiary">03</p>
              <h3 className="text-[32px] sm:text-[38px] lg:text-[44px] text-primary-forest leading-[1.1]">
                Travel Photo & Video
              </h3>
              <p className="text-[16px] sm:text-[18px] text-neutral-textSecondary leading-[1.7] max-w-[520px]">
                Cinematic storytelling across Bali. From surf trips to travel
                productions, we create visuals that feel powerful, natural,
                and timeless.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 sm:gap-y-5 gap-x-10 sm:gap-x-14 text-[14px] text-primary-forest">
                <li className="flex items-center gap-3">
                  <span className="w-4 h-[1px] bg-accent-orange" />
                  <span>Photo + Video</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-4 h-[1px] bg-accent-orange" />
                  <span>Bali-wide coverage</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-4 h-[1px] bg-accent-orange" />
                  <span>1–2 week delivery</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-4 h-[1px] bg-accent-orange" />
                  <span>Custom quote</span>
                </li>
              </ul>
              <Link
                href="https://wa.me/6285792835235"
                className="inline-flex items-center gap-3 bg-primary-forest text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full uppercase text-xs sm:text-sm tracking-[1px] transition-all duration-300 hover:bg-accent-orange hover:scale-105 shadow-soft hover:shadow-premium w-fit"
              >
                Get Your Custom Quote →
              </Link>
            </div>

          </article>

        </div>
      </div>
    </section>
  );
}