import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

import img1 from '@/assets/images/01 (1).jpg';
import img2 from '@/assets/images/01 (2).jpg';
import img3 from '@/assets/images/01 (3).jpg';
import img4 from '@/assets/images/01 (4).jpg';
import img5 from '@/assets/images/01 (5).jpg';
import img6 from '@/assets/images/01 (6).jpg';
import img7 from '@/assets/images/01 (7).jpg';
import img8 from '@/assets/images/01 (8).jpg';
import img9 from '@/assets/images/01 (9).jpg';
import img10 from '@/assets/images/01 (10).jpg';
import img11 from '@/assets/images/01 (11).jpg';
import img12 from '@/assets/images/01 (12).jpg';
import img13 from '@/assets/images/01 (13).jpg';
import img14 from '@/assets/images/01 (14).jpg';
import img15 from '@/assets/images/01 (15).jpg';
import img16 from '@/assets/images/01 (16).jpg';
import img17 from '@/assets/images/01 (17).jpg';
import img18 from '@/assets/images/01 (18).jpg';
import img19 from '@/assets/images/01 (19).jpg';
import img20 from '@/assets/images/01-(20).jpg';
import img21 from '@/assets/images/01 (21).jpg';
import img22 from '@/assets/images/01 (22).jpg';
import img23 from '@/assets/images/01 (23).jpg';
import img24 from '@/assets/images/01 (24).jpg';
import img25 from '@/assets/images/01 (25).jpg';
import mainImg from '@/assets/images/main.jpg';

const PHOTOS = [mainImg, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25];

// Tile spans chosen so the 4-column grid fills every row completely, leaving a
// flush bottom edge. Blocks: 7 tiles/3 rows, 7 tiles/3 rows, 4 tiles/2 rows,
// 4 tiles/2 rows, 4 tiles/1 row = 26 tiles, 11 full rows.
// Below `sm` the grid drops to 2 columns with every tile 1x1, so 26 tiles = 13
// exact rows there too.
const BIG = 'sm:col-span-2 sm:row-span-2';
const WIDE = 'sm:col-span-2';
const UNIT = '';

const SPANS = [
  BIG, UNIT, UNIT, WIDE, WIDE, UNIT, UNIT,
  BIG, UNIT, UNIT, WIDE, WIDE, UNIT, UNIT,
  BIG, UNIT, UNIT, WIDE,
  BIG, UNIT, UNIT, WIDE,
  UNIT, UNIT, UNIT, UNIT,
];

const Gallery = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = 'KAM — Our Work';
  }, []);

  return (
    <div className="bg-black min-h-screen">
      <section className="relative pt-[110px] pb-[70px] px-8 overflow-hidden text-center">
        <div className="absolute top-[15%] left-1/2 -translate-x-[60%] -translate-y-1/2 w-[340px] h-[340px] bg-primary/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-[15%] left-1/2 translate-x-[20%] -translate-y-[30%] w-[220px] h-[220px] bg-accent/[0.18] rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-3xl mx-auto">
          <p className="text-primary font-semibold tracking-[0.16em] uppercase text-sm mb-3.5">
            {t('galleryPage.sticker')}
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-5">
            {t('galleryPage.heading')}
          </h1>
          <p className="text-lg md:text-xl text-gray-400">
            {t('galleryPage.subtitle')}
          </p>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-8 pb-[100px]">
        <div className="grid grid-cols-2 sm:grid-cols-4 auto-rows-[180px] gap-4">
          {PHOTOS.map((src, i) => (
            <div
              key={i}
              className={`${SPANS[i]} rounded-2xl overflow-hidden relative border border-white/10 transition-transform duration-300 hover:scale-[1.02]`}
            >
              <img src={src} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
