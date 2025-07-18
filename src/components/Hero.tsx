import { Button } from "@/components/ui/button";
import { Car, Truck, Building } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-green via-brand-burgundy to-brand-green-light">
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Professional Transportation 
            <span className="block text-yellow-300">Solutions in Qatar</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            ISO 9001 Certified • Car Rental • Heavy Equipment • Crane Services • Bus Transportation
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-white text-brand-green hover:bg-gray-100 text-lg px-8 py-4"
              onClick={() => scrollToSection('services')}
            >
              Our Services
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-brand-green text-lg px-8 py-4"
              onClick={() => scrollToSection('contact')}
            >
              Get Quote
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <Car className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
              <h3 className="text-xl font-semibold mb-2">Car Rental</h3>
              <p className="text-gray-300">Sedan & SUV vehicles for personal and business use</p>
            </div>
            <div className="text-center">
              <Truck className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
              <h3 className="text-xl font-semibold mb-2">Heavy Equipment</h3>
              <p className="text-gray-300">Cranes, trailers, and construction equipment</p>
            </div>
            <div className="text-center">
              <Building className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
              <h3 className="text-xl font-semibold mb-2">Commercial Transport</h3>
              <p className="text-gray-300">Buses for schools, employees, and tourism</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;