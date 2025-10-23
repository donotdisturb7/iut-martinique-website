import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiUsers, FiBook, FiBriefcase } from 'react-icons/fi';
import Container from '../ui/Container';

/**
 * Hook pour animer un compteur
 */
const useCounter = (end, duration = 2000, shouldStart = false) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!shouldStart) return;
    
    let startTime;
    let animationFrame;
    
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      setCount(Math.floor(end * percentage));
      
      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, shouldStart]);
  
  return count;
};

/**
 * Composant KeyNumbers - Chiffres clés animés
 */
const KeyNumbers = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    {
      icon: FiUsers,
      value: 300,
      label: t('keyNumbers.students'),
      suffix: '+'
    },
    {
      icon: FiBook,
      value: 7,
      label: t('keyNumbers.formations'),
      suffix: ''
    },
    {
      icon: FiBriefcase,
      value: 100,
      label: t('keyNumbers.partners'),
      suffix: '+'
    }
  ];

  return (
    <section ref={ref} className="py-16 bg-primary-600 text-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold">{t('keyNumbers.title')}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center"
            >
              <stat.icon className="w-12 h-12 mx-auto mb-4" />
              <div className="text-5xl md:text-6xl font-bold mb-2">
                <Counter end={stat.value} isInView={isInView} />
                {stat.suffix}
              </div>
              <div className="text-xl">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

/**
 * Composant Counter pour afficher un nombre animé
 */
const Counter = ({ end, isInView }) => {
  const count = useCounter(end, 2000, isInView);
  return <span>{count}</span>;
};

export default KeyNumbers;

