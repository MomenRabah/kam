import { useTranslation } from 'react-i18next';
import { useEffect, useRef } from 'react';
import { inView } from 'motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      inView(contentRef.current, (el) => {
        (el as HTMLElement).style.opacity = '1';
        (el as HTMLElement).style.transform = 'translateY(0)';
        (el as HTMLElement).style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      });
    }
  }, []);

  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Centered glow effects */}
      <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Orange core */}
        <div className="absolute w-[300px] h-[300px] bg-primary/30 blur-3xl rounded-full" />
        
        {/* Yellow layer - slightly offset */}
        <div className="absolute translate-x-16 translate-y-16 w-[200px] h-[200px] bg-accent/20 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={contentRef} className="text-center text-white" style={{ opacity: 0, transform: 'translateY(30px)' }}>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto text-gray-300">
            {t('cta.subtitle')}
          </p>
          <a href="#contact" onClick={handleScrollToContact}>
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-primary px-8 py-6 text-lg transition-all text-white border-2 border-primary hover:bg-transparent hover:text-white group"
            >
              {t('cta.button')}
              <ArrowRight 
                className={`group-hover:translate-x-1 transition-transform ${isRTL ? 'rotate-180' : ''}`} 
                size={24} 
              />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
