"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DailyClips from "@/components/DailyClips";
import OldmansBeach from "@/components/SurfBreaksSection";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import SurfBreaksSection from "@/components/SurfBreaksSection";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <DailyClips />
      <SurfBreaksSection />
      <Services />
      <Footer />
    </main>
  );
}
