import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import FleetShowcase from "@/components/FleetShowcase";
import HeavyEquipment from "@/components/HeavyEquipment";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <FleetShowcase />
      <HeavyEquipment />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
