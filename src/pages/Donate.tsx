import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreditCard, Heart, Globe, Users, Book, Home } from "lucide-react";
import Layout from "@/components/Layout";

const Donate = () => {
  const donationAmounts = [25, 50, 100, 250, 500, 1000];
  
  const impactAreas = [
    {
      icon: Globe,
      title: "Global Missions",
      description: "Support our missionaries in 195+ countries spreading the Gospel to unreached communities.",
      impact: "$100 supports a missionary for one month"
    },
    {
      icon: Users,
      title: "Community Outreach",
      description: "Fund local outreach programs, food distribution, and community development projects.",
      impact: "$50 feeds 25 families for a week"
    },
    {
      icon: Book,
      title: "Education & Training",
      description: "Provide theological education and ministry training for future church leaders.",
      impact: "$200 sponsors a student for one semester"
    },
    {
      icon: Home,
      title: "Church Planting",
      description: "Establish new churches in communities that have never heard the Gospel message.",
      impact: "$500 helps plant a new church"
    }
  ];

  const givingMethods = [
    {
      title: "Online Giving",
      description: "Secure, instant giving through our website using credit card or bank transfer.",
      features: ["Secure SSL encryption", "Instant confirmation", "Monthly giving options", "Tax receipts"]
    },
    {
      title: "Bank Transfer",
      description: "Direct bank transfers for larger donations or international supporters.",
      features: ["No processing fees", "Direct to ministry", "International friendly", "Secure transfers"]
    },
    {
      title: "Check or Money Order",
      description: "Traditional giving method for those who prefer physical donations.",
      features: ["Mail to our office", "Tax deductible", "Personal touch", "Detailed records"]
    },
    {
      title: "Cryptocurrency",
      description: "Modern giving through Bitcoin, Ethereum, and other cryptocurrencies.",
      features: ["Tax advantages", "Global accessibility", "Instant transfers", "Modern solution"]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section flex items-center justify-center">
        <div className="hero-content max-w-4xl mx-auto px-4 py-20">
          <h1 className="hero-title font-heading mb-6">
            Partner With Us
          </h1>
          <p className="hero-subtitle max-w-3xl mx-auto leading-relaxed">
            Your generous giving helps us reach every nation with the Gospel and transform lives worldwide through God's love.
          </p>
        </div>
      </section>

      {/* Donation Form */}
      <section className="ministry-section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Donation Form */}
            <div className="animate-fadeInUp">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-8">
                Make a <span className="text-gradient">Donation</span>
              </h2>
              <Card className="ministry-card">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    {/* Donation Type */}
                    <div>
                      <Label className="text-sm font-medium text-foreground mb-4 block">
                        Donation Type
                      </Label>
                      <div className="flex gap-4">
                        <button 
                          type="button"
                          className="flex-1 p-4 border-2 border-primary text-primary bg-transparent rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          One-Time
                        </button>
                        <button 
                          type="button"
                          className="flex-1 p-4 border-2 border-border text-muted-foreground bg-transparent rounded-lg hover:border-primary hover:text-primary transition-colors"
                        >
                          Monthly
                        </button>
                      </div>
                    </div>

                    {/* Amount Selection */}
                    <div>
                      <Label className="text-sm font-medium text-foreground mb-4 block">
                        Donation Amount (USD)
                      </Label>
                      <div className="grid grid-cols-3 gap-3 mb-4">
                        {donationAmounts.map((amount) => (
                          <button
                            key={amount}
                            type="button"
                            className="p-3 border-2 border-border text-foreground bg-background rounded-lg hover:border-primary hover:text-primary transition-colors"
                          >
                            ${amount}
                          </button>
                        ))}
                      </div>
                      <Input 
                        type="number" 
                        placeholder="Enter custom amount" 
                        className="w-full"
                      />
                    </div>

                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="donorFirstName" className="text-sm font-medium text-foreground mb-2 block">
                          First Name *
                        </Label>
                        <Input 
                          id="donorFirstName" 
                          type="text" 
                          placeholder="First name"
                          required 
                        />
                      </div>
                      <div>
                        <Label htmlFor="donorLastName" className="text-sm font-medium text-foreground mb-2 block">
                          Last Name *
                        </Label>
                        <Input 
                          id="donorLastName" 
                          type="text" 
                          placeholder="Last name"
                          required 
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="donorEmail" className="text-sm font-medium text-foreground mb-2 block">
                        Email Address *
                      </Label>
                      <Input 
                        id="donorEmail" 
                        type="email" 
                        placeholder="your.email@example.com"
                        required 
                      />
                    </div>

                    {/* Payment Information */}
                    <div className="border-t border-border pt-6">
                      <div className="flex items-center space-x-2 mb-4">
                        <CreditCard className="w-5 h-5 text-primary" />
                        <Label className="text-sm font-medium text-foreground">
                          Payment Information
                        </Label>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="cardNumber" className="text-sm font-medium text-foreground mb-2 block">
                            Card Number *
                          </Label>
                          <Input 
                            id="cardNumber" 
                            type="text" 
                            placeholder="1234 5678 9012 3456"
                            required 
                          />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="expiry" className="text-sm font-medium text-foreground mb-2 block">
                              Expiry Date *
                            </Label>
                            <Input 
                              id="expiry" 
                              type="text" 
                              placeholder="MM/YY"
                              required 
                            />
                          </div>
                          <div>
                            <Label htmlFor="cvv" className="text-sm font-medium text-foreground mb-2 block">
                              CVV *
                            </Label>
                            <Input 
                              id="cvv" 
                              type="text" 
                              placeholder="123"
                              required 
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <Button type="submit" className="btn-ministry w-full text-lg py-6">
                      <Heart className="w-5 h-5 mr-2" />
                      Complete Donation
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Impact Areas */}
            <div className="animate-slideInRight">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-8">
                Your <span className="text-gradient">Impact</span>
              </h2>
              <div className="space-y-6">
                {impactAreas.map((area, index) => (
                  <Card key={area.title} className="ministry-card">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                          <area.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                            {area.title}
                          </h3>
                          <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                            {area.description}
                          </p>
                          <p className="text-primary font-medium text-sm">
                            {area.impact}
                          </p>
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

      {/* Giving Methods */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Ways to <span className="text-gradient">Give</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Choose the giving method that works best for you. All donations are secure and tax-deductible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {givingMethods.map((method, index) => (
              <Card 
                key={method.title} 
                className={`ministry-card p-6 text-center animate-fadeInUp`} 
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <CardContent className="space-y-4">
                  <h3 className="text-xl font-heading font-semibold text-foreground">
                    {method.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {method.description}
                  </p>
                  <ul className="space-y-2">
                    {method.features.map((feature, idx) => (
                      <li key={idx} className="text-xs text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
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

      {/* Call to Action */}
      <section className="py-24 bg-gradient-hero text-white text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Every Gift Makes a Difference
            </h2>
            <p className="text-xl mb-12 opacity-90 leading-relaxed">
              Join thousands of partners worldwide who are making an eternal impact through their generous giving. 
              Together, we can reach every nation with the Gospel.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">195+</div>
                <div className="text-lg opacity-90">Countries Reached</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">2M+</div>
                <div className="text-lg opacity-90">Lives Transformed</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">15K+</div>
                <div className="text-lg opacity-90">Active Partners</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Donate;