import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import ideaGif from '@/assets/gifs/idea-org.gif';
import redCarpetGif from '@/assets/gifs/red-carpet-org.gif';
import videoCameraGif from '@/assets/gifs/video-camera-org.gif';
// import engagementGif from '@/assets/gifs/engagement-org.gif';
import socialMediaGif from '@/assets/gifs/social-media-org.gif';
import audienceGif from '@/assets/gifs/audience-org.gif';
import foodGif from '@/assets/gifs/food.gif';


const SERVICES = [
  { gif: ideaGif, titleKey: 'services.boothExperts.title', descKey: 'services.boothExperts.description' },
  { gif: redCarpetGif, titleKey: 'services.conferences.title', descKey: 'services.conferences.description' },
  { gif: videoCameraGif, titleKey: 'services.photography.title', descKey: 'services.photography.description' },
  { gif: foodGif, titleKey: 'services.catering.title', descKey: 'services.catering.description' },
  { gif: socialMediaGif, titleKey: 'services.digitalEntertainment.title', descKey: 'services.digitalEntertainment.description' },
  { gif: audienceGif, titleKey: 'services.serviceSquad.title', descKey: 'services.serviceSquad.description' },
];

const CONTAINER_H = 500;
const ITEM_H = 170;
const CARD_H = 150;
const PAD_TOP = 170;

const ServicesSection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [revealed, setRevealed] = useState<boolean[]>(() => SERVICES.map(() => false));
  const [dist, setDist] = useState<number[]>(() => SERVICES.map((_, i) => i));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = cardRefs.current.indexOf(entry.target as HTMLDivElement);
          if (index !== -1 && entry.isIntersecting) {
            setRevealed((prev) => {
              if (prev[index]) return prev;
              const next = [...prev];
              next[index] = true;
              return next;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );

    cardRefs.current.forEach((card) => card && observer.observe(card));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - CARD_H / 2;
      if (e.deltaY > 0 && atBottom) {
        e.preventDefault();
        document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
      }
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, []);

  const handleScroll = () => {
    const el = containerRef.current;
    if (!el) return;
    const centerPos = el.scrollTop + CONTAINER_H / 2 - PAD_TOP;
    const next = SERVICES.map((_, i) => ((i * ITEM_H + CARD_H / 2) - centerPos) / ITEM_H);
    setDist(next);
  };

  const jumpTo = (index: number) => {
    const card = cardRefs.current[index];
    card?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <section id="services" className="bg-black py-32 px-8 lg:px-12 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(320px,1fr)_1.5fr] gap-[60px]">
        <div className="min-w-0">
          <div className="lg:sticky lg:top-28">
            <p className="text-primary font-semibold tracking-[0.16em] uppercase text-sm mb-3.5">
              {t('services.title')}
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-[22px] leading-tight">
              {t('services.subtitle')}
            </h2>

            <div className="flex flex-col gap-0.5 mt-8">
              {SERVICES.map((svc, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => jumpTo(i)}
                  className="flex items-baseline gap-3.5 py-3 border-b border-white/8 text-white/55 hover:text-white transition-colors text-start rtl:text-end"
                >
                  <span className="text-xs text-primary font-bold shrink-0">0{i + 1}</span>
                  <span className="text-sm font-semibold tracking-wide">{t(svc.titleKey)}</span>
                </button>
              ))}
            </div>

            <Link
              to="/services"
              className="inline-flex h-[52px] items-center gap-2.5 rounded-none bg-transparent text-white border border-white/30 px-8 mt-6 font-semibold text-[15px] no-underline transition-colors hover:border-primary hover:text-primary"
            >
              {t('services.viewAllServices')}
              {isRTL ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}
            </Link>
          </div>
        </div>

        <div className="min-w-0">
          <div
            ref={containerRef}
            onScroll={handleScroll}
            className="h-[500px] overflow-y-auto overflow-x-hidden scrollbar-hide flex flex-col gap-5"
            style={{ scrollSnapType: 'y mandatory', scrollBehavior: 'smooth', paddingTop: PAD_TOP, paddingBottom: PAD_TOP }}
          >
            {SERVICES.map((svc, i) => {
              const d = Math.min(Math.abs(dist[i] ?? i), 2);
              const scale = 1 - d * 0.15;
              const isRevealed = revealed[i];
              const opacity = isRevealed ? 1 - d * 0.4 : 0;
              const translateY = isRevealed ? 0 : 24;

              return (
                <div
                  key={i}
                  ref={(el) => { cardRefs.current[i] = el; }}
                  className="shrink-0 h-[150px] box-border relative overflow-hidden px-[30px] py-[26px] border border-white/8 bg-white/[0.025]"
                  style={{
                    scrollSnapAlign: 'center',
                    opacity,
                    transform: `translateY(${translateY}px) scale(${scale})`,
                    transition: 'opacity 0.4s ease, transform 0.4s ease',
                  }}
                >
                  <span className="absolute top-1 ltr:right-5 rtl:left-5 text-7xl font-extrabold text-white/[0.035] leading-none">
                    0{i + 1}
                  </span>
                  <div className="relative flex items-start gap-5.5 h-full">
                    <div className="w-[52px] h-[52px] shrink-0 rounded-xl bg-primary/12 flex items-center justify-center overflow-hidden">
                      <img src={svc.gif} alt="" className="w-9 h-9 object-contain" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg font-bold text-white tracking-wide mb-2">
                        {t(svc.titleKey)}
                      </h3>
                      <p className="text-sm leading-relaxed text-gray-400 max-w-md line-clamp-2">
                        {t(svc.descKey)}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
