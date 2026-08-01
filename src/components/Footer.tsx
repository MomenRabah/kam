import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import KamLogo from '../assets/kam-logo.svg?react';

const Footer = () => {
  const { t } = useTranslation();


  const quickLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/services', label: t('nav.services') },
    { path: '/gallery', label: t('nav.work') },
    { path: '/about', label: t('nav.about') },
    { path: '/contact', label: t('nav.contact') },
  ];

  return (
    <footer className="bg-black border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div>
            <div className="mb-6">
              <KamLogo className="h-10 w-auto" />
            </div>
            <p className="text-gray-400 leading-relaxed">{t('footer.description')}</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">{t('contact.title')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary mt-1 shrink-0" />
                <span className="text-gray-400">{t('contact.info.address')}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-primary shrink-0" />
                <span dir='ltr' className="text-gray-400">{t('contact.info.phone')}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-primary shrink-0" />
                <span className="text-gray-400">{t('contact.info.email')}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} KAM. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
