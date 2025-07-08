import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/hooks/useLanguage';
import { Heart, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  return (
    <footer className="bg-secondary-dark text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`space-y-4 ${isRTL ? 'text-right' : 'text-left'}`}
          >
            <h3 className="text-2xl font-display font-bold gradient-text">
              Savora
            </h3>
            <p className={`text-white/80 ${isRTL ? 'font-arabic' : 'font-english'}`}>
              {isRTL 
                ? 'تجربة طعام استثنائية مع كل وجبة'
                : 'Exceptional dining experience with every meal'
              }
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`space-y-4 ${isRTL ? 'text-right' : 'text-left'}`}
          >
            <h4 className={`font-semibold text-lg ${isRTL ? 'font-arabic' : 'font-english'}`}>
              {isRTL ? 'روابط سريعة' : 'Quick Links'}
            </h4>
            <ul className="space-y-2">
              {['home', 'menu', 'about', 'contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className={`text-white/70 hover:text-white transition-colors ${
                      isRTL ? 'font-arabic' : 'font-english'
                    }`}
                  >
                    {t(`nav.${item}`)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`space-y-4 ${isRTL ? 'text-right' : 'text-left'}`}
          >
            <h4 className={`font-semibold text-lg ${isRTL ? 'font-arabic' : 'font-english'}`}>
              {isRTL ? 'معلومات التواصل' : 'Contact Info'}
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-primary" />
                <span className={`text-white/70 text-sm ${isRTL ? 'font-arabic' : 'font-english'}`}>
                  {t('contact.address')}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-primary" />
                <span className={`text-white/70 text-sm ${isRTL ? 'font-arabic' : 'font-english'}`}>
                  {t('contact.phone')}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-primary" />
                <span className={`text-white/70 text-sm ${isRTL ? 'font-arabic' : 'font-english'}`}>
                  {t('contact.email')}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className={`space-y-4 ${isRTL ? 'text-right' : 'text-left'}`}
          >
            <h4 className={`font-semibold text-lg ${isRTL ? 'font-arabic' : 'font-english'}`}>
              {isRTL ? 'ساعات العمل' : 'Opening Hours'}
            </h4>
            <p className={`text-white/70 ${isRTL ? 'font-arabic' : 'font-english'}`}>
              {t('contact.hours')}
            </p>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className={`pt-8 border-t border-white/20 text-center ${
            isRTL ? 'font-arabic' : 'font-english'
          }`}
        >
          <p className="text-white/60 flex items-center justify-center gap-1">
            {isRTL ? 'صُنع بـ' : 'Made with'} 
            <Heart size={16} className="text-red-400 fill-current" /> 
            {isRTL ? 'في مطعم سافورا' : 'by M.Tohamy'}
          </p>
          <p className="text-white/40 text-sm mt-2">
            © 2025 Savora. {isRTL ? 'جميع الحقوق محفوظة' : 'All rights reserved'}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;