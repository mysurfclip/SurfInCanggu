'use client';

import Link from 'next/link';
import ClipCard from './ClipCard';
import { mockClips } from '@/lib/clipData';
import { motion } from 'framer-motion';

export default function DailyClips() {
  return (
    <section
      id="clips"
      className="bg-neutral-cream overflow-hidden"
      aria-labelledby="daily-clips-heading"
    >
      <div className="section-wrap">

        {/* ================= SECTION HEADER ================= */}
        <header className="mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col gap-8 md:gap-10"
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
              <h2
                id="daily-clips-heading"
                className="font-display text-display text-primary-forest leading-[1.05] flex flex-col sm:flex-row sm:items-end"
              >
                <span>Daily</span>
                <span className="sm:ml-4">Clips</span>
              </h2>

              {/* Description + Inline CTA */}
              <div className="max-w-md flex flex-col gap-5">
                <p className="text-bodyLg text-neutral-textSecondary">
                  Every wave, every moment, captured in stunning HD quality.
                  Browse today&apos;s sessions and find your clips.
                </p>

                <Link
                  href="https://clipdays.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 group"
                >
                  <span className="text-h4 uppercase tracking-wide text-primary-forest transition-colors group-hover:text-accent-orange">
                    View All Clips
                  </span>

                  <span className="p-[3px] flex items-center">
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
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>
        </header>

        {/* ================= CLIPS GRID ================= */}
        <motion.section
          aria-label="Daily surf clips"
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
            <motion.article
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
            </motion.article>
          ))}
        </motion.section>

        {/* ================= CTA ================= */}
        <motion.footer
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          className="flex flex-col items-center gap-5 text-center"
        >
          <Link
            href="https://clipdays.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-3 rounded-full border border-primary-forest flex items-center gap-4 hover:bg-primary-forest transition-colors"
          >
            <span className="text-bodyBase font-medium text-primary-forest group-hover:text-white transition-colors">
              Browse Full Library
            </span>

            <span className="w-10 h-10 rounded-full bg-primary-forest flex items-center justify-center transition-colors">
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
            </span>
          </Link>

          <p className="text-bodySm text-neutral-textTertiary">
            New clips uploaded daily • HD Quality • Instant download
          </p>
        </motion.footer>

      </div>
    </section>
  );
}
