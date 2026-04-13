import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Card from '../components/ui/Card';
import { Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, Tech Corp',
      text: 'Outstanding service! They transformed our corporate event into an unforgettable experience.',
      rating: 5,
    },
    {
      name: 'Ahmed Al-Mansouri',
      role: 'Wedding Client',
      text: 'Our wedding was perfect thanks to their attention to detail and professionalism.',
      rating: 5,
    },
    {
      name: 'Maria Garcia',
      role: 'Event Coordinator',
      text: 'Working with this team was a pleasure. They exceeded all our expectations.',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-[#0f1015]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <Quote className="text-accent mb-4" size={40} />
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-accent text-xl">★</span>
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-secondary">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
