import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import KamLogo from '../assets/kam-logo.svg?react';

const Footer = () => {
  const { t } = useTranslation();


  const quickLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/services', label: t('nav.services') },
    { path: '/about', label: t('nav.about') },
    { path: '/contact', label: t('nav.contact') },
  ];

  return (
    <footer className="bg-white border-t border-gray-200 text-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className=''>
            <div className="mb-4">
              <KamLogo className="h-10 w-auto" />
            </div>
            <p className="text-gray-600 mb-4">{t('footer.description')}</p>
            {/* <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-primary hover:text-white flex items-center justify-center transition-all text-sm font-bold text-secondary"
                  aria-label={social.label}
                >
                  {social.name}
                </a>
              ))}
            </div> */}
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t('contact.title')}</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary mt-1 shrink-0" />
                <span className="text-gray-600">{t('contact.info.address')}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-primary shrink-0" />
                <span dir='ltr' className="text-gray-600">{t('contact.info.phone')}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-primary shrink-0" />
                <span className="text-gray-600">{t('contact.info.email')}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} KAM. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
