import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { useEffect } from 'react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 text-sm font-semibold text-white border border-white/25 px-5 py-2.5 bg-transparent transition-colors hover:border-accent hover:text-accent"
      aria-label="Toggle Language"
    >
      <Globe size={16} />
      <span>{i18n.language === 'en' ? 'العربية' : 'English'}</span>
    </button>
  );
};

export default LanguageSwitcher;
