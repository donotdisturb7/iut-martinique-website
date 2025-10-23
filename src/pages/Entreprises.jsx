import { motion } from 'framer-motion';
import PageLayout from '../components/ui/PageLayout';

/**
 * Page Entreprises - Espace entreprises et partenaires
 */
const Entreprises = () => {
  const services = [
    {
      title: 'Stages',
      image: '/img-iut.jpg',
      description: '8 à 16 semaines selon le niveau'
    },
    {
      title: 'Alternance',
      image: '/image-remise-diplome.jpg',
      description: 'BUT 3 en contrat pro ou apprentissage'
    },
    {
      title: 'Projets Tutorés',
      image: '/img-iut.jpg',
      description: 'Missions courtes avec nos étudiants'
    },
    {
      title: 'Taxe d\'Apprentissage',
      image: '/image-remise-diplome.jpg',
      description: 'Soutenez l\'IUT Martinique'
    }
  ];

  return (
    <PageLayout 
      pageName="ENTREPRISES"
      pageTitle="Entreprises"
      pageSubtitle="Recrutez nos étudiants et collaborez avec l'IUT"
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
              L'IUT de la Martinique entretient des liens privilégiés avec le monde professionnel. 
              Recrutement, alternance, stages, projets collaboratifs : nous proposons de nombreuses 
              opportunités pour établir des partenariats durables avec les entreprises du territoire.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Nos étudiants, formés aux dernières technologies et méthodes, sont opérationnels dès leur 
              sortie de formation. Ils représentent un vivier de talents qualifiés pour répondre aux besoins 
              en compétences des entreprises martiniquaises et caribéennes.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Que vous soyez une PME, une ETI ou une grande entreprise, l'IUT vous accompagne dans vos 
              projets de recrutement, de formation continue et d'innovation.
            </p>
        </motion.section>

        {/* Grille de services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {services.map((service, index) => (
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
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-all duration-300" />
                  
                  {/* Contenu */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-xl font-bold leading-tight mb-2 drop-shadow-lg">
                      {service.title}
                    </h3>
                    <p className="text-white/90 text-sm drop-shadow-md">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Intéressé par nos étudiants ?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour déposer une offre ou discuter d'un partenariat
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-[#009dd7] text-white font-semibold rounded-lg hover:bg-[#0087ba] transition-colors"
          >
            Nous contacter
          </a>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default Entreprises;

