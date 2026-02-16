import Header from '@/components/Header';
import Hero from '@/components/Hero';
import DailyClips from '@/components/DailyClips';
import OldmansBeach from '@/components/OldmansBeach';
import Services from '@/components/Services';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <DailyClips />
      <OldmansBeach />
      <Services />
      <Footer />
    </main>
  );
}
