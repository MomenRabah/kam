import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import DottedGlowBackground from '../components/DotDistortionShader';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <section className="relative isolate bg-secondary overflow-hidden">
      {/* Dotted Glow Background */}
      <DottedGlowBackground />

      <div className="relative px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1 
              className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {t('hero.title')}{' '}
              <span className="text-accent">{t('hero.titleHighlight')}</span>
            </motion.h1>
            
            <motion.p 
              className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8"
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
              <Button size="lg" className="group shadow-lg">
                {t('hero.cta')}
                <ArrowRight 
                  className={`ml-2 group-hover:translate-x-1 transition-transform ${isRTL ? 'rotate-180' : ''}`} 
                  size={20} 
                />
              </Button>
              <a href="#services" className="text-sm/6 font-semibold text-white hover:text-accent transition-colors">
                {t('hero.ctaSecondary')} <span aria-hidden="true">→</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Gradient blur bottom */}
      <div aria-hidden="true" className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <div 
          style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-accent to-primary opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
    </section>
  );
};

export default HeroSection;
