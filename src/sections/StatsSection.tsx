import { useTranslation } from 'react-i18next';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface CounterProps {
  value: number;
  duration?: number;
}

const Counter = ({ value, duration = 2 }: CounterProps) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration });
      return controls.stop;
    }
  }, [count, value, duration, isInView]);

  useEffect(() => {
    const unsubscribe = rounded.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = latest.toString();
      }
    });
    return () => unsubscribe();
  }, [rounded]);

  return <span ref={ref}>0</span>;
};

const StatsSection = () => {
  const { t } = useTranslation();

  const stats = [
    { value: 16, label: t('stats.years.label'), suffix: '+' },
    { value: 365, label: t('stats.projects.label'), suffix: '+' },
  ];

  return (
    <section className="bg-black py-[150px] relative overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-[250px] h-[250px] bg-accent/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-7xl md:text-8xl font-bold text-transparent bg-clip-text bg-linear-to-r from-primary to-accent mb-4">
                <Counter value={stat.value} />
                {stat.suffix}
              </div>
              <p className="text-xl md:text-2xl font-medium text-white/80 uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative z-10 max-w-2xl mx-auto mt-20 px-10"
        >
          <div className="relative h-0.5 bg-white/12">
            <div className="absolute top-[-4px] ltr:left-0 rtl:right-0 w-2.5 h-2.5 bg-primary rotate-45" />
            <div className="absolute top-[-4px] ltr:right-0 rtl:left-0 w-2.5 h-2.5 bg-accent rotate-45" />
          </div>
          <div className="flex justify-between mt-4">
            <span className="text-[13px] text-white/50 tracking-wide">{t('stats.timeline.founded')}</span>
            <span className="text-[13px] text-white/50 tracking-wide">{t('stats.timeline.today')}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
