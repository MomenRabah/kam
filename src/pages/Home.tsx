import { useEffect, useRef, useState } from 'react';
import HeroSection from '../sections/HeroSection';
import ServicesSection from '../sections/ServicesSection';
import GallerySection from '../sections/GallerySection';
import ClientsSection from '../sections/ClientsSection';
import StatsSection from '../sections/StatsSection';
import CTASection from '../sections/CTASection';
import ContactSection from '../sections/ContactSection';
import Footer from '../components/Footer';

const Home = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeout = useRef<number | null>(null);

  // Ensure page starts at top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return;

      // Check if we're in hero section
      const heroSection = document.querySelector('#hero');
      if (!heroSection) return;

      const heroRect = heroSection.getBoundingClientRect();
      // Hero is visible and taking up most of viewport
      const isInHero = heroRect.top >= -50 && heroRect.top <= 50;

      // Scrolling down from hero section
      if (isInHero && e.deltaY > 0) {
        e.preventDefault();
        setIsScrolling(true);
        
        // Smooth scroll to services section
        const servicesSection = document.querySelector('#services');
        servicesSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });

        scrollTimeout.current = window.setTimeout(() => {
          setIsScrolling(false);
        }, 1500);
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleWheel);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, [isScrolling]);

  return (
    <div ref={containerRef} className="snap-container scrollbar-hide">
      <div className="snap-section" id="hero">
        <HeroSection />
      </div>
      <div className="snap-section">
        <ServicesSection />
      </div>
      <div className="snap-section">
        <GallerySection />
      </div>
      <div className="snap-section">
        <ClientsSection />
      </div>
      <div className="snap-section">
        <StatsSection />
      </div>
      <div className="snap-section">
        <CTASection />
      </div>
      <div className="snap-section">
        <ContactSection />
      </div>
      <div className="snap-section">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
