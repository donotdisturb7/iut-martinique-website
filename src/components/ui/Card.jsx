import { motion } from 'framer-motion';

/**
 * Composant Card réutilisable avec effet hover
 * @param {ReactNode} children - Contenu de la card
 * @param {string} className - Classes CSS additionnelles
 * @param {boolean} hoverable - Active les effets hover
 */
const Card = ({ children, className = '', hoverable = true, ...props }) => {
  const baseClasses = 'bg-white rounded-lg shadow-md overflow-hidden';
  
  if (hoverable) {
    return (
      <motion.div
        whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
        transition={{ duration: 0.2 }}
        className={`${baseClasses} ${className}`}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
  
  return (
    <div className={`${baseClasses} ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Card;

