import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section className="relative py-20 bg-linear-to-r bg-background overflow-hidden">
      {/* Centered glow effects */}
      <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Orange core */}
        <div className="absolute w-[150px] h-[150px] bg-primary blur-2xl rounded-full" />
        
        {/* Yellow layer - slightly offset */}
        <div className="absolute translate-x-8 translate-y-8 w-[100px] h-[100px] bg-accent/70 blur-2xl rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto opacity-90">
            {t('cta.subtitle')}
          </p>
          <a href="#contact" onClick={handleScrollToContact}>
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-transparent px-4 transition-all text-white border border-white hover:bg-white hover:text-primary group"
            >
              {t('cta.button')}
              <ArrowRight 
                className={`group-hover:translate-x-1 transition-transform ${isRTL ? 'rotate-180' : ''}`} 
                size={20} 
              />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
