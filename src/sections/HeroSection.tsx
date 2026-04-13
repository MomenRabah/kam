import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const HeroSection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative isolate overflow-hidden bg-secondary">
      {/* Gradient overlay */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-black/50 via-transparent to-black/80" />
      
      <div className="relative px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-6xl py-24 sm:py-48 lg:py-56">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-start flex flex-col items-start justify-center"
          >
            <motion.h1 
              className="flex flex-col text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {t('hero.title')}{' '}
              <span className="text-accent">{t('hero.titleHighlight')}</span>
            </motion.h1>
            
            <motion.p 
              className="mt-8 text-base font-normal text-pretty text-gray-300 sm:text-xl/8 max-w-4xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {t('hero.subtitle')}
            </motion.p>
            
            <motion.div 
              className="mt-10 flex items-center justify-center gap-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <a href="#contact" onClick={handleScrollToContact}>
                <Button 
                  size="lg" 
                  className="border px-4 hover:scale-105 hover:border-primary text-white bg-primary hover:text-white transition-all "
                >
                  {t('hero.cta')}
                  {isRTL ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
                </Button>
              </a>
              <a href="#services" onClick={handleScrollToServices} className="text-sm/6 font-semibold text-white hover:text-accent transition-colors">
                {t('hero.ctaSecondary')}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Brand color glows - organic globe effect */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        {/* Large orange core - slightly left and up */}
        <div aria-hidden="true" className="absolute -translate-x-12 -translate-y-8 w-[400px] h-[400px] sm:w-[700px] sm:h-[700px] bg-primary/40 blur-3xl rounded-full" />
        
        {/* Medium yellow layer - slightly right and down */}
        <div aria-hidden="true" className="absolute translate-x-16 translate-y-12 w-[350px] h-[350px] sm:w-[600px] sm:h-[600px] bg-accent/35 blur-3xl rounded-full" />
        
        {/* Small orange accent - slightly right and up */}
        <div aria-hidden="true" className="absolute translate-x-8 -translate-y-16 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-primary/30 blur-3xl rounded-full" />
        
        {/* Inner yellow glow - slightly left and down */}
        <div aria-hidden="true" className="absolute -translate-x-10 translate-y-10 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] bg-accent/25 blur-3xl rounded-full" />
      </div>
    </section>
  );
};

export default HeroSection;
