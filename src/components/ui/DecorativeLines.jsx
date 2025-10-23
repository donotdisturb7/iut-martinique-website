/**
 * Composant DecorativeLines - Lignes décoratives latérales
 * Signature visuelle du site IUT Martinique
 */
const DecorativeLines = () => {
  return (
    <>
      {/* Ligne gauche - visible uniquement sur très grands écrans */}
      <div className="hidden 2xl:block fixed left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent z-30" />
      
      {/* Ligne droite - visible uniquement sur très grands écrans */}
      <div className="hidden 2xl:block fixed right-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent z-30" />
    </>
  );
};

export default DecorativeLines;

