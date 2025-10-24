import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiClock, FiAward, FiUsers, FiBook, FiCheckCircle, FiBriefcase, FiTrendingUp } from 'react-icons/fi';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import formationsData from '../data/formations.json';

/**
 * Page FormationDetail - Détail d'une formation avec contenu enrichi
 */
const FormationDetail = () => {
  const { id } = useParams();
  const formation = formationsData.find(f => f.id === id);

  if (!formation) {
    return (
      <div className="py-12">
        <Container>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Formation non trouvée</h1>
            <Button onClick={() => window.history.back()}>
              Retour aux formations
            </Button>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-12">
      {/* Bouton retour */}
      <Container>
        <Link 
          to="/formations"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-[#13316C] mb-6 transition-colors"
        >
          <FiArrowLeft /> Retour aux formations
        </Link>
      </Container>

        {/* Image hero avec texte en overlay */}
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12 shadow-2xl"
        >
          <img
            src={formation.image}
            alt={formation.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <div className="text-center max-w-4xl">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block bg-[#13316C] text-white px-4 py-2 rounded-full text-sm font-bold mb-4"
              >
                {formation.type} - {formation.code}
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-2xl"
              >
                {formation.name}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg md:text-xl text-white/90 font-medium drop-shadow-lg"
              >
                {formation.description}
              </motion.p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contenu principal */}
          <div className="lg:col-span-2 space-y-8">
            {/* Présentation */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#13316C]/10 rounded-xl flex items-center justify-center">
                  <FiBook className="w-6 h-6 text-[#13316C]" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Présentation</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p className="leading-relaxed">
                  Le {formation.type} {formation.name} est une formation d'excellence qui prépare les étudiants aux métiers 
                  de demain dans un environnement en constante évolution. Avec une approche pédagogique innovante combinant 
                  théorie et pratique, cette formation s'adapte aux besoins du marché caribéen tout en respectant les standards 
                  internationaux.
                </p>
                <p className="leading-relaxed">
                  Notre programme se distingue par sa forte composante professionnalisante, avec des stages en entreprise dès 
                  la première année et la possibilité de réaliser la formation en alternance. Les étudiants bénéficient d'un 
                  accompagnement personnalisé et d'un réseau professionnel dynamique qui facilite leur insertion dans le monde 
                  du travail.
                </p>
                <p className="leading-relaxed">
                  L'IUT de la Martinique offre un cadre d'études exceptionnel avec des équipements modernes et des enseignants-chercheurs 
                  reconnus dans leur domaine. La formation s'appuie sur des partenariats solides avec les entreprises locales 
                  et régionales, garantissant une adéquation optimale entre les compétences acquises et les besoins du terrain.
                </p>
              </div>
            </motion.section>

            {/* Objectifs pédagogiques */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#13316C]/10 rounded-xl flex items-center justify-center">
                  <FiCheckCircle className="w-6 h-6 text-[#13316C]" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Objectifs pédagogiques</h2>
              </div>
              <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                  Cette formation vise à développer chez les étudiants un ensemble de compétences professionnelles et 
                  transversales essentielles pour réussir dans leur futur métier :
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  {[
                    'Maîtriser les fondamentaux théoriques et techniques du domaine',
                    'Développer une capacité d\'analyse et de résolution de problèmes complexes',
                    'Acquérir une expertise pratique à travers des projets concrets',
                    'Savoir travailler en équipe et communiquer efficacement',
                    'S\'adapter aux évolutions technologiques et méthodologiques',
                    'Développer une posture professionnelle et éthique',
                    'Maîtriser les outils numériques et collaboratifs',
                    'Comprendre les enjeux économiques et sociétaux du secteur'
                  ].map((objectif, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:bg-[#13316C]/5 transition-colors">
                      <FiCheckCircle className="w-5 h-5 text-[#13316C] flex-shrink-0 mt-1" />
                      <p className="text-gray-700 text-sm leading-relaxed">{objectif}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* Compétences visées */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#13316C]/10 rounded-xl flex items-center justify-center">
                  <FiAward className="w-6 h-6 text-[#13316C]" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Compétences visées</h2>
              </div>
              <div className="space-y-6">
                {/* Bloc compétences transversales */}
                <div className="border-l-4 border-[#13316C] pl-6 py-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Compétences transversales</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-[#13316C] rounded-full mt-2 flex-shrink-0"></span>
                      <div>
                        <p className="font-semibold text-gray-900">Communication professionnelle</p>
                        <p className="text-gray-600 text-sm mt-1">Rédiger des rapports techniques, présenter des projets, communiquer efficacement en français et en anglais avec différents interlocuteurs</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-[#13316C] rounded-full mt-2 flex-shrink-0"></span>
                      <div>
                        <p className="font-semibold text-gray-900">Gestion de projet</p>
                        <p className="text-gray-600 text-sm mt-1">Planifier, organiser et mener à bien des projets complexes en respectant les délais, le budget et les objectifs fixés</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-[#13316C] rounded-full mt-2 flex-shrink-0"></span>
                      <div>
                        <p className="font-semibold text-gray-900">Travail collaboratif</p>
                        <p className="text-gray-600 text-sm mt-1">Collaborer efficacement au sein d'équipes pluridisciplinaires et interculturelles</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-[#13316C] rounded-full mt-2 flex-shrink-0"></span>
                <div>
                        <p className="font-semibold text-gray-900">Veille technologique</p>
                        <p className="text-gray-600 text-sm mt-1">Se tenir informé des évolutions du secteur et intégrer les innovations dans sa pratique professionnelle</p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Bloc compétences techniques */}
                <div className="border-l-4 border-[#13316C] pl-6 py-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Compétences techniques et scientifiques</h3>
                  <ul className="space-y-3">
                    {formation.parcours && formation.parcours.length > 0 ? (
                      formation.parcours.map((parcour, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-[#13316C] rounded-full mt-2 flex-shrink-0"></span>
                          <div>
                            <p className="font-semibold text-gray-900">{parcour}</p>
                            <p className="text-gray-600 text-sm mt-1">Maîtrise approfondie des concepts, méthodes et outils spécifiques à ce domaine d'expertise</p>
                          </div>
                        </li>
                      ))
                    ) : (
                      <>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-[#13316C] rounded-full mt-2 flex-shrink-0"></span>
                          <div>
                            <p className="font-semibold text-gray-900">Expertise métier</p>
                            <p className="text-gray-600 text-sm mt-1">Maîtrise des concepts fondamentaux et des techniques avancées du domaine</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-[#13316C] rounded-full mt-2 flex-shrink-0"></span>
                          <div>
                            <p className="font-semibold text-gray-900">Outils professionnels</p>
                            <p className="text-gray-600 text-sm mt-1">Utilisation experte des logiciels et équipements standards du secteur</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-[#13316C] rounded-full mt-2 flex-shrink-0"></span>
                <div>
                            <p className="font-semibold text-gray-900">Méthodologie</p>
                            <p className="text-gray-600 text-sm mt-1">Application rigoureuse des méthodes et normes professionnelles</p>
                          </div>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Programme détaillé */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#13316C]/10 rounded-xl flex items-center justify-center">
                  <FiBook className="w-6 h-6 text-[#13316C]" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Programme détaillé</h2>
              </div>
              <p className="text-gray-700 mb-6">
                La formation est organisée sur {formation.duration} et se décompose en plusieurs unités d'enseignement (UE) 
                permettant une montée en compétences progressive et cohérente.
              </p>
              <div className="space-y-4">
                {formation.type === 'BUT' ? (
                  <>
                    <div className="border rounded-xl p-6 hover:border-[#13316C] transition-colors">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-lg font-bold text-gray-900">Première année - Découverte</h3>
                        <span className="bg-[#13316C] text-white px-3 py-1 rounded-full text-sm font-bold">600h</span>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">
                        Acquisition des fondamentaux théoriques et pratiques. Initiation aux méthodes de travail universitaire 
                        et découverte du monde professionnel.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-[#13316C]">•</span>
                          <span>UE1.1 - Bases fondamentales et mise à niveau (150h)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#13316C]">•</span>
                          <span>UE1.2 - Méthodologie et outils professionnels (120h)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#13316C]">•</span>
                          <span>UE1.3 - Initiation pratique et projets tutorés (180h)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#13316C]">•</span>
                          <span>UE1.4 - Communication et anglais professionnel (100h)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#13316C]">•</span>
                          <span>UE1.5 - Stage découverte entreprise (4 semaines)</span>
                        </li>
                      </ul>
                    </div>

                    <div className="border rounded-xl p-6 hover:border-[#13316C] transition-colors">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-lg font-bold text-gray-900">Deuxième année - Approfondissement</h3>
                        <span className="bg-[#13316C] text-white px-3 py-1 rounded-full text-sm font-bold">650h</span>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">
                        Développement des compétences techniques et transversales. Début de la spécialisation et travail 
                        sur projets réels en partenariat avec des entreprises.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-[#13316C]">•</span>
                          <span>UE2.1 - Concepts avancés et spécialisation (180h)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#13316C]">•</span>
                          <span>UE2.2 - Gestion de projets complexes (140h)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#13316C]">•</span>
                          <span>UE2.3 - Pratiques professionnelles avancées (200h)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#13316C]">•</span>
                          <span>UE2.4 - Management et conduite de projet (80h)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#13316C]">•</span>
                          <span>UE2.5 - Stage application en entreprise (8 semaines)</span>
                        </li>
                      </ul>
                    </div>

                    <div className="border rounded-xl p-6 hover:border-[#13316C] transition-colors">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-lg font-bold text-gray-900">Troisième année - Expertise</h3>
                        <span className="bg-[#13316C] text-white px-3 py-1 rounded-full text-sm font-bold">550h + stage</span>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">
                        Consolidation de l'expertise métier. Parcours de spécialisation au choix. Préparation intensive 
                        à l'insertion professionnelle ou à la poursuite d'études.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-[#13316C]">•</span>
                          <span>UE3.1 - Parcours de spécialisation (200h)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#13316C]">•</span>
                          <span>UE3.2 - Projet professionnel de fin d'études (150h)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#13316C]">•</span>
                          <span>UE3.3 - Séminaires professionnels et conférences (100h)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#13316C]">•</span>
                          <span>UE3.4 - Innovation et recherche appliquée (100h)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#13316C]">•</span>
                          <span>UE3.5 - Stage longue durée ou alternance (12-16 semaines)</span>
                        </li>
                      </ul>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="border rounded-xl p-6 hover:border-[#13316C] transition-colors">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-lg font-bold text-gray-900">Semestre 1 - Fondamentaux</h3>
                        <span className="bg-[#13316C] text-white px-3 py-1 rounded-full text-sm font-bold">300h</span>
                      </div>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-[#13316C]">•</span>
                          <span>UE1 - Fondamentaux métier et mise à niveau (120h)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#13316C]">•</span>
                          <span>UE2 - Outils et méthodes professionnelles (100h)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#13316C]">•</span>
                          <span>UE3 - Projet tutoré (80h)</span>
                        </li>
                      </ul>
                    </div>

                    <div className="border rounded-xl p-6 hover:border-[#13316C] transition-colors">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-lg font-bold text-gray-900">Semestre 2 - Professionnalisation</h3>
                        <span className="bg-[#13316C] text-white px-3 py-1 rounded-full text-sm font-bold">250h + stage</span>
                      </div>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-[#13316C]">•</span>
                          <span>UE4 - Approfondissement technique (120h)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#13316C]">•</span>
                          <span>UE5 - Management et gestion de projet (80h)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#13316C]">•</span>
                          <span>UE6 - Projet professionnel (50h)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#13316C]">•</span>
                          <span>UE7 - Stage en entreprise (12-16 semaines)</span>
                        </li>
                      </ul>
                    </div>
                  </>
                )}
              </div>
            </motion.section>

            {/* Méthodes pédagogiques */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-[#13316C]/5 to-blue-50 rounded-2xl shadow-lg p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md">
                  <FiUsers className="w-6 h-6 text-[#13316C]" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Méthodes pédagogiques</h2>
                </div>
              <p className="text-gray-700 mb-6">
                Notre approche pédagogique privilégie l'apprentissage actif et l'acquisition de compétences pratiques 
                directement applicables en entreprise.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: 'Cours magistraux interactifs',
                    description: 'Enseignements théoriques enrichis d\'études de cas et d\'exemples concrets'
                  },
                  {
                    title: 'Travaux dirigés en petits groupes',
                    description: 'Exercices pratiques pour ancrer les connaissances et développer l\'autonomie'
                  },
                  {
                    title: 'Travaux pratiques en laboratoire',
                    description: 'Manipulation d\'équipements professionnels et mise en situation réelle'
                  },
                  {
                    title: 'Projets tutorés',
                    description: 'Réalisation de projets complexes en équipe avec suivi personnalisé'
                  },
                  {
                    title: 'Stages en entreprise',
                    description: 'Immersion professionnelle pour acquérir une expérience terrain significative'
                  },
                  {
                    title: 'Alternance',
                    description: 'Possibilité de réaliser la formation en contrat d\'apprentissage ou de professionnalisation'
                  },
                  {
                    title: 'Conférences professionnelles',
                    description: 'Interventions régulières de professionnels du secteur'
                  },
                  {
                    title: 'Plateformes numériques',
                    description: 'Accès aux ressources pédagogiques en ligne et outils collaboratifs'
                  }
                ].map((methode, index) => (
                  <div key={index} className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-gray-900 mb-2">{methode.title}</h3>
                    <p className="text-sm text-gray-600">{methode.description}</p>
                </div>
                ))}
              </div>
            </motion.section>

            {/* Débouchés et perspectives */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#13316C]/10 rounded-xl flex items-center justify-center">
                  <FiBriefcase className="w-6 h-6 text-[#13316C]" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Débouchés et perspectives</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Insertion professionnelle */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <FiTrendingUp className="text-[#13316C]" />
                    Insertion professionnelle
                  </h3>
                  <p className="text-gray-700 text-sm mb-4">
                    Les diplômés peuvent accéder à de nombreux postes dans le secteur privé comme public, 
                    en Martinique, dans la Caraïbe ou à l'international.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 text-sm">Exemples de métiers :</h4>
                    <ul className="space-y-2 text-sm">
                      {[
                        'Cadre intermédiaire dans le secteur',
                        'Chargé de mission / Chef de projet',
                        'Responsable d\'équipe / Superviseur',
                        'Consultant junior',
                        'Technicien supérieur spécialisé',
                        'Assistant ingénieur',
                        'Coordinateur opérationnel',
                        'Analyste / Gestionnaire'
                      ].map((metier, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-700">
                          <span className="text-[#13316C] mt-1">→</span>
                          <span>{metier}</span>
                        </li>
                      ))}
                  </ul>
                  </div>
                  <div className="mt-6 p-4 bg-[#13316C]/10 rounded-xl">
                    <p className="text-sm font-semibold text-[#13316C]">
                      Taux d'insertion professionnelle : 85% à 6 mois
                    </p>
                  </div>
                </div>

                {/* Poursuite d'études */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <FiBook className="text-[#13316C]" />
                    Poursuite d'études
                  </h3>
                  <p className="text-gray-700 text-sm mb-4">
                    Les titulaires du diplôme peuvent poursuivre leurs études pour se spécialiser davantage 
                    ou accéder à des postes à plus haute responsabilité.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 text-sm">Formations accessibles :</h4>
                    <ul className="space-y-2 text-sm">
                      {formation.type === 'BUT' ? (
                        <>
                          <li className="flex items-start gap-2 text-gray-700">
                            <span className="text-[#13316C] mt-1">→</span>
                            <span>Master universitaire (Bac+5)</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-700">
                            <span className="text-[#13316C] mt-1">→</span>
                            <span>École d'ingénieurs sur concours</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-700">
                            <span className="text-[#13316C] mt-1">→</span>
                            <span>École de commerce / IAE</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-700">
                            <span className="text-[#13316C] mt-1">→</span>
                            <span>Licence professionnelle de spécialisation</span>
                          </li>
                        </>
                      ) : (
                        <>
                          <li className="flex items-start gap-2 text-gray-700">
                            <span className="text-[#13316C] mt-1">→</span>
                            <span>Master professionnel (Bac+5)</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-700">
                            <span className="text-[#13316C] mt-1">→</span>
                            <span>Master spécialisé</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-700">
                            <span className="text-[#13316C] mt-1">→</span>
                            <span>MBA / Executive MBA</span>
                          </li>
                        </>
                      )}
                      <li className="flex items-start gap-2 text-gray-700">
                        <span className="text-[#13316C] mt-1">→</span>
                        <span>Formation continue / Diplôme d'Université</span>
                      </li>
                  </ul>
                  </div>
                  <div className="mt-6 p-4 bg-[#13316C]/10 rounded-xl">
                    <p className="text-sm font-semibold text-[#13316C]">
                      40% des diplômés poursuivent en Master
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Témoignages */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Témoignages d'étudiants</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-[#13316C] pl-6 py-4 bg-gray-50 rounded-r-xl">
                  <p className="text-gray-700 italic mb-3">
                    "Cette formation m'a permis d'acquérir toutes les compétences nécessaires pour réussir mon insertion 
                    professionnelle. Les stages en entreprise et l'alternance m'ont donné une vraie expérience terrain."
                  </p>
                  <p className="text-sm font-semibold text-gray-900">
                    Marie-Claire T. - Promotion 2023
                  </p>
                  <p className="text-xs text-gray-600">Actuellement en poste chez Orange Caraïbe</p>
                </div>

                <div className="border-l-4 border-[#13316C] pl-6 py-4 bg-gray-50 rounded-r-xl">
                  <p className="text-gray-700 italic mb-3">
                    "L'accompagnement des enseignants est exceptionnel. J'ai pu réaliser mon projet professionnel grâce 
                    au réseau de l'IUT et aux opportunités offertes par la formation."
                  </p>
                  <p className="text-sm font-semibold text-gray-900">
                    Julien M. - Promotion 2022
                  </p>
                  <p className="text-xs text-gray-600">Poursuit en Master à l'Université des Antilles</p>
                </div>

                <div className="border-l-4 border-[#13316C] pl-6 py-4 bg-gray-50 rounded-r-xl">
                  <p className="text-gray-700 italic mb-3">
                    "Le cadre d'études est idéal en Martinique ! Formation de qualité, équipements modernes et une 
                    ambiance de travail conviviale. Je recommande vivement !"
                  </p>
                  <p className="text-sm font-semibold text-gray-900">
                    Sarah L. - Promotion 2023
                  </p>
                  <p className="text-xs text-gray-600">En alternance chez EDF Martinique</p>
                </div>
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Informations clés */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-[#13316C] to-[#0f2856] text-white rounded-2xl shadow-xl p-6"
            >
              <h3 className="text-2xl font-bold mb-6">Informations clés</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FiClock className="w-5 h-5 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Durée</p>
                    <p className="text-sm text-white/90">{formation.duration}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FiAward className="w-5 h-5 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Diplôme</p>
                    <p className="text-sm text-white/90">{formation.level}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FiBriefcase className="w-5 h-5 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Alternance</p>
                    <p className="text-sm text-white/90">
                      {formation.alternance ? 'Possible' : 'Non proposée'}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Admission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Admission</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Niveau requis</p>
                  <p className="text-gray-700">
                    {formation.type === 'BUT' 
                      ? 'Baccalauréat général, technologique ou professionnel'
                      : 'Bac+2 (BTS, DUT, L2) dans un domaine compatible'
                    }
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Procédure</p>
                  <p className="text-gray-700">
                    {formation.type === 'BUT'
                      ? 'Candidature via Parcoursup + examen du dossier'
                      : 'Dossier de candidature + entretien de motivation'
                    }
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Modalités</p>
                  <p className="text-gray-700">
                    Formation initiale classique ou alternance (contrat d'apprentissage/professionnalisation)
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Capacité d'accueil</p>
                  <p className="text-gray-700">
                    {formation.type === 'BUT' ? '26 places' : '20 places'}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CTA Candidater */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-[#13316C] to-[#0f2856] text-white rounded-2xl p-6 shadow-xl"
            >
              <h3 className="text-xl font-bold mb-3">Intéressé(e) ?</h3>
              <p className="text-sm mb-4 text-white/90">
                Découvrez comment candidater à cette formation et rejoindre l'IUT de la Martinique
              </p>
              <Button className="w-full bg-white text-[#13316C] hover:bg-gray-100">
                Candidater
              </Button>
            </motion.div>

            {/* Calendrier */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Dates clés</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3 pb-3 border-b border-gray-100">
                  <div className="w-14 h-14 bg-[#13316C]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-[#13316C]">JAN</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Journées Portes Ouvertes</p>
                    <p className="text-gray-600">Samedi 20 janvier 2024</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 pb-3 border-b border-gray-100">
                  <div className="w-14 h-14 bg-[#13316C]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-[#13316C]">MAR</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Ouverture candidatures</p>
                    <p className="text-gray-600">Du 17 janvier au 14 mars</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 pb-3 border-b border-gray-100">
                  <div className="w-14 h-14 bg-[#13316C]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-[#13316C]">JUIN</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Réponses Parcoursup</p>
                    <p className="text-gray-600">À partir du 30 mai</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-14 h-14 bg-[#13316C]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-[#13316C]">SEPT</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Rentrée</p>
                    <p className="text-gray-600">Début septembre 2024</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contact</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold text-gray-900">Responsable pédagogique</p>
                  <p className="text-gray-700">Dr. Jean-Marc Durand</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <a href="mailto:contact@iut-martinique.fr" className="text-[#13316C] hover:underline">
                  contact@iut-martinique.fr
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Téléphone</p>
                  <a href="tel:+596596727300" className="text-[#13316C] hover:underline">
                    05 96 72 73 00
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Adresse</p>
                <p className="text-gray-700">
                    Campus de Schoelcher<br />
                    BP 7209 - 97275 Schoelcher Cedex
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Téléchargements */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Documents</h3>
              <div className="space-y-2">
                <button className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-[#13316C]/5 rounded-lg transition-colors text-sm font-medium text-gray-700 hover:text-[#13316C]">
                  Plaquette de la formation (PDF)
                </button>
                <button className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-[#13316C]/5 rounded-lg transition-colors text-sm font-medium text-gray-700 hover:text-[#13316C]">
                  Maquette pédagogique (PDF)
                </button>
                <button className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-[#13316C]/5 rounded-lg transition-colors text-sm font-medium text-gray-700 hover:text-[#13316C]">
                  Modalités d'admission (PDF)
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FormationDetail;
