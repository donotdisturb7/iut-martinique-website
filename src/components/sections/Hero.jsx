import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

// Import Swiper styles
import 'swiper/css';

/**
 * Composant Hero - Section principale avec carrousel
 */
const Hero = () => {
  const { t } = useTranslation();

  const slides = [
    {
      image: '/img-iut.jpg',
      alt: 'Campus IUT Martinique'
    },
    {
      image: '/image-remise-diplome.jpg',
      alt: 'Remise des diplômes'
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
                <div className="text-left text-white px-8 md:px-16 lg:px-24 max-w-4xl">
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                  >
                    {t('hero.title')}
                  </motion.h1>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl md:text-2xl"
                  >
                    {t('hero.subtitle')}
                  </motion.p>
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

