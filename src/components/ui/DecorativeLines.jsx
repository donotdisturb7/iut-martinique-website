/**
 * Composant DecorativeLines - Lignes décoratives latérales
 * Signature visuelle du site IUT Martinique
 */
const DecorativeLines = () => {
  return (
    <>
      {/* Ligne gauche */}
      <div className="hidden lg:block fixed left-4 xl:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent z-30" />
      
      {/* Ligne droite */}
      <div className="hidden lg:block fixed right-4 xl:right-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent z-30" />
    </>
  );
};

export default DecorativeLines;

