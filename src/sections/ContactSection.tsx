import { useState } from 'react';
import type { FormEvent, ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import Input from '../components/ui/Input';
import Textarea from '../components/ui/Textarea';
import { Send } from 'lucide-react';

const ContactSection = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <Input
                name="name"
                placeholder={t('contact.name')}
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Input
                name="email"
                type="email"
                placeholder={t('contact.email')}
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Input
                name="phone"
                type="tel"
                placeholder={t('contact.phone')}
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Textarea
                name="message"
                placeholder={t('contact.message')}
                value={formData.message}
                onChange={handleChange}
                rows={6}
                required
              />
            </div>
              <Button 
                type="submit"
                size="lg" 
                className="border w-full px-4 group hover:border-primary text-white bg-primary hover:text-white transition-all "
              >          
                {t('contact.send')}
                <Send className="ml-2 group-hover:ltr:translate-x-1 group-hover:rtl:-translate-x-1 transition-transform" size={20} />
              </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
