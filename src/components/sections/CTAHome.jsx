import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiMail, FiCalendar } from 'react-icons/fi';

/**
 * Composant CTAHome - Section call-to-action pour la page d'accueil
 * Encourage les lycéens à passer à l'action
 */
const CTAHome = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 relative overflow-hidden">
      {/* Effet de fond */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="mx-auto w-full max-w-5xl px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Prêt à rejoindre l'IUT de la Martinique ?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
            Découvre nos formations, visite notre campus et lance-toi dans une aventure étudiante exceptionnelle
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/formations"
              className="group inline-flex items-center gap-3 bg-white text-primary-600 font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-all shadow-2xl hover:shadow-3xl hover:scale-105"
            >
              <span>Découvrir les formations</span>
              <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white font-bold px-8 py-4 rounded-lg hover:bg-white/20 transition-all border-2 border-white/30"
            >
              <FiMail className="w-5 h-5" />
              <span>Nous contacter</span>
            </Link>
          </div>

          {/* Info Journée Portes Ouvertes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full border border-white/20"
          >
            <FiCalendar className="w-5 h-5" />
            <span className="text-sm font-medium">
              Prochaine Journée Portes Ouvertes : Mars 2024
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTAHome;

