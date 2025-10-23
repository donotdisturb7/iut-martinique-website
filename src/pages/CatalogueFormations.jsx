import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiSearch, FiDownload, FiPlus, FiX } from 'react-icons/fi';
import formationsData from '../data/formations.json';
import PageLayout from '../components/ui/PageLayout';

/**
 * Page Catalogue Formations - Liste avec filtres latéraux
 */
const CatalogueFormations = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedDomaine, setSelectedDomaine] = useState('');

  // Domaines disponibles
  const domaines = {
    'Sciences, Technologies, Santé': ['but-info', 'but-mlt', 'but-hse'],
    'Droit, Économie, Gestion': ['but-gea', 'but-tc', 'lp-mgo', 'lp-lpf']
  };

  // Compter les formations par type
  const countByType = {
    'BUT': formationsData.filter(f => f.type === 'BUT').length,
    'LP': formationsData.filter(f => f.type === 'LP').length
  };

  // Compter les formations par domaine
  const countByDomaine = {
    'Sciences, Technologies, Santé': formationsData.filter(f => 
      domaines['Sciences, Technologies, Santé'].includes(f.id)
    ).length,
    'Droit, Économie, Gestion': formationsData.filter(f => 
      domaines['Droit, Économie, Gestion'].includes(f.id)
    ).length
  };

  // Filtrage des formations
  const filteredFormations = formationsData.filter(formation => {
    const matchesSearch = formation.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         formation.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         formation.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = !selectedType || formation.type === selectedType;
    
    let matchesDomaine = true;
    if (selectedDomaine) {
      matchesDomaine = domaines[selectedDomaine]?.includes(formation.id) || false;
    }
    
    return matchesSearch && matchesType && matchesDomaine;
  });

  // Grouper par domaine
  const formationsByDomaine = filteredFormations.reduce((acc, formation) => {
    let domaine = 'Autre';
    for (const [key, ids] of Object.entries(domaines)) {
      if (ids.includes(formation.id)) {
        domaine = key;
        break;
      }
    }
    if (!acc[domaine]) acc[domaine] = [];
    acc[domaine].push(formation);
    return acc;
  }, {});

  const clearFilters = () => {
    setSelectedType('');
    setSelectedDomaine('');
    setSearchTerm('');
  };

  return (
    <PageLayout 
      pageName="CATALOGUE"
      pageTitle="Choisir sa formation"
      pageSubtitle="Explorez notre offre de formation"
      heroImage="/image-remise-diplome.jpg"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar filtres */}
          <aside className="lg:w-80 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-32">
              {/* Recherche */}
              <div className="mb-6">
                <label className="block text-sm font-bold text-gray-900 mb-3">
                  Rechercher
                </label>
                <div className="relative">
                  <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Mots-clés..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:border-[#009dd7] focus:ring-2 focus:ring-[#009dd7]/20 transition-all outline-none text-sm"
                  />
                </div>
              </div>

              {/* Filtre Diplôme */}
              <div className="mb-6">
                <h3 className="text-sm font-bold text-gray-900 mb-3">Diplôme</h3>
                <div className="space-y-2">
                  {Object.entries(countByType).map(([type, count]) => (
                    <button
                      key={type}
                      onClick={() => setSelectedType(selectedType === type ? '' : type)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors text-sm ${
                        selectedType === type
                          ? 'bg-[#009dd7] text-white'
                          : 'hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{type === 'BUT' ? 'BUT' : 'Licence professionnelle'}</span>
                        <span className={`text-xs font-bold ${
                          selectedType === type ? 'text-white' : 'text-gray-500'
                        }`}>
                          ({count})
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Filtre Domaine */}
              <div className="mb-6">
                <h3 className="text-sm font-bold text-gray-900 mb-3">Domaine</h3>
                <div className="space-y-2">
                  {Object.entries(countByDomaine).map(([domaine, count]) => (
                    <button
                      key={domaine}
                      onClick={() => setSelectedDomaine(selectedDomaine === domaine ? '' : domaine)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors text-sm ${
                        selectedDomaine === domaine
                          ? 'bg-[#009dd7] text-white'
                          : 'hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="leading-tight">{domaine}</span>
                        <span className={`text-xs font-bold flex-shrink-0 ml-2 ${
                          selectedDomaine === domaine ? 'text-white' : 'text-gray-500'
                        }`}>
                          ({count})
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Bouton réinitialiser */}
              {(selectedType || selectedDomaine || searchTerm) && (
                <button
                  onClick={clearFilters}
                  className="w-full px-4 py-2 text-sm text-gray-700 hover:text-[#009dd7] border border-gray-300 hover:border-[#009dd7] rounded-lg transition-colors font-medium"
                >
                  Réinitialiser les filtres
                </button>
              )}
            </div>
          </aside>

          {/* Contenu principal */}
          <div className="flex-1">
            {/* Critères actifs et nombre de résultats */}
            <div className="mb-6">
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-bold text-gray-900">
                    {filteredFormations.length} formation{filteredFormations.length > 1 ? 's' : ''}
                  </h2>
                </div>
                
                {/* Critères actifs */}
                {(selectedType || selectedDomaine) && (
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200">
                    <span className="text-sm text-gray-600 font-medium">Vos critères :</span>
                    {selectedType && (
                      <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#009dd7] text-white text-sm rounded-full">
                        {selectedType}
                        <button onClick={() => setSelectedType('')} className="hover:bg-white/20 rounded-full p-0.5">
                          <FiX className="w-3 h-3" />
                        </button>
                      </span>
                    )}
                    {selectedDomaine && (
                      <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#009dd7] text-white text-sm rounded-full">
                        {selectedDomaine}
                        <button onClick={() => setSelectedDomaine('')} className="hover:bg-white/20 rounded-full p-0.5">
                          <FiX className="w-3 h-3" />
                        </button>
                      </span>
                    )}
                  </div>
                )}

                {/* Résumé par domaine */}
                {Object.keys(formationsByDomaine).length > 0 && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    {Object.entries(formationsByDomaine).map(([domaine, formations]) => (
                      <div key={domaine} className="text-sm text-gray-600 mb-1">
                        <span className="font-medium">{domaine}</span> ({formations.length})
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Grille des formations */}
            {filteredFormations.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredFormations.map((formation, index) => (
                  <motion.div
                    key={formation.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
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
                        <div className="absolute top-4 right-4 flex flex-col gap-2 items-end">
                          <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                            {formation.type}
                          </span>
                          {formation.alternance && (
                            <span className="bg-[#009dd7] text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                              Alternance
                            </span>
                          )}
                        </div>

                        {/* Nom de la formation en bas */}
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h3 className="text-white text-xl font-bold leading-tight mb-2 drop-shadow-lg group-hover:text-[#009dd7] transition-colors">
                            {formation.name}
                          </h3>
                          <p className="text-white/90 text-sm font-medium drop-shadow-md mb-2">
                            {formation.code}
                          </p>
                          <p className="text-white/80 text-xs line-clamp-2 drop-shadow-md">
                            {formation.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-md p-12 text-center">
                <div className="text-gray-400 mb-4">
                  <FiSearch className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Aucune formation trouvée
                </h3>
                <p className="text-gray-600 mb-6">
                  Essayez de modifier vos critères de recherche
                </p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-3 bg-[#009dd7] text-white rounded-lg font-semibold hover:bg-[#0087ba] transition-colors"
                >
                  Réinitialiser les filtres
                </button>
              </div>
            )}

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-md p-8 border border-gray-200"
            >
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Besoin d'aide pour choisir ?
                </h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Nos conseillers en orientation sont là pour vous accompagner dans votre choix
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#009dd7] text-white rounded-lg font-semibold hover:bg-[#0087ba] transition-colors shadow-lg hover:shadow-xl"
                >
                  Nous contacter
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default CatalogueFormations;
