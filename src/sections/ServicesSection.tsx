import { useTranslation } from 'react-i18next';
import { Camera, Utensils, Gamepad2, Users, Hammer, Presentation } from 'lucide-react';

const ServicesSection = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Hammer,
      titleKey: 'services.boothExperts.title',
      descKey: 'services.boothExperts.description',
    },
    {
      icon: Presentation,
      titleKey: 'services.conferences.title',
      descKey: 'services.conferences.description',
    },
    {
      icon: Camera,
      titleKey: 'services.photography.title',
      descKey: 'services.photography.description',
    },
    {
      icon: Utensils,
      titleKey: 'services.catering.title',
      descKey: 'services.catering.description',
    },
    {
      icon: Gamepad2,
      titleKey: 'services.digitalEntertainment.title',
      descKey: 'services.digitalEntertainment.description',
    },
    {
      icon: Users,
      titleKey: 'services.serviceSquad.title',
      descKey: 'services.serviceSquad.description',
    },
  ];

  return (
    <section id="services" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center flex flex-col gap-2">
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-pretty text-secondary sm:text-5xl lg:text-balance">
            {t('services.title')}
          </h2>
          <p className="text-base/7 font-medium text-primary">{t('services.subtitle')}</p>
        </div>
        <div className="mx-auto mt-12 max-w-2xl sm:mt-16 lg:mt-20 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-8 lg:max-w-none lg:grid-cols-2">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="relative rounded-lg border border-gray-200 hover:border-primary hover:scale-105 transition-all duration-300 cursor-pointer group p-6 bg-gray-50"
              >
                <dt className="text-base/7 font-semibold text-secondary flex items-start gap-4">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary group-hover:shadow-lg group-hover:shadow-primary/50 transition-shadow duration-300 shrink-0">
                    <service.icon className="size-6 text-white" strokeWidth={1.5} />
                  </div>
                  <span>{t(service.titleKey)}</span>
                </dt>
                <dd className="ms-14 text-base/7 text-gray-600 group-hover:text-gray-800 transition-colors duration-300">{t(service.descKey)}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
