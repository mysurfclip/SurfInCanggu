"use client";

import { useEffect, useState } from "react";

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

export default function SurfBreaksSlides() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sectionHeight = typeof window !== "undefined"
    ? window.innerHeight * slides.length
    : 0;

  return (
    <section
      className="relative bg-primary-forest"
      style={{ height: `${slides.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* Sliding Container */}
        <div
          className="transition-transform duration-700 ease-out"
          style={{
            transform: `translateY(-${scrollY}px)`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="h-screen flex items-center"
            >
              <div className="max-w-[1440px] mx-auto px-[24px] md:px-[60px] lg:px-[120px] w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                {/* Image */}
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.5)]">
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

                  <h2 className="font-display text-hero md:text-hero-lg text-white leading-[1.05]">
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

      </div>
    </section>
  );
}
