import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Container from '../ui/Container';
import Card from '../ui/Card';
import portraitsData from '../../data/portraits.json';

/**
 * Composant Portraits - Section portraits de la communauté IUT
 */
const Portraits = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('portraits.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('portraits.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portraitsData.map((portrait, index) => (
            <motion.div
              key={portrait.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full">
                {/* Image portrait */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={portrait.image}
                    alt={portrait.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                {/* Contenu */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {portrait.name}
                  </h3>
                  <p className="text-sm text-primary-600 font-medium mb-2">
                    {portrait.role}
                  </p>
                  <p className="text-xs text-gray-500 mb-3">
                    {portrait.department}
                  </p>
                  <p className="text-gray-700 text-sm italic">
                    "{portrait.quote}"
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Portraits;

