import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Target, Users, Globe } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Pak Arabian Transport
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              PAK ARABIAN TRANSPORT is an <strong>ISO 9001 certified company</strong> and is one of the market leaders 
              providing innovative service solutions in all kinds of heavy lifting, mobile crane rental, 
              and road transportation such as Rent a Cars, Buses for rent.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              The company was established in Doha, Qatar to provide service to the Landscaping companies, 
              Construction Companies, Oil & Gas industry and then extended these services to Power Plants, 
              All type of Rent a Car & Buses transports.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Being client-specific and need focused enables us to offer our clients the best solutions 
              and ensure their total satisfaction. We are dedicated to providing safe, affordable, 
              and convenient Transport and Lifting Services with expert personnel.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-primary/10 rounded-lg">
                <div className="text-2xl font-bold text-primary">ISO 9001</div>
                <div className="text-sm text-muted-foreground">Certified</div>
              </div>
              <div className="text-center p-4 bg-secondary/10 rounded-lg">
                <div className="text-2xl font-bold text-secondary">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <Card className="border-l-4 border-l-primary">
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <Award className="h-6 w-6 text-primary mr-3" />
                <CardTitle className="text-xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To be the most efficient and reliable transport provider in the State of Qatar, 
                  by providing safe, market driven and customer focused passenger service to all our clients.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-secondary">
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <Target className="h-6 w-6 text-secondary mr-3" />
                <CardTitle className="text-xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We envision to become an industry leader in the car rental sector in Qatar through 
                  sustained product innovation and the substantial growth of our distribution networks.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-brand-green">
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <Users className="h-6 w-6 text-brand-green mr-3" />
                <CardTitle className="text-xl">Leadership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  <strong>Managing Director:</strong> Hassam Mansoor Khattak<br />
                  Leading our dedicated team to deliver the highest standard of service with 
                  years of experience in the transportation industry.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;