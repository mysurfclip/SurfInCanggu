'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past 100px
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 w-full bg-[#fafaf8]/95 backdrop-blur-md border-b border-[rgba(44,77,72,0.1)] z-50 transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[120px] py-4 lg:py-[10px]">
        <nav className="flex items-center justify-between h-[70px]">
          {/* Logo */}
          <div className="relative w-[120px] sm:w-[149px] h-[56px] sm:h-[70px]">
            <img
              src="/images/sic-logo.png"
              alt="Surfing Logo"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <a
              href="#"
              className="font-light text-sm text-[#2c4d48] hover:text-[#e49355] transition-colors tracking-[0.2px]"
            >
              Daily Clips
            </a>
            <a
              href="#"
              className="font-light text-sm text-[#2c4d48] hover:text-[#e49355] transition-colors tracking-[0.2px]"
            >
              About
            </a>
            <a
              href="#"
              className="font-light text-sm text-[#2c4d48] hover:text-[#e49355] transition-colors tracking-[0.2px]"
            >
              Services
            </a>
            <a
              href="#"
              className="font-light text-sm text-[#2c4d48] hover:text-[#e49355] transition-colors tracking-[0.2px]"
            >
              Contact
            </a>
          </div>

          {/* CTA Button - Desktop */}
          <button className="hidden lg:flex items-center gap-3 bg-[#2c4d48] hover:bg-[#3d5f5a] text-white px-6 py-3 rounded-full transition-colors">
            <span className="font-light text-sm tracking-[-0.15px]">Get Your Clips</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-[#2c4d48] p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute left-0 right-0 top-[calc(70px+2rem)] bg-[#fafaf8] border-t border-[rgba(44,77,72,0.1)] shadow-lg z-50 px-4 py-6">
            <div className="flex flex-col gap-4">
              <a
                href="#"
                className="font-light text-base text-[#2c4d48] hover:text-[#e49355] transition-colors py-2"
              >
                Daily Clips
              </a>
              <a
                href="#"
                className="font-light text-base text-[#2c4d48] hover:text-[#e49355] transition-colors py-2"
              >
                About
              </a>
              <a
                href="#"
                className="font-light text-base text-[#2c4d48] hover:text-[#e49355] transition-colors py-2"
              >
                Services
              </a>
              <a
                href="#"
                className="font-light text-base text-[#2c4d48] hover:text-[#e49355] transition-colors py-2"
              >
                Contact
              </a>
              <button className="flex items-center justify-center gap-3 bg-[#2c4d48] text-white px-6 py-3 rounded-full mt-4">
                <span className="font-light text-sm">Get Your Clips</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
