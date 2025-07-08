import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import appetizersImage from '@/assets/appetizers.jpg';
import mainCourseImage from '@/assets/main-course.jpg';
import dessertImage from '@/assets/dessert.jpg';
import seafoodImage from '@/assets/download (1).png';
import { url } from 'inspector';
// Using placeholder images for new categories
const beveragesImage = 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop';
const saladsImage = 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop';
// Placeholder for seafood image

const MenuSection = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  const handleOrder = () => {
    window.open('https://wa.me/1234567890?text=I would like to place an order', '_blank');
  };

  const handleFullMenu = () => {
    window.open('https://example.com/menu.pdf', '_blank');
  };

  const menuCategories = [
    {
      key: 'mains',
      image: mainCourseImage,
      price: '$24-36',
      description: 'Expertly crafted main courses that define excellence'
    },
    {
      key: 'appetizers',
      image: appetizersImage,
      price: '$12-18',
      description: 'Fresh and flavorful starters to awaken your palate'
    },
    {
      key: 'desserts',
      image: dessertImage,
      price: '$8-14',
      description: 'Indulgent sweet treats to complete your experience'
    },
    {
      key: 'beverages',
      image: beveragesImage,
      price: '$5-12',
      description: 'Refreshing drinks and specialty beverages'
    },
    {
      key: 'salads',
      image: saladsImage,
      price: '$10-16',
      description: 'Fresh, healthy salads with premium ingredients'
    },
    {
      key: 'seafood',
      image: seafoodImage,
      price: '$28-45',
      description: 'Fresh catch of the day prepared to perfection'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`text-center mb-16 ${isRTL ? 'font-arabic' : 'font-english'}`}
        >
          <h2 className={`text-4xl lg:text-5xl font-bold mb-4 gradient-text ${
            isRTL ? 'font-arabic' : 'font-display'
          }`}>
            {t('menu.title')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('menu.subtitle')}
          </p>
        </motion.div>

        {/* Menu Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {menuCategories.map((category, index) => (
            <motion.div
              key={category.key}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="overflow-hidden hover-lift shadow-card border-0 card-gradient">
                <div className="relative overflow-hidden">
                  <img
                    src={category.image}
                    alt={t(`menu.categories.${category.key}`)}
                    className="w-full h-64 object-cover 
                                transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t
                                  from-black/50 to-transparent opacity-0 
                                  group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Price Badge */}
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground 
                                  px-3 py-1 rounded-full text-sm font-semibold">
                    {category.price}
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className={`text-xl font-semibold mb-2 ${
                    isRTL ? 'font-arabic text-right' : 'font-english'
                  }`}>
                    {t(`menu.categories.${category.key}`)}
                  </h3>
                  <p className={`text-muted-foreground mb-4 ${
                    isRTL ? 'font-arabic text-right' : 'font-english'
                  }`}>
                    {category.description}
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full magnetic-btn"
                  >
                    {t('common.viewMore')}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-center mt-16 space-y-4"
        >
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              size="lg"
              className="magnetic-btn hover-lift bg-warm-gradient"
              onClick={handleOrder}
            >
              {t('common.orderNow')}
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="magnetic-btn hover-lift"
              onClick={handleFullMenu}
            >
              {isRTL ? 'عرض القائمة الكاملة' : 'View Full Menu'}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;