import { useTranslation } from 'react-i18next';
import { ArrowLeft, ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import heroImage from '@/assets/hero-image.jpg';

const SERVICE_TITLE_KEYS = [
  'services.boothExperts.title',
  'services.conferences.title',
  'services.photography.title',
  'services.catering.title',
  'services.digitalEntertainment.title',
  'services.serviceSquad.title',
];

const HeroSection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const tickerItems = [...SERVICE_TITLE_KEYS, ...SERVICE_TITLE_KEYS];

  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollDown = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative isolate overflow-hidden bg-secondary min-h-dvh w-full">
      <img
        src={heroImage}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-right sm:object-center -z-20 ltr:-scale-x-100 rtl:scale-x-100"
      />

      <div className="absolute inset-0 -z-10 bg-linear-to-b from-black/30 via-black/55 to-black/95" />
      <div className="absolute -top-[8%] ltr:-right-[8%] rtl:-left-[8%] w-[520px] h-[520px] bg-primary/25 rounded-full blur-3xl pointer-events-none" />

      <div className="relative min-h-dvh flex flex-col justify-end pt-32 px-8 lg:px-20 pb-0">
        <div className="max-w-4xl ltr:text-left rtl:text-right">
          <h1 className="font-extrabold tracking-tight leading-[0.98] rtl:leading-[1.6]">
            <span className="block text-4xl sm:text-7xl lg:text-8xl text-primary animate-[fadeInUp_0.8s_ease-out_0.05s_both]">
              {t('hero.beyondLimits')}
            </span>
            <span className="block text-4xl sm:text-7xl lg:text-8xl text-white mt-1.5 rtl:mt-6 animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
              {t('hero.toTheSpace')}
            </span>
          </h1>

          <div className="flex flex-wrap items-center justify-start gap-6 mt-11 animate-[fadeInUp_0.8s_ease-out_0.4s_both]">
            <a href="#contact" onClick={handleScrollToContact}>
              <Button
                size="lg"
                className="h-[52px] gap-2.5 rounded-none border px-8 text-base text-black bg-accent border-accent transition-colors hover:bg-transparent hover:text-white hover:border-white"
              >
                {t('hero.cta')}
                {isRTL ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
              </Button>
            </a>

            <div className="flex items-center gap-3.5 px-5 py-3 bg-white/6 border border-white/12">
              <span className="text-2xl font-extrabold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                16+
              </span>
              <span className="text-[11px] uppercase tracking-[0.13em] text-white/60 leading-tight max-w-24">
                {t('hero.yearsExcellence')}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-[60px] border-t border-white/10 overflow-hidden">
          <div className="flex gap-11 whitespace-nowrap py-[18px] animate-scroll-left hover:[animation-play-state:paused]" style={{ animationDuration: '34s' }}>
            {tickerItems.map((key, i) => (
              <span key={i} className="inline-flex items-center gap-11 text-xs tracking-[0.16em] text-white/45 font-semibold">
                {t(key)}
                <span className="w-[5px] h-[5px] bg-primary rotate-45 inline-block shrink-0" />
              </span>
            ))}
          </div>
        </div>

        <a
          href="#services"
          onClick={handleScrollDown}
          aria-label="Scroll to services"
          className="flex justify-center w-full pt-[14px] pb-[22px] text-white/70"
        >
          <ChevronDown size={24} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
