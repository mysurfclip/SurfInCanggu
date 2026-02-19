"use client";

import { useState } from "react";

const slides = [
  {
    title: "Oldman's Beach",
    subtitle: "Canggu",
    description:
      "Luqman's home break. Consistent and iconic with 12 years of history.",
    image: "/images/oldmans-beach.svg",
  },
  {
    title: "Echo Beach",
    subtitle: "Canggu",
    description:
      "Powerful reef break delivering punchy, hollow waves.",
    image: "/images/echo.jpg",
  },
  {
    title: "Pererenan",
    subtitle: "Canggu",
    description:
      "Less crowded, scenic coastline with quality peaks.",
    image: "/images/pererenan.jpg",
  },
];

export default function SurfBreaksSection() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative h-screen bg-primary-forest overflow-hidden">

      {/* Slides Wrapper */}
      <div
        className="flex h-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{
          width: `${slides.length * 100}vw`,
          transform: `translateX(-${current * 100}vw)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-screen h-screen flex items-center"
          >
            <div className="container w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

              {/* Image */}
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-premium">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <div className="space-y-8">
                <div className="uppercase tracking-[4px] text-white/40 text-sm">
                  The Spot
                </div>

                <h2 className="font-display text-hero-xl text-white leading-[1.05]">
                  {slide.title},<br />
                  {slide.subtitle}
                </h2>

                <div className="w-24 h-[2px] bg-accent-orange" />

                <p className="text-bodyLg text-white/80 max-w-[560px]">
                  {slide.description}
                </p>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="
          absolute
          left-containerMobile
          md:left-containerTablet
          2xl:left-containerDesktop
          top-1/2
          -translate-y-1/2
          w-12
          h-12
          rounded-full
          border
          border-white/30
          text-white
          flex
          items-center
          justify-center
          hover:bg-white
          hover:text-primary-forest
          transition-all
          duration-300
        "
      >
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          className="rotate-180"
        >
          <path
            d="M3 10.1662H17.3323M17.3323 10.1662L10.1662 3M17.3323 10.1662L10.1662 17.3323"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="
          absolute
          right-containerMobile
          md:right-containerTablet
          2xl:right-containerDesktop
          top-1/2
          -translate-y-1/2
          w-12
          h-12
          rounded-full
          border
          border-white/30
          text-white
          flex
          items-center
          justify-center
          hover:bg-white
          hover:text-primary-forest
          transition-all
          duration-300
        "
      >
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
        >
          <path
            d="M3 10.1662H17.3323M17.3323 10.1662L10.1662 3M17.3323 10.1662L10.1662 17.3323"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              current === index
                ? "bg-accent-orange w-6"
                : "bg-white/40"
            }`}
          />
        ))}
      </div>

    </section>
  );
}
