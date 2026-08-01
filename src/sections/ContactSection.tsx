import { useState, useEffect, useRef } from 'react';
import type { FormEvent, ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { inView } from 'motion';
import { Button } from '@/components/ui/Button';
import Input from '../components/ui/Input';
import Textarea from '../components/ui/Textarea';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

const ContactSection = () => {
  const { t } = useTranslation();
  const headerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (headerRef.current) {
      inView(headerRef.current, (el) => {
        (el as HTMLElement).style.opacity = '1';
        (el as HTMLElement).style.transform = 'translateY(0)';
        (el as HTMLElement).style.transition = 'opacity 0.4s ease-out, transform 0.4s ease-out';
      });
    }
    if (formRef.current) {
      inView(formRef.current, (el) => {
        (el as HTMLElement).style.opacity = '1';
        (el as HTMLElement).style.transform = 'translateY(0)';
        (el as HTMLElement).style.transition = 'opacity 0.4s ease-out 0.2s, transform 0.4s ease-out 0.2s';
      });
    }
  }, []);

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
    <section id="contact" className="bg-black py-[130px] relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-accent/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div ref={headerRef} className="text-center mb-12" style={{ opacity: 0, transform: 'translateY(20px)' }}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-5"
            style={{ opacity: 0, transform: 'translateY(30px)' }}
          >
            <div>
              <Input
                name="name"
                placeholder={t('contact.name')}
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-primary/50 rounded py-4"
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
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-primary/50 rounded py-4"
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
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-primary/50 rounded py-4"
              />
            </div>
            <div>
              <Textarea
                name="message"
                placeholder={t('contact.message')}
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-primary/50 rounded"
              />
            </div>
              <Button
                type="submit"
                size="lg"
                className="h-[52px] rounded-none px-8 group bg-primary border-2 border-primary text-white hover:bg-transparent transition-all"
              >
                {t('contact.send')}
                <Send className="ml-2 group-hover:ltr:translate-x-1 group-hover:rtl:-translate-x-1 transition-transform" size={20} />
              </Button>
          </form>

          <div className="flex flex-col gap-5">
            <div className="p-8 border border-white/8 bg-white/[0.025] flex flex-col gap-[22px]">
              <div className="flex items-start gap-4">
                <MapPin size={20} className="text-primary mt-0.5 shrink-0" />
                <span className="text-gray-400 text-[15px]">{t('contact.info.address')}</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone size={20} className="text-primary shrink-0" />
                <span dir="ltr" className="text-gray-400 text-[15px]">{t('contact.info.phone')}</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail size={20} className="text-primary shrink-0" />
                <span dir="ltr" className="text-gray-400 text-[15px]">{t('contact.info.email')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
