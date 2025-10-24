import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

// Import Swiper styles
import 'swiper/css';

/**
 * Composant Hero - Section principale avec carrousel
 */
const Hero = () => {
  const { t } = useTranslation();

  const slides = [
    {
      image: '/background-hero1.jpg',
      alt: 'Étudiants diversifiés sur le campus universitaire',
      title: 'Bienvenue à l\'Institut Universitaire de Technologie de la Martinique',
      subtitle: 'Découvrez nos formations professionnalisantes dans un cadre d\'exception'
    },
    {
      image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Groupe d\'étudiants de différentes origines travaillant ensemble',
      title: 'L\'innovation au service de votre avenir',
      subtitle: 'Technologies de pointe et pédagogie moderne pour votre réussite'
    },
    {
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
      alt: 'Campus universitaire moderne avec étudiants',
      title: 'Votre avenir professionnel',
      subtitle: 'Une vie étudiante riche et une insertion professionnelle garantie'
    }
  ];

  return (
    <section className="relative h-screen">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full">
              {/* Image */}
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
                onError={(e) => {
                  console.error(`Failed to load image: ${slide.image}`);
                  e.target.style.backgroundColor = '#1a1a1a';
                }}
              />
              
              {/* Overlay sombre */}
              <div className="absolute inset-0 bg-black/40" />
              
              {/* Contenu */}
              <div className="absolute inset-0 flex items-center">
                <div className="text-left text-white px-8 md:px-16 lg:px-24 max-w-5xl">
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl laptop:text-6xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl font-bold mb-6 lg:mb-8"
                  >
                    {slide.title}
                  </motion.h1>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg sm:text-xl md:text-2xl lg:text-2xl laptop:text-3xl xl:text-3xl 2xl:text-4xl mb-8 lg:mb-10"
                  >
                    {slide.subtitle}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-5"
                  >
                    <Link to="/formations">
                      <Button size="lg" className="w-full sm:w-auto bg-[#13316C] hover:bg-[#0f2856] text-white font-semibold text-sm md:text-base lg:text-base laptop:text-lg px-6 py-3 md:px-8 md:py-4 lg:px-8 lg:py-4 laptop:px-10 laptop:py-4 rounded-lg shadow-lg transition-all">
                        Découvrir nos formations
                      </Button>
                    </Link>
                    <a href="https://candidature.univ-antilles.fr" target="_blank" rel="noopener noreferrer">
                      <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-[#13316C] font-semibold text-sm md:text-base lg:text-base laptop:text-lg px-6 py-3 md:px-8 md:py-4 lg:px-8 lg:py-4 laptop:px-10 laptop:py-4 rounded-lg transition-all">
                        Candidater maintenant
                      </Button>
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;

