import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Globe } from "lucide-react";
import Layout from "@/components/Layout";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Main Office",
      details: [
        "123 Ministry Lane",
        "Gospel City, GC 12345",
        "United States"
      ]
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        "Main: +1 (555) PRAY-NOW",
        "Prayer Line: +1 (555) 772-9669",
        "International: +1 (555) 555-0123"
      ]
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: [
        "General: info@sendmenworldwide.org",
        "Prayer: prayer@sendmenworldwide.org",
        "Partnership: partner@sendmenworldwide.org"
      ]
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM EST",
        "Saturday: 10:00 AM - 4:00 PM EST",
        "Sunday: Closed (Join us for service!)"
      ]
    }
  ];

  const offices = [
    {
      region: "North America",
      address: "123 Ministry Lane, Gospel City, GC 12345, USA",
      phone: "+1 (555) PRAY-NOW",
      email: "usa@sendmenworldwide.org"
    },
    {
      region: "Europe",
      address: "45 Faith Street, London, UK SW1A 1AA",
      phone: "+44 20 7946 0958",
      email: "europe@sendmenworldwide.org"
    },
    {
      region: "Africa",
      address: "78 Hope Avenue, Lagos, Nigeria",
      phone: "+234 1 234 5678",
      email: "africa@sendmenworldwide.org"
    },
    {
      region: "Asia",
      address: "99 Grace Road, Singapore 123456",
      phone: "+65 6123 4567",
      email: "asia@sendmenworldwide.org"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section flex items-center justify-center">
        <div className="hero-content max-w-4xl mx-auto px-4 py-20">
          <h1 className="hero-title font-heading mb-6">
            Contact Us
          </h1>
          <p className="hero-subtitle max-w-3xl mx-auto leading-relaxed">
            We'd love to hear from you. Reach out to us for prayer, partnership opportunities, or any questions about our ministry.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="ministry-section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-fadeInUp">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-8">
                Send Us a <span className="text-gradient">Message</span>
              </h2>
              <Card className="ministry-card">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="firstName" className="text-sm font-medium text-foreground mb-2 block">
                          First Name *
                        </Label>
                        <Input 
                          id="firstName" 
                          type="text" 
                          placeholder="Your first name"
                          className="w-full"
                          required 
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-sm font-medium text-foreground mb-2 block">
                          Last Name *
                        </Label>
                        <Input 
                          id="lastName" 
                          type="text" 
                          placeholder="Your last name"
                          className="w-full"
                          required 
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">
                        Email Address *
                      </Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="your.email@example.com"
                        className="w-full"
                        required 
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium text-foreground mb-2 block">
                        Phone Number
                      </Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="+1 (555) 123-4567"
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="subject" className="text-sm font-medium text-foreground mb-2 block">
                        Subject *
                      </Label>
                      <Input 
                        id="subject" 
                        type="text" 
                        placeholder="How can we help you?"
                        className="w-full"
                        required 
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message" className="text-sm font-medium text-foreground mb-2 block">
                        Message *
                      </Label>
                      <Textarea 
                        id="message" 
                        placeholder="Please share your message, prayer request, or question..."
                        rows={6}
                        className="w-full resize-none"
                        required 
                      />
                    </div>
                    
                    <Button type="submit" className="btn-ministry w-full text-lg py-6">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="animate-slideInRight">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-8">
                Get in <span className="text-gradient">Touch</span>
              </h2>
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <Card key={info.title} className="ministry-card">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                            {info.title}
                          </h3>
                          <div className="space-y-1">
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="text-muted-foreground">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              <span className="text-gradient">Global</span> Offices
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Connect with our regional offices around the world for local ministry opportunities and support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offices.map((office, index) => (
              <Card 
                key={office.region} 
                className={`ministry-card p-6 animate-fadeInUp`} 
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Globe className="w-8 h-8 text-primary" />
                    <h3 className="text-xl font-heading font-semibold text-foreground">
                      {office.region}
                    </h3>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start space-x-2">
                      <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground">{office.address}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                      <p className="text-muted-foreground">{office.phone}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                      <p className="text-muted-foreground">{office.email}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-gradient-hero text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Need Immediate Prayer?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Our prayer team is available 24/7 for urgent prayer needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4">
              <Phone className="w-5 h-5 mr-2" />
              Call Prayer Line
            </Button>
            <Button className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary text-lg px-8 py-4">
              <Mail className="w-5 h-5 mr-2" />
              Email Prayer Team
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;