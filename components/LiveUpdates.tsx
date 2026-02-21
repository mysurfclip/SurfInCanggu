'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Spot definitions — Pererenan excluded per Marcel's note
const SPOTS = [
  { code: 'OMC', name: 'Old Mans', location: 'Canggu' },
  { code: 'ECB', name: 'Echo Beach', location: 'Canggu' },
  { code: 'SDB', name: 'Sandbar', location: 'Canggu' },
  { code: 'RVM', name: 'Rivermouth', location: 'Canggu' },
];

// Mock live update data — replace with Supabase realtime subscription
const mockLiveUpdates = [
  {
    id: 'live-001',
    spot_code: 'OMC',
    spot_name: 'Old Mans',
    thumbnail_url: '/thumbnails/omc-live.jpg',
    preview_url: '/previews/omc-live.mp4',
    recorded_at: new Date(Date.now() - 1000 * 60 * 23),
    condition_note: 'Waist to chest, clean lines',
    duration_seconds: 18,
  },
  {
    id: 'live-002',
    spot_code: 'ECB',
    spot_name: 'Echo Beach',
    thumbnail_url: '/thumbnails/ecb-live.jpg',
    preview_url: '/previews/ecb-live.mp4',
    recorded_at: new Date(Date.now() - 1000 * 60 * 47),
    condition_note: 'Head high, offshore wind',
    duration_seconds: 24,
  },
  {
    id: 'live-003',
    spot_code: 'SDB',
    spot_name: 'Sandbar',
    thumbnail_url: '/thumbnails/sdb-live.jpg',
    preview_url: '/previews/sdb-live.mp4',
    recorded_at: new Date(Date.now() - 1000 * 60 * 12),
    condition_note: 'Overhead, bit choppy',
    duration_seconds: 21,
  },
  {
    id: 'live-004',
    spot_code: 'RVM',
    spot_name: 'Rivermouth',
    thumbnail_url: '/thumbnails/rvm-live.jpg',
    preview_url: '/previews/rvm-live.mp4',
    recorded_at: new Date(Date.now() - 1000 * 60 * 65),
    condition_note: 'Shoulder high, glassy',
    duration_seconds: 19,
  },
];

