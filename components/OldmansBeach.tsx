'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

// Title reveal variants
const titleVariants = {
  hidden: { 
    opacity: 0,
    y: 60,
    clipPath: 'inset(0 0 100% 0)',
    filter: 'blur(8px)',
  },
  visible: { 
    opacity: 1,
    y: 0,
    clipPath: 'inset(0 0 0% 0)',
    filter: 'blur(0px)',
    transition: {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const textRevealVariants = {
  hidden: { 
    opacity: 0,
    y: 50,
  },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const featureVariants = {
  hidden: { 
    opacity: 0,
    x: -30,
  },
  visible: (delay: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function OldmansBeach() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Image parallax & scale
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1.05, 1]);
  const imageOpacity = useTransform(scrollYProgress, [0.7, 1], [1, 0.4]);

  // Content fade
  const contentOpacity = useTransform(scrollYProgress, [0, 0.3, 0.8], [1, 1, 0.2]);

  const isInView = useInView(contentRef, { once: true, amount: 0.2 });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full bg-[#2c4d48] overflow-hidden min-h-screen"
    >
      {/* Subtle background gradient depth */}
      <div className="absolute inset-0 bg-gradient-radial from-[rgba(228,147,85,0.06)] via-transparent to-transparent opacity-40" />
      
      {/* Optional grain texture overlay */}
      <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none">
        <div className="w-full h-full" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat',
        }} />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[120px] py-16 md:py-24 lg:py-0 min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-16 lg:gap-24 min-h-screen lg:items-center">
          
          {/* Left - Sticky Cinematic Image */}
          <div className="order-2 lg:order-1">
            <motion.div 
              ref={imageContainerRef}
              className="relative w-full max-w-[520px] mx-auto lg:max-w-full lg:sticky lg:top-32"
              style={isMounted ? { 
                scale: imageScale,
              } : {}}
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1.05 }}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Floating animation wrapper */}
              <motion.div
                className="relative"
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl shadow-black/20">
                  <motion.img
                    src="/images/oldmans-beach.svg"
                    alt="Oldman's Beach wave"
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
                  />
                  
                  {/* Layered depth gradients */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[rgba(228,147,85,0.08)] via-transparent to-[rgba(44,77,72,0.15)]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(44,77,72,0.3)] via-transparent to-transparent" />
                  
                  {/* Soft accent glow */}
                  <div className="absolute top-1/4 right-0 w-1/2 h-1/2 bg-[#e49355] opacity-[0.08] blur-[100px] rounded-full" />
                </div>

                {/* Subtle border accent */}
                <div className="absolute inset-0 rounded-2xl border border-[rgba(228,147,85,0.1)]" />
              </motion.div>
            </motion.div>
          </div>

          {/* Right - Editorial Scrolling Content */}
          <motion.div 
            ref={contentRef}
            className="order-1 lg:order-2 lg:py-32 space-y-16 lg:space-y-24"
            style={isMounted ? { opacity: contentOpacity } : {}}
          >
            
            {/* Header Section */}
            <div className="space-y-8 lg:space-y-12">
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="font-normal text-[11px] leading-[16px] text-[rgba(255,255,255,0.35)] tracking-[3.2px] uppercase">
                  The Spot
                </div>
              </motion.div>

              {/* Title with stagger */}
              <div className="space-y-3 lg:space-y-4 overflow-hidden">
                <motion.h2 
                  className="font-['Costa_Brisa',sans-serif] italic text-[44px] sm:text-[60px] lg:text-[86px] leading-[1.1] text-white tracking-[1.66px]"
                  variants={titleVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  Oldman's Beach,
                </motion.h2>
                <motion.h2 
                  className="font-['Costa_Brisa',sans-serif] italic text-[44px] sm:text-[60px] lg:text-[86px] leading-[1.1] text-white tracking-[1.66px]"
                  variants={titleVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  transition={{ delay: 0.15 }}
                >
                  Canggu
                </motion.h2>
              </div>

              {/* Accent line */}
              <motion.div 
                className="bg-[#e49355] h-[2px] w-[120px] origin-left"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>

            {/* Description */}
            <div className="space-y-8 lg:space-y-10 max-w-[560px]">
              <motion.p 
                className="font-normal text-[18px] sm:text-[21px] lg:text-[24px] leading-[1.6] text-[rgba(255,255,255,0.85)] tracking-[-0.45px]"
                variants={textRevealVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={0.4}
              >
                For 12 years, Luqman has been stationed at Oldman's beach, Canggu's most iconic surf spot.
              </motion.p>
              <motion.p 
                className="font-normal text-[15px] sm:text-[17px] leading-[1.65] text-[rgba(255,255,255,0.6)] tracking-[-0.31px]"
                variants={textRevealVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={0.6}
              >
                From dawn patrol to sunset sessions, every wave is captured in crystal-clear HD. Whether you're a beginner finding your first barrel or a pro throwing airs, your moment is preserved forever.
              </motion.p>
            </div>

            {/* Features - Editorial Style */}
            <div className="space-y-12 lg:space-y-16 pt-8 lg:pt-12">
              
              {/* Perfect Coverage */}
              <motion.div
                className="group relative pl-0 hover:pl-6 transition-all duration-500"
                variants={featureVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={0.8}
              >
                {/* Accent line on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#e49355] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="border-t border-[rgba(255,255,255,0.08)] group-hover:border-[rgba(228,147,85,0.2)] pt-8 transition-colors duration-500">
                  <h3 className="font-normal text-[20px] sm:text-[24px] lg:text-[28px] leading-[1.3] text-white tracking-[-0.53px] mb-4 group-hover:text-[#e49355] transition-colors duration-300">
                    Perfect Coverage
                  </h3>
                  <p className="font-normal text-[15px] sm:text-[16px] leading-[1.65] text-[rgba(255,255,255,0.55)] group-hover:text-[rgba(255,255,255,0.7)] tracking-[-0.31px] transition-colors duration-300 max-w-[520px]">
                    Positioned at the optimal angle to catch every ride from paddle-out to the beach. No wave goes unnoticed.
                  </p>
                </div>
              </motion.div>

              {/* Daily Uploads */}
              <motion.div
                className="group relative pl-0 hover:pl-6 transition-all duration-500"
                variants={featureVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={1}
              >
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#e49355] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="border-t border-[rgba(255,255,255,0.08)] group-hover:border-[rgba(228,147,85,0.2)] pt-8 transition-colors duration-500">
                  <h3 className="font-normal text-[20px] sm:text-[24px] lg:text-[28px] leading-[1.3] text-white tracking-[-0.53px] mb-4 group-hover:text-[#e49355] transition-colors duration-300">
                    Daily Uploads
                  </h3>
                  <p className="font-normal text-[15px] sm:text-[16px] leading-[1.65] text-[rgba(255,255,255,0.55)] group-hover:text-[rgba(255,255,255,0.7)] tracking-[-0.31px] transition-colors duration-300 max-w-[520px]">
                    All clips uploaded to ClipDays within hours. Browse, purchase, and share your best waves the same day.
                  </p>
                </div>
              </motion.div>

              {/* HD Quality */}
              <motion.div
                className="group relative pl-0 hover:pl-6 transition-all duration-500"
                variants={featureVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={1.2}
              >
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#e49355] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="border-t border-[rgba(255,255,255,0.08)] group-hover:border-[rgba(228,147,85,0.2)] pt-8 transition-colors duration-500">
                  <h3 className="font-normal text-[20px] sm:text-[24px] lg:text-[28px] leading-[1.3] text-white tracking-[-0.53px] mb-4 group-hover:text-[#e49355] transition-colors duration-300">
                    HD Quality
                  </h3>
                  <p className="font-normal text-[15px] sm:text-[16px] leading-[1.65] text-[rgba(255,255,255,0.55)] group-hover:text-[rgba(255,255,255,0.7)] tracking-[-0.31px] transition-colors duration-300 max-w-[520px]">
                    Professional cinema-grade equipment ensures every detail is captured, from spray off the lip to your stoke-filled smile.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* CTA */}
            <motion.div 
              className="pt-8 pb-16 lg:pb-24"
              variants={textRevealVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={1.4}
            >
              <Link 
                href="#clips"
                className="group inline-flex items-center gap-4 text-white hover:text-[#e49355] transition-all duration-300 relative"
              >
                <span className="font-normal text-[15px] sm:text-[17px] leading-[24px] tracking-[-0.31px] relative">
                  View Today's Session
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#e49355] group-hover:w-full transition-all duration-500 ease-out" />
                </span>
                <motion.svg 
                  className="transition-colors duration-300" 
                  width="18" 
                  height="18" 
                  viewBox="0 0 16 16" 
                  fill="none"
                  initial={{ x: 0 }}
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                </motion.svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
