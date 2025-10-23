import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Hero from '../components/sections/Hero';

const Home = () => {
  // Données actualités
  const actualites = [
    {
      id: 1,
      title: "Signature d'un nouveau partenariat avec Orange Caraïbe",
      category: "Partenariats",
      subcategory: "Entreprises",
      image: 'https://s3.us-east-2.amazonaws.com/harrowco.fr/IUT-Martinique/image-IUT3.jpg'
    },
    {
      id: 2,
      title: "La saison culturelle est lancée",
      category: "Culture",
      subcategory: "Vie étudiante",
      image: '/image-remise-diplome.jpg'
    },
    {
      id: 3,
      title: "Innovation et recherche : nouveaux projets en développement durable",
      category: "Recherche",
      subcategory: "DD&RS",
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.ifpbordeaux.com%2Fpublic%2Fimg%2Fbig%2FDeveloppementdurablejpeg_6077f9bb60b4e.jpeg&f=1&nofb=1&ipt=cda8d3e4402f416418496bcb2186bd86eb617b9b32f32e28a9dbb35f660e738e'
    }
  ];

  // Données agenda
  const evenements = [
    {
      dateDebut: '15',
      mois: 'NOV',
      dateFin: '15',
      title: 'Journées Portes Ouvertes 2024',
      category: 'Formation',
      subcategory: 'Orientation'
    },
    {
      dateDebut: '18',
      mois: 'NOV',
      dateFin: '20',
      title: 'Salon de l\'étudiant Martinique',
      category: 'Formation',
      subcategory: 'Orientation'
    },
    {
      dateDebut: '25',
      mois: 'NOV',
      dateFin: '25',
      title: 'Conférence sur les transitions écologiques',
      category: 'Dév. durable',
      subcategory: 'Recherche'
    }
  ];

  // Statistiques
  const stats = [
    { number: '1 200', label: 'étudiants' },
    { number: '350', label: 'étudiants formés au DD&RS' },
    { number: '7', label: 'formations' },
    { number: '12%', label: 'étudiants en alternance' }
  ];

  return (
    <div>
      <Hero />

      {/* Focus actualités */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h2 className="text-[12rem] font-black text-gray-900 opacity-10 select-none">
            ACTUALITÉS
          </h2>
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-between mb-12">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-gray-900"
            >
              Focus actualités
            </motion.h2>
            <Link
              to="/contact"
              className="text-[#009dd7] hover:text-[#0087ba] font-semibold transition-colors"
            >
              Toutes les actualités →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {actualites.map((actu, index) => (
              <motion.div
                key={actu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={`/news/${actu.id}`} className="group block">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4 shadow-lg">
                    <img
                      src={actu.image}
                      alt={actu.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-[#009dd7] font-semibold">{actu.category}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-600">{actu.subcategory}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#009dd7] transition-colors">
                      {actu.title}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Agenda */}
      <section className="relative py-20 bg-gradient-to-br from-[#009dd7]/5 to-blue-50 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h2 className="text-[12rem] font-black text-[#009dd7] opacity-[0.15] select-none">
            AGENDA
          </h2>
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-between mb-12">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-gray-900"
            >
              Agenda
            </motion.h2>
            <Link
              to="/contact"
              className="text-[#009dd7] hover:text-[#0087ba] font-semibold transition-colors"
            >
              Tous les événements →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {evenements.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0 text-center">
                    <div className="text-3xl font-bold text-[#009dd7]">{event.dateDebut}</div>
                    <div className="text-sm text-gray-600 uppercase">{event.mois}</div>
                    {event.dateFin !== event.dateDebut && (
                      <>
                        <div className="text-gray-400 my-1">↓</div>
                        <div className="text-2xl font-bold text-[#009dd7]">{event.dateFin}</div>
                      </>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {event.title}
                    </h3>
                    <div className="flex flex-col gap-1 text-sm">
                      <span className="text-[#009dd7] font-semibold">{event.category}</span>
                      <span className="text-gray-600">{event.subcategory}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     
      {/* Les formations - Layout 2 colonnes */}
      <section className="relative py-20 bg-gradient-to-br from-white to-gray-50 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h2 className="text-[10rem] font-black text-gray-900 opacity-10 select-none">
            FORMATIONS
          </h2>
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Les formations
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                L'IUT de la Martinique souhaite rendre accessible à tous l'enseignement supérieur, à travers 
                7 formations de qualité. Notre objectif : l'innovation pédagogique, la réussite étudiante et 
                l'insertion professionnelle.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Nous sensibilisons également l'ensemble de nos étudiants à un comportement écoresponsable 
                en promouvant le développement durable au sein des activités d'enseignement.
              </p>
              <Link
                to="/catalogue-formations"
                className="inline-block px-8 py-4 bg-[#009dd7] hover:bg-[#0087ba] text-white font-semibold rounded-xl transition-colors shadow-lg hover:shadow-xl"
              >
                Trouver ma formation
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/informatique-student.jpg" 
                  alt="Étudiants en informatique" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* La recherche - Fond avec image */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/image-remise-diplome.jpg" 
            alt="Recherche" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 backdrop-blur-md bg-[#009dd7]/85"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h2 className="text-[10rem] font-black text-white opacity-[0.12] select-none">
            RECHERCHE
          </h2>
        </div>
        <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              La recherche
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-white/95">
              En lien avec sa mission de transmission du savoir, l'IUT de la Martinique est créateur de 
              connaissances à travers ses activités de recherche. Grâce aux enseignants-chercheurs, nous 
              garantissons un enseignement de haute qualité aux étudiants.
            </p>
            <p className="text-lg leading-relaxed mb-8 text-white/95">
              Quelles que soient les disciplines concernées, l'établissement s'engage à encourager les projets 
              dédiés au développement durable. La valorisation de ces projets et leur lien avec les attentes 
              sociétales des territoires caribéens sont une de nos priorités.
            </p>
            <Link
              to="/recherche"
              className="inline-block px-8 py-4 bg-white text-[#009dd7] hover:bg-gray-100 font-semibold rounded-xl transition-colors shadow-xl"
            >
              En savoir plus
            </Link>
          </motion.div>
        </div>
      </section>

      {/* International - 2 colonnes inversées */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h2 className="text-[9rem] font-black text-gray-900 opacity-10 select-none">
            INTERNATIONAL
          </h2>
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/erasmus.jpg" 
                  alt="Programme Erasmus International" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                International
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Partenariats et coopérations, mobilité des étudiants et des personnels, accueil de chercheurs 
                et étudiants internationaux : l'IUT de la Martinique est résolument tourné vers l'international, 
                particulièrement dans la zone Caraïbe et avec l'Amérique du Nord et l'Europe avec le programme Erasmus+ (UE).
              </p>
              <Link
                to="/contact"
                className="inline-block px-8 py-4 bg-[#009dd7] hover:bg-[#0087ba] text-white font-semibold rounded-xl transition-colors shadow-lg hover:shadow-xl"
              >
                En savoir plus
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vie des campus - Grille avec images */}
      <section className="relative py-20 bg-gradient-to-br from-[#009dd7]/5 to-blue-50 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h2 className="text-[8rem] font-black text-[#009dd7] opacity-[0.15] select-none">
            VIE CAMPUS
          </h2>
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Vie au sein de l'IUT
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              L'IUT est un lieu de vie et de partage, accessible à chacun. Le quotidien est rythmé par la vie 
              culturelle, sportive et associative. L'IUT veille à ce que le campus soit écoresponsable.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: 'IUT', image: '/img-iut.jpg', link: '/contact' },
              { title: 'Culture', image: '/image-remise-diplome.jpg', link: '/vie-etudiante' },
              { title: 'Vie étudiante', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwelcomedesk.univ-toulouse.fr%2Fsites%2Fdefault%2Ffiles%2Fmedia%2F2022-01%2Fschema-vie-etudiante-campus.jpg&f=1&nofb=1&ipt=3a556d491b4483114c2d5edd23df819a846348f71be3623a9a33b6820715f185', link: '/vie-etudiante' },
              { title: 'Sport', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthvnext.bing.com%2Fth%2Fid%2FOIP.grO-sw81cTjH2cN-BtP1NAHaE7%3Fcb%3Ducfimg2%26pid%3DApi%26ucfimg%3D1&f=1&ipt=c1ba93b990fd7b2a76f261a24feb1902ea79077d06bc629af25d52b452bee517&ipo=images', link: '/vie-etudiante' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={item.link} className="group block">
                  <div className="aspect-square rounded-xl overflow-hidden shadow-lg relative">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white text-xl font-bold group-hover:text-[#009dd7] transition-colors">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* L'IUT - Grande section finale */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/img-iut.jpg" 
            alt="Campus IUT" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 backdrop-blur-md bg-[#009dd7]/85"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h2 className="text-[12rem] font-black text-white opacity-[0.12] select-none">
            L'IUT
          </h2>
        </div>
        <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              L'IUT de la Martinique
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-white/95">
              Le campus de Schoelcher accueille chaque année plus de 1 200 étudiants. Avec 7 formations, 
              l'IUT permet à chaque étudiant de développer et d'élargir ses compétences dans un environnement 
              exceptionnel au cœur de la Caraïbe.
            </p>
            <p className="text-lg leading-relaxed mb-8 text-white/95">
              Établissement pluridisciplinaire, l'IUT est un véritable acteur de développement de l'attractivité 
              territoriale. Grâce aux formations et activités de recherche adaptées aux besoins de la région, 
              il favorise l'insertion professionnelle des diplômés sur un territoire économique dynamique.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-white text-[#009dd7] hover:bg-gray-100 font-semibold rounded-xl transition-colors shadow-xl"
            >
              En savoir plus
            </Link>
          </motion.div>
        </div>
      </section>

            {/* Chiffres clés */}
            <section className="relative py-20 bg-gradient-to-br from-white to-gray-50 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h2 className="text-[10rem] font-black text-gray-900 opacity-10 select-none">
            CHIFFRES
          </h2>
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center"
          >
            Quelques chiffres-clés
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-shadow"
              >
                <div className="text-5xl font-bold text-[#009dd7] mb-3">{stat.number}</div>
                <div className="text-sm text-gray-600 font-medium leading-tight">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
