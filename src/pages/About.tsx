import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Eye, Heart } from "lucide-react";
import Layout from "@/components/Layout";

const About = () => {
  const leadership = [
    {
      name: "Rev. Dr. John Smith",
      position: "Senior Pastor & Founder",
      description: "With over 30 years in ministry, Rev. Dr. Smith leads our global outreach with passion and dedication."
    },
    {
      name: "Pastor Mary Johnson",
      position: "Associate Pastor",
      description: "Pastor Mary oversees our educational programs and women's ministry initiatives worldwide."
    },
    {
      name: "Rev. David Wilson",
      position: "Missions Director",
      description: "Rev. Wilson coordinates our international missions and partnership programs across 195+ countries."
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Love",
      description: "We demonstrate God's unconditional love through our actions and service to others."
    },
    {
      icon: Users,
      title: "Unity",
      description: "We believe in the unity of all believers regardless of race, culture, or nationality."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in all we do, giving our best in service to God and humanity."
    },
    {
      icon: Eye,
      title: "Vision",
      description: "We maintain a clear vision of reaching every nation with the Gospel of Jesus Christ."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section flex items-center justify-center">
        <div className="hero-content max-w-4xl mx-auto px-4 py-20">
          <h1 className="hero-title font-heading mb-6">
            About Our Ministry
          </h1>
          <p className="hero-subtitle max-w-3xl mx-auto leading-relaxed">
            Called to spread the Gospel to every nation, tribe, and tongue through the power of God's love.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="ministry-section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fadeInUp">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                Our <span className="text-gradient">Story</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Send Men World Wide Ministry was founded in 1985 with a divine mandate to reach 
                  every corner of the earth with the Gospel of Jesus Christ. What began as a small 
                  local ministry has grown into a global movement touching millions of lives.
                </p>
                <p>
                  Through powerful preaching, teaching, and compassionate outreach, we have established 
                  partnerships in over 195 countries, bringing hope, healing, and transformation to 
                  communities worldwide.
                </p>
                <p>
                  Our commitment remains unchanged: to fulfill the Great Commission by sending forth 
                  dedicated men and women who will proclaim the Gospel with boldness and love.
                </p>
              </div>
            </div>
            <div className="animate-slideInRight">
              <div className="bg-gradient-hero p-8 rounded-2xl text-white text-center">
                <div className="text-6xl font-bold mb-4">38+</div>
                <div className="text-xl mb-2">Years of Ministry</div>
                <div className="text-lg opacity-90">Faithful Service Since 1985</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="ministry-card p-12">
              <CardContent className="text-center">
                <Target className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="text-3xl font-heading font-bold text-foreground mb-6">
                  Our Mission
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To fulfill the Great Commission by preaching the Gospel of Jesus Christ to every 
                  nation, making disciples, and establishing thriving Christian communities that 
                  transform lives and societies through God's love.
                </p>
              </CardContent>
            </Card>

            <Card className="ministry-card p-12">
              <CardContent className="text-center">
                <Eye className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="text-3xl font-heading font-bold text-foreground mb-6">
                  Our Vision
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To see a world where every person has heard the Gospel and experienced the 
                  transforming power of Jesus Christ, resulting in communities marked by love, 
                  peace, and righteousness.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="ministry-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Our <span className="text-gradient">Core Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              These fundamental values guide everything we do in our ministry and mission work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={value.title} 
                className={`text-center animate-fadeInUp`} 
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Our <span className="text-gradient">Leadership</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Meet the dedicated leaders who guide our ministry with wisdom, integrity, and passion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <Card 
                key={leader.name} 
                className={`ministry-card p-8 text-center animate-fadeInUp`} 
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <CardContent className="space-y-6">
                  <div className="w-24 h-24 bg-gradient-hero rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold">
                    {leader.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-semibold text-foreground mb-2">
                      {leader.name}
                    </h3>
                    <p className="text-primary font-medium mb-4">{leader.position}</p>
                    <p className="text-muted-foreground leading-relaxed">
                      {leader.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;