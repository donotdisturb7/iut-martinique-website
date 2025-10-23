/**
 * Composant Textarea pour les formulaires
 * @param {string} label - Label du champ
 * @param {string} error - Message d'erreur
 * @param {string} className - Classes CSS additionnelles
 */
const Textarea = ({ label, error, className = '', ...props }) => {
  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <textarea
        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all resize-vertical ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
        rows="4"
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export default Textarea;

