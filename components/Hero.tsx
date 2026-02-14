'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const titleWordVariants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    clipPath: 'inset(0 0 100% 0)',
  },
  visible: { 
    opacity: 1, 
    y: 0,
    clipPath: 'inset(0 0 0% 0)',
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.8 + i * 0.15,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const imageVariants = {
  hidden: { 
    opacity: 0, 
    scale: 1.08,
    y: 20,
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: {
      duration: 1.6,
      delay: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  const { scrollY } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollY, [0, 500], [0, 150]);
  const imageScale = useTransform(scrollY, [0, 500], [1, 1.05]);
  const contentY = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative w-full bg-[#fafaf8] pt-[90px] lg:pt-[110px] overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[120px] py-12 sm:py-16 lg:py-[80px]">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >

          {/* Left Column - Text & Stats */}
          <motion.div 
            className="flex flex-col gap-8 lg:gap-[50px] order-2 lg:order-1"
            style={isMounted ? { y: contentY, opacity } : {}}
          >

            {/* Title */}
            <div className="flex flex-col gap-6 lg:gap-[30px]">
              <div className="overflow-hidden">
                <motion.h1 
                  className="font-['Costa_Brisa',sans-serif] italic text-[52px] sm:text-[68px] lg:text-[96px] leading-[1.1] lg:leading-[92px] text-[#2c4d48] tracking-[1.98px]"
                  variants={titleWordVariants}
                >
                  12 Years
                </motion.h1>
              </div>
              <div className="overflow-hidden">
                <motion.h1 
                  className="font-['Costa_Brisa',sans-serif] italic text-[52px] sm:text-[68px] lg:text-[96px] leading-[1.1] lg:leading-[92px] text-[#2c4d48] tracking-[1.98px]"
                  variants={titleWordVariants}
                >
                  Capturing Waves
                </motion.h1>
              </div>
              <motion.div 
                className="bg-[#e49355] h-[2px] w-[96px] origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.2, delay: 1, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>

            {/* Stats */}
            <motion.div 
              className="border-t border-[rgba(44,77,72,0.1)] pt-10 lg:pt-[40px]"
              variants={fadeUpVariants}
              custom={0}
            >
              <div className="grid grid-cols-3 gap-8 lg:gap-12">
                <motion.div 
                  className="flex flex-col gap-3"
                  variants={fadeUpVariants}
                  custom={0}
                >
                  <div className="font-light text-[36px] sm:text-[44px] leading-[1.1] text-[#2c4d48] tracking-[0.37px]">
                    12+
                  </div>
                  <div className="font-normal text-[11px] sm:text-[12px] leading-[16px] text-[rgba(44,77,72,0.4)] tracking-[0.8px] uppercase">
                    Years
                  </div>
                </motion.div>
                <motion.div 
                  className="flex flex-col gap-3"
                  variants={fadeUpVariants}
                  custom={1}
                >
                  <div className="font-light text-[36px] sm:text-[44px] leading-[1.1] text-[#2c4d48] tracking-[0.37px]">
                    365
                  </div>
                  <div className="font-normal text-[11px] sm:text-[12px] leading-[16px] text-[rgba(44,77,72,0.4)] tracking-[0.8px] uppercase">
                    Days
                  </div>
                </motion.div>
                <motion.div 
                  className="flex flex-col gap-3"
                  variants={fadeUpVariants}
                  custom={2}
                >
                  <div className="font-light text-[36px] sm:text-[44px] leading-[1.1] text-[#2c4d48] tracking-[0.37px]">
                    HD
                  </div>
                  <div className="font-normal text-[11px] sm:text-[12px] leading-[16px] text-[rgba(44,77,72,0.4)] tracking-[0.8px] uppercase">
                    Quality
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Links */}
            <motion.div 
              className="flex flex-col gap-6 lg:gap-8"
              variants={fadeUpVariants}
              custom={3}
            >
              {/* Get in Touch */}
              <div>
                <div className="flex flex-col gap-5">
                  <div className="font-normal text-[11px] leading-[16px] text-[rgba(44,77,72,0.4)] tracking-[2.6px] uppercase">
                    Get in Touch
                  </div>
                  <motion.a
                    href="#"
                    className="group flex items-center justify-between pb-3 border-b border-[rgba(44,77,72,0.15)] hover:border-[#e49355] transition-all duration-300 relative overflow-hidden"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <span className="font-normal text-[15px] sm:text-[17px] leading-[24px] text-[#2c4d48] tracking-[-0.31px] relative">
                      WhatsApp
                      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#e49355] group-hover:w-full transition-all duration-300" />
                    </span>
                    <motion.svg 
                      className="text-[rgba(44,77,72,0.4)] group-hover:text-[#e49355] transition-colors duration-300" 
                      width="16" 
                      height="16" 
                      viewBox="0 0 16 16" 
                      fill="none"
                      initial={{ x: 0 }}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                    </motion.svg>
                  </motion.a>
                </div>
              </div>

              {/* Get Your Clips */}
              <div>
                <div className="flex flex-col gap-5">
                  <div className="font-normal text-[11px] leading-[16px] text-[rgba(44,77,72,0.4)] tracking-[2.6px] uppercase">
                    Get Your Clips
                  </div>
                  <motion.a
                    href="#"
                    className="group flex items-center justify-between pb-3 border-b border-[rgba(44,77,72,0.15)] hover:border-[#e49355] transition-all duration-300 relative overflow-hidden"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <span className="font-normal text-[15px] sm:text-[17px] leading-[24px] text-[#2c4d48] tracking-[-0.31px] relative">
                      View on ClipDays
                      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#e49355] group-hover:w-full transition-all duration-300" />
                    </span>
                    <motion.svg 
                      className="text-[rgba(44,77,72,0.4)] group-hover:text-[#e49355] transition-colors duration-300" 
                      width="16" 
                      height="16" 
                      viewBox="0 0 16 16" 
                      fill="none"
                      initial={{ x: 0 }}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                    </motion.svg>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Image Card */}
          <div className="order-1 lg:order-2 w-full max-w-[480px] lg:max-w-none mx-auto">
            <div className="flex items-start gap-2 lg:gap-0">
              {/* Photographer Badge */}
              <motion.div 
                className="hidden lg:flex flex-col items-center gap-2 bg-[#e49355] rounded-full px-2 py-4 shadow-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-center justify-center h-[163px] w-[15px]">
                  <div className="rotate-90 whitespace-nowrap">
                    <p className="font-medium text-[10px] leading-[15px] text-white tracking-[3.12px] uppercase">
                      Your Photographer
                    </p>
                  </div>
                </div>
                <div className="w-1 h-1 rounded-full bg-[rgba(255,255,255,0.8)]" />
              </motion.div>

              {/* Image Card */}
              <div ref={imageRef} className="flex-1 lg:ml-0">
                <motion.div 
                  className="relative w-full rounded-2xl overflow-hidden shadow-2xl"
                  variants={imageVariants}
                  style={isMounted ? { y: imageY, scale: imageScale } : {}}
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    y: {
                      duration: 7,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 2,
                    },
                  }}
                >
                  {/* Image */}
                  <div className="relative aspect-[389/436]">
                    <motion.img
                      src="/images/sic-photographer-luqman.jpeg"
                      alt="Surfer at Oldman's Beach"
                      className="w-full h-full object-cover"
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[rgba(228,147,85,0.08)] via-transparent to-[rgba(44,77,72,0.12)]" />

                    {/* Bottom Info Card */}
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[rgba(44,77,72,0.95)] via-[rgba(44,77,72,0.7)] to-transparent px-6 sm:px-8 pt-10 pb-6 sm:pb-8 backdrop-blur-sm"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="flex items-end justify-between mb-5 sm:mb-6">
                        <div>
                          <h3 className="font-light text-[22px] sm:text-[26px] leading-[32px] text-white tracking-[-0.53px]">
                            Luqman
                          </h3>
                          <p className="font-normal text-[11px] leading-[16px] text-[rgba(255,255,255,0.5)] tracking-[3.8px] uppercase mt-1">
                            Est. 2013
                          </p>
                        </div>
                        <motion.button 
                          className="w-[52px] h-[52px] rounded-full border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.1)] flex items-center justify-center hover:bg-[rgba(255,255,255,0.2)] backdrop-blur-sm transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M7 4l6 6-6 6M13 4l6 6-6 6" stroke="white" strokeOpacity="0.8" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </motion.button>
                      </div>

                      {/* Stats */}
                      <div className="flex items-center gap-6 pt-5 border-t border-[rgba(255,255,255,0.15)]">
                        <div className="flex items-baseline gap-2">
                          <span className="font-light text-[17px] sm:text-[21px] leading-[28px] text-white tracking-[-0.45px]">
                            12
                          </span>
                          <span className="font-normal text-[10px] leading-[15px] text-[rgba(255,255,255,0.5)] tracking-[0.7px] uppercase">
                            Years
                          </span>
                        </div>
                        <div className="w-px h-4 bg-[rgba(255,255,255,0.2)]" />
                        <div className="flex items-baseline gap-2">
                          <span className="font-light text-[17px] sm:text-[21px] leading-[28px] text-white tracking-[-0.45px]">
                            ∞
                          </span>
                          <span className="font-normal text-[10px] leading-[15px] text-[rgba(255,255,255,0.5)] tracking-[0.7px] uppercase">
                            Waves
                          </span>
                        </div>
                        <div className="w-px h-4 bg-[rgba(255,255,255,0.2)]" />
                        <div className="flex items-baseline gap-2">
                          <span className="font-light text-[17px] sm:text-[21px] leading-[28px] text-white tracking-[-0.45px]">
                            01
                          </span>
                          <span className="font-normal text-[10px] leading-[15px] text-[rgba(255,255,255,0.5)] tracking-[0.7px] uppercase">
                            Beach
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Description */}
                <motion.div 
                  className="mt-6 lg:mt-[28px] max-w-[420px]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="font-normal text-[21px] sm:text-[25px] leading-[1.5] text-[#2c4d48] tracking-[0.07px] mb-5">
                    by Luqman at Oldman's beach.
                  </p>
                  <p className="font-normal text-[15px] sm:text-[16px] leading-[1.625] text-[rgba(44,77,72,0.6)] tracking-[-0.31px]">
                    Every session, every wave, captured and uploaded daily to ClipDays. With over a decade of experience at this iconic break, Luqman knows exactly when and where to be.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
