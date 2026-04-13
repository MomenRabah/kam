import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Card from '../components/ui/Card';
import { Eye, Target, Award, Lightbulb, Handshake, Star, UserCheck } from 'lucide-react';
import companyImage from '../assets/images/main.jpg';

const About = () => {
  const { t } = useTranslation();

  const visionMission = [
    {
      icon: Eye,
      titleKey: 'about.vision.title',
      descKey: 'about.vision.description',
    },
    {
      icon: Target,
      titleKey: 'about.mission.title',
      descKey: 'about.mission.description',
    },
  ];

  const values = [
    {
      icon: Award,
      titleKey: 'about.values.commitment.title',
      descKey: 'about.values.commitment.description',
    },
    {
      icon: Lightbulb,
      titleKey: 'about.values.innovation.title',
      descKey: 'about.values.innovation.description',
    },
    {
      icon: Handshake,
      titleKey: 'about.values.trust.title',
      descKey: 'about.values.trust.description',
    },
    {
      icon: Star,
      titleKey: 'about.values.quality.title',
      descKey: 'about.values.quality.description',
    },
    {
      icon: UserCheck,
      titleKey: 'about.values.customerFirst.title',
      descKey: 'about.values.customerFirst.description',
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
            {t('nav.about')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            {t('about.heroSubtitle')}
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-justify items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-secondary mb-6">{t('about.whoWeAre')}</h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                {t('about.paragraph1')}
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                {t('about.paragraph2')}
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                {t('about.paragraph3')}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('about.paragraph4')}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden h-96 flex items-center justify-center bg-gray-100"
            >
              <img 
                src={companyImage} 
                alt="KAM Company" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Vision & Mission */}
          <div className="mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-center text-secondary mb-12"
            >
              {t('about.vision.title')} & {t('about.mission.title')}
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {visionMission.map((item, index) => (
                <motion.div
                  key={item.titleKey}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="text-center h-full w-full">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <item.icon className="text-primary" size={32} />
                    </div>
                    <h3 className="text-xl font-semibold text-secondary mb-3">
                      {t(item.titleKey)}
                    </h3>
                    <p className="text-gray-600">
                      {t(item.descKey)}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Our Values */}
          <div className="bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16 rounded-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-center text-secondary mb-12"
            >
              {t('about.values.title')}
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {values.map((value, index) => (
                <motion.div
                  key={value.titleKey}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`group ${index === values.length - 1 ? 'md:col-span-2' : ''}`}
                >
                  <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:border-primary hover:shadow-2xl shadow-primary/20 transition-all duration-300 h-full">
                    <div className="shrink-0 w-14 h-14 rounded-lg bg-linear-to-b  flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="text-primary" size={28} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                        {t(value.titleKey)}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {t(value.descKey)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
