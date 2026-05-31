import { useRef, useEffect } from "react";
import { inView } from "motion";
import { useTranslation } from 'react-i18next';

import img1 from '../assets/images/01 (1).jpg';
import img2 from '../assets/images/01 (2).jpg';
import img3 from '../assets/images/01 (3).jpg';
import img4 from '../assets/images/01 (4).jpg';
import img5 from '../assets/images/01 (5).jpg';
import img6 from '../assets/images/01 (6).jpg';
import img7 from '../assets/images/01 (7).jpg';
import img8 from '../assets/images/01 (8).jpg';
import img9 from '../assets/images/01 (9).jpg';
import img10 from '../assets/images/01 (10).jpg';
import img11 from '../assets/images/01 (11).jpg';
import img12 from '../assets/images/01 (12).jpg';
import img13 from '../assets/images/01 (13).jpg';
import img14 from '../assets/images/01 (14).jpg';
import img15 from '../assets/images/01 (15).jpg';
import img16 from '../assets/images/01 (16).jpg';
import img17 from '../assets/images/01 (17).jpg';
import img18 from '../assets/images/01 (18).jpg';
import img19 from '../assets/images/01 (19).jpg';
import img21 from '../assets/images/01 (21).jpg';
import img22 from '../assets/images/01 (22).jpg';
import img23 from '../assets/images/01 (23).jpg';
import img24 from '../assets/images/01 (24).jpg';
import img25 from '../assets/images/01 (25).jpg';
import { t } from "i18next";

const GallerySection = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const imagesRow1 = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];
  const imagesRow2 = [img13, img14, img15, img16, img17, img18, img19, img21, img22, img23, img24, img25];

  useEffect(() => {
    if (headerRef.current) {
      inView(headerRef.current, (el) => {
        (el as HTMLElement).style.opacity = '1';
        (el as HTMLElement).style.transform = 'translateY(0)';
        (el as HTMLElement).style.transition = 'opacity 0.4s ease-out, transform 0.4s ease-out';
      });
    }
  }, []);

  return (
    <section className="min-h-screen bg-black flex items-center py-20 relative overflow-hidden">
      {/* Ambient glow */}
      {/* <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-3xl" /> */}

      {/* Main Container */}
      <div className="relative z-10 w-full">
        {/* Title & Description - Positioned Over Images */}
        <div className="absolute top-1/2 -translate-y-1/2 ltr:left-8 ltr:lg:left-20 rtl:right-8 rtl:lg:right-20 z-30 max-w-md">
          <div ref={headerRef} className="text-start relative w-2/3" style={{ opacity: 0, transform: 'translateY(20px)' }}>
            {/* Sticker Tag */}
            <div className="absolute ltr:-top-3 ltr:-right-6 rtl:-top-5 rtl:left-14 ltr:rotate-10 rtl:-rotate-10 bg-primary px-2 py-1 shadow-lg z-10">
              <p className="text-white text-xs leading-tight text-center whitespace-nowrap">
                {isRTL ? 'حيث تتحوّل الأفكار إلى واقع' : 'Where Ideas Become Reality'}
              </p>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t("gallary.title")}
            </h2>
            <p className="text-lg text-accent">
              {t("gallary.description")}
            </p>
          </div>
        </div>

        {/* Fading Gradient Overlay - Covers Left/Right Side */}
        <div 
          className="absolute inset-y-0 ltr:left-0 rtl:right-0 w-3/4 lg:w-1/2 z-20 pointer-events-none"
          style={{
            background: isRTL 
              ? 'linear-gradient(to left, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 20%, rgba(0, 0, 0, 0.9) 40%, rgba(0, 0, 0, 0.6) 60%, rgba(0, 0, 0, 0.3) 80%, transparent 100%)'
              : 'linear-gradient(to right, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 20%, rgba(0, 0, 0, 0.9) 40%, rgba(0, 0, 0, 0.6) 60%, rgba(0, 0, 0, 0.3) 80%, transparent 100%)'
          }}
        />

        {/* Scrolling Images - Full Width */}
        <div className="relative overflow-hidden space-y-6">
          {/* ROW 1 - Scrolling Left */}
          <div className="overflow-hidden">
            <div className="flex gap-4 animate-scroll-left" style={{ animationDuration: '9s' }}>
              {[...imagesRow1, ...imagesRow1].map((image, index) => (
                <div
                  key={index}
                  className="relative shrink-0 w-[280px] h-[160px] sm:w-[380px] sm:h-[260px] rounded-2xl overflow-hidden group/item border border-white/10"
                >
                  <img
                    src={image}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-110"
                    alt={`Gallery ${index + 1}`}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>

          {/* ROW 2 - Scrolling Right */}
          <div className="overflow-hidden">
            <div className="flex gap-4 animate-scroll-right" style={{ animationDuration: '9s' }}>
              {[...imagesRow2, ...imagesRow2].map((image, index) => (
                <div
                  key={index}
                  className="relative shrink-0 w-[280px] h-[160px] sm:w-[380px] sm:h-[260px] rounded-2xl overflow-hidden group/item border border-white/10"
                >
                  <img
                    src={image}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-110"
                    alt={`Gallery ${index + 1}`}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;