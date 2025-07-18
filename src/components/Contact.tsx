import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to get started? Contact us for a quote or more information about our services
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="h-5 w-5 text-primary mr-2" />
                  Phone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a 
                  href="tel:+97450035893" 
                  className="text-lg font-semibold text-primary hover:underline"
                >
                  +974-50035893
                </a>
                <p className="text-muted-foreground mt-1">Available 24/7 for emergencies</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="h-5 w-5 text-primary mr-2" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a 
                  href="mailto:pakarabiantransport.qa@gmail.com" 
                  className="text-lg font-semibold text-primary hover:underline"
                >
                  pakarabiantransport.qa@gmail.com
                </a>
                <p className="text-muted-foreground mt-1">We'll respond within 24 hours</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 text-primary mr-2" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">Doha, Qatar</p>
                <p className="text-muted-foreground mt-1">Serving all areas across Qatar</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 text-primary mr-2" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">24/7 Service Available</p>
                <p className="text-muted-foreground mt-1">Emergency services always available</p>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Name</label>
                  <Input placeholder="Your Name" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Phone</label>
                  <Input placeholder="Your Phone Number" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Email</label>
                <Input type="email" placeholder="your.email@example.com" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Service Required</label>
                <Input placeholder="e.g., Car Rental, Bus Transport, Crane Service" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Message</label>
                <Textarea 
                  placeholder="Tell us about your requirements..."
                  rows={5}
                />
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;