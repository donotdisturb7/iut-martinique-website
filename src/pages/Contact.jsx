import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import Container from '../components/ui/Container';
import Input from '../components/ui/Input';
import Textarea from '../components/ui/Textarea';
import Button from '../components/ui/Button';
import PageLayout from '../components/ui/PageLayout';

/**
 * Page Contact - Formulaire de contact et coordonnées
 */
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Effacer l'erreur du champ modifié
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "L'email n'est pas valide";
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Le sujet est requis';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Le message doit contenir au moins 10 caractères';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Simulation d'envoi (pas de backend)
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Réinitialiser après 5 secondes
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  return (
    <PageLayout pageName="CONTACT"
    pageTitle="Contact"
    pageSubtitle="Nous sommes à votre écoute"
    heroImage="/img-iut.jpg">
      {/* Hero section */}


      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
          {/* Formulaire */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Envoyez-nous un message
            </h2>

            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 rounded-lg">
                Votre message a été envoyé avec succès !
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <Input
                label="Nom complet *"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                placeholder="Votre nom"
              />

              <Input
                label="Email *"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                placeholder="votre@email.com"
              />

              <Input
                label="Sujet *"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                error={errors.subject}
                placeholder="Objet de votre message"
              />

              <Textarea
                label="Message *"
                name="message"
                value={formData.message}
                onChange={handleChange}
                error={errors.message}
                placeholder="Votre message..."
                rows="6"
              />

              <Button type="submit" size="lg" className="w-full">
                Envoyer le message
              </Button>
            </form>
          </motion.div>

          {/* Coordonnées */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Nos coordonnées
            </h2>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-lg mr-4">
                  <FiMapPin className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Adresse</h3>
                  <p className="text-gray-600">
                    Campus de Schoelcher<br />
                    BP 7209<br />
                    97275 Schoelcher Cedex<br />
                    Martinique
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-lg mr-4">
                  <FiPhone className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Téléphone</h3>
                  <p className="text-gray-600">05 96 72 73 00</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-lg mr-4">
                  <FiMail className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">contact@iut-martinique.fr</p>
                </div>
              </div>
            </div>

            {/* Carte Google Maps */}
            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              <p className="text-gray-500">Carte interactive Google Maps</p>
            </div>

            {/* Horaires */}
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Horaires d'ouverture</h3>
              <p className="text-gray-600 text-sm">
                Lundi - Vendredi : 8h00 - 17h00<br />
                Samedi - Dimanche : Fermé
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </PageLayout>
  );
};

export default Contact;

