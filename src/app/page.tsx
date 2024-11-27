// src/app/page.tsx
import HeroSection from '@/components/HeroSection';
import About from '@/components/About';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Team from '@/components/Team';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <About />
      <Services />
      <Team />
      <Testimonials />
    </div>
  );
}
