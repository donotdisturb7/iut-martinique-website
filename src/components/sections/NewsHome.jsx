import { BlogSection } from '../ui/blog-section';
import SectionWithLines from '../ui/SectionWithLines';

/**
 * Composant NewsHome - Section actualités pour la page d'accueil
 */
const NewsHome = () => {
  return (
    <SectionWithLines 
      bgColor="bg-gray-50" 
      className="py-16 overflow-hidden"
    >
      {/* Effets décoratifs sur les côtés */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-lagoon-200/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <BlogSection />
    </SectionWithLines>
  );
};

export default NewsHome;

