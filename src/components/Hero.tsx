import { Button } from "@/components/ui/button";
import { Car, Truck, Building, Star, Shield, Clock } from "lucide-react";
import heroImage from "@/assets/hero-qatar-transport.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-brand-green/30 to-brand-burgundy/50"></div>
      
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-5xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              مرحباً بكم في باك عربيان
              <span className="block text-yellow-300 text-4xl md:text-6xl mt-2">
                Professional Transportation in Qatar
              </span>
            </h1>
          </div>
          
          <div className="animate-slide-up">
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              🏆 ISO 9001 Certified • 🚗 Car Rental • 🏗️ Heavy Equipment • 🏢 Corporate Solutions
            </p>
            
            <div className="flex items-center justify-center gap-6 mb-8 text-lg">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-400" />
                <span>Qatar's Trusted Partner</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-400" />
                <span>Fully Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-blue-400" />
                <span>24/7 Service</span>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black hover:from-yellow-500 hover:to-yellow-600 text-lg px-8 py-6 font-bold shadow-lg hover-lift animate-pulse-glow"
              onClick={() => scrollToSection('services')}
            >
              Explore Our Services
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-brand-green text-lg px-8 py-6 hover-lift backdrop-blur-sm"
              onClick={() => scrollToSection('contact')}
            >
              Get Free Quote
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="text-center hover-lift bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="animate-float">
                <Car className="h-16 w-16 mx-auto mb-4 text-yellow-300" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Car Rental Fleet</h3>
              <p className="text-gray-200">Premium sedans & SUVs for Doha's business and leisure travelers</p>
            </div>
            <div className="text-center hover-lift bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="animate-float" style={{ animationDelay: '0.5s' }}>
                <Truck className="h-16 w-16 mx-auto mb-4 text-yellow-300" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Heavy Equipment</h3>
              <p className="text-gray-200">Construction & industrial equipment for Qatar's development projects</p>
            </div>
            <div className="text-center hover-lift bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="animate-float" style={{ animationDelay: '1s' }}>
                <Building className="h-16 w-16 mx-auto mb-4 text-yellow-300" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Corporate Solutions</h3>
              <p className="text-gray-200">Employee transport & logistics for Qatar's thriving businesses</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;