import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Construction, Truck, Settings, Award, Clock, Shield } from "lucide-react";
import heavyEquipmentImage from "@/assets/heavy-equipment-qatar.jpg";

const HeavyEquipment = () => {
  const equipment = [
    {
      category: "Mobile Cranes",
      capacity: "3-50 Tons",
      models: ["Liebherr LTM", "Tadano Faun", "Grove GMK", "Terex Demag"],
      applications: ["Construction Sites", "Industrial Projects", "Infrastructure", "Oil & Gas"],
      features: ["Certified Operators", "Safety Compliance", "24/7 Availability", "Project Support"],
      icon: Construction,
      color: "from-orange-500 to-red-500"
    },
    {
      category: "Lowbed Trailers",
      capacity: "25-60 Tons",
      models: ["Goldhofer", "Faymonville", "Nicolas", "Scheuerle"],
      applications: ["Heavy Machinery Transport", "Construction Equipment", "Industrial Equipment", "Project Cargo"],
      features: ["Specialized Loading", "Secure Transport", "Route Planning", "Logistics Support"],
      icon: Truck,
      color: "from-blue-500 to-purple-500"
    },
    {
      category: "Construction Equipment",
      capacity: "Various Sizes",
      models: ["Caterpillar", "Komatsu", "Volvo", "JCB"],
      applications: ["Excavation", "Material Handling", "Site Preparation", "Infrastructure"],
      features: ["Latest Models", "Maintenance Included", "Operator Training", "Technical Support"],
      icon: Settings,
      color: "from-green-500 to-teal-500"
    }
  ];

  const certifications = [
    {
      icon: Award,
      title: "ISO 9001:2015",
      description: "International quality management certification"
    },
    {
      icon: Shield,
      title: "Safety Certified",
      description: "Comprehensive safety protocols and training"
    },
    {
      icon: Clock,
      title: "24/7 Operations",
      description: "Round-the-clock equipment and support services"
    }
  ];

  return (
    <section id="equipment" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(var(--brand-green), 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(var(--brand-burgundy), 0.3) 0%, transparent 50%)`
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Heavy Equipment & <span className="text-yellow-400">Industrial Solutions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Supporting Qatar's mega projects with world-class heavy machinery, cranes, and specialized transport equipment. 
            From construction to oil & gas, we power Qatar's development.
          </p>
          
          {/* Hero Image */}
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl mx-auto max-w-5xl mb-12">
            <img 
              src={heavyEquipmentImage} 
              alt="Heavy Equipment in Qatar Desert" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-8">
                <h3 className="text-3xl font-bold mb-2">Qatar's Largest Equipment Fleet</h3>
                <p className="text-xl text-gray-200">Serving major construction and industrial projects across Qatar</p>
              </div>
            </div>
            <div className="absolute top-6 right-6">
              <Badge className="bg-yellow-400 text-black text-lg px-4 py-2 font-bold">
                50+ Units Available
              </Badge>
            </div>
          </div>
        </div>

        {/* Equipment Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {equipment.map((item, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 hover-lift group">
              <CardHeader>
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-white">{item.category}</CardTitle>
                <Badge variant="secondary" className="bg-yellow-400 text-black font-bold w-fit">
                  {item.capacity}
                </Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-yellow-400 mb-2">Equipment Models:</h4>
                  <div className="space-y-1">
                    {item.models.map((model, idx) => (
                      <span key={idx} className="block text-sm text-gray-300">• {model}</span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-green-400 mb-2">Applications:</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {item.applications.map((app, idx) => (
                      <span key={idx} className="text-sm text-gray-300">• {app}</span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-blue-400 mb-2">Key Features:</h4>
                  <div className="space-y-1">
                    {item.features.map((feature, idx) => (
                      <span key={idx} className="flex items-center text-sm text-gray-300">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black hover:from-yellow-500 hover:to-yellow-600 font-bold">
                  Request Equipment
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h3 className="text-3xl font-bold text-center mb-8 text-yellow-400">
            Industry Certifications & Standards
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 p-4 bg-gradient-to-r from-brand-green to-brand-burgundy rounded-full w-fit animate-pulse-glow">
                  <cert.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{cert.title}</h4>
                <p className="text-gray-300">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold mb-4 text-yellow-400">
            Ready to Power Your Next Project?
          </h3>
          <p className="text-lg text-gray-300 mb-6">
            Contact our equipment specialists for custom solutions tailored to your Qatar project needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 text-lg px-8 py-4">
              Get Equipment Quote
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-4">
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeavyEquipment;