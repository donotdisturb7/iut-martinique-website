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
        className={`fixed w-full z-40 transition-all duration-300 ${
          isScrolled && !isDetailPage 
            ? 'top-0 bg-white/80 backdrop-blur-md shadow-md' 
            : isDetailPage 
              ? 'top-0 bg-white/95 backdrop-blur-sm shadow-md' 
              : 'top-4 bg-transparent'
        } py-3 md:py-4 lg:py-5`}
      >
        <Container>
          <div className="flex items-center justify-between h-[60px] md:h-[70px] lg:h-[75px] laptop:h-[80px] xl:h-[85px] 2xl:h-[90px]">
            {/* Logo à gauche */}
            <Link to="/" className="flex items-center">
              <img 
                src="https://s3.us-east-2.amazonaws.com/harrowco.fr/IUT-Martinique/logoIUT.png"
                alt="IUT Martinique" 
                className="h-8 md:h-10 lg:h-11 laptop:h-12 xl:h-13 2xl:h-14 w-auto"
              />
            </Link>

            {/* Navigation au centre */}
            <nav className="hidden lg:flex items-center space-x-2 laptop:space-x-3 xl:space-x-4 2xl:space-x-6">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`font-semibold text-xs lg:text-sm laptop:text-base xl:text-lg uppercase tracking-wide whitespace-nowrap transition-colors ${
                      isActive 
                        ? 'text-[#EF7639]' 
                        : (isDetailPage || isScrolled)
                          ? 'text-gray-700 hover:text-[#EF7639]'
                          : 'text-white hover:text-[#EF7639]'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Actions à droite */}
            <div className="flex items-center space-x-3">
              {/* Bouton changement de langue */}
              <button
                onClick={toggleLanguage}
                className={`hidden lg:flex items-center px-2 py-1 lg:px-3 lg:py-1.5 laptop:px-4 laptop:py-2 text-xs lg:text-sm laptop:text-base font-semibold transition-all border-2 rounded-lg ${
                  (isDetailPage || isScrolled)
                    ? 'text-gray-700 hover:text-[#13316C] border-gray-300 hover:border-[#13316C]'
                    : 'text-white hover:text-[#13316C] border-white/50 hover:border-[#13316C]'
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
                className="hidden lg:inline-flex items-center px-3 py-1 lg:px-4 lg:py-1.5 laptop:px-5 laptop:py-2 text-xs lg:text-sm laptop:text-base font-semibold text-white bg-[#13316C] hover:bg-[#0f2856] rounded-lg transition-colors shadow-lg"
              >
                My UA
              </a>


              {/* Menu burger mobile (seulement mobile et tablette) */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden hover:text-[#13316C] transition-colors ${
                  (isDetailPage || isScrolled) ? 'text-gray-900' : 'text-white'
                }`}
                aria-label="Menu"
              >
                {isMobileMenuOpen ? (
                  <FiX className="w-6 h-6" />
                ) : (
                  <FiMenu className="w-6 h-6" />
                )}
              </button>

              {/* Bouton Search (toujours visible, tout à droite) */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className={`p-1.5 rounded-full transition-colors ${
                  (isDetailPage || isScrolled)
                    ? 'hover:bg-gray-100 text-gray-900 hover:text-[#13316C]'
                    : 'hover:bg-white/10 text-white hover:text-[#13316C]'
                }`}
                aria-label="Rechercher"
              >
                <FiSearch className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Barre de recherche */}
          {isSearchOpen && (
            <div className="mt-4 animate-fade-in">
              <input
                type="search"
                placeholder="Rechercher..."
                className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-[#13316C] focus:border-transparent ${
                  (isDetailPage || isScrolled)
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

