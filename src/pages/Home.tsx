import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Play, BookOpen, Calendar, Heart, Globe, Users } from "lucide-react";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";

const Home = () => {
  const programs = [
    {
      icon: Play,
      title: "Live TV Programs",
      description: "Join us for powerful preaching and teaching sessions that transform lives worldwide.",
      link: "/watch"
    },
    {
      icon: BookOpen,
      title: "Daily Devotionals",
      description: "Receive daily spiritual nourishment through our inspiring devotional messages.",
      link: "/devotionals"
    },
    {
      icon: Calendar,
      title: "Upcoming Events",
      description: "Participate in our conferences, crusades, and ministry events around the globe.",
      link: "/events"
    }
  ];

  const features = [
    {
      icon: Globe,
      title: "Worldwide Outreach",
      description: "Reaching every nation with the Gospel through strategic missions and partnerships.",
      stats: "195+ Countries"
    },
    {
      icon: Users,
      title: "Community Impact",
      description: "Transforming communities through education, healthcare, and spiritual development.",
      stats: "2M+ Lives Touched"
    },
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "Providing humanitarian aid and support to those in need across the globe.",
      stats: "500+ Projects"
    }
  ];

  return (
    <Layout>
      <HeroSection />
      
      {/* Programs Section */}
      <section className="ministry-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Our <span className="text-gradient">Ministry Programs</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Experience the power of God through our diverse range of programs designed to 
              strengthen your faith and connect you with believers worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={program.title} className={`ministry-card p-8 text-center animate-fadeInUp`} style={{animationDelay: `${index * 0.2}s`}}>
                <CardContent className="space-y-6">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto">
                    <program.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-semibold text-foreground">
                    {program.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {program.description}
                  </p>
                  <Link to={program.link}>
                    <Button className="btn-outline-ministry">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Making a <span className="text-gradient">Global Impact</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Through God's grace and your partnership, we're transforming lives and communities 
              around the world with the love of Christ.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={feature.title} className={`text-center animate-slideInRight`} style={{animationDelay: `${index * 0.3}s`}}>
                <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{feature.stats}</div>
                <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-hero text-white text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Join Our Mission Today
            </h2>
            <p className="text-xl mb-12 opacity-90 leading-relaxed">
              Partner with us in spreading the Gospel worldwide. Your support helps us reach 
              more souls with the transforming power of God's love.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/donate">
                <Button className="bg-white text-primary hover:bg-white/90 text-lg px-12 py-6 font-semibold">
                  DONATE NOW
                </Button>
              </Link>
              <Link to="/prayer">
                <Button className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary text-lg px-12 py-6 font-semibold">
                  REQUEST PRAYER
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;