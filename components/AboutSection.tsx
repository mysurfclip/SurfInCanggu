'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full bg-neutral-cream"
      aria-labelledby="about-heading"
    >
      <div className="section-wrap">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-center">

          {/* ================= LEFT CONTENT ================= */}
          <div className="space-y-8 sm:space-y-10">
            <header className="space-y-6">
              <h2
                id="about-heading"
                className="font-display text-hero text-primary-forest leading-[1]"
              >
                12 Years <br />Capturing Waves
              </h2>
              <div className="w-32 h-[3px] bg-accent-orange" />
            </header>

            {/* Mobile image card */}
            <div className="block md:hidden w-full">
              <div className="flex items-start">
                <div className="w-8 shrink-0 px-2 py-4 bg-accent-orange rounded-full shadow-[0px_8px_10px_-6px_rgba(0,0,0,0.10)] flex flex-col justify-start items-center gap-2">
                  <div className="h-40 flex items-center justify-center">
                    <span className="rotate-90 text-white text-[10px] font-medium uppercase leading-4 tracking-[3.12px] whitespace-nowrap">
                      Your Photographer
                    </span>
                  </div>
                  <div className="w-1 h-1 bg-white/80 opacity-50 rounded-full" />
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-premium w-[305px] h-[545px] sm:flex-1 sm:w-auto sm:h-[641px]">
                  <Image
                    src="/images/sic-photographer-luqman.jpeg"
                    alt="Luqman - Surf Photographer"
                    fill
                    sizes="(max-width: 640px) 305px, (max-width: 768px) calc(100vw - 64px)"
                    className="object-cover object-top"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-forest/90 via-primary-forest/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 w-full px-5 pt-8 pb-6 text-white space-y-6">
                    <div className="flex justify-between items-end">
                      <div>
                        <div className="text-2xl font-light leading-8">Luqman</div>
                        <div className="text-xs uppercase tracking-[3.6px] text-white/60">Est. 2013</div>
                      </div>
                      <div className="w-12 h-12 rounded-full outline outline-[0.56px] outline-white/20 flex items-center justify-center">📷</div>
                    </div>
                    <div className="border-t border-white/10 pt-4 flex justify-between items-center text-white">
                      <div className="flex items-end gap-2 shrink-0">
                        <span className="text-xl font-light">12</span>
                        <span className="text-[10px] uppercase tracking-wide text-white/50">Years</span>
                      </div>
                      <div className="w-px h-3 bg-white/20 mx-2" />
                      <div className="flex items-end gap-2 shrink-0">
                        <span className="text-xl font-light">∞</span>
                        <span className="text-[10px] uppercase tracking-wide text-white/50">Waves</span>
                      </div>
                      <div className="w-px h-3 bg-white/20 mx-2" />
                      <div className="flex items-end gap-2 shrink-0">
                        <span className="text-xl font-light">01</span>
                        <span className="text-[10px] uppercase tracking-wide text-white/50">Beach</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-h2 text-primary-forest">
                by Luqman at Oldman's beach.
              </h3>
              <p className="text-bodyBase text-neutral-textSecondary leading-relaxed">
                Every session, every wave, captured and uploaded daily to
                ClipDays. With over a decade of experience at this iconic break,
                Luqman knows exactly when and where to be.
              </p>
            </div>

            <div className="space-y-10 pt-2">
              <div>
                <div className="text-label text-neutral-textTertiary mb-4">Get in Touch</div>
                <Link
                  href="https://wa.me/6285792835235"
                  className="flex justify-between items-center border-b border-neutral-border pb-3 text-primary-forest hover:text-accent-orange transition"
                >
                  <span className="text-bodyBase">WhatsApp</span>
                  <span>→</span>
                </Link>
              </div>
              <div>
                <div className="text-label text-neutral-textTertiary mb-4">Get Your Clips</div>
                <Link
                  href="#clips"
                  className="flex justify-between items-center border-b border-neutral-border pb-3 text-primary-forest hover:text-accent-orange transition"
                >
                  <span className="text-bodyBase">View on ClipDays</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* ================= RIGHT IMAGE CARD — desktop ================= */}
          <div className="hidden md:flex items-start">
            <div className="w-8 shrink-0 px-2 py-4 bg-accent-orange rounded-full shadow-[0px_8px_10px_-6px_rgba(0,0,0,0.10)] flex flex-col justify-start items-center gap-2">
              <div className="h-40 flex items-center justify-center">
                <span className="rotate-90 text-white text-[10px] font-medium uppercase leading-4 tracking-[3.12px] whitespace-nowrap">
                  Your Photographer
                </span>
              </div>
              <div className="w-1 h-1 bg-white/80 opacity-50 rounded-full" />
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-premium w-[328px] h-[641px] xl:w-[468px] xl:h-[713px]">
              <Image
                src="/images/sic-photographer-luqman.jpeg"
                alt="Luqman - Surf Photographer"
                fill
                sizes="(max-width: 1280px) 328px, 468px"
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-forest/90 via-primary-forest/50 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full px-5 pt-8 pb-6 text-white space-y-6">
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-2xl font-light leading-8">Luqman</div>
                    <div className="text-xs uppercase tracking-[3.6px] text-white/60">Est. 2013</div>
                  </div>
                  <div className="w-12 h-12 rounded-full outline outline-[0.56px] outline-white/20 flex items-center justify-center">📷</div>
                </div>
                <div className="border-t border-white/10 pt-4 flex justify-between items-center text-white">
                  <div className="flex items-end gap-2">
                    <span className="text-xl font-light">12</span>
                    <span className="text-[10px] uppercase tracking-wide text-white/50">Years</span>
                  </div>
                  <div className="w-px h-3 bg-white/20" />
                  <div className="flex items-end gap-2">
                    <span className="text-xl font-light">∞</span>
                    <span className="text-[10px] uppercase tracking-wide text-white/50">Waves</span>
                  </div>
                  <div className="w-px h-3 bg-white/20" />
                  <div className="flex items-end gap-2">
                    <span className="text-xl font-light">01</span>
                    <span className="text-[10px] uppercase tracking-wide text-white/50">Beach</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}