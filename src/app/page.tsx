import Header from '@/components/Header';
import HeroCarousel from '@/components/HeroCarousel';
import ServiceCards from '@/components/ServiceCards';
import AboutUs from '@/components/AboutUs';
import ProductsCarousel from '@/components/ProductsCarousel';
import ServicesSection from '@/components/ServicesSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* The Hero handles its own height and overlap */}
        <HeroCarousel />
        
        {/* All these sections have proper top-bottom padding */}
        <ServiceCards />
        <AboutUs />
        <ProductsCarousel />
        <ServicesSection />
      </main>

      <Footer />
    </div>
  );
}
