'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const REFRESH_INTERVAL_MS = 5 * 60 * 1000;

interface Spot { code: string; name: string; }
interface SpotVideo { url: string; uploaded_at: string; uploaded_by?: string; }
interface Metadata { spots: Spot[]; videos: Record<string, SpotVideo>; }

function timeAgo(date: Date): string {
  const minutes = Math.floor((Date.now() - date.getTime()) / 1000 / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  return `${Math.floor(hours / 24)}d ago`;
}

function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric', month: 'short',
    hour: '2-digit', minute: '2-digit',
    timeZone: 'Asia/Makassar',
  }).format(date);
}

function SpotCard({ spot, video }: { spot: Spot; video: SpotVideo | null }) {
  const [hovered, setHovered] = useState(false);
  const [playing, setPlaying] = useState(false);
  const uploadedAt = video ? new Date(video.uploaded_at) : null;
  const isRecent = uploadedAt ? (Date.now() - uploadedAt.getTime()) < 1000 * 60 * 30 : false;

  return (
    <motion.article
      className="group relative rounded-xl overflow-hidden bg-white cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={{
        boxShadow: hovered
          ? '0 20px 60px -10px rgba(44,77,72,0.18), 0 4px 16px -4px rgba(44,77,72,0.10)'
          : '0 2px 8px -2px rgba(44,77,72,0.06)',
        y: hovered ? -4 : 0,
      }}
      transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
      onClick={() => video && setPlaying(!playing)}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[#1a2e2b]">
        {video ? (
          playing ? (
            <video src={video.url} autoPlay controls playsInline className="w-full h-full object-contain" />
          ) : (
            <>
              <motion.video
                src={video.url}
                preload="metadata"
                className="w-full h-full object-cover"
                animate={{ scale: hovered ? 1.04 : 1 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-14 h-14 rounded-full flex items-center justify-center"
                  animate={{
                    backgroundColor: hovered ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.88)',
                    scale: hovered ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M8 5v14l11-7L8 5z" fill="#2c4d48" />
                  </svg>
                </motion.div>
              </div>
              <motion.div className="absolute inset-0 bg-[#2c4d48]" animate={{ opacity: hovered ? 0.12 : 0 }} transition={{ duration: 0.35 }} />
              <div className="absolute top-3 left-3">
                {isRecent ? (
                  <span className="flex items-center gap-1.5 bg-red-500 text-white text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    Live
                  </span>
                ) : (
                  <span className="bg-black/60 backdrop-blur-sm text-white text-[10px] font-medium uppercase tracking-wider px-2.5 py-1 rounded-full">
                    {uploadedAt && timeAgo(uploadedAt)}
                  </span>
                )}
              </div>
            </>
          )
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-white/30">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span className="text-xs font-medium">No video yet</span>
          </div>
        )}
      </div>

      <div className="px-5 py-4 bg-white">
        <motion.h3
          className="font-semibold text-base leading-tight"
          animate={{ color: hovered && video ? '#e8662a' : '#2c4d48' }}
          transition={{ duration: 0.3 }}
        >
          {spot.name}
        </motion.h3>
        <div className="flex items-center justify-between mt-2.5 border-t border-neutral-100 pt-2.5">
          <span className="text-xs text-[#2c4d48]/50">
            {video && uploadedAt ? formatDate(uploadedAt) : 'Belum ada video'}
          </span>
          {video && (
            <motion.span
              className="flex items-center gap-1.5 text-xs font-medium"
              animate={{ color: hovered ? '#e8662a' : '#2c4d48' }}
              transition={{ duration: 0.3 }}
            >
              Watch
              <motion.svg width="14" height="14" viewBox="0 0 16 16" fill="none" animate={{ x: hovered ? 3 : 0 }} transition={{ duration: 0.3 }}>
                <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </motion.svg>
            </motion.span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function LiveUpdates() {
  const [metadata, setMetadata] = useState<Metadata | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const fetchMetadata = useCallback(async () => {
    try {
      const res = await fetch(`/api/surf-videos?file=metadata.json&t=${Date.now()}`);
      if (!res.ok) throw new Error('Failed to fetch');
      const data: Metadata = await res.json();
      setMetadata(data);
      setError(null);
    } catch {
      setError('Tidak dapat memuat data kondisi ombak.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMetadata();
    const interval = setInterval(fetchMetadata, REFRESH_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [fetchMetadata]);

  const spots = metadata?.spots || [];
  const videos = metadata?.videos || {};
  const spotsWithVideo = spots.filter(s => videos[s.code]).length;
  const filteredSpots = activeFilter ? spots.filter(s => s.code === activeFilter) : spots;

  return (
    <section id="live-updates" className="bg-neutral-cream overflow-hidden scroll-mt-24" aria-labelledby="daily-clips-heading">
      <div className="section-wrap">
        <header className="mb-12 lg:mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
            className="flex flex-col gap-8 md:gap-10"
          >
            <motion.div
              variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } } }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-px bg-accent-orange" />
              <span className="text-label text-neutral-textTertiary uppercase flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                Conditions Now
              </span>
            </motion.div>

            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-10 lg:gap-16">
              <motion.h2
                id="daily-clips-heading"
                variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } } }}
                className="font-display text-display text-primary-forest leading-[1.05] flex flex-col sm:flex-row sm:items-end"
              >
                <span>Live</span>
                <span className="sm:ml-4">Updates</span>
              </motion.h2>

              <motion.div
                variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } } }}
                className="max-w-md flex flex-col gap-5"
              >
                <p className="text-bodyLg text-neutral-textSecondary">
                  Footage from the water, updated throughout the day. Check conditions at Canggu's best spots before you paddle out.
                </p>

                {!loading && metadata && (
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-[#2c4d48]/50">
                      <span className="font-semibold text-[#2c4d48]">{spotsWithVideo}</span>/{spots.length} spots updated
                    </span>
                    <button onClick={fetchMetadata} className="text-xs text-[#2c4d48]/40 hover:text-[#2c4d48] transition-colors underline underline-offset-2">
                      Refresh
                    </button>
                  </div>
                )}

                {!loading && spots.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    <motion.button
                      onClick={() => setActiveFilter(null)}
                      animate={{
                        backgroundColor: activeFilter === null ? '#2c4d48' : 'rgba(0,0,0,0)',
                        borderColor: activeFilter === null ? '#2c4d48' : 'rgba(44,77,72,0.2)',
                        color: activeFilter === null ? '#ffffff' : 'rgba(44,77,72,0.7)',
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="text-xs font-medium px-3 py-1 rounded-full border cursor-pointer"
                    >
                      All Spots
                    </motion.button>
                    {spots.map((spot) => (
                      <motion.button
                        key={spot.code}
                        onClick={() => setActiveFilter(activeFilter === spot.code ? null : spot.code)}
                        animate={{
                          backgroundColor: activeFilter === spot.code ? '#2c4d48' : 'rgba(0,0,0,0)',
                          borderColor: activeFilter === spot.code ? '#2c4d48' : 'rgba(44,77,72,0.2)',
                          color: activeFilter === spot.code ? '#ffffff' : 'rgba(44,77,72,0.7)',
                        }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="text-xs font-medium px-3 py-1 rounded-full border cursor-pointer flex items-center gap-1.5"
                      >
                        {spot.name}
                        {videos[spot.code] && <span className="w-1.5 h-1.5 rounded-full bg-green-400" />}
                      </motion.button>
                    ))}
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>
        </header>

        <div className="mb-20 lg:mb-24">
          {loading && (
            <div className="flex items-center gap-3 text-[#2c4d48]/50 py-12">
              <div className="w-5 h-5 border-2 border-[#2c4d48]/20 border-t-[#2c4d48] rounded-full animate-spin" />
              <span className="text-sm">Loading kondisi ombak...</span>
            </div>
          )}

          {error && !loading && (
            <div className="py-8 text-sm text-[#2c4d48]/50">
              {error}{' '}
              <button onClick={fetchMetadata} className="underline hover:text-[#2c4d48]">Coba lagi</button>
            </div>
          )}

          {!loading && !error && (
            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <AnimatePresence mode="popLayout">
                {filteredSpots.map((spot) => (
                  <motion.div
                    key={spot.code}
                    layout
                    initial={{ opacity: 0, y: 40, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.97 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                  >
                    <SpotCard spot={spot} video={videos[spot.code] || null} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>

        <motion.footer
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          className="flex flex-col items-center gap-5 text-center"
        >
          <p className="text-bodySm text-neutral-textTertiary">
            Updated by Luqman & filmer · Hourly during daylight hours · Canggu, Bali
          </p>
        </motion.footer>
      </div>
    </section>
  );
}
