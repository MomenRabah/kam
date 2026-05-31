import { useTranslation } from 'react-i18next';
import { useState, useEffect, useRef } from 'react';

import ideaGif from '@/assets/gifs/idea-org.gif';
import redCarpetGif from '@/assets/gifs/red-carpet-org.gif';
import videoCameraGif from '@/assets/gifs/video-camera-org.gif';
import engagementGif from '@/assets/gifs/engagement-org.gif';
import socialMediaGif from '@/assets/gifs/social-media-org.gif';
import audienceGif from '@/assets/gifs/audience-org.gif';

const ServicesSection = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isRTL = i18n.language === 'ar';


  const services = [
    {
      gif: ideaGif,
      titleKey: 'services.boothExperts.title',
      descKey: 'services.boothExperts.description',
    },
    {
      gif: redCarpetGif,
      titleKey: 'services.conferences.title',
      descKey: 'services.conferences.description',
    },
    {
      gif: videoCameraGif,
      titleKey: 'services.photography.title',
      descKey: 'services.photography.description',
    },
    {
      gif: engagementGif,
      titleKey: 'services.catering.title',
      descKey: 'services.catering.description',
    },
    {
      gif: socialMediaGif,
      titleKey: 'services.digitalEntertainment.title',
      descKey: 'services.digitalEntertainment.description',
    },
    {
      gif: audienceGif,
      titleKey: 'services.serviceSquad.title',
      descKey: 'services.serviceSquad.description',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = cardRefs.current.indexOf(entry.target as HTMLDivElement);
          if (index !== -1 && entry.isIntersecting) {
            // Card is in viewport center
            if (entry.intersectionRatio > 0.3) {
              setActiveIndex(index);
            }
          }
        });
      },
      { 
        threshold: [0, 0.3, 0.5, 0.7, 1],
        rootMargin: '-40% 0px -40% 0px'
      }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="services" 
      className="bg-black py-32 relative overflow-hidden min-h-screen"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 w-full" style={{ minHeight: '100%' }} />
      
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 w-full">
        {/* Header */}
        <div className="relative text-center mb-20 w-fit mx-auto">
            {/* Sticker Tag */}
            <div className="absolute ltr:-top-5 ltr:right-12 rtl:-top-5 rtl:left-12 ltr:rotate-10 rtl:-rotate-10 bg-accent px-2 py-1 shadow-lg z-10">
              <p className="text-black text-xs leading-tight text-center whitespace-nowrap">
                {isRTL ? 'مصممون لصناعة الأثر' : 'Designed For Impact'}
              </p>
            </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
            {t('services.title')}
          </h2>
          <p className="text-primary font-medium tracking-wider uppercase text-sm">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Stack - All visible */}
        <div className="relative flex flex-col items-center gap-12">
          {services.map((service, index) => {
            const isActive = index === activeIndex;
            
            return (
              <div
                key={index}
                ref={(el) => { cardRefs.current[index] = el; }}
                className={`
                  w-full max-w-2xl rounded-2xl p-8 transition-all duration-300
                  ${isActive 
                    ? 'bg-black border-2 border-primary/50 scale-100 opacity-100' 
                    : 'bg-zinc-900/40 border border-white/10 scale-100 opacity-60'
                  }
                `}
              >
                <div className="flex items-start gap-6">
                  {/* Animated GIF Icon */}
                  <div 
                    className={`
                      flex items-center justify-center rounded-xl shrink-0 overflow-hidden transition-color duration-300
                      ${isActive ? 'w-14 h-14 bg-primary/10' : 'w-14 h-14 bg-white/5'}
                    `}
                  >
                    <img 
                      src={service.gif} 
                      alt="" 
                      className={`
                        object-contain transition-all duration-300
                        ${isActive ? 'w-12 h-12 opacity-100' : 'w-10 h-10 opacity-60'}
                      `}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 
                      className={`
                        font-bold transition-all duration-300
                        ${isActive ? 'text-lg text-white' : 'text-lg text-white/70'}
                      `}
                    >
                      {t(service.titleKey)}
                    </h3>
                    
                    <p className={`
                      text-sm leading-relaxed mt-3 transition-colors duration-300
                      ${isActive ? 'text-gray-400' : 'text-gray-500'}
                    `}>
                      {t(service.descKey)}
                    </p>
                  </div>

                  {/* Active indicator */}
                  <div className={`
                    w-3 h-3 rounded-full shrink-0 transition-all duration-300
                    ${isActive ? 'bg-primary scale-100 opacity-100' : 'bg-white/20 scale-0 opacity-0'}
                  `} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
