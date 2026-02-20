"use client";

import { useState } from "react";

const slides = [
  {
    name: "Old Man’s",
    title: "Old Man’s Beach Canggu",
    description:
      "For 12 years, Luqman has been stationed at Old Man’s Beach, Canggu’s most beloved surf spot.",
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
    description:
      "Perfect when conditions align. Fun, playful and photogenic.",
    highlights: ["Fun Conditions", "Photo Friendly", "Consistent Peaks"],
    image: "/images/sample1.jpg",
  },
];

export default function SurfBreaksSection() {
  const [current, setCurrent] = useState<number>(0);

  const next = () =>
    setCurrent((prev) => (prev + 1) % slides.length);

  const prev = () =>
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );

  const activeSlide = slides[current];

  return (
    <section className="bg-[#2C4D48] text-white py-16 md:py-20 lg:py-24 px-4 sm:px-8 lg:px-20 xl:px-28">

      <div className="max-w-[1440px] mx-auto flex flex-col gap-16">

        {/* ================= HEADER ================= */}
        <div className="text-center space-y-6">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl xl:text-7xl">
            Canggu Surf Breaks
          </h2>

          <div className="flex flex-wrap justify-center gap-8 text-white/60 text-sm tracking-wide">
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`transition ${
                  current === index
                    ? "text-[#E49355]"
                    : "hover:text-white"
                }`}
              >
                {slide.name}
              </button>
            ))}
          </div>
        </div>

        {/* ================= MAIN CONTENT ================= */}
        <div className="relative flex items-center justify-center">

          {/* ARROWS DESKTOP */}
          <button
            onClick={prev}
            className="hidden lg:flex absolute -left-6 w-14 h-14 rounded-full border border-[#E49355] items-center justify-center text-[#E49355] hover:bg-[#E49355] hover:text-[#2C4D48] transition"
          >
            ←
          </button>

          <button
            onClick={next}
            className="hidden lg:flex absolute -right-6 w-14 h-14 rounded-full border border-[#E49355] items-center justify-center text-[#E49355] hover:bg-[#E49355] hover:text-[#2C4D48] transition"
          >
            →
          </button>

          <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center w-full max-w-[1100px]">

            {/* IMAGE */}
            <div className="flex justify-center">
              <div className="w-full max-w-[420px] aspect-[4/5] rounded-[20px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.25)]">
                <img
                  src={activeSlide.image}
                  alt={activeSlide.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* TEXT */}
            <div className="space-y-8 max-w-[500px]">

              <div className="space-y-4">
                <h3 className="text-3xl md:text-4xl font-semibold leading-tight">
                  {activeSlide.title}
                </h3>
                <div className="w-20 h-[3px] bg-[#E49355]" />
              </div>

              <p className="text-white/70 leading-relaxed">
                {activeSlide.description}
              </p>

              <div className="space-y-3 text-white/70">
                {activeSlide.highlights.map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-4 h-[2px] bg-[#E49355] mt-2" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <button className="flex items-center gap-2 text-white border-b border-white/30 pb-1 hover:text-[#E49355] transition">
                View Today’s Session
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

            </div>
          </div>
        </div>

        {/* MOBILE ARROWS */}
        <div className="flex justify-center gap-6 lg:hidden">
          <button onClick={prev} className="w-12 h-12 rounded-full border border-[#E49355] text-[#E49355]">←</button>
          <button onClick={next} className="w-12 h-12 rounded-full border border-[#E49355] text-[#E49355]">→</button>
        </div>

        {/* ================= BREAK LIST ================= */}
        <div className="border-t border-white/15 pt-10 grid sm:grid-cols-2 gap-x-12 gap-y-8">

          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`group text-left transition ${
                current === index
                  ? "opacity-100"
                  : "opacity-50 hover:opacity-100"
              }`}
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4">

                <div>
                  <h4 className="text-lg font-medium group-hover:text-[#E49355] transition">
                    {slide.title}
                  </h4>

                  <p className="uppercase tracking-[3px] text-xs text-white/40 mt-2">
                    {slide.name}
                  </p>
                </div>

                <span className="flex items-center gap-2 text-sm group-hover:text-[#E49355] transition">
                  Watch
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>

              </div>
            </button>
          ))}

        </div>

      </div>
    </section>
  );
}
