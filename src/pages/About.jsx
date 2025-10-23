import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';
import formationsData from '../data/formations.json';
import PageLayout from '../components/ui/PageLayout';

/**
 * Page About - Présentation de l'IUT
 */
const About = () => {
  // Extraire les départements uniques
  const departments = [];

  return (
    <PageLayout pageName="L'IUT">
      {/* Hero section */}
      <div className="bg-primary-600 text-white py-16 mb-12">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">L'IUT de la Martinique</h1>
            <p className="text-xl">Excellence, Innovation et Insertion professionnelle</p>
          </motion.div>
        </Container>
      </div>

      <Container>
        {/* Mission */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre Mission</h2>
          <div className="prose max-w-none text-gray-700 space-y-4">
            <p className="text-lg">
              L'IUT de la Martinique, composante de l'Université des Antilles, est un établissement 
              d'enseignement supérieur qui forme des techniciens supérieurs et des cadres intermédiaires 
              dans différents domaines professionnels.
            </p>
            <p className="text-lg">
              Nous avons pour mission de dispenser un enseignement de qualité alliant théorie et pratique, 
              en étroite collaboration avec le tissu économique local, afin de garantir une insertion 
              professionnelle optimale à nos diplômés.
            </p>
          </div>
        </motion.section>

        {/* Mot de la Direction */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Mot de la Direction</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <div className="bg-gray-300 rounded-lg h-64 flex items-center justify-center">
                  <p className="text-gray-500">Photo du Directeur</p>
                </div>
                <div className="mt-4 text-center">
                  <p className="font-semibold text-gray-900">Dr. Jean Dupont</p>
                  <p className="text-gray-600">Directeur de l'IUT</p>
                </div>
              </div>
              <div className="md:col-span-2">
                <p className="text-gray-700 mb-4 italic text-lg">
                  "Bienvenue à l'IUT de la Martinique ! Notre établissement s'engage à offrir 
                  une formation de qualité, en phase avec les besoins du territoire et les 
                  évolutions technologiques."
                </p>
                <p className="text-gray-700">
                  Nous mettons tout en œuvre pour accompagner chaque étudiant dans son projet 
                  professionnel, en développant ses compétences techniques et ses soft skills. 
                  Notre réseau de partenaires entreprises garantit des opportunités d'alternance 
                  et d'insertion professionnelle exceptionnelles.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        

        
      </Container>
    </PageLayout>
  );
};

export default About;

