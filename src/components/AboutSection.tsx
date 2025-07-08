import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Users, Clock, Heart } from 'lucide-react';

const AboutSection = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  const stats = [
    { icon: Star, value: '4.9', label: 'Rating', color: 'text-yellow-500' },
    { icon: Users, value: '10K+', label: 'Happy Customers', color: 'text-primary' },
    { icon: Clock, value: '10+', label: 'Years Experience', color: 'text-accent-vibrant' },
    { icon: Heart, value: '99%', label: 'Satisfaction', color: 'text-red-500' }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`space-y-6 ${isRTL ? 'text-right' : 'text-left'}`}
          >
            <h2 className={`text-4xl lg:text-5xl font-bold gradient-text ${
              isRTL ? 'font-arabic' : 'font-display'
            }`}>
              {t('about.title')}
            </h2>
            
            <h3 className={`text-xl text-primary font-semibold ${
              isRTL ? 'font-arabic' : 'font-english'
            }`}>
              {t('about.subtitle')}
            </h3>
            
            <p className={`text-muted-foreground text-lg leading-relaxed ${
              isRTL ? 'font-arabic' : 'font-english'
            }`}>
              {t('about.content')}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 rounded-xl glass hover-lift"
                >
                  <stat.icon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
                  <div className={`text-2xl font-bold mb-1 ${
                    isRTL ? 'font-arabic' : 'font-english'
                  }`}>
                    {stat.value}
                  </div>
                  <div className={`text-sm text-muted-foreground ${
                    isRTL ? 'font-arabic' : 'font-english'
                  }`}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <Card className="overflow-hidden shadow-warm border-0">
              <div className="aspect-square bg-warm-gradient p-12 flex items-center justify-center">
                <motion.div
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 20, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                  className="text-white text-center"
                >
                  <div className="text-6xl font-bold mb-4 font-display">
                    Savory
                  </div>
                  <div className="text-lg opacity-90">
                    Est. 2014
                  </div>
                </motion.div>
              </div>
            </Card>
            
            {/* Floating Elements */}
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl"
            />
            <motion.div
              animate={{ 
                y: [0, 15, 0],
                rotate: [0, -3, 0]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute -bottom-6 -left-6 w-16 h-16 bg-accent-vibrant/20 rounded-full blur-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;