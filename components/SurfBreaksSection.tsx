"use client";

import { useState } from "react";

const slides = [
  {
    name: "Old Man’s",
    title: "Old Man’s Beach, Canggu",
    description:
      "For 12 years, Luqman has been stationed at Old Man’s Beach — Canggu’s most beloved surf spot.",
    highlights: [
      "Perfect Coverage — Every peak, every moment.",
      "Daily Uploads — Sessions available within 48 hours.",
      "HD Quality — Professional videography & framing.",
    ],
    image: "/images/sample1.jpg",
  },
  {
    name: "Echo Beach",
    title: "Echo Beach, Canggu",
    description:
      "A powerful reef break delivering punchy, hollow waves and stunning sunsets.",
    highlights: [
      "Barrel Sections",
      "Advanced Surfer Spot",
      "Sunset Sessions",
    ],
    image: "/images/sample2.jpg",
  },
  {
    name: "Pererenan",
    title: "Pererenan, Canggu",
    description:
      "Less crowded coastline with consistent peaks and beautiful scenery.",
    highlights: [
      "Clean Lines",
      "Longer Rides",
      "Balanced Crowd",
    ],
    image: "/images/sample1.jpg",
  },
  {
    name: "Rivermouth",
    title: "Rivermouth, Canggu",
    description:
      "A dynamic shifting break offering powerful sections during solid swell.",
    highlights: [
      "Heavy Drops",
      "Fast Walls",
      "Advanced Only",
    ],
    image: "/images/sample2.jpg",
  },
  {
    name: "Sandbar",
    title: "Sandbar, Canggu",
    description:
      "Perfect when conditions align. Fun, playful and photogenic.",
    highlights: [
      "Fun Conditions",
      "Photo Friendly",
      "Consistent Peaks",
    ],
    image: "/images/sample1.jpg",
  },
];

export default function SurfBreaksSection() {
  const [current, setCurrent] = useState(0);

  const next = () =>
    setCurrent((prev) => (prev + 1) % slides.length);

  const prev = () =>
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );

  return (
    <section className="bg-[#2f574f] text-white py-24 relative overflow-hidden">

      {/* ================= HEADER ================= */}
      <div className="text-center mb-16">
        <h2 className="font-display text-5xl md:text-7xl mb-6">
          Canggu Surf Breaks
        </h2>

        {/* Sub Navigation */}
        <div className="flex justify-center flex-wrap gap-8 text-sm tracking-widest text-white/50">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`transition-colors duration-300 ${
                current === index
                  ? "text-[#e49355]"
                  : "hover:text-white"
              }`}
            >
              {slide.name}
            </button>
          ))}
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Image */}
        <div className="flex justify-center">
          <div className="w-[320px] md:w-[420px] aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={slides[current].image}
              alt={slides[current].title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-8">

          <h3 className="text-3xl md:text-4xl font-display leading-tight">
            {slides[current].title}
          </h3>

          <div className="w-16 h-[2px] bg-[#e49355]" />

          <p className="text-white/80 leading-relaxed">
            {slides[current].description}
          </p>

          {/* Highlights */}
          <div className="space-y-4 text-white/70 text-sm">
            {slides[current].highlights.map((item, i) => (
              <div key={i}>{item}</div>
            ))}
          </div>

          <button className="text-[#e49355] tracking-wide uppercase text-sm hover:underline">
            View Today’s Session →
          </button>
        </div>
      </div>

      {/* ================= SIDE ARROWS ================= */}
      <button
        onClick={prev}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-[#2f574f] transition"
      >
        ←
      </button>

      <button
        onClick={next}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-[#2f574f] transition"
      >
        →
      </button>

    </section>
  );
}
