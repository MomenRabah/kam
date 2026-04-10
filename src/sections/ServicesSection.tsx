import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Card from '../components/ui/Card';
import { Briefcase, Heart, TrendingUp, Music } from 'lucide-react';

const ServicesSection = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Briefcase,
      titleKey: 'services.corporate.title',
      descKey: 'services.corporate.description',
      color: 'text-primary',
    },
    {
      icon: Heart,
      titleKey: 'services.weddings.title',
      descKey: 'services.weddings.description',
      color: 'text-accent',
    },
    {
      icon: TrendingUp,
      titleKey: 'services.exhibitions.title',
      descKey: 'services.exhibitions.description',
      color: 'text-secondary',
    },
    {
      icon: Music,
      titleKey: 'services.entertainment.title',
      descKey: 'services.entertainment.description',
      color: 'text-primary',
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.titleKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:scale-105 transition-transform duration-300">
                <div className={`w-16 h-16 rounded-full bg-${service.color}/10 flex items-center justify-center mb-6`}>
                  <service.icon className={service.color} size={32} />
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-3">
                  {t(service.titleKey)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t(service.descKey)}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
