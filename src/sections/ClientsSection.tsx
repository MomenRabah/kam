import { useTranslation } from 'react-i18next';
import { useEffect, useRef } from 'react';
import { inView } from 'motion';

// Import client logos
import logo01 from '../assets/clients/01-01.svg';
import logo02 from '../assets/clients/01-013-01.png';
import logo03 from '../assets/clients/01-03.png';
import logo04 from '../assets/clients/01-04.png';
import logo05 from '../assets/clients/01-05.svg';
import logo06 from '../assets/clients/01-06.svg';
import logo07 from '../assets/clients/01-07.svg';
import logo08 from '../assets/clients/01-08.svg';
import logo09 from '../assets/clients/01-09.svg';
import logo10 from '../assets/clients/01-10.svg';
import logo11 from '../assets/clients/01-11.svg';
import logo12 from '../assets/clients/01-12.svg';

const ClientsSection = () => {
  const { t } = useTranslation();
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headerRef.current) {
      inView(headerRef.current, (el) => {
        (el as HTMLElement).style.opacity = '1';
        (el as HTMLElement).style.transform = 'translateY(0)';
        (el as HTMLElement).style.transition = 'opacity 0.4s ease-out, transform 0.4s ease-out';
      });
    }
  }, []);

  // Client logos array
  const clients = [
    { name: 'Client 1', logo: logo01 },
    { name: 'Client 2', logo: logo02 },
    { name: 'Client 3', logo: logo03 },
    { name: 'Client 4', logo: logo04 },
    { name: 'Client 5', logo: logo05 },
    { name: 'Client 6', logo: logo06 },
    { name: 'Client 7', logo: logo07 },
    { name: 'Client 8', logo: logo08 },
    { name: 'Client 9', logo: logo09 },
    { name: 'Client 10', logo: logo10 },
    { name: 'Client 11', logo: logo11 },
    { name: 'Client 12', logo: logo12 },
  ];

  // Split clients into two rows
  const row1Clients = clients.slice(0, 6);
  const row2Clients = clients.slice(6, 12);

  // Duplicate the arrays for seamless infinite scroll
  const duplicatedRow1 = [...row1Clients, ...row1Clients];
  const duplicatedRow2 = [...row2Clients, ...row2Clients];

  return (
    <section id="clients" className="bg-black py-[110px] overflow-hidden relative">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/3 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 mb-14">
        <div ref={headerRef} className="text-center" style={{ opacity: 0, transform: 'translateY(20px)' }}>
          {/* Sticker Tag */}
          <div className="inline-block bg-accent px-3 py-1.5 mb-4 shadow-lg">
            <p className="text-black text-xs font-semibold leading-tight">
              {t('clients.sticker')}
            </p>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
            {t('clients.title')}
          </h2>
          <p className="text-base text-primary max-w-xl mx-auto">
            {t('clients.subtitle')}
          </p>
        </div>
      </div>

      {/* Infinite Scrolling Container */}
      <div className="relative z-10 space-y-6">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-black to-transparent z-10 m-0" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-black to-transparent z-10 m-0" />
        
        {/* Row 1 - Scrolling Right */}
        <div className="overflow-hidden" dir="ltr">
          <div
            className="flex gap-6 animate-scroll-right"
            style={{ animationDuration: '10s' }}
          >
            {duplicatedRow1.map((client, index) => (
              <div
                key={`row1-${client.name}-${index}`}
                className="flex items-center justify-center min-w-[200px] h-28 p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-primary/30 hover:bg-white/10 transition-all duration-300 shrink-0"
              >
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="max-h-20 max-w-full object-contain brightness-0 invert opacity-50 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Scrolling Left */}
        <div className="overflow-hidden" dir="ltr">
          <div
            className="flex gap-6 animate-scroll-left"
            style={{ animationDuration: '10s' }}
          >
            {duplicatedRow2.map((client, index) => (
              <div
                key={`row2-${client.name}-${index}`}
                className="flex items-center justify-center min-w-[200px] h-28 p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-primary/30 hover:bg-white/10 transition-all duration-300 shrink-0"
              >
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="max-h-20 max-w-full object-contain brightness-0 invert opacity-50 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
