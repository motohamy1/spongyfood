import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import MenuSection from '@/components/MenuSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <MenuSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;