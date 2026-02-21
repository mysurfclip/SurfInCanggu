"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LiveUpdates from "@/components/LiveUpdates";
import SurfBreaksSection from "@/components/SurfBreaksSection";
import Services from "@/components/Services";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <LiveUpdates />
      <SurfBreaksSection />
      <Services />
      <AboutSection />
      <Footer />
    </main>
  );
}