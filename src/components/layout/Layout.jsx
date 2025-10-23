import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

/**
 * Composant Layout - Structure globale du site avec Header et Footer
 * Gère également le scroll to top lors des changements de page
 */
const Layout = ({ children }) => {
  const location = useLocation();

  // Scroll to top à chaque changement de route
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

