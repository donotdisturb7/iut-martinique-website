import { motion } from 'framer-motion';

/**
 * Composant PageHero - Hero pour les pages internes
 * Version plus petite du Hero principal
 */
const PageHero = ({ title, subtitle, image = '/img-iut.jpg' }) => {
  return (
    <div className="relative h-[60vh] min-h-[400px] -mt-24 z-30">
      {/* Image de fond */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        {/* Overlay sombre */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Contenu */}
      <div className="relative h-full flex items-center justify-center text-center px-4 pt-32">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl laptop:text-6xl xl:text-7xl font-bold text-white mb-6"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl lg:text-2xl laptop:text-2xl text-white/90"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageHero;

