import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageLayout from '../components/ui/PageLayout';

/**
 * Page Formations - Introduction et présentation générale
 */
const FormationsIntro = () => {
  const sections = [
    {
      title: 'Catalogue de l\'offre de formation',
      description: 'Découvrez l\'ensemble de nos BUT et Licences Professionnelles',
      image: '/but-tc.jpg',
      link: '/catalogue-formations'
    },
    {
      title: 'Orientation',
      description: 'Besoin d\'aide pour choisir votre formation ?',
      image: '/orientation.png',
      link: '/contact'
    },
    {
      title: 'Formation et transitions',
      description: 'Nos formations intègrent les enjeux du développement durable',
      image: '/but-hse.jpg',
      link: '/recherche'
    },
    {
      title: 'Se former en alternance',
      description: 'Toutes nos formations accessibles en alternance',
      image: '/but-tc.jpg',
      link: '/entreprises'
    },
    {
      title: 'Se former tout au long de la vie',
      description: 'Formation continue, VAE et reprise d\'études',
      image: '/but-gea.jpg',
      link: '/contact'
    },
    {
      title: 'Aménagement d\'études',
      description: 'Dispositifs pour sportifs, étudiants en situation de handicap',
      image: '/image-remise-diplome.jpg',
      link: '/contact'
    },
    {
      title: 'Pédagogie innovante',
      description: 'Approche par compétences, projets tutorés, learning labs',
      image: '/informatique-student.jpg',
      link: '/recherche'
    },
    {
      title: 'Insertion professionnelle',
      description: 'Accompagnement personnalisé, ateliers CV, job dating',
      image: '/image-remise-diplome.jpg',
      link: '/entreprises'
    },
    {
      title: 'Enquêtes et statistiques',
      description: 'Consultez les données d\'insertion et de réussite',
      image: '/but-gea.jpg',
      link: '/contact'
    }
  ];

  return (
    <PageLayout 
      pageName="FORMATION"
      pageTitle="Formation"
      pageSubtitle="Excellence académique et réussite professionnelle en Martinique"
      heroImage="/img-iut.jpg"
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
              L'IUT de la Martinique rend accessible l'enseignement supérieur à tous. Réussite, innovation, 
              transformation pédagogique : nos étudiants sont formés aux enjeux du monde d'aujourd'hui et de demain 
              dont ils sont acteurs.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              L'IUT se doit également de sensibiliser les étudiants à un comportement écoresponsable et de préparer 
              les futurs décideurs aux enjeux fondamentaux des transitions. La promotion du développement durable au 
              sein des activités d'enseignement passe bien évidemment par des modules dédiés ou par des animations 
              ponctuelles, mais elle irrigue également l'ensemble des formations universitaires.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Implantée au cœur de la Caraïbe, notre offre de formation s'adapte aux spécificités du territoire 
              caribéen tout en respectant les standards nationaux et internationaux.
            </p>
        </motion.section>

        {/* Statistiques */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-4xl font-bold text-[#009dd7] mb-2">1 200</div>
              <div className="text-sm text-gray-600 font-medium">étudiants</div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-4xl font-bold text-[#009dd7] mb-2">7</div>
              <div className="text-sm text-gray-600 font-medium">formations</div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-4xl font-bold text-[#009dd7] mb-2">85%</div>
              <div className="text-sm text-gray-600 font-medium">insertion professionnelle</div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-4xl font-bold text-[#009dd7] mb-2">350</div>
              <div className="text-sm text-gray-600 font-medium">alternants</div>
            </div>
          </div>
        </motion.section>

        {/* Grille des sections */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
              >
                <Link to={section.link} className="group">
                  <div className="aspect-square rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] relative overflow-hidden">
                    {/* Image de fond */}
                    <img
                      src={section.image}
                      alt={section.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-all duration-300" />
                    
                    {/* Badge en haut à droite */}
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                        Formation
                      </span>
                    </div>

                    {/* Titre et description en bas */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white text-xl font-bold leading-tight mb-2 drop-shadow-lg group-hover:text-[#009dd7] transition-colors">
                        {section.title}
                      </h3>
                      <p className="text-white/90 text-sm drop-shadow-md">
                        {section.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </PageLayout>
  );
};

export default FormationsIntro;
