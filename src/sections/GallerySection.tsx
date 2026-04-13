import { motion } from "framer-motion";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  const imagesRow1 = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];
  const imagesRow2 = [img13, img14, img15, img16, img17, img18, img19, img21, img22, img23, img24, img25];

  const scrollDistance = 800;

  const smoothScroll = (el: HTMLDivElement, target: number, onComplete?: () => void) => {
    const start = el.scrollLeft;
    const distance = target - start;
    const duration = 500;
    let startTime: number | null = null;

    const ease = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      el.scrollLeft = start + distance * ease(progress);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        onComplete?.();
      }
    };

    requestAnimationFrame(step);
  };

  const scrollRow = (el: HTMLDivElement, dir: 'left' | 'right') => {
    const current = el.scrollLeft;
    const maxScroll = el.scrollWidth - el.clientWidth;

    if (dir === 'right') {
      if (current >= maxScroll - 10) {
        // At the end — jump back to start
        smoothScroll(el, 0);
      } else {
        smoothScroll(el, Math.min(maxScroll, current + scrollDistance));
      }
    } else {
      if (current <= 10) {
        // At the start — jump to end
        smoothScroll(el, maxScroll);
      } else {
        smoothScroll(el, Math.max(0, current - scrollDistance));
      }
    }
  };

  const handleScroll = (direction: 'left' | 'right') => {
    if (!row1Ref.current || !row2Ref.current) return;
    scrollRow(row1Ref.current, direction);
    scrollRow(row2Ref.current, direction === 'left' ? 'right' : 'left');
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            {t("gallary.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t("gallary.description")}
          </p>
        </motion.div>
      </div>

      <div className="space-y-8">
        {/* ROW 1 */}
        <div
          ref={row1Ref}
          className="overflow-x-auto scrollbar-hide"
        >
          <div className="flex gap-4 px-4">
            {imagesRow1.map((image, index) => (
              <div
                key={index}
                className="relative shrink-0 w-[380px] h-[280px] rounded-xl overflow-hidden group/item"
              >
                <img
                  src={image}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-110"
                  alt={`Gallery ${index + 1}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* ROW 2 */}
        <div
          ref={row2Ref}
          className="overflow-x-auto scrollbar-hide"
        >
          <div className="flex gap-4 px-4">
            {imagesRow2.map((image, index) => (
              <div
                key={index}
                className="relative shrink-0 w-[380px] h-[280px] rounded-xl overflow-hidden group/item"
              >
                <img
                  src={image}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-110"
                  alt={`Gallery ${index + 1}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Arrows */}
      <div className="flex justify-center flex-row ltr:flex-row-reverse items-center gap-6 mt-10">
        <button
          onClick={() => handleScroll('right')}
          className="bg-white hover:bg-secondary hover:text-white text-secondary p-2 rounded-full transition-all duration-300"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        <button
          onClick={() => handleScroll('left')}
          className="bg-white hover:bg-secondary hover:text-white text-secondary p-2 rounded-full transition-all duration-300"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default GallerySection;