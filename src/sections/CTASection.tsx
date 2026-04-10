import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <section className="py-20 bg-linear-to-r from-primary to-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <Button 
            size="lg" 
            variant="secondary" 
            className="bg-white text-primary hover:bg-accent hover:text-white group"
          >
            {t('cta.button')}
            <ArrowRight 
              className={`ml-2 group-hover:translate-x-1 transition-transform ${isRTL ? 'rotate-180' : ''}`} 
              size={20} 
            />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
