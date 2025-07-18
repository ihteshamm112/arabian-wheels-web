import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, MapPin, Calendar } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ahmed Al-Rashid",
      company: "Qatar Energy",
      role: "Operations Manager",
      location: "Doha, Qatar",
      rating: 5,
      text: "باك عربيان أفضل شركة نقل في قطر. خدمة ممتازة ومركبات حديثة. نستخدم خدماتهم منذ 3 سنوات.",
      translation: "Pak Arabian is the best transport company in Qatar. Excellent service and modern vehicles. We've been using their services for 3 years.",
      date: "December 2024",
      service: "Corporate Fleet"
    },
    {
      name: "Sarah Johnson",
      company: "Hamad Medical Corporation",
      role: "HR Director",
      location: "Al Rayyan, Qatar",
      rating: 5,
      text: "Outstanding employee transportation services. Always punctual, professional drivers, and well-maintained buses. Highly recommended for any company in Qatar.",
      date: "November 2024",
      service: "Employee Transport"
    },
    {
      name: "Mohammad Bin Khalifa",
      company: "Construction Excellence LLC",
      role: "Project Manager",
      location: "Lusail, Qatar",
      rating: 5,
      text: "معدات ثقيلة عالية الجودة وخدمة رافعات ممتازة. ساعدونا في مشاريع كبيرة في قطر.",
      translation: "High-quality heavy equipment and excellent crane services. They helped us with major projects in Qatar.",
      date: "October 2024",
      service: "Heavy Equipment"
    },
    {
      name: "Emma Williams",
      company: "Qatar Tourism Authority",
      role: "Tour Operations Lead",
      location: "West Bay, Doha",
      rating: 5,
      text: "Perfect for our VIP tourist groups. Luxury vehicles, knowledgeable drivers who speak Arabic and English. They understand Qatar's culture and attractions perfectly.",
      date: "September 2024",
      service: "Tourism Transport"
    },
    {
      name: "Abdullah Al-Thani",
      company: "Al-Thani Group",
      role: "CEO",
      location: "Al Wakra, Qatar",
      rating: 5,
      text: "شركة موثوقة وذات سمعة ممتازة. ISO 9001 معتمدة وخدمة 24/7. الخيار الأول للنقل في قطر.",
      translation: "Reliable company with excellent reputation. ISO 9001 certified with 24/7 service. First choice for transportation in Qatar.",
      date: "August 2024",
      service: "Car Rental"
    },
    {
      name: "Michael Chen",
      company: "Qatar Foundation",
      role: "Facilities Manager",
      location: "Education City, Qatar",
      rating: 5,
      text: "Exceptional school bus services for our international students. Safety protocols are top-notch, drivers are trained professionals. Parents feel confident.",
      date: "July 2024",
      service: "School Transport"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-brand-green/5 to-brand-burgundy/5 relative">
      {/* Qatar-inspired pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 20px,
            rgba(var(--brand-green), 0.1) 20px,
            rgba(var(--brand-green), 0.1) 40px
          )`
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Qatar Says About Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ماذا يقول عملاؤنا - Real testimonials from businesses and individuals across Qatar
          </p>
          <div className="flex justify-center items-center gap-4 mt-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-lg font-semibold">4.9/5 Average Rating</span>
            <Badge variant="secondary" className="bg-green-100 text-green-800">500+ Reviews</Badge>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover-lift bg-white shadow-lg border-0 overflow-hidden animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Badge variant="outline" className="text-xs">{testimonial.service}</Badge>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-green to-brand-burgundy rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                    <p className="text-sm text-brand-green font-medium">{testimonial.role}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <Quote className="h-8 w-8 text-brand-green/20 absolute -top-2 -left-2" />
                  <div className="space-y-3 ml-4">
                    <p className="text-sm text-muted-foreground leading-relaxed italic">
                      "{testimonial.text}"
                    </p>
                    {testimonial.translation && (
                      <p className="text-xs text-gray-500 border-l-2 border-brand-green/30 pl-3">
                        Translation: {testimonial.translation}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    {testimonial.location}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {testimonial.date}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 text-lg px-6 py-2">
            🏆 Trusted by 1000+ Companies in Qatar
          </Badge>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;