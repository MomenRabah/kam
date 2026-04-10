import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import ContactSection from '../sections/ContactSection';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const { t } = useTranslation();

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: t('contact.info.address'),
    },
    {
      icon: Phone,
      title: 'Phone',
      content: t('contact.info.phone'),
    },
    {
      icon: Mail,
      title: 'Email',
      content: t('contact.info.email'),
    },
    {
      icon: Clock,
      title: 'Working Hours',
      content: 'Sun - Thu: 9:00 AM - 6:00 PM',
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
            {t('contact.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            {t('contact.subtitle')}
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <info.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold text-secondary mb-2">{info.title}</h3>
                <p className="text-gray-600 text-sm">{info.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
};

export default Contact;
