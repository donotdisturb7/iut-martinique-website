/**
 * Composant SectionWithLines - Section avec lignes décoratives et texte vertical
 * Utiliser pour les sections avec contenu (pas les images full-width)
 */
const SectionWithLines = ({ 
  children, 
  className = '', 
  bgColor = 'bg-white',
  leftText = '', 
  rightText = '',
  textColor = 'text-gray-300'
}) => {
  return (
    <section className={`relative ${bgColor} ${className}`}>
      {/* Ligne + Texte gauche */}
      {leftText && (
        <div className="hidden xl:block fixed left-4 xl:left-8 top-1/2 -translate-y-1/2 z-40">
          <h2 
            className={`text-xl font-bold ${textColor} tracking-widest mb-4`} 
            style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
          >
            {leftText}
          </h2>
        </div>
      )}
      <div className="hidden lg:block absolute left-4 xl:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent" />
      
      {/* Ligne + Texte droite */}
      <div className="hidden lg:block absolute right-4 xl:right-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent" />
      {rightText && (
        <div className="hidden xl:block fixed right-4 xl:right-8 top-1/2 -translate-y-1/2 z-40">
          <h2 
            className={`text-xl font-bold ${textColor} tracking-widest mb-4`} 
            style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
          >
            {rightText}
          </h2>
        </div>
      )}
      
      {/* Contenu de la section */}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
};

export default SectionWithLines;

