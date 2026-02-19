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

      // Background change logic (your existing behavior)
      setScrolled(currentScrollY > window.innerHeight * 0.7);

      // Hide on scroll down, show on scroll up
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

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-500
        ${showHeader ? "translate-y-0" : "-translate-y-full"}
        ${scrolled
          ? "bg-[#fafaf8]/95 backdrop-blur-md border-b border-[rgba(44,77,72,0.1)]"
          : "bg-transparent"
        }
      `}
    >
      <div className="max-w-[1440px] mx-auto px-6 py-4">
        <nav className="flex items-center justify-between h-[70px]">

          {/* Logo */}
          <img
            src="/images/sic-logo.png"
            alt="Surfing Logo"
            className="w-[140px] object-contain"
          />

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {["Daily Clips", "About", "Services", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className={`text-sm transition-colors ${scrolled
                  ? "text-[#2c4d48] hover:text-[#e49355]"
                  : "text-white hover:text-[#e49355]"
                  }`}
              >
                {item}
              </a>
            ))}
          </div>

          {/* CTA */}
          <button
            className={`
    hidden lg:flex items-center gap-2.5
    px-6 py-2.5
    rounded-full
    transition-all duration-300
    group
    ${scrolled
                ? "bg-primary-forest text-white hover:bg-[#3d5f5a]"
                : "bg-white text-primary-forest hover:bg-primary-forest hover:text-white"
              }
  `}
          >
            <span className="font-body text-bodySm transition-transform duration-300 group-hover:-translate-x-1">
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



          {/* Mobile */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>
    </header>
  );
}
