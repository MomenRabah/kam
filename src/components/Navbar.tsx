import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import { Menu, X } from 'lucide-react';
import KamLogo from '../assets/kam-logo.svg?react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();

  const links = [
    { path: '/', label: t('nav.home') },
    { path: '/services', label: t('nav.services') },
    { path: '/about', label: t('nav.about') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-secondary">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">KAM</span>
            <KamLogo className="h-8 w-auto" />
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-12">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm/6 font-semibold transition-colors ${
                isActive(link.path) 
                  ? 'text-accent' 
                  : 'text-white hover:text-accent'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <LanguageSwitcher />
        </div>
      </nav>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50">
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-secondary p-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
              <div className="flex items-center justify-between">
                <Link to="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">KAM</span>
                  <KamLogo className="h-10 w-auto" />
                </Link>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-400"
                >
                  <span className="sr-only">Close menu</span>
                  <X className="size-6" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-white/10">
                  <div className="space-y-2 py-6">
                    {links.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold transition-colors ${
                          isActive(link.path)
                            ? 'text-accent bg-white/5'
                            : 'text-white hover:bg-white/5'
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                  <div className="py-6">
                    <LanguageSwitcher />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
