import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import formationsData from '../../data/formations.json';
import SectionWithLines from '../ui/SectionWithLines';

/**
 * Composant FormationsHome - Section formations pour la page d'accueil
 * Design fluide sans gros titre, s'intègre naturellement dans le scroll
 */
const FormationsHome = () => {
  // On prend seulement les 4 premières formations
  const featuredFormations = formationsData.slice(0, 4);

  return (
    <SectionWithLines 
      bgColor="bg-white" 
      className="py-16 overflow-hidden"
    >
      {/* Effets décoratifs */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-secondary-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-accent-200/20 rounded-full blur-3xl translate-x-1/2" />
      
      <div className="w-full">
        {/* Label centré */}
        <div className="mx-auto max-w-7xl px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-8 flex items-center justify-between"
          >
            <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
              Nos formations
            </span>
            <Link 
              to="/formations" 
              className="text-sm font-medium text-primary-600 hover:text-primary-700 flex items-center gap-2 group"
            >
              <span>Voir tout</span>
              <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Grille de formations - FULL WIDTH avec padding minimal */}
        <div className="px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredFormations.map((formation, index) => (
            <motion.div
              key={formation.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
            >
              <Link to={`/formations/${formation.id}`}>
                <div className="group relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  {/* Image de fond */}
                  <img
                    src={formation.image}
                    alt={formation.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay sombre */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-colors" />

                  {/* Badge type en haut à droite */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 text-primary-600 px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                      {formation.type}
                    </span>
                  </div>

                  {/* Nom de la formation en bas */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-xl font-bold leading-tight drop-shadow-lg group-hover:text-primary-300 transition-colors">
                      {formation.name}
                    </h3>
                    <p className="text-white/90 text-sm mt-2 drop-shadow-md">
                      {formation.code}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
          </div>
        </div>
      </div>
    </SectionWithLines>
  );
};

export default FormationsHome;
