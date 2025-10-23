import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiUsers, FiTrendingUp, FiHeart, FiArrowRight } from 'react-icons/fi';
import SectionWithLines from '../ui/SectionWithLines';

/**
 * Composant VieEtudianteHome - Section vie étudiante pour la page d'accueil
 * Design fluide et visuel pour attirer les lycéens
 */
const VieEtudianteHome = () => {
  const highlights = [
    {
      icon: FiUsers,
      color: 'bg-primary-500',
      title: 'Associations étudiantes',
      description: 'Rejoins nos clubs et associations pour vivre une expérience unique',
      image: '/img-iut.jpg',
    },
    {
      icon: FiTrendingUp,
      color: 'bg-lagoon-500',
      title: 'Sport & Culture',
      description: 'Des activités sportives et culturelles toute l\'année',
      image: '/image-remise-diplome.jpg',
    },
    {
      icon: FiHeart,
      color: 'bg-accent-500',
      title: 'Événements',
      description: 'Soirées, sorties, et moments de partage entre étudiants',
      image: '/img-iut.jpg',
    },
  ];

  return (
    <SectionWithLines 
      bgColor="bg-gray-50" 
      className="py-16 overflow-hidden"
    >
      {/* Effets décoratifs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary-200/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent-200/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      
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
              Vie étudiante
            </span>
            <Link 
              to="/vie-etudiante" 
              className="text-sm font-medium text-primary-600 hover:text-primary-700 flex items-center gap-2 group"
            >
              <span>En savoir plus</span>
              <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Grille highlights - FULL WIDTH avec padding minimal */}
        <div className="px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
              >
                <Link to="/vie-etudiante">
                  <div className="group relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                    {/* Image de fond */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent group-hover:from-black/90 transition-colors" />

                    {/* Icône */}
                    <div className="absolute top-6 left-6">
                      <div className={`${item.color} p-3 rounded-lg shadow-lg`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Contenu */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white text-xl font-bold mb-2 group-hover:text-primary-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-200 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
          </div>
        </div>
      </div>
    </SectionWithLines>
  );
};

export default VieEtudianteHome;

