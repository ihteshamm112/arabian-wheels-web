import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, Bus, Construction, Truck, Users, MapPin } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Car,
      title: "Rent A Cars (Sedan & SUV)",
      description: "Wide range of vehicles from economy to luxury cars for daily, weekly, and monthly rentals",
      features: ["Daily/Weekly/Monthly rental", "Latest model vehicles", "Comprehensive insurance", "24/7 support"]
    },
    {
      icon: Bus,
      title: "Hiace Vans & Minibuses",
      description: "Perfect for group transportation and family trips with professional drivers",
      features: ["Group transportation", "Airport transfers", "City tours", "Professional drivers"]
    },
    {
      icon: Users,
      title: "School Bus Transport",
      description: "Safe and reliable school transportation services with trained drivers",
      features: ["Trained drivers", "Safety protocols", "Route optimization", "Parent tracking"]
    },
    {
      icon: Truck,
      title: "Employee Bus Transport",
      description: "Efficient transportation solutions for corporate employee commuting",
      features: ["Corporate packages", "Flexible schedules", "Route planning", "Cost-effective"]
    },
    {
      icon: Bus,
      title: "Tourist & Trip Buses",
      description: "Comfortable buses for tourism and special events with experienced guides",
      features: ["Tourism packages", "Event transportation", "Comfortable seating", "AC facilities"]
    },
    {
      icon: Construction,
      title: "Crane Services (3-50 Ton)",
      description: "Heavy lifting solutions for construction and industrial projects",
      features: ["3-50 ton capacity", "Certified operators", "Safety compliance", "Project support"]
    },
    {
      icon: Truck,
      title: "Lowbed & Flatbed Trailers",
      description: "Heavy equipment transportation with specialized trailers",
      features: ["25-60 ton capacity", "Specialized equipment", "Secure transportation", "Logistics support"]
    },
    {
      icon: MapPin,
      title: "Heavy Vehicles & Equipment",
      description: "Complete range of heavy vehicles and construction equipment rental",
      features: ["Construction equipment", "Mining vehicles", "Maintenance included", "Operator training"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive transportation and heavy equipment solutions for all your business needs in Qatar
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary group-hover:text-white transition-colors">
                  <service.icon className="h-8 w-8 text-primary group-hover:text-white" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-sm">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;