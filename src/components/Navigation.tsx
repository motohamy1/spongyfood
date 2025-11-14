import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/hooks/useLanguage';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { Menu, X, Moon, Sun } from 'lucide-react';

const Navigation = () => {
  const { t } = useTranslation();
  const { toggleLanguage, isRTL, currentLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
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

  const handleReservation = () => {
    window.open('tel:+20-1234567890', '_self');
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 border-amber-500 border-2 rounded-full transition-all duration-300 ${
        isScrolled 
          ? 'glass shadow-warm backdrop-blur-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 ">
        <div className="flex items-center justify-between  ">
          {/* Logo */}
          <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1.05 }}
              transition={{ delay: 0.2, duration: 1 }}
              whileHover={{ scale: 1.15 }}
              className="text-3xl font-display font-bold cursor-grab text-foreground"
          >
            Tasty
          </motion.div>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2 ${isRTL ? 'space-x-reverse space-x-6' : 'space-x-6'}`}>
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
          </div>

          {/* Right Side Buttons */}
          <div className={`hidden md:flex items-center
                            ${isRTL ? 'space-x-reverse space-x-6' : 'space-x-4'}`}>
            <Button
              variant="outline"
              size="sm"
              onClick={toggleTheme}
              className="magnetic-btn"
            >
              {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="magnetic-btn"
            >
              {currentLanguage === 'en' ? 'ع' : 'EN '}
            </Button>
            <Button className="magnetic-btn hover-lift" onClick={handleReservation}>
              {t('nav.reservations')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
            >
              {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
            </Button>
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
          className={`md:hidden overflow-hidden ${
            !isScrolled ? 'absolute left-0 right-0 top-full glass backdrop-blur-md' : ''
          }`}
        >
          <div className={`py-4 space-y-4 ${
            !isScrolled ? 'px-4' : ''
          }`}>
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
            <Button className="w-full magnetic-btn" onClick={handleReservation}>
              {t('nav.reservations')}
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;