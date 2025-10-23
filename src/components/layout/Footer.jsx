import { Link } from 'react-router-dom';
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi';
import Container from '../ui/Container';

/**
 * Composant Footer style MIT
 */
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-4 pb-3">
      <Container>
        {/* Logo IUT */}
        <div className="mb-3">
          <Link to="/" className="inline-block">
            <img 
              src="/src/assets/images/Logo_couleur_ua_martinique.svg" 
              alt="IUT Martinique" 
              className="h-8 w-auto opacity-60 hover:opacity-80 transition-opacity"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </Link>
        </div>

        {/* Navigation principale */}
        <nav className="mb-3">
          <ul className="flex flex-wrap gap-3">
            <li>
              <Link to="/formations" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                Formations
              </Link>
            </li>
            <li>
              <Link to="/recherche" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                Recherche
              </Link>
            </li>
            <li>
              <Link to="/entreprises" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                Entreprises
              </Link>
            </li>
            <li>
              <Link to="/vie-etudiante" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                Vie Étudiante
              </Link>
            </li>
            <li>
              <Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                Actualités
              </Link>
            </li>
            <li>
              <Link to="/iut" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                À propos
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Informations et liens utiles */}
        <div className="border-t border-gray-800 pt-3">
          {/* Nom et adresse */}
          <div className="mb-2">
            <p className="text-white font-semibold text-sm">
              Institut Universitaire de Technologie de la Martinique
            </p>
            <address className="text-xs not-italic text-gray-400">
              <a 
                href="https://www.google.com/maps/search/IUT+Martinique" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Campus de Schoelcher, 97275 Schoelcher, Martinique
              </a>
            </address>
          </div>

          {/* Liens utiles et réseaux sociaux */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            {/* Liens utiles */}
            <ul className="flex flex-wrap gap-2 text-xs">
              <li>
                <Link to="/iut" className="text-gray-400 hover:text-white transition-colors">
                  Visiter
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Plan du campus
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Événements
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Emplois
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Confidentialité
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Accessibilité
                </a>
              </li>
              
              {/* Réseaux sociaux */}
              <li className="ml-auto flex items-center gap-2">
                <span className="text-gray-400 text-xs mr-1">Suivez-nous</span>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <FiTwitter className="w-4 h-4" />
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <FiFacebook className="w-4 h-4" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <FiInstagram className="w-4 h-4" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin className="w-4 h-4" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-2 pt-2 border-t border-gray-800 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} IUT de la Martinique - Université des Antilles. Tous droits réservés.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
