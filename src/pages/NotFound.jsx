import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';

/**
 * Page NotFound - Erreur 404 personnalisée
 */
const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="py-16">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          {/* Code 404 */}
          <div className="text-9xl font-bold text-primary-600 mb-4">
            404
          </div>
          
          {/* Message */}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Page introuvable
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          </p>

          {/* Illustration */}
          <div className="text-8xl mb-8">
            🔍
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button size="lg">
                Retour à l'accueil
              </Button>
            </Link>
            <Link to="/formations">
              <Button size="lg" variant="outline">
                Voir les formations
              </Button>
            </Link>
          </div>

          {/* Liens utiles */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600 mb-4">Liens utiles :</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/iut" className="text-primary-600 hover:underline">
                L'IUT
              </Link>
              <Link to="/formations" className="text-primary-600 hover:underline">
                Formations
              </Link>
              <Link to="/contact" className="text-primary-600 hover:underline">
                Contact
              </Link>
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default NotFound;

