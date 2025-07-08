import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

const ContactSection = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { error } = await (supabase as any)
        .from('contacts')
        .insert([{
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message
        }]);
      
      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }
      
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Full error:', error);
      alert(`Error: ${error.message || 'Please try again.'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: isRTL ? 'العنوان' : 'Address',
      value: t('contact.address'),
      color: 'text-primary'
    },
    {
      icon: Phone,
      title: isRTL ? 'الهاتف' : 'Phone',
      value: t('contact.phone'),
      color: 'text-accent-vibrant'
    },
    {
      icon: Mail,
      title: isRTL ? 'البريد الإلكتروني' : 'Email',
      value: t('contact.email'),
      color: 'text-secondary-dark'
    },
    {
      icon: Clock,
      title: isRTL ? 'ساعات العمل' : 'Hours',
      value: t('contact.hours'),
      color: 'text-primary'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
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
            {t('contact.title')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-4 p-6 glass rounded-xl hover-lift"
              >
                <div className={`p-3 rounded-full bg-primary/10 ${info.color}`}>
                  <info.icon size={24} />
                </div>
                <div className={`flex-1 ${isRTL ? 'text-right' : 'text-left'}`}>
                  <h3 className={`font-semibold mb-1 ${
                    isRTL ? 'font-arabic' : 'font-english'
                  }`}>
                    {info.title}
                  </h3>
                  <p className={`text-muted-foreground ${
                    isRTL ? 'font-arabic' : 'font-english'
                  }`}>
                    {info.value}
                  </p>
                </div>
              </motion.div>
            ))}
            
            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="h-64 bg-warm-gradient rounded-xl flex items-center justify-center text-white font-semibold text-lg"
            >
              Interactive Map Coming Soon
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="shadow-warm border-0 card-gradient">
              <CardContent className="p-8">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${
                        isRTL ? 'font-arabic text-right' : 'font-english'
                      }`}>
                        {isRTL ? 'الاسم' : 'Name'}
                      </label>
                      <Input 
                        placeholder={isRTL ? 'اسمك الكامل' : 'Your full name'}
                        className="magnetic-btn"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${
                        isRTL ? 'font-arabic text-right' : 'font-english'
                      }`}>
                        {isRTL ? 'البريد الإلكتروني' : 'Email'}
                      </label>
                      <Input 
                        type="email"
                        placeholder={isRTL ? 'بريدك الإلكتروني' : 'Your email address'}
                        className="magnetic-btn"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      isRTL ? 'font-arabic text-right' : 'font-english'
                    }`}>
                      {isRTL ? 'الهاتف' : 'Phone'}
                    </label>
                    <Input 
                      type="tel"
                      placeholder={isRTL ? 'رقم هاتفك' : 'Your phone number'}
                      className="magnetic-btn"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      isRTL ? 'font-arabic text-right' : 'font-english'
                    }`}>
                      {isRTL ? 'الرسالة' : 'Message'}
                    </label>
                    <Textarea 
                      placeholder={isRTL ? 'كيف يمكننا مساعدتك؟' : 'How can we help you?'}
                      rows={5}
                      className="magnetic-btn resize-none"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full magnetic-btn hover-lift bg-warm-gradient"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : (isRTL ? 'إرسال الرسالة' : 'Send Message')}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;