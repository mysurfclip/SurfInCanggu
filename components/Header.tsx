"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > window.innerHeight * 0.7);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Tutup menu saat scroll
  useEffect(() => {
    if (!showHeader) setIsMenuOpen(false);
  }, [showHeader]);

  const navLinks = ["Live Updates", "About", "Services", "Contact"];

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-500
        ${showHeader ? "translate-y-0" : "-translate-y-full"}
        ${
          scrolled || isMenuOpen
            ? "bg-[#fafaf8]/95 backdrop-blur-md border-b border-[rgba(44,77,72,0.1)]"
            : "bg-transparent"
        }
      `}
    >
      <div className="w-full">
        <div className="mx-auto max-w-[1440px]">
          <div className="py-2.5 md:py-5 px-3.5 md:px-9 lg:px-20 xl:px-24 2xl:px-28">
            <nav className="flex items-center justify-between h-[70px]">

              {/* ================= LOGO ================= */}
              <img
                src="/images/sic-logo.png"
                alt="Surfing Logo"
                className="h-10 md:h-14 lg:h-16 w-auto object-contain"
              />

              {/* ================= DESKTOP MENU ================= */}
              <div className="hidden lg:flex items-center gap-10 xl:gap-14">
                {navLinks.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className={`
                      text-sm tracking-wide transition-colors
                      ${
                        scrolled
                          ? "text-[#2c4d48] hover:text-[#e49355]"
                          : "text-white hover:text-[#e49355]"
                      }
                    `}
                  >
                    {item}
                  </a>
                ))}
              </div>

              {/* ================= CTA DESKTOP ================= */}
              <button
                className={`
                  hidden lg:flex items-center gap-2.5
                  px-6 py-2.5
                  rounded-full
                  transition-all duration-300
                  group
                  ${
                    scrolled
                      ? "bg-primary-forest text-white hover:bg-[#3d5f5a]"
                      : "bg-white text-primary-forest hover:bg-primary-forest hover:text-white"
                  }
                `}
              >
                <span className="transition-transform duration-300 group-hover:-translate-x-1">
                  Get Your Clips
                </span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 21 21"
                  fill="none"
                  className="transition-transform duration-300 group-hover:translate-x-1"
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

              {/* ================= HAMBURGER BUTTON ================= */}
              <button
                className={`
                  lg:hidden transition-colors
                  ${scrolled || isMenuOpen ? "text-[#2c4d48]" : "text-white"}
                `}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

            </nav>
          </div>

          {/* ================= MOBILE MENU PANEL ================= */}
          <div
            className={`
              lg:hidden overflow-hidden transition-all duration-300 ease-in-out
              ${isMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}
            `}
          >
            <div className="px-3.5 md:px-9 pb-6 flex flex-col gap-1">

              {navLinks.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="
                    text-[#2c4d48] text-base py-3
                    border-b border-[rgba(44,77,72,0.08)]
                    hover:text-[#e49355]
                    transition-colors duration-200
                  "
                >
                  {item}
                </a>
              ))}

              {/* CTA mobile */}
              <a
                href="#clips"
                onClick={() => setIsMenuOpen(false)}
                className="
                  mt-4 flex items-center justify-center gap-2.5
                  bg-primary-forest text-white
                  px-6 py-3 rounded-full
                  text-sm tracking-wide
                  hover:bg-[#e49355] transition-colors duration-300
                "
              >
                Get Your Clips →
              </a>

            </div>
          </div>

        </div>
      </div>
    </header>
  );
}