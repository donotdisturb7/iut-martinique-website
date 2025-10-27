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
      <div className="bg-white relative z-10 py-8 md:py-12 pl-4 sm:pl-6 lg:pl-16 xl:pl-20">
        {/* Décorations (texte vertical + ligne) - masquées si hideDecorations = true */}
        {!hideDecorations && (
          <>
            {/* Texte vertical - visible uniquement sur très grands écrans */}
            <div className="hidden lg:block absolute left-2 lg:left-4 z-50" style={{ top: '200px' }}>
              <h2
                className="text-lg lg:text-xl xl:text-2xl font-bold text-gray-400 tracking-widest"
                style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
              >
                {pageName}
              </h2>
            </div>

            {/* Ligne gauche avec segment coloré - visible uniquement sur très grands écrans */}
            <div
              className="hidden lg:block absolute left-2 lg:left-4 w-0.5 z-40"
              style={{
                top: '100px',
                bottom: '100px',
                height: 'auto'
              }}
            >
              {/* Gradient du haut (transparent vers gris) */}
              <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-gray-300" />
              
              {/* Partie grise centrale */}
              <div className="absolute top-20 left-0 right-0 bottom-20 bg-gray-300" />
              
              {/* Gradient du bas (gris vers transparent) */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-gray-300 to-transparent" />
              
              {/* Section BLEUE - positionnée au niveau du texte */}
              <div 
                className="absolute left-0 right-0" 
                style={{ 
                  backgroundColor: '#13316C',
                  top: '100px',
                  height: '120px'
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
