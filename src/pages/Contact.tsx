import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import ContactSection from '../sections/ContactSection';
import { Mail, Phone, MapPin } from 'lucide-react';

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
    }
  ];

  return (
    <div>

      <ContactSection />
    </div>
  );
};

export default Contact;
