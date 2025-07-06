import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-dish.jpg';

const Hero = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  const handleOrder = () => {
    window.open('https://wa.me/1234567890?text=I would like to place an order', '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with Gradient */}
      <div className="absolute inset-0 hero-gradient opacity-96" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-accent-vibrant/10 rounded-full blur-3xl"
        />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ 
                      scale: [1, 1.05, 1],
                      opacity: 1, y: 0 
                    }}
            transition={{ duration: 0.8 }}
            className={`space-y-6 ${isRTL ? 'text-right' : 'text-left'}`}
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className={`text-5xl lg:text-7xl font-bold text-white mb-4 ${
                isRTL ? 'font-arabic' : 'font-display'
              }`}
            >
              {t('hero.title')}
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className={`text-xl lg:text-2xl text-white/90 font-medium ${
                isRTL ? 'font-arabic' : 'font-english'
              }`}
            >
              {t('hero.subtitle')}
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className={`text-white/80 text-lg leading-relaxed max-w-xl ${
                isRTL ? 'font-arabic' : 'font-english'
              }`}
            >
              {t('hero.description')}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className={`flex gap-4 pt-4 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}
            >
              <Button 
                size="lg"
                className="magnetic-btn hover-lift bg-white text-primary hover:bg-white/90"
              >
                {t('hero.cta')}
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="magnetic-btn hover-lift border-white text-primary
                          hover:bg-white hover:text-primary"
                onClick={handleOrder}
              >
                {t('hero.reserveBtn')}
              </Button>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="relative"
          >
            <div className="relative group">
              <motion.img
                src={heroImage}
                alt="Gourmet food"
                className="w-full h-auto rounded-3xl shadow-warm hover-lift floating"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent-vibrant/20 rounded-full blur-xl animate-pulse delay-1000" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;