import { Link } from 'react-router-dom';
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter, FiMapPin, FiMail, FiPhone } from 'react-icons/fi';
import Container from '../ui/Container';

/**
 * Composant Footer modernisé
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-900 from-outremer-600 to-outremer-900 text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80" 
          alt="" 
          className="w-full h-full object-cover object-center opacity-20"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/95 to-primary/98"></div>
      </div>
      
      {/* Vague décorative en haut du footer */}
      <div className="relative z-10 w-full overflow-hidden">
        <svg className="w-full h-8 sm:h-10 md:h-12 -mb-1" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            className="fill-white"
          ></path>
        </svg>
      </div>
      
      {/* Contenu principal du footer */}
      <div className="relative z-10">
        <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 py-8 md:py-10 lg:py-12">
          {/* Colonne 1: Logo et présentation */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block mb-2 md:mb-4">
              <img
                src="/src/assets/images/Logo_couleur_ua_martinique.svg"
                alt="IUT de la martinique"
                className="h-12 md:h-14 lg:h-16 w-auto"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </Link>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed">
              L'Institut Universitaire de Technologie de la Martinique forme les talents de demain 
              dans un cadre d'excellence académique et professionnelle.
            </p>
            <div className="flex space-x-3 pt-2">
              <a 
                href="https://www.instagram.com/iutmartinique/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-celestial-500 p-2 rounded-full transition-colors duration-300"
                aria-label="Instagram"
              >
                <FiInstagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/company/iut-de-la-martinique/posts/?feedView=all" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-celestial-500 p-2 rounded-full transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Colonne 2: Navigation */}
          <div className="space-y-3 md:space-y-4">
            <h3 className="text-base md:text-lg font-bold text-white border-b border-celestial-400 pb-2 mb-3 md:mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/formations" className="text-gray-300 hover:text-celestial-300 transition-colors flex items-center">
                  <span className="bg-celestial-500 h-1 w-3 mr-2 rounded-full"></span>
                  Formations
                </Link>
              </li>
              <li>
                <Link to="/recherche" className="text-gray-300 hover:text-celestial-300 transition-colors flex items-center">
                  <span className="bg-celestial-500 h-1 w-3 mr-2 rounded-full"></span>
                  Recherche
                </Link>
              </li>
              <li>
                <Link to="/entreprises" className="text-gray-300 hover:text-celestial-300 transition-colors flex items-center">
                  <span className="bg-celestial-500 h-1 w-3 mr-2 rounded-full"></span>
                  Entreprises
                </Link>
              </li>
              <li>
                <Link to="/vie-etudiante" className="text-gray-300 hover:text-celestial-300 transition-colors flex items-center">
                  <span className="bg-celestial-500 h-1 w-3 mr-2 rounded-full"></span>
                  Vie Étudiante
                </Link>
              </li>
              <li>
                <Link to="/iut" className="text-gray-300 hover:text-celestial-300 transition-colors flex items-center">
                  <span className="bg-celestial-500 h-1 w-3 mr-2 rounded-full"></span>
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-celestial-300 transition-colors flex items-center">
                  <span className="bg-celestial-500 h-1 w-3 mr-2 rounded-full"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3: Liens utiles */}
          <div className="space-y-3 md:space-y-4">
            <h3 className="text-base md:text-lg font-bold text-white border-b border-celestial-400 pb-2 mb-3 md:mb-4">Liens utiles</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://myua.univ-antilles.fr" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-celestial-300 transition-colors">
                  My UA
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-celestial-300 transition-colors">
                  Plan du campus
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-celestial-300 transition-colors">
                  Événements
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-celestial-300 transition-colors">
                  Emplois
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-celestial-300 transition-colors">
                  Confidentialité
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-celestial-300 transition-colors">
                  Accessibilité
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 4: Contact */}
          <div className="space-y-3 md:space-y-4">
            <h3 className="text-base md:text-lg font-bold text-white border-b border-celestial-400 pb-2 mb-3 md:mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FiMapPin className="w-5 h-5 text-celestial-400 mt-1 mr-3 flex-shrink-0" />
                <a 
                  href="https://www.google.com/maps/search/IUT+Martinique" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-celestial-300 transition-colors"
                >
                  Campus de Schoelcher<br />
                  97275 Schoelcher<br />
                  Martinique
                </a>
              </li>
              <li className="flex items-center">
                <FiPhone className="w-5 h-5 text-celestial-400 mr-3 flex-shrink-0" />
                <a href="tel:+596596727272" className="text-gray-300 hover:text-celestial-300 transition-colors">
                  +596 596 72 72 72
                </a>
              </li>
              <li className="flex items-center">
                <FiMail className="w-5 h-5 text-celestial-400 mr-3 flex-shrink-0" />
                <a href="mailto:contact@iut-martinique.fr" className="text-gray-300 hover:text-celestial-300 transition-colors">
                  contact@iut-martinique.fr
                </a>
              </li>
            </ul>
          </div>
        </div>
        </Container>
      </div>

      {/* Barre de copyright */}
      <div className="relative z-10 bg-outremer-900 py-3 md:py-4">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-gray-400 gap-2">
            <p>&copy; {currentYear} IUT de la Martinique - Université des Antilles. Tous droits réservés.</p>
            <div className="mt-2 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors mx-2">Mentions légales</a>
              <span className="mx-2">|</span>
              <a href="#" className="text-gray-400 hover:text-white transition-colors mx-2">Politique de confidentialité</a>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;