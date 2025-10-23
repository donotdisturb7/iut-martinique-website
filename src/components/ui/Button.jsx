import { motion } from 'framer-motion';

/**
 * Composant Button réutilisable
 * @param {string} variant - Style du bouton : 'primary', 'secondary', 'outline'
 * @param {string} size - Taille : 'sm', 'md', 'lg'
 * @param {ReactNode} children - Contenu du bouton
 * @param {string} className - Classes CSS additionnelles
 */
const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-200 inline-flex items-center justify-center';
  
  const variants = {
    primary: 'bg-primary-500 hover:bg-primary-600 text-white shadow-md hover:shadow-lg',
    secondary: 'bg-secondary-500 hover:bg-secondary-600 text-white shadow-md hover:shadow-lg',
    outline: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-50',
    white: 'bg-white hover:bg-gray-50 text-primary-600 shadow-md hover:shadow-lg',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;

