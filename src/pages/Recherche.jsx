import { motion } from 'framer-motion';
import PageLayout from '../components/ui/PageLayout';
import { DynamicFrameLayout } from '../components/ui/DynamicFrameLayout';

/**
 * Page Recherche - Activités de recherche à l'IUT
 */
const Recherche = () => {
  const projetsRecherche = [
    {
      id: 1,
      image: '/recerche-ia.png',
      title: 'Intelligence Artificielle',
      description: 'Machine Learning & Deep Learning',
      defaultPos: { x: 0, y: 0, w: 4, h: 4 },
      isHovered: false,
    },
    {
      id: 2,
      image: '/cyberrecherche.jpg',
      title: 'Cybersécurité',
      description: 'Sécurité des réseaux et données',
      defaultPos: { x: 4, y: 0, w: 4, h: 4 },
      isHovered: false,
    },
    {
      id: 3,
      image: '/big-data-recherche.jpg',
      title: 'Big Data',
      description: 'Analyse et traitement de données',
      defaultPos: { x: 8, y: 0, w: 4, h: 4 },
      isHovered: false,
    },
    {
      id: 4,
      image: '/but-hse.jpg',
      title: 'Développement Durable',
      description: 'Énergies renouvelables',
      defaultPos: { x: 0, y: 4, w: 4, h: 4 },
      isHovered: false,
    },
    {
      id: 5,
      image: '/but-gea.jpg',
      title: 'Entrepreneuriat',
      description: 'Start-ups & innovation',
      defaultPos: { x: 4, y: 4, w: 4, h: 4 },
      isHovered: false,
    },
    {
      id: 6,
      image: '/informatique-student.jpg',
      title: 'Développement Web',
      description: 'Applications & interfaces',
      defaultPos: { x: 8, y: 4, w: 4, h: 4 },
      isHovered: false,
    },
    {
      id: 7,
      image: '/but-tc.jpg',
      title: 'IoT',
      description: 'Objets connectés',
      defaultPos: { x: 0, y: 8, w: 4, h: 4 },
      isHovered: false,
    },
    {
      id: 8,
      image: '/recerche-ia.png',
      title: 'Gestion de Projet',
      description: 'Méthodes agiles',
      defaultPos: { x: 4, y: 8, w: 4, h: 4 },
      isHovered: false,
    },
    {
      id: 9,
      image: '/image-remise-diplome.jpg',
      title: 'Projets Territoriaux',
      description: 'Innovation locale',
      defaultPos: { x: 8, y: 8, w: 4, h: 4 },
      isHovered: false,
    },
  ];

  return (
    <PageLayout 
      pageName="RECHERCHE"
      pageTitle="Recherche"
      pageSubtitle="Innovation et développement au service du territoire caribéen"
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
              En lien avec sa mission de transmission du savoir, l'IUT de la Martinique est créateur de 
              connaissances à travers ses activités de recherche. Grâce aux enseignants-chercheurs, nous 
              garantissons un enseignement de haute qualité via l'adossement des formations aux compétences 
              des unités de recherche.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Quelles que soient les disciplines concernées, l'établissement s'engage à encourager les projets 
              dédiés au développement durable. La valorisation de ces projets de recherche et leur lien avec 
              les attentes sociétales des territoires caribéens sont une des priorités de l'établissement.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Nos équipes de recherche collaborent activement avec les entreprises locales, les collectivités 
              et les partenaires internationaux pour répondre aux défis spécifiques de notre territoire insulaire.
            </p>
        </motion.section>

        {/* Grille interactive dynamique */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-[500px] md:h-[600px] mb-12 rounded-2xl overflow-hidden shadow-2xl"
          style={{ backgroundColor: '#f9fafb' }}
        >
          <DynamicFrameLayout 
            frames={projetsRecherche} 
            className="w-full h-full p-4" 
            hoverSize={6}
            gapSize={6}
          />
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default Recherche;

