import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const { t } = useTranslation();
  const { toggleLanguage, isRTL, currentLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 100);
  });

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'menu', href: '#menu' },
    { key: 'about', href: '#about' },
    { key: 'contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass shadow-warm backdrop-blur-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-display font-bold gradient-text"
          >
            Savora
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.key}
                href={item.href}
                whileHover={{ y: -2 }}
                className={`font-medium transition-colors hover:text-primary ${
                  isRTL ? 'font-arabic' : 'font-english'
                }`}
              >
                {t(`nav.${item.key}`)}
              </motion.a>
            ))}
            
            {/* Language Toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="magnetic-btn"
            >
              {currentLanguage === 'en' ? 'ع' : 'EN'}
            </Button>

            {/* CTA Button */}
            <Button className="magnetic-btn hover-lift">
              {t('nav.reservations')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
            >
              {currentLanguage === 'en' ? 'ع' : 'EN'}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMenuOpen ? 1 : 0, 
            height: isMenuOpen ? 'auto' : 0 
          }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className={`block font-medium hover:text-primary transition-colors ${
                  isRTL ? 'font-arabic text-right' : 'font-english'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t(`nav.${item.key}`)}
              </a>
            ))}
            <Button className="w-full magnetic-btn">
              {t('nav.reservations')}
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;