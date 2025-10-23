import { motion } from 'framer-motion';
import PageLayout from '../components/ui/PageLayout';

/**
 * Page VieEtudiante - Vie étudiante et services
 */
const VieEtudiante = () => {
  const categories = [
    {
      title: 'Logement',
      image: '/img-iut.jpg',
      description: 'CROUS & résidences privées'
    },
    {
      title: 'Bourses & Aides',
      image: '/image-remise-diplome.jpg',
      description: 'Soutien financier étudiant'
    },
    {
      title: 'Sport',
      image: '/img-iut.jpg',
      description: 'Activités & installations sportives'
    },
    {
      title: 'Culture',
      image: '/image-remise-diplome.jpg',
      description: 'Événements & sorties'
    },
    {
      title: 'BDE',
      image: '/img-iut.jpg',
      description: 'Bureau des Étudiants'
    },
    {
      title: 'Associations',
      image: '/image-remise-diplome.jpg',
      description: 'Clubs & projets étudiants'
    }
  ];

  return (
    <PageLayout 
      pageName="VIE ÉTUDIANTE"
      pageTitle="Vie Étudiante"
      pageSubtitle="Plus qu'une formation, une expérience de vie unique en Martinique"
      heroImage="/image-remise-diplome.jpg"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Introduction */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-4xl"
        >
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Étudier à l'IUT de la Martinique, c'est bien plus qu'une formation académique : c'est vivre 
              une expérience humaine enrichissante dans un cadre exceptionnel. Notre campus offre un 
              environnement propice à l'épanouissement personnel et à la réussite étudiante.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Associations étudiantes, événements culturels, activités sportives, initiatives de développement 
              durable : la vie du campus est rythmée par de nombreuses animations qui permettent à chacun de 
              s'investir et de créer des liens durables.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              L'IUT met également à disposition des services d'accompagnement, des espaces de travail collaboratifs 
              et des dispositifs d'aide à la réussite pour garantir à chaque étudiant les meilleures conditions 
              d'études possibles.
            </p>
        </motion.section>

        {/* Grille de catégories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {categories.map((categorie, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="group cursor-pointer">
                <div className="aspect-square rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] relative overflow-hidden">
                  {/* Image de fond */}
                  <img
                    src={categorie.image}
                    alt={categorie.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-all duration-300" />
                  
                  {/* Contenu */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-xl font-bold leading-tight mb-2 drop-shadow-lg">
                      {categorie.title}
                    </h3>
                    <p className="text-white/90 text-sm drop-shadow-md">
                      {categorie.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Infos pratiques */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Services
            </h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-[#009dd7] mr-2">•</span>
                <span>Restaurant universitaire CROUS</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#009dd7] mr-2">•</span>
                <span>Bibliothèque universitaire</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#009dd7] mr-2">•</span>
                <span>Service de santé (SSU)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#009dd7] mr-2">•</span>
                <span>Transports étudiants</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Contact
            </h2>
            <p className="text-gray-600 mb-6">
              Des questions sur la vie étudiante à l'IUT ? Notre équipe est là pour vous aider.
            </p>
            <a
              href="/contact"
              className="inline-block px-6 py-3 bg-[#009dd7] text-white font-semibold rounded-lg hover:bg-[#0087ba] transition-colors"
            >
              Nous contacter
            </a>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default VieEtudiante;

