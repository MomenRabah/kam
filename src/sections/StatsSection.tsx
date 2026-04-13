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
    { value: 20, label: t('stats.years.label'), suffix: '+' },
    { value: 365, label: t('stats.projects.label'), suffix: '+' },
  ];

  return (
    <section className="py-12 bg-gray-50 text-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-6xl md:text-7xl font-bold text-primary mb-4">
                <Counter  value={stat.value} />
                {stat.suffix}
              </div>
              <p className="text-xl md:text-2xl font-semibold text-secondary uppercase tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
