import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiSearch, FiMenu, FiX } from 'react-icons/fi';
import Container from '../ui/Container';
import Button from '../ui/Button';
import MobileMenu from './MobileMenu';

/**
 * Composant Header avec navigation sticky
 */
const Header = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Pages de détail sans hero : navbar classique avec fond blanc
  const isDetailPage = location.pathname.includes('/formations/') || 
                       location.pathname.includes('/news/') ||
                       location.pathname === '/catalogue-formations';

  // Effet sticky au scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'fr' ? 'en' : 'fr');
  };

  const navItems = [
    { label: t('nav.formations'), path: '/formations' },
    { label: t('nav.recherche'), path: '/recherche' },
    { label: t('nav.entreprises'), path: '/entreprises' },
    { label: t('nav.vieEtudiante'), path: '/vie-etudiante' },
    { label: t('nav.contact'), path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed w-full top-0 z-50 transition-all duration-500 ${
          isScrolled && !isDetailPage ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
        } ${isDetailPage ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'} py-6`}
      >
        <Container>
          <div className="flex items-center justify-between">
            {/* Logo à gauche */}
            <Link to="/" className="flex items-center space-x-3 flex-shrink-0">
              <div className="w-12 h-12 flex items-center justify-center">
                <img 
                  src={isDetailPage 
                    ? "/src/assets/images/Logo_couleur_ua_martinique.svg"
                    : "/src/assets/images/Logo_blanc_ua_martinique.svg"
                  }
                  alt="IUT Martinique" 
                  className="h-12 w-auto"
                />
              </div>
              <div className="hidden md:block">
                <div className={`text-lg font-bold ${isDetailPage ? 'text-gray-900' : 'text-white'}`}>
                  IUT de la Martinique
                </div>
                <div className={`text-sm ${isDetailPage ? 'text-gray-600' : 'text-white/90'}`}>
                  Université des Antilles
                </div>
              </div>
            </Link>

            {/* Navigation au centre */}
            <nav className="hidden lg:flex items-center space-x-10 absolute left-1/2 transform -translate-x-1/2">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`font-semibold text-base uppercase tracking-wide whitespace-nowrap transition-colors ${
                      isActive 
                        ? 'text-[#009dd7]' 
                        : isDetailPage 
                          ? 'text-gray-700 hover:text-[#009dd7]'
                          : 'text-white hover:text-[#009dd7]'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Actions à droite */}
            <div className="flex items-center space-x-4 flex-shrink-0">
              {/* Bouton changement de langue */}
              <button
                onClick={toggleLanguage}
                className={`hidden lg:flex items-center px-4 py-2 text-sm font-semibold transition-all border-2 rounded-lg ${
                  isDetailPage
                    ? 'text-gray-700 hover:text-[#009dd7] border-gray-300 hover:border-[#009dd7]'
                    : 'text-white hover:text-[#009dd7] border-white/50 hover:border-[#009dd7]'
                }`}
                aria-label="Changer de langue"
              >
                {i18n.language === 'fr' ? 'FR' : 'EN'}
              </button>

              {/* Lien My UA (desktop uniquement) */}
              <a
                href="https://myua.univ-antilles.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white bg-[#009dd7] hover:bg-[#0087ba] rounded-lg transition-colors shadow-lg"
              >
                My UA
              </a>

              {/* Menu burger mobile (seulement visible sur mobile) */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden hover:text-[#009dd7] transition-colors ${
                  isDetailPage ? 'text-gray-900' : 'text-white'
                }`}
                aria-label="Menu"
              >
                {isMobileMenuOpen ? (
                  <FiX className="w-7 h-7" />
                ) : (
                  <FiMenu className="w-7 h-7" />
                )}
              </button>

              {/* Bouton Search (toujours visible, tout à droite) */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className={`p-2 rounded-full transition-colors ${
                  isDetailPage 
                    ? 'hover:bg-gray-100 text-gray-900 hover:text-[#009dd7]'
                    : 'hover:bg-white/10 text-white hover:text-[#009dd7]'
                }`}
                aria-label="Rechercher"
              >
                <FiSearch className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Barre de recherche */}
          {isSearchOpen && (
            <div className="mt-4 animate-fade-in">
              <input
                type="search"
                placeholder="Rechercher..."
                className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-[#009dd7] focus:border-transparent ${
                  isDetailPage
                    ? 'bg-gray-100 border border-gray-300 text-gray-900 placeholder-gray-500'
                    : 'bg-white/20 backdrop-blur-md border border-white/30 text-white placeholder-white/70 focus:bg-white/30'
                }`}
                autoFocus
              />
            </div>
          )}
        </Container>
      </header>

      {/* Menu mobile */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navItems={navItems}
      />
    </>
  );
};

export default Header;

