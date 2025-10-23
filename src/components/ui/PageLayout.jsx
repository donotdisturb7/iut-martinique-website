import PageHero from './PageHero';

/**
 * Composant PageLayout - Layout avec hero et contenu
 * À utiliser pour toutes les pages sauf Home
 */
const PageLayout = ({ children, pageName, pageTitle, pageSubtitle, heroImage, hideDecorations = false }) => {
  return (
    <>
      {/* Hero de la page */}
      <PageHero 
        title={pageTitle || pageName}
        subtitle={pageSubtitle}
        image={heroImage}
      />

      {/* Contenu de la page avec fond blanc */}
      <div className="bg-white relative z-10 py-12">
        {/* Décorations (texte vertical + ligne) - masquées si hideDecorations = true */}
        {!hideDecorations && (
          <>
            {/* Texte vertical - positionné à 70% de la hauteur */}
            <div className="hidden xl:block fixed left-4 xl:left-8 z-40" style={{ top: '70vh' }}>
              <h2 
                className="text-2xl font-bold text-gray-300 tracking-widest" 
                style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
              >
                {pageName}
              </h2>
            </div>

            {/* Ligne gauche avec segment coloré - commence après le hero */}
            <div className="hidden lg:block fixed left-4 xl:left-8 w-0.5 z-30" style={{ top: '60vh', bottom: '250px' }}>
              {/* Gradient du haut (transparent vers gris) */}
              <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-gray-300" />
              
              {/* Partie grise centrale */}
              <div className="absolute top-24 left-0 right-0 bottom-24 bg-gray-300" />
              
              {/* Gradient du bas (gris vers transparent) */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-gray-300 to-transparent" />
              
              {/* Section BLEUE - positionnée exactement au niveau du texte à 70vh */}
              <div 
                className="absolute left-0 right-0" 
                style={{ 
                  backgroundColor: '#009dd7',
                  top: 'calc(10vh - 100px)',
                  height: '200px'
                }}
              />
            </div>
          </>
        )}

        {children}
      </div>
    </>
  );
};

export default PageLayout;
