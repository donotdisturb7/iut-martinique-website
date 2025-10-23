import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Button from '../ui/Button';

/**
 * Composant MobileMenu - Menu latéral pour mobile et tablette
 */
const MobileMenu = ({ isOpen, onClose, navItems }) => {
  const { t } = useTranslation();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          />

          {/* Menu */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 w-80 max-w-full bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
          >
            <div className="p-6">
              <div className="text-2xl font-bold text-gray-900 mb-8">Menu</div>

              {/* Navigation */}
              <nav className="space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={onClose}
                    className="block py-3 text-lg text-gray-700 hover:text-primary-600 transition-colors border-b border-gray-100"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* Bouton My UA */}
              <div className="mt-8">
                <a
                  href="https://myua.univ-antilles.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 px-4 text-center text-white bg-[#009dd7] hover:bg-[#0087ba] rounded-md transition-colors font-medium"
                >
                  My UA
                </a>
              </div>

              {/* Bouton Candidater */}
              <div className="mt-4">
                <Button className="w-full" onClick={onClose}>
                  {t('nav.candidater')}
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;

