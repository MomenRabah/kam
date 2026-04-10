import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Card from '../components/ui/Card';
import { Target, Eye, Award, Users } from 'lucide-react';

const About = () => {
  const { t } = useTranslation();

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To create unforgettable experiences that exceed expectations and bring visions to life.',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To be the leading events company recognized for innovation, quality, and excellence.',
    },
    {
      icon: Award,
      title: 'Our Values',
      description: 'Excellence, integrity, creativity, and commitment to client satisfaction.',
    },
    {
      icon: Users,
      title: 'Our Team',
      description: 'A passionate group of professionals dedicated to making every event extraordinary.',
    },
  ];

  return (
    <div className="pt-20">
      <section className="py-20 bg-linear-to-br from-secondary to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            {t('nav.about')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Creating memorable experiences since 2009
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-secondary mb-6">Who We Are</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                EventsCo is a premier event planning and management company with over 15 years of experience 
                in creating exceptional experiences. We specialize in corporate events, weddings, exhibitions, 
                and entertainment events.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our team of dedicated professionals works tirelessly to ensure every detail is perfect, 
                from concept to execution. We pride ourselves on our creativity, attention to detail, 
                and commitment to exceeding client expectations.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center"
            >
              <span className="text-gray-400 text-xl">Company Image</span>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center h-full">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
