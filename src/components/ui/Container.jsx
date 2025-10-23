/**
 * Composant Container pour wrapper le contenu de manière responsive
 * @param {ReactNode} children - Contenu du container
 * @param {string} className - Classes CSS additionnelles
 */
const Container = ({ children, className = '' }) => {
  return (
    <div className={`container mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
};

export default Container;

