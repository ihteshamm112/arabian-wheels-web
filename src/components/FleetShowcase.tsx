import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Car, Users, Fuel, Shield, Star, CheckCircle } from "lucide-react";
import fleetImage from "@/assets/car-fleet-qatar.jpg";

const FleetShowcase = () => {
  const vehicles = [
    {
      category: "Luxury Sedans",
      models: ["BMW 5 Series", "Mercedes E-Class", "Audi A6", "Lexus ES"],
      features: ["Premium Interior", "GPS Navigation", "Premium Sound", "Climate Control"],
      priceRange: "200-400 QAR/day",
      icon: Car,
      color: "bg-gradient-to-r from-blue-500 to-blue-600"
    },
    {
      category: "SUVs & 4WD",
      models: ["Toyota Prado", "Nissan Patrol", "Ford Explorer", "Chevrolet Tahoe"],
      features: ["7-8 Seater", "4WD Capability", "Desert Ready", "Family Friendly"],
      priceRange: "300-600 QAR/day",
      icon: Users,
      color: "bg-gradient-to-r from-green-500 to-green-600"
    },
    {
      category: "Economy Cars",
      models: ["Toyota Corolla", "Nissan Sunny", "Hyundai Elantra", "Kia Cerato"],
      features: ["Fuel Efficient", "City Friendly", "Reliable", "Affordable"],
      priceRange: "80-150 QAR/day",
      icon: Fuel,
      color: "bg-gradient-to-r from-yellow-500 to-orange-500"
    }
  ];

  const whyChooseUsReasons = [
    {
      icon: Shield,
      title: "Comprehensive Insurance",
      description: "All vehicles fully insured with 24/7 roadside assistance across Qatar",
      stats: "100% Coverage"
    },
    {
      icon: Star,
      title: "ISO 9001 Certified",
      description: "International quality standards ensuring top-notch service excellence",
      stats: "5★ Rating"
    },
    {
      icon: CheckCircle,
      title: "Qatar Local Expertise",
      description: "Deep knowledge of Qatar roads, regulations, and cultural preferences",
      stats: "10+ Years"
    }
  ];

  return (
    <section id="fleet" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-green rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-burgundy rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Fleet Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Our Premium Fleet
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover Qatar's most trusted car rental fleet. From economy to luxury, 
            we have the perfect vehicle for every journey across the State of Qatar.
          </p>
          
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl mx-auto max-w-4xl">
            <img 
              src={fleetImage} 
              alt="Pak Arabian Transport Fleet in Qatar" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Latest Model Vehicles</h3>
                <p className="text-lg">Maintained to the highest standards for Qatar's roads</p>
              </div>
            </div>
          </div>
        </div>

        {/* Vehicle Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {vehicles.map((vehicle, index) => (
            <Card key={index} className="group hover-lift bg-white shadow-xl border-0 overflow-hidden">
              <div className={`h-2 ${vehicle.color}`}></div>
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-full ${vehicle.color} text-white`}>
                    <vehicle.icon className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{vehicle.category}</h3>
                    <Badge variant="secondary" className="mt-1">{vehicle.priceRange}</Badge>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-brand-green mb-2">Available Models:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {vehicle.models.map((model, idx) => (
                        <span key={idx} className="text-sm text-muted-foreground">• {model}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-brand-burgundy mb-2">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {vehicle.features.map((feature, idx) => (
                        <span key={idx} className="text-sm text-muted-foreground flex items-center gap-1">
                          <CheckCircle className="h-3 w-3 text-green-500" />
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <Button className="w-full mt-6 bg-brand-green hover:bg-brand-green/90">
                  Reserve Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Qatar Chooses Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            المحيين أدلالو البلكان - Leading transport solutions in the heart of Qatar
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyChooseUsReasons.map((reason, index) => (
            <Card key={index} className="group hover-lift bg-white/80 backdrop-blur-sm shadow-xl border border-brand-green/20">
              <CardContent className="p-8 text-center">
                <div className="relative">
                  <div className="mx-auto mb-6 p-4 bg-gradient-to-br from-brand-green to-brand-burgundy rounded-full w-fit animate-pulse-glow">
                    <reason.icon className="h-10 w-10 text-white" />
                  </div>
                  <Badge 
                    variant="secondary" 
                    className="absolute -top-2 -right-2 bg-yellow-400 text-black font-bold"
                  >
                    {reason.stats}
                  </Badge>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FleetShowcase;