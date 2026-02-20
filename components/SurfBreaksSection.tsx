"use client";

import { useState } from "react";

const slides = [
  {
    name: "Old Man's",
    title: "Old Man's Beach Canggu",
    description:
      "For 12 years, Luqman has been stationed at Old Man's Beach, Canggu's most beloved surf spot.",
    highlights: [
      "Perfect Coverage — Every peak, every moment.",
      "Daily Uploads — Sessions available within 48 hours.",
      "HD Quality — Professional videography & framing.",
    ],
    image: "/images/sample1.jpg",
  },
  {
    name: "Echo Beach",
    title: "Echo Beach Canggu",
    description:
      "A powerful reef break delivering punchy, hollow waves and stunning sunsets.",
    highlights: ["Barrel Sections", "Advanced Surfer Spot", "Sunset Sessions"],
    image: "/images/sample2.jpg",
  },
  {
    name: "Pererenan",
    title: "Pererenan Canggu",
    description:
      "Less crowded coastline with consistent peaks and beautiful scenery.",
    highlights: ["Clean Lines", "Longer Rides", "Balanced Crowd"],
    image: "/images/sample1.jpg",
  },
  {
    name: "Rivermouth",
    title: "Rivermouth Canggu",
    description:
      "A dynamic shifting break offering powerful sections during solid swell.",
    highlights: ["Heavy Drops", "Fast Walls", "Advanced Only"],
    image: "/images/sample2.jpg",
  },
  {
    name: "Sandbar",
    title: "Sandbar Canggu",
    description: "Perfect when conditions align. Fun, playful and photogenic.",
    highlights: ["Fun Conditions", "Photo Friendly", "Consistent Peaks"],
    image: "/images/sample1.jpg",
  },
];

export default function SurfBreaksSection() {
  const [current, setCurrent] = useState<number>(0);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const activeSlide = slides[current];

  return (
    <section
      className="bg-primary-forest text-white"
      aria-labelledby="surf-breaks-title"
    >
      <div className="section-wrap max-w-[1440px] mx-auto flex flex-col gap-8 sm:gap-12 md:gap-16">

        {/* ================= HEADER ================= */}
        <header className="text-center space-y-4 md:space-y-6">
          <h2
            id="surf-breaks-title"
            className="font-display text-3xl sm:text-4xl md:text-6xl xl:text-7xl"
          >
            Canggu Surf Breaks
          </h2>

          {/* Nav tabs — scroll horizontal di mobile, wrap di sm+ */}
          <nav aria-label="Surf breaks">
            <ul className="
              flex justify-start sm:justify-center
              gap-4 sm:gap-6 md:gap-8
              overflow-x-auto sm:flex-wrap
              text-white/60 text-xs sm:text-sm tracking-wide
              pb-1 sm:pb-0
              px-1 sm:px-0
              scrollbar-none
            ">
              {slides.map((slide, index) => (
                <li key={index} className="shrink-0 sm:shrink">
                  <button
                    type="button"
                    onClick={() => setCurrent(index)}
                    className={`transition whitespace-nowrap ${
                      current === index ? "text-[#E49355]" : "hover:text-white"
                    }`}
                    aria-current={current === index ? "true" : undefined}
                    aria-label={`Go to ${slide.name}`}
                  >
                    {slide.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        {/* ================= MAIN CONTENT ================= */}
        <main className="flex justify-center items-center w-full">
          <div className="w-full max-w-[1200px] flex flex-col md:flex-row items-center gap-8 md:gap-10">

            {/* LEFT ARROW — desktop only */}
            <button
              onClick={prev}
              aria-label="Previous slide"
              className="hidden lg:flex w-[40px] h-[40px] rounded-full border-2 border-accent-orange items-center justify-center text-accent-orange shrink-0"
            >
              ←
            </button>

            {/* IMAGE */}
            <div className="
              w-full
              md:w-[45%]
              lg:w-[550px]
              h-[40vh] sm:h-[45vh]
              md:h-[55vh]
              lg:h-[65vh]
              max-h-[680px]
              rounded-xl2
              overflow-hidden
              shadow-soft
            ">
              <img
                src={activeSlide.image}
                alt={activeSlide.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* TEXT */}
            <div className="
              w-full
              md:w-[55%]
              lg:w-[470px]
              flex flex-col
              gap-5 sm:gap-6 md:gap-8 lg:gap-10
              text-center md:text-left
            ">

              {/* Title + divider */}
              <div className="flex flex-col gap-2.5 items-center md:items-start">
                <h3 className="font-beckman text-xl sm:text-2xl md:text-3xl lg:text-[36px] leading-tight">
                  {activeSlide.title}
                </h3>
                <div className="w-20 sm:w-28 md:w-36 h-[3px] bg-accent-orange" />
              </div>

              {/* Description + highlights */}
              <div className="flex flex-col gap-4 md:gap-5">
                <p className="text-neutral-cream text-sm leading-relaxed">
                  {activeSlide.description}
                </p>

                <div className="flex flex-col gap-2">
                  {activeSlide.highlights.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 justify-center md:justify-start"
                    >
                      <div className="w-4 h-[2px] bg-accent-orange shrink-0 mt-[10px]" />
                      <span className="text-neutral-cream text-sm leading-relaxed text-left">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <button className="w-fit border-b border-white/20 pb-1 text-sm hover:text-accent-orange transition mx-auto md:mx-0">
                View Today's Session →
              </button>

            </div>

            {/* RIGHT ARROW — desktop only */}
            <button
              onClick={next}
              aria-label="Next slide"
              className="hidden lg:flex w-[40px] h-[40px] rounded-full border-2 border-accent-orange items-center justify-center text-accent-orange shrink-0"
            >
              →
            </button>

          </div>
        </main>

        {/* MOBILE ARROWS */}
        <nav
          aria-label="Carousel controls"
          className="flex justify-center gap-5 lg:hidden"
        >
          <button
            type="button"
            onClick={prev}
            className="w-11 h-11 rounded-full border border-[#E49355] text-[#E49355] text-sm"
            aria-label="Previous slide"
          >
            ←
          </button>
          <button
            type="button"
            onClick={next}
            className="w-11 h-11 rounded-full border border-[#E49355] text-[#E49355] text-sm"
            aria-label="Next slide"
          >
            →
          </button>
        </nav>

      </div>
    </section>
  );
}