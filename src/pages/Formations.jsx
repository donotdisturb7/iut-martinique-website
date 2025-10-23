import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import formationsData from '../data/formations.json';
import PageLayout from '../components/ui/PageLayout';

/**
 * Page Formations - Simplifié avec PageLayout
 */
const Formations = () => {
  // Grouper les formations par type
  const formationsByType = formationsData.reduce((acc, formation) => {
    if (!acc[formation.type]) {
      acc[formation.type] = [];
    }
    acc[formation.type].push(formation);
    return acc;
  }, {});

  const sections = Object.keys(formationsByType);

  return (
    <PageLayout 
      pageName="FORMATIONS"
      pageTitle="Nos Formations"
      pageSubtitle="Découvrez notre offre de formations et trouvez celle qui correspond à votre projet professionnel"
      heroImage="/img-iut.jpg"
    >
      {/* Contenu principal */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        {/* Sections par type */}
        {sections.map((type, sectionIndex) => (
          <section
            key={type}
            id={type}
            className="mb-20 scroll-mt-28"
          >
            {/* Titre de section avec ligne */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              className="mb-8 flex items-center gap-4"
            >
              <h2 className="text-3xl font-bold text-gray-900">{type}</h2>
              <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent" />
            </motion.div>

            {/* Grille de formations */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {formationsByType[type].map((formation, index) => (
                <motion.div
                  key={formation.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: sectionIndex * 0.1 + index * 0.05 }}
                >
                  <Link to={`/formations/${formation.id}`} className="group">
                    <div className="aspect-square rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] relative overflow-hidden">
                      {/* Image de fond */}
                      <img
                        src={formation.image}
                        alt={formation.name}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-all duration-300" />
                      
                      {/* Badge type en haut à droite */}
                      <div className="absolute top-4 right-4">
                        <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                          {formation.type}
                        </span>
                      </div>

                      {/* Nom de la formation en bas */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-white text-xl font-bold leading-tight mb-2 drop-shadow-lg group-hover:text-primary-300 transition-colors">
                          {formation.name}
                        </h3>
                        <p className="text-white/90 text-sm font-medium drop-shadow-md">
                          {formation.code}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
        </section>
      ))}
    </div>
    </PageLayout>
  );
};

export default Formations;
