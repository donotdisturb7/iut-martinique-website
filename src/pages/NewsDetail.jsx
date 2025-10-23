import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiCalendar, FiUser, FiClock } from 'react-icons/fi';
import Container from '../components/ui/Container';
import newsData from '../data/news.json';

/**
 * Page NewsDetail - Détail d'une actualité
 */
const NewsDetail = () => {
  const { id } = useParams();
  const news = newsData.find(n => n.id === parseInt(id));

  if (!news) {
    return (
      <div className="pt-28 pb-12">
        <Container>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Actualité non trouvée</h1>
            <Link to="/" className="text-primary-500 hover:text-primary-600">
              Retour à l'accueil
            </Link>
          </div>
        </Container>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="pt-28 pb-12">
      <Container>
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6"
        >
          <Link 
            to="/" 
            className="inline-flex items-center text-gray-600 hover:text-primary-500 transition-colors"
          >
            <FiArrowLeft className="mr-2" />
            Retour aux actualités
          </Link>
        </motion.div>

        {/* Article */}
        <article className="max-w-4xl mx-auto">
          {/* En-tête */}
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {news.title}
            </h1>

            {/* Meta informations */}
            <div className="flex flex-wrap items-center gap-4 text-gray-600 text-sm mb-6">
              <div className="flex items-center">
                <FiCalendar className="mr-2" />
                <time dateTime={news.date}>{formatDate(news.date)}</time>
              </div>
              <div className="flex items-center">
                <FiUser className="mr-2" />
                <span>IUT de la Martinique</span>
              </div>
              <div className="flex items-center">
                <FiClock className="mr-2" />
                <span>5 min de lecture</span>
              </div>
            </div>

            {/* Catégorie et tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                {news.category}
              </span>
              {news.tags && news.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Excerpt */}
            <p className="text-xl text-gray-700 leading-relaxed italic border-l-4 border-primary-500 pl-4">
              {news.excerpt}
            </p>
          </motion.header>

          {/* Image principale */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Contenu de l'article */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="prose prose-lg max-w-none"
          >
            <div className="text-gray-800 leading-relaxed space-y-6">
              <p>
                L'Institut Universitaire de Technologie de la Martinique poursuit son développement 
                et son engagement envers l'excellence académique. Cette actualité marque une étape 
                importante dans notre mission de formation et d'accompagnement des étudiants.
              </p>

              <p>
                Nos équipes pédagogiques et administratives travaillent quotidiennement pour offrir 
                les meilleures conditions d'apprentissage à nos étudiants. Cette initiative s'inscrit 
                dans une démarche globale de modernisation et d'amélioration continue de nos services.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                Un engagement fort
              </h2>

              <p>
                L'IUT de la Martinique, composante de l'Université des Antilles, affirme son rôle 
                majeur dans le paysage de l'enseignement supérieur caribéen. Nous continuons à 
                développer des partenariats stratégiques avec le monde professionnel pour garantir 
                l'insertion de nos diplômés.
              </p>

              <blockquote className="border-l-4 border-primary-500 pl-6 py-4 my-8 italic text-xl text-gray-700">
                "Notre mission est de former des professionnels compétents et adaptés aux besoins 
                du territoire martiniquais et de la Caraïbe."
              </blockquote>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                Perspectives d'avenir
              </h2>

              <p>
                Cette actualité ouvre de nouvelles perspectives pour notre établissement et nos 
                étudiants. Nous restons engagés dans notre démarche d'innovation pédagogique et 
                de proximité avec le tissu économique local.
              </p>

              <p>
                Pour plus d'informations, n'hésitez pas à contacter nos services ou à consulter 
                notre site web régulièrement mis à jour.
              </p>
            </div>
          </motion.div>

          {/* Partage */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 pt-8 border-t border-gray-200"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">
                Partager cette actualité
              </h3>
              <div className="flex gap-3">
                <button className="p-2 rounded-full bg-gray-100 hover:bg-primary-100 text-gray-600 hover:text-primary-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </button>
                <button className="p-2 rounded-full bg-gray-100 hover:bg-primary-100 text-gray-600 hover:text-primary-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                </button>
                <button className="p-2 rounded-full bg-gray-100 hover:bg-primary-100 text-gray-600 hover:text-primary-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        </article>
      </Container>
    </div>
  );
};

export default NewsDetail;

