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
      {/* Ligne + Texte gauche - visible uniquement sur très grands écrans */}
      {leftText && (
        <div className="hidden 2xl:block fixed left-8 top-1/2 -translate-y-1/2 z-40">
          <h2 
            className={`text-xl font-bold ${textColor} tracking-widest mb-4`} 
            style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
          >
            {leftText}
          </h2>
        </div>
      )}
      <div className="hidden 2xl:block absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent" />
      
      {/* Ligne + Texte droite - visible uniquement sur très grands écrans */}
      <div className="hidden 2xl:block absolute right-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent" />
      {rightText && (
        <div className="hidden 2xl:block fixed right-8 top-1/2 -translate-y-1/2 z-40">
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

