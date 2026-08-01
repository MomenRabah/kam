import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';
import { Eye, Target, Award, Lightbulb, ShieldCheck, Star, UserCheck } from 'lucide-react';

const TIMELINE = [
  { id: 'vision', icon: Eye, titleKey: 'about.vision.title', descKey: 'about.vision.description', isValue: false },
  { id: 'mission', icon: Target, titleKey: 'about.mission.title', descKey: 'about.mission.description', isValue: false },
  { id: 'commitment', icon: Award, titleKey: 'about.values.commitment.title', descKey: 'about.values.commitment.description', isValue: true },
  { id: 'innovation', icon: Lightbulb, titleKey: 'about.values.innovation.title', descKey: 'about.values.innovation.description', isValue: true },
  { id: 'trust', icon: ShieldCheck, titleKey: 'about.values.trust.title', descKey: 'about.values.trust.description', isValue: true },
  { id: 'quality', icon: Star, titleKey: 'about.values.quality.title', descKey: 'about.values.quality.description', isValue: true },
  { id: 'customerFirst', icon: UserCheck, titleKey: 'about.values.customerFirst.title', descKey: 'about.values.customerFirst.description', isValue: true },
];

const CONTAINER_H = 510;
const ITEM_H = 150;
const PAD_TOP = 150;

const About = () => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState('vision');

  useEffect(() => {
    document.title = 'KAM — About Us';
  }, []);

  const handleScroll = () => {
    const el = containerRef.current;
    if (!el) return;
    const centerPos = el.scrollTop + CONTAINER_H / 2 - PAD_TOP;
    let bestIdx = 0;
    let bestDist = Infinity;
    TIMELINE.forEach((_item, i) => {
      const cardCenter = i * ITEM_H + ITEM_H / 2;
      const dist = Math.abs(cardCenter - centerPos);
      if (dist < bestDist) {
        bestDist = dist;
        bestIdx = i;
      }
    });
    const bestId = TIMELINE[bestIdx].id;
    if (bestId !== activeId) setActiveId(bestId);
  };

  return (
    <div className="bg-black min-h-screen">
      <section className="relative pt-[110px] pb-[90px] px-8 overflow-hidden text-center">
        <div className="absolute top-[20%] left-1/2 -translate-x-[60%] -translate-y-1/2 w-[340px] h-[340px] bg-primary/[0.28] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-[20%] left-1/2 translate-x-[20%] -translate-y-[30%] w-[220px] h-[220px] bg-accent/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-5">
            {t('about.heading')}
          </h1>
          <p className="text-lg md:text-xl text-gray-400">
            {t('about.heroSubtitle')}
          </p>
        </div>
      </section>

      <section className="px-8 pb-[110px] overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="relative mb-[120px] pt-5">
            <span className="absolute -top-10 ltr:right-0 rtl:left-0 text-[7rem] md:text-[13rem] font-extrabold text-primary/[0.07] leading-none pointer-events-none select-none">
              2008
            </span>
            <div className="absolute -left-[120px] top-[280px] w-[420px] h-[420px] bg-primary/[0.22] rounded-full blur-3xl pointer-events-none z-0" />

            <div className="relative">
              <p className="text-primary font-semibold tracking-[0.16em] uppercase text-sm mb-3.5">
                {t('about.ourStory')}
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8">
                {t('about.whoWeAre')}
              </h2>
              <p className="text-2xl md:text-[1.7rem] leading-snug text-white font-medium max-w-3xl mb-14">
                {t('about.storyLead')}
              </p>

              <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] border-t border-white/10">
                <div className="py-8 pe-8 border-e border-white/10">
                  <span className="block text-primary font-bold text-xs mb-3.5">01</span>
                  <p className="text-[15px] leading-loose text-gray-400">{t('about.paragraph1')}</p>
                </div>
                <div className="py-8 px-8 border-e border-white/10">
                  <span className="block text-primary font-bold text-xs mb-3.5">02</span>
                  <p className="text-[15px] leading-loose text-gray-400">{t('about.paragraph2')}</p>
                </div>
                <div className="py-8 ps-8">
                  <span className="block text-primary font-bold text-xs mb-3.5">03</span>
                  <p className="text-[15px] leading-loose text-gray-400">{t('about.paragraph3')}</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-center text-3xl md:text-4xl font-extrabold text-white mb-3">
              {t('about.vmvHeading')}
            </h2>
            <p className="text-center text-[15px] text-gray-400">
              {t('about.vmvSubtitle')}
            </p>

            <div className="relative max-w-2xl mx-auto">
              <div
                ref={containerRef}
                onScroll={handleScroll}
                className="h-[510px] overflow-y-auto overflow-x-hidden scrollbar-hide relative"
                style={{ scrollSnapType: 'y mandatory', scrollBehavior: 'smooth', paddingTop: PAD_TOP, paddingBottom: PAD_TOP }}
              >
                <div className="absolute ltr:left-[27px] rtl:right-[27px] w-0.5 bg-white/10" style={{ top: PAD_TOP, height: TIMELINE.length * ITEM_H }} />

                {TIMELINE.map((item) => {
                  const isActive = item.id === activeId;
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.id}
                      className="relative flex items-center gap-7 box-border"
                      style={{ height: ITEM_H, scrollSnapAlign: 'center' }}
                    >
                      <div
                        className="w-14 h-14 shrink-0 rounded-full flex items-center justify-center z-[1] transition-all duration-500 border-2"
                        style={{
                          background: isActive ? '#2b1710' : '#0d0d0d',
                          borderColor: isActive ? '#E76424' : 'rgba(255,255,255,0.15)',
                        }}
                      >
                        <Icon size={24} color={isActive ? '#E76424' : 'rgba(255,255,255,0.4)'} strokeWidth={2} />
                      </div>
                      <div className="transition-opacity duration-500" style={{ opacity: isActive ? 1 : 0.32 }}>
                        {item.isValue && (
                          <span className="block text-primary font-semibold tracking-[0.14em] uppercase text-[11px] mb-1.5">
                            {t('about.ourValues')}
                          </span>
                        )}
                        <h3
                          className="text-xl font-bold mb-2.5 transition-colors duration-500"
                          style={{ color: isActive ? '#fff' : '#9ca3af' }}
                        >
                          {t(item.titleKey)}
                        </h3>
                        <p className="text-[15px] leading-relaxed text-gray-400 max-w-[520px]">
                          {t(item.descKey)}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
