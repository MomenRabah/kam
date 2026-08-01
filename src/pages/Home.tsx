import { useEffect } from 'react';
import HeroSection from '../sections/HeroSection';
import ServicesSection from '../sections/ServicesSection';
import GallerySection from '../sections/GallerySection';
import ClientsSection from '../sections/ClientsSection';
import StatsSection from '../sections/StatsSection';
import CTASection from '../sections/CTASection';
import ContactSection from '../sections/ContactSection';
import Footer from '../components/Footer';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black">
      <HeroSection />
      <ServicesSection />
      <GallerySection />
      <ClientsSection />
      <StatsSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