function timeAgo(date: Date): string {
  const minutes = Math.floor((Date.now() - date.getTime()) / 1000 / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  return `${hours}h ago`;
}

function SpotPill({
  spot,
  active,
  onClick,
}: {
  spot: typeof SPOTS[0];
  active: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      animate={{
        backgroundColor: active ? '#2c4d48' : 'transparent',
        borderColor: active ? '#2c4d48' : 'rgba(44,77,72,0.2)',
        color: active ? '#ffffff' : 'rgba(44,77,72,0.7)',
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="text-xs font-medium px-3 py-1 rounded-full border cursor-pointer"
    >
      {spot.name}
    </motion.button>
  );
}

function LiveCard({ update }: { update: typeof mockLiveUpdates[0] }) {
  const [hovered, setHovered] = useState(false);
  const age = timeAgo(update.recorded_at);
  const isRecent = (Date.now() - update.recorded_at.getTime()) < 1000 * 60 * 30;

  return (
    <motion.article
      className="group relative rounded-xl2 overflow-hidden bg-white cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={{
        boxShadow: hovered
          ? '0 20px 60px -10px rgba(44,77,72,0.18), 0 4px 16px -4px rgba(44,77,72,0.10)'
          : '0 2px 8px -2px rgba(44,77,72,0.06)',
        y: hovered ? -4 : 0,
      }}
      transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* ===== THUMBNAIL ===== */}
      <div className="relative aspect-[16/10] overflow-hidden rounded-t-xl2">

        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-neutral-200 to-neutral-300"
          animate={{ scale: hovered ? 1.04 : 1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        />

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-16 h-16 rounded-full flex items-center justify-center"
            animate={{
              backgroundColor: hovered ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.88)',
              scale: hovered ? 1.1 : 1,
              boxShadow: hovered
                ? '0 8px 32px rgba(0,0,0,0.18)'
                : '0 2px 8px rgba(0,0,0,0.10)',
            }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <motion.svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              animate={{ x: hovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <path d="M8 5v14l11-7L8 5z" fill="#2c4d48" />
            </motion.svg>
          </motion.div>
        </div>

        {/* Overlay on hover */}
        <motion.div
          className="absolute inset-0 bg-primary-forest"
          animate={{ opacity: hovered ? 0.12 : 0 }}
          transition={{ duration: 0.35 }}
        />

        {/* Live / time badge */}
        <div className="absolute top-4 left-4">
          {isRecent ? (
            <span className="flex items-center gap-1.5 bg-red-500 text-white text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              Live
            </span>
          ) : (
            <span className="bg-black/60 backdrop-blur-sm text-white text-[10px] font-medium uppercase tracking-wider px-2.5 py-1 rounded-full">
              {age}
            </span>
          )}
        </div>

        {/* Duration */}
        <div className="absolute bottom-4 right-4 bg-primary-forest/90 text-white text-caption font-medium px-3 py-1 rounded-full">
          {update.duration_seconds}s
        </div>
      </div>

      {/* ===== CONTENT ===== */}
      <div className="px-6 py-5 bg-white">

        <motion.h3
          className="text-h3 leading-tight"
          animate={{ color: hovered ? '#e8662a' : '#2c4d48' }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          {update.spot_name}
        </motion.h3>

        <div className="flex items-center justify-between mt-3 border-t border-neutral-border pt-3">

          <span className="text-label text-neutral-textSecondary uppercase tracking-[0.3em]">
            {update.condition_note}
          </span>

          <motion.span
            className="flex items-center gap-2 text-bodyBase font-medium"
            animate={{ color: hovered ? '#e8662a' : '#2c4d48' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            Watch
            <motion.svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              animate={{ x: hovered ? 4 : 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <path
                d="M3 8h10M8 3l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </motion.span>

        </div>
      </div>
    </motion.article>
  );
}

function CTAButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.button
      className="px-8 py-3 rounded-full border border-primary-forest flex items-center gap-4"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={{ backgroundColor: hovered ? '#2c4d48' : 'transparent' }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <motion.span
        className="text-bodyBase font-medium"
        animate={{ color: hovered ? '#ffffff' : '#2c4d48' }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        View All Spots
      </motion.span>

      <motion.span
        className="w-10 h-10 rounded-full flex items-center justify-center"
        animate={{ backgroundColor: hovered ? 'rgba(255,255,255,0.15)' : '#2c4d48' }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <motion.svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          animate={{ x: hovered ? 2 : 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <path
            d="M3 10.1662H17.3323M17.3323 10.1662L10.1662 3M17.3323 10.1662L10.1662 17.3323"
            stroke="white"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </motion.span>
    </motion.button>
  );
}

export default function LiveUpdates() {
  const [activeSpot, setActiveSpot] = useState<string | null>(null);

  // Filter cards — null = show all
  const updates = activeSpot
    ? mockLiveUpdates.filter((u) => u.spot_code === activeSpot)
    : mockLiveUpdates;

  const handlePillClick = (code: string) => {
    // Toggle off jika spot yang sama diklik lagi
    setActiveSpot((prev) => (prev === code ? null : code));
  };

  return (
    <section
      id="live-updates"
      className="bg-neutral-cream overflow-hidden scroll-mt-24"
      aria-labelledby="daily-clips-heading"
    >
      <div className="section-wrap">

        {/* ================= SECTION HEADER ================= */}
        <header className="mb-12 lg:mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
            className="flex flex-col gap-8 md:gap-10"
          >
            {/* Micro Label */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
              }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-px bg-accent-orange" />
              <span className="text-label text-neutral-textTertiary uppercase flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                Conditions Now
              </span>
            </motion.div>

            {/* Header Row */}
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-10 lg:gap-16">

              {/* Title */}
              <motion.h2
                id="daily-clips-heading"
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
                }}
                className="font-display text-display text-primary-forest leading-[1.05] flex flex-col sm:flex-row sm:items-end"
              >
                <span>Live</span>
                <span className="sm:ml-4">Updates</span>
              </motion.h2>

              {/* Description + Spot pills */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
                }}
                className="max-w-md flex flex-col gap-5"
              >
                <p className="text-bodyLg text-neutral-textSecondary">
                  Footage from the water, updated hourly. Check conditions at
                  Old Mans, Echo Beach, Sandbar, and Rivermouth before you paddle out.
                </p>

                {/* Clickable spot pills */}
                <div className="flex flex-wrap gap-2">
                  {SPOTS.map((spot) => (
                    <SpotPill
                      key={spot.code}
                      spot={spot}
                      active={activeSpot === spot.code}
                      onClick={() => handlePillClick(spot.code)}
                    />
                  ))}
                </div>

                {/* Active filter hint */}
                <AnimatePresence>
                  {activeSpot && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.2 }}
                      className="text-xs text-neutral-textTertiary"
                    >
                      Showing {SPOTS.find((s) => s.code === activeSpot)?.name} ·{' '}
                      <button
                        onClick={() => setActiveSpot(null)}
                        className="underline underline-offset-2 hover:text-primary-forest transition-colors"
                      >
                        Show all
                      </button>
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </motion.div>
        </header>

        {/* ================= CLIPS GRID ================= */}
        <motion.section
          aria-label="Live surf condition updates"
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 mb-20 lg:mb-24"
        >
          <AnimatePresence mode="popLayout">
            {updates.map((update) => (
              <motion.div
                key={update.id}
                layout
                initial={{ opacity: 0, y: 40, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.97 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                <LiveCard update={update} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.section>

        {/* ================= CTA ================= */}
        <motion.footer
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          className="flex flex-col items-center gap-5 text-center"
        >
          <CTAButton />
          <p className="text-bodySm text-neutral-textTertiary">
            Updated by Luqman & filmer · Hourly during daylight hours · Old Mans · Echo Beach · Sandbar · Rivermouth
          </p>
        </motion.footer>

      </div>
    </section>
  );
}