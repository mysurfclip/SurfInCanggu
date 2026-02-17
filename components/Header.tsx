"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.7);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#fafaf8]/95 backdrop-blur-md border-b border-[rgba(44,77,72,0.1)]"
          : "bg-transparent"
      }`}
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
                className={`text-sm transition-colors ${
                  scrolled
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
            className={`hidden lg:flex items-center gap-3 px-6 py-3 rounded-full transition-all ${
              scrolled
                ? "bg-[#2c4d48] text-white"
                : "bg-white/20 text-white backdrop-blur-md"
            }`}
          >
            Get Your Clips →
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
