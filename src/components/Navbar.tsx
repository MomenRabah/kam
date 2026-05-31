import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import LanguageSwitcher from './LanguageSwitcher';
import KamLogo from '../assets/kam-logo.svg?react';

import ideaGifWhite from '@/assets/gifs/idea-white.gif';
import redCarpetGifWhite from '@/assets/gifs/red-carpet-white.gif';
import videoCameraGifWhite from '@/assets/gifs/video-camera-white.gif';
import engagementGifWhite from '@/assets/gifs/engagement-white.gif';
import socialMediaGifWhite from '@/assets/gifs/social-media-white.gif';
import audienceGifWhite from '@/assets/gifs/audience-white.gif';

import ideaGifOrg from '@/assets/gifs/idea-org.gif';
import redCarpetGifOrg from '@/assets/gifs/red-carpet-org.gif';
import videoCameraGifOrg from '@/assets/gifs/video-camera-org.gif';
import engagementGifOrg from '@/assets/gifs/engagement-org.gif';
import socialMediaGifOrg from '@/assets/gifs/social-media-org.gif';
import audienceGifOrg from '@/assets/gifs/audience-org.gif';

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

  const gifsWhite = [ideaGifWhite, redCarpetGifWhite, videoCameraGifWhite, engagementGifWhite, socialMediaGifWhite, audienceGifWhite];
  const gifsOrg = [ideaGifOrg, redCarpetGifOrg, videoCameraGifOrg, engagementGifOrg, socialMediaGifOrg, audienceGifOrg];

  // Grid tiles: colors arranged arbitrarily with scattered gifs
  const gridTiles = [
    { color: 'bg-accent', gif: gifsWhite[2] },
    { color: 'bg-primary', gif: gifsWhite[5] },
    { color: 'bg-black', gif: gifsOrg[0] },
    { color: 'bg-black', gif: gifsOrg[3] },
    { color: 'bg-accent', gif: gifsWhite[1] },
    { color: 'bg-primary', gif: gifsWhite[4] },
    { color: 'bg-primary', gif: gifsWhite[0] },
    { color: 'bg-black', gif: gifsOrg[2] },
    { color: 'bg-accent', gif: gifsWhite[5] },
    { color: 'bg-accent', gif: gifsWhite[3] },
    { color: 'bg-primary', gif: gifsWhite[1] },
    { color: 'bg-black', gif: gifsOrg[4] },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <nav aria-label="Global" className="flex items-center justify-between px-8 py-6 lg:px-20">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">KAM</span>
            <KamLogo className="h-8 w-auto" />
          </Link>
        </div>
        
        <div className="flex lg:flex-1 justify-end items-center gap-4">
          <div className="hidden lg:block">
            <LanguageSwitcher />
          </div>
          
          {/* Burger Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-[60] w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            <span
              className={`block w-6 h-0.5 bg-white origin-center transition-transform duration-300 ${
                isOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-200 ${
                isOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white origin-center transition-transform duration-300 ${
                isOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </nav>
      
      {/* Fullscreen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black"
          >
            <div className="h-full flex flex-row">
              {/* Left Side - Visual Grid */}
              <div className="shrink-0 h-full overflow-hidden flex items-center justify-start sm:justify-center">
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-0">
                  {gridTiles.map((tile, index) => (
                    <div
                      key={index}
                      className={`w-12 h-12 sm:w-16 sm:h-16 lg:w-36 lg:h-36 flex items-center justify-center ${tile.color}`}
                    >
                      <img
                        src={tile.gif}
                        alt=""
                        className={`w-6 h-6 sm:w-8 sm:h-8 lg:w-18 lg:h-18 object-contain ${
                          tile.color === 'bg-accent' ? 'invert' : ''
                        }`}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side - Navigation Panel */}
              <div className="flex-1 h-full flex flex-col justify-center items-center px-4 sm:px-8 lg:px-20">
                {/* Navigation Links */}
                <nav className="flex flex-col gap-6 sm:gap-8 lg:gap-12">
                  {links.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="group relative block text-start"
                    >
                      <span
                        className={`
                          text-3xl sm:text-2xl lg:text-6xl font-bold tracking-tight
                          ${isActive(link.path) 
                            ? 'text-primary' 
                            : 'text-white'
                          }
                        `}
                      >
                        {link.label}
                      </span>
                    </Link>
                  ))}
                </nav>

                {/* Language Switcher */}
                <div className="mt-10 sm:mt-12 lg:mt-16">
                  <LanguageSwitcher />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
