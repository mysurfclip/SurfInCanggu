'use client';

import Link from 'next/link';
import ClipCard from './ClipCard';
import { mockClips } from '@/lib/clipData';
import { motion } from 'framer-motion';

export default function DailyClips() {
  return (
    <section id="clips" className="bg-neutral-cream overflow-hidden">
      <div className="container py-16 md:py-24 lg:py-32">

        {/* =========================
            SECTION HEADER
        ========================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col gap-8 md:gap-10 mb-16 md:mb-20"
        >

          {/* Micro Label */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-px bg-accent-orange" />
            <span className="text-label text-neutral-textTertiary uppercase">
              Today’s Best
            </span>
          </div>

          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-10 lg:gap-16">

            {/* Title */}
            <div className="flex flex-col sm:flex-row sm:items-end">
              <h2 className="font-display font-light text-4xl sm:text-5xl lg:text-hero-xl text-primary-forest leading-[1.05]">
                Daily
              </h2>
              <h2 className="font-display font-light text-4xl sm:text-5xl lg:text-hero-xl text-primary-forest sm:ml-4 leading-[1.05]">
                Clips
              </h2>
            </div>

            {/* Right Content */}
            <div className="max-w-[456px] flex flex-col gap-5">
              <p className="text-base md:text-bodyLg text-neutral-textSecondary">
                Every wave, every moment, captured in stunning HD quality.
                Browse today&apos;s sessions and find your clips.
              </p>

              <Link
                href="https://clipdays.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 group"
              >
                <span className="text-lg md:text-2xl font-medium uppercase tracking-wide text-primary-forest transition-colors group-hover:text-accent-orange">
                  View All Clips
                </span>

                <div className="p-[3px] flex items-center">
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    className="text-primary-forest group-hover:text-accent-orange transition-colors"
                  >
                    <path
                      d="M3 10.1662H17.3323M17.3323 10.1662L10.1662 3M17.3323 10.1662L10.1662 17.3323"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Link>

            </div>
          </div>
        </motion.div>

        {/* =========================
            CLIPS GRID
        ========================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 mb-20 lg:mb-24"
        >
          {mockClips.map((clip) => (
            <motion.div
              key={clip.id}
              variants={{
                hidden: { opacity: 0, y: 60 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.7,
                    ease: 'easeOut',
                  },
                },
              }}
            >
              <ClipCard clip={clip} />
            </motion.div>
          ))}
        </motion.div>

        {/* =========================
            CTA SECTION
        ========================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          className="flex flex-col items-center gap-5"
        >

          <Link
            href="https://clipdays.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 md:px-10 py-3 md:py-4 rounded-full border border-primary-forest flex items-center gap-4 hover:bg-primary-forest transition-colors"
          >
            <span className="text-sm md:text-bodyBase font-medium text-primary-forest group-hover:text-white transition-colors">
              Browse Full Library
            </span>

            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary-forest flex items-center justify-center transition-colors">
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                className="text-white"
              >
                <path
                  d="M3 10.1662H17.3323M17.3323 10.1662L10.1662 3M17.3323 10.1662L10.1662 17.3323"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

          </Link>

          <p className="text-bodySm text-neutral-textTertiary text-center">
            New clips uploaded daily • HD Quality • Instant download
          </p>

        </motion.div>
      </div>
    </section>
  );
}
