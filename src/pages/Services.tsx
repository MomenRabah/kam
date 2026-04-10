import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Card from '../components/ui/Card';
import { Briefcase, Heart, TrendingUp, Music, Users, Sparkles } from 'lucide-react';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Briefcase,
      titleKey: 'services.corporate.title',
      descKey: 'services.corporate.description',
      features: ['Conferences', 'Seminars', 'Team Building', 'Product Launches'],
    },
    {
      icon: Heart,
      titleKey: 'services.weddings.title',
      descKey: 'services.weddings.description',
      features: ['Wedding Planning', 'Venue Selection', 'Catering', 'Decoration'],
    },
    {
      icon: TrendingUp,
      titleKey: 'services.exhibitions.title',
      descKey: 'services.exhibitions.description',
      features: ['Trade Shows', 'Booth Design', 'Brand Activation', 'Exhibitions'],
    },
    {
      icon: Music,
      titleKey: 'services.entertainment.title',
      descKey: 'services.entertainment.description',
      features: ['Concerts', 'Festivals', 'Live Shows', 'Entertainment'],
    },
    {
      icon: Users,
      titleKey: 'services.corporate.title',
      descKey: 'services.corporate.description',
      features: ['Social Events', 'Private Parties', 'Networking', 'Celebrations'],
    },
    {
      icon: Sparkles,
      titleKey: 'services.entertainment.title',
      descKey: 'services.entertainment.description',
      features: ['Theme Events', 'Gala Dinners', 'Award Ceremonies', 'Special Occasions'],
    },
  ];

  return (
    <div className="pt-20">
      <section className="py-20 bg-linear-to-br from-secondary to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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

      <section className="py-20 bg-background">
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
                  <h3 className="text-2xl font-semibold text-secondary mb-4">
                    {t(service.titleKey)}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {t(service.descKey)}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-700">
                        <span className="w-2 h-2 bg-accent rounded-full"></span>
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
