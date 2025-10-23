/**
 * Composant Badge pour afficher des tags/catégories
 * @param {ReactNode} children - Contenu du badge
 * @param {string} color - Couleur du badge : 'primary', 'secondary', 'success', 'warning', 'gray'
 * @param {string} className - Classes CSS additionnelles
 */
const Badge = ({ children, color = 'primary', className = '' }) => {
  const colors = {
    primary: 'bg-primary-100 text-primary-800',
    secondary: 'bg-secondary-100 text-secondary-800',
    accent: 'bg-accent-100 text-accent-800',
    lagoon: 'bg-lagoon-100 text-lagoon-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    gray: 'bg-gray-100 text-gray-800',
  };
  
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${colors[color]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;

