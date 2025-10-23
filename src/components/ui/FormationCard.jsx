import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import Card from './Card';
import Badge from './Badge';

/**
 * Composant FormationCard - Card pour afficher une formation
 */
const FormationCard = ({ formation }) => {
  const { id, type, code, name, description, image } = formation;

  return (
    <Link to={`/formations/${id}`}>
      <Card className="h-full group">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            loading="lazy"
          />
          <div className="absolute top-4 left-4">
            <Badge color={type === 'BUT' ? 'primary' : 'secondary'}>
              {type}
            </Badge>
          </div>
        </div>

        {/* Contenu */}
        <div className="p-6">
          <div className="text-sm font-semibold text-primary-600 mb-2">
            {code}
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
            {name}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-3">
            {description}
          </p>
          <div className="flex items-center text-primary-600 font-medium group-hover:gap-2 transition-all">
            <span>En savoir plus</span>
            <FiArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default FormationCard;

