import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

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
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

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

  // Duplicate the array for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            {t('clients.title')}
          </h2>
          <p className="text-md text-gray-600 max-w-2xl mx-auto">
            {t('clients.subtitle')}
          </p>
        </motion.div>
      </div>

      {/* Infinite Scrolling Container */}
      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-white to-transparent z-10" />
        
        {/* Scrolling track */}
        <div className="flex">
          <motion.div
            className="flex gap-8 py-8"
            animate={{
              x: isRTL ? [0, 150 * clients.length] : [0, -150 * clients.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex items-center justify-center min-w-[200px] h-32 p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors shrink-0"
              >
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="max-h-32 max-w-full object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
