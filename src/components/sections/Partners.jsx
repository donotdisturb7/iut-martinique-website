import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Container from '../ui/Container';
import Button from '../ui/Button';
import partnersData from '../../data/partners.json';

/**
 * Composant Partners - Section partenaires et entreprises
 */
const Partners = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-gray-50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('partners.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {t('partners.subtitle')}
          </p>
        </motion.div>

        {/* Grille des logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 mb-16">
          {partnersData.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex items-center justify-center"
            >
              <a
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full h-auto"
                />
              </a>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Button size="lg" className="px-8 py-4 text-lg">
            {t('partners.cta')}
          </Button>
        </motion.div>
      </Container>
    </section>
  );
};

export default Partners;

