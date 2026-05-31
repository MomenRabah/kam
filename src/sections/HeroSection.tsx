import { useTranslation } from 'react-i18next';
import { ArrowLeft, ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import heroImage from '@/assets/hero-image.jpg';

const HeroSection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollDown = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative isolate overflow-hidden bg-secondary h-dvh w-full">
      {/* Image Background - flipped horizontally */}
      <img
        src={heroImage}
        alt=""
        className="absolute inset-0 w-full h-full object-cover -z-20 ltr:-scale-x-100 rtl:scale-x-100"
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/70 -z-10" />
      
      {/* Content Container */}
      <div className="relative h-full flex flex-col justify-end pb-32 px-8 lg:px-20">
        <div className="flex flex-col items-start">
          <h1 className="flex flex-col font-bold tracking-tight">
            <span className="text-3xl sm:text-7xl lg:text-8xl text-primary animate-[fadeInUp_0.8s_ease-out]">
              {t('hero.beyondLimits')}
            </span>
            <span className="text-3xl sm:text-7xl lg:text-8xl text-white rtl:mt-6 mt-2 sm:mt-10 rtl:sm:mt-16 animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
              {t('hero.toTheSpace')}
            </span>
          </h1>
          
          <div className="mt-6 sm:mt-20 animate-[fadeInUp_0.8s_ease-out_0.4s_both]">
            <a href="#contact" onClick={handleScrollToContact}>
              <Button 
                size="lg" 
                className="border px-6 py-3 text-lg text-black bg-accent transition-colors hover:bg-black hover:text-white"
              >
                {t('hero.cta')}
                {isRTL ? <ArrowLeft size={24} /> : <ArrowRight size={24} />}
              </Button>
            </a>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <button
          onClick={handleScrollDown}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/80 cursor-pointer"
        >
          <ChevronDown size={32} className="animate-bounce" />
        </button>
      </div>
    </section> 
  );
};

export default HeroSection;
