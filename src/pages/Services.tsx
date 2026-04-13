import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Card from '../components/ui/Card';
import { Briefcase, Camera, Utensils, Monitor, Users, Building2 } from 'lucide-react';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Building2,
      titleKey: 'services.boothExperts.title',
      descKey: 'services.boothExperts.description',
      featuresKey: 'services.boothExperts.features',
    },
    {
      icon: Briefcase,
      titleKey: 'services.conferences.title',
      descKey: 'services.conferences.description',
      featuresKey: 'services.conferences.features',
    },
    {
      icon: Camera,
      titleKey: 'services.photography.title',
      descKey: 'services.photography.description',
      featuresKey: 'services.photography.features',
    },
    {
      icon: Utensils,
      titleKey: 'services.catering.title',
      descKey: 'services.catering.description',
      featuresKey: 'services.catering.features',
    },
    {
      icon: Monitor,
      titleKey: 'services.digitalEntertainment.title',
      descKey: 'services.digitalEntertainment.description',
      featuresKey: 'services.digitalEntertainment.features',
    },
    {
      icon: Users,
      titleKey: 'services.serviceSquad.title',
      descKey: 'services.serviceSquad.description',
      featuresKey: 'services.serviceSquad.features',
    },
  ];

  return (
    <div>
      <section className="relative py-20 bg-linear-to-r bg-background overflow-hidden text-white">
      {/* Soft abstract light glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        {/* Light blob 1 */}
        <div className="absolute w-[100px] h-[100px] bg-primary/90 blur-lg rounded-full -translate-x-8 -translate-y-1 mix-blend-screen opacity-70" />

        {/* Light blob 2 */}
        <div className="absolute w-[120px] h-[120px] bg-accent/70 blur-2xl rounded-full translate-x-10 -translate-y-4 mix-blend-screen opacity-70" />
        {/* Subtle center glow */}
        <div className="absolute w-[150px] h-[150px] bg-primary/60 blur-xl rounded-full translate-x-2 translate-y-4 mix-blend-screen opacity-80" />
      </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            {t('services.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            {t('services.subtitle')}
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <service.icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">
                    {t(service.titleKey)}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {t(service.descKey)}
                  </p>
                  <ul className="space-y-2">
                    {(t(service.featuresKey, { returnObjects: true }) as string[]).map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-600">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
