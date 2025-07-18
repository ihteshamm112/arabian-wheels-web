import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-4 mb-4">
              <img 
                src="/lovable-uploads/acdbb09e-003a-43fe-ba9f-6f6dfd53f7c3.png" 
                alt="Pak Arabian Transport Services Logo" 
                className="h-12 w-auto bg-white p-1 rounded"
              />
              <div>
                <h3 className="text-xl font-bold">Pak Arabian Transport</h3>
                <p className="text-sm opacity-90">ISO 9001 Certified</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Your reliable transportation partner in Qatar. We provide comprehensive 
              solutions for car rental, heavy equipment, and commercial transport services.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>• Car Rental (Sedan & SUV)</li>
              <li>• Bus Transportation</li>
              <li>• Crane Services (3-50 Ton)</li>
              <li>• Heavy Equipment Rental</li>
              <li>• Lowbed & Flatbed Trailers</li>
              <li>• School & Employee Transport</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4" />
                <a href="tel:+97450035893" className="hover:underline">
                  +974-50035893
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4" />
                <a href="mailto:pakarabiantransport.qa@gmail.com" className="hover:underline">
                  pakarabiantransport.qa@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4" />
                <span>Doha, Qatar</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-90">
            © 2024 Pak Arabian Transport Services. All rights reserved. | ISO 9001 Certified Company
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;