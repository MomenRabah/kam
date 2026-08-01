import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, X, ArrowLeft, ArrowRight } from 'lucide-react';

import ideaGif from '@/assets/gifs/idea-org.gif';
import redCarpetGif from '@/assets/gifs/red-carpet-org.gif';
import videoCameraGif from '@/assets/gifs/video-camera-org.gif';
// import engagementGif from '@/assets/gifs/engagement-org.gif';
import socialMediaGif from '@/assets/gifs/social-media-org.gif';
import audienceGif from '@/assets/gifs/audience-org.gif';
import foodGif from '@/assets/gifs/food.gif';

import boothImg from '@/assets/images/01 (6).jpg';
import conferencesImg from '@/assets/images/01 (24).jpg';
import photographyImg from '@/assets/images/01 (25).jpg';
import cateringImg from '@/assets/images/01 (21).jpg';
import digitalImg from '@/assets/images/01.jpg';
import squadImg from '@/assets/images/01 (22).jpg';

const SERVICES = [
  { gif: ideaGif, image: boothImg, titleKey: 'services.boothExperts.title', descKey: 'services.boothExperts.description', longDescKey: 'services.boothExperts.longDescription' },
  { gif: redCarpetGif, image: conferencesImg, titleKey: 'services.conferences.title', descKey: 'services.conferences.description', longDescKey: 'services.conferences.longDescription' },
  { gif: videoCameraGif, image: photographyImg, titleKey: 'services.photography.title', descKey: 'services.photography.description', longDescKey: 'services.photography.longDescription' },
  { gif: foodGif, image: cateringImg, titleKey: 'services.catering.title', descKey: 'services.catering.description', longDescKey: 'services.catering.longDescription' },
  { gif: socialMediaGif, image: digitalImg, titleKey: 'services.digitalEntertainment.title', descKey: 'services.digitalEntertainment.description', longDescKey: 'services.digitalEntertainment.longDescription' },
  { gif: audienceGif, image: squadImg, titleKey: 'services.serviceSquad.title', descKey: 'services.serviceSquad.description', longDescKey: 'services.serviceSquad.longDescription' },
];

const Services = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex !== null ? SERVICES[activeIndex] : null;

  return (
    <div className="bg-black min-h-screen">
      <section className="relative pt-[110px] pb-[70px] px-8 overflow-hidden text-center">
        <div className="absolute top-[15%] left-1/2 -translate-x-[60%] -translate-y-1/2 w-[340px] h-[340px] bg-primary/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-[15%] left-1/2 translate-x-[20%] -translate-y-[30%] w-[220px] h-[220px] bg-accent/[0.18] rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-3xl mx-auto">
          <p className="text-primary font-semibold tracking-[0.16em] uppercase text-sm mb-3.5">
            {t('services.title')}
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-5">
            {t('services.pageHeading')}
          </h1>
          <p className="text-lg md:text-xl text-gray-400">
            {t('services.pageSubtitle')}
          </p>
        </div>
      </section>

      <section className="px-8 pb-[130px]">
        <div className="max-w-6xl mx-auto grid grid-cols-[repeat(auto-fit,minmax(340px,1fr))] gap-6">
          {SERVICES.map((svc, i) => (
            <div key={i} className="border border-white/10 bg-white/[0.025] overflow-hidden">
              <button
                type="button"
                onClick={() => setActiveIndex(i)}
                className="w-full flex items-center gap-5 p-[26px] bg-transparent border-none cursor-pointer text-start"
              >
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-primary/12 flex items-center justify-center overflow-hidden">
                  <img src={svc.gif} alt="" className="w-[38px] h-[38px] object-contain" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="block text-primary font-bold text-xs mb-1">0{i + 1}</span>
                  <h3 className="text-[17px] font-bold text-white tracking-wide">{t(svc.titleKey)}</h3>
                  <p className="mt-1.5 text-sm leading-snug text-gray-400">{t(svc.descKey)}</p>
                </div>
                <Plus size={20} className="text-primary shrink-0" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {active && (
        <div
          onClick={() => setActiveIndex(null)}
          className="fixed inset-0 z-[80] bg-black/80 flex items-center justify-center p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-[720px] w-full max-h-[85vh] overflow-y-auto bg-[#0b0c10] border border-white/12 p-10"
          >
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              aria-label="Close"
              className="absolute top-[18px] ltr:right-[18px] rtl:left-[18px] w-9 h-9 flex items-center justify-center bg-transparent border-none cursor-pointer text-white"
            >
              <X size={22} />
            </button>

            <div className="flex items-center gap-[18px] mb-6">
              <div className="w-14 h-14 shrink-0 rounded-2xl bg-primary/12 flex items-center justify-center overflow-hidden">
                <img src={active.gif} alt="" className="w-[38px] h-[38px] object-contain" />
              </div>
              <div>
                <span className="block text-primary font-bold text-xs mb-1">0{activeIndex! + 1}</span>
                <h3 className="text-[22px] font-extrabold text-white">{t(active.titleKey)}</h3>
              </div>
            </div>

            <div className="w-full h-[260px] rounded-2xl overflow-hidden border border-white/10 mb-6">
              <img src={active.image} alt="" className="w-full h-full object-cover" />
            </div>

            <p className="text-[15px] leading-loose text-gray-400">{t(active.longDescKey)}</p>
          </div>
        </div>
      )}

      <section className="px-8 pb-[150px] text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
          {t('services.ctaHeading')}
        </h2>
        <Link
          to="/#contact"
          className="inline-flex h-[52px] items-center gap-2.5 rounded-none bg-primary text-white border-2 border-primary px-8 text-[17px] font-semibold no-underline transition-colors hover:bg-transparent"
        >
          {t('services.ctaButton')}
          {isRTL ? <ArrowLeft size={22} /> : <ArrowRight size={22} />}
        </Link>
      </section>
    </div>
  );
};

export default Services;
