import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Global Revival Conference 2024",
      date: "March 15-17, 2024",
      time: "6:00 PM - 9:00 PM EST",
      location: "Ministry Center, Gospel City",
      description: "Join thousands of believers from around the world for three days of powerful worship, teaching, and revival.",
      speaker: "Dr. John Smith & Special Guests",
      category: "Conference",
      featured: true
    },
    {
      title: "Healing & Miracles Crusade",
      date: "April 20, 2024",
      time: "7:00 PM - 10:00 PM EST",
      location: "Faith Arena, Hope City",
      description: "Experience God's healing power in an atmosphere of faith and expectation.",
      speaker: "Pastor Mary Johnson",
      category: "Crusade",
      featured: false
    },
    {
      title: "Youth Explosion Weekend",
      date: "May 3-5, 2024",
      time: "7:00 PM - 10:00 PM EST",
      location: "Victory Center, Faith Valley",
      description: "Dynamic youth event featuring worship, teaching, and fellowship for the next generation.",
      speaker: "Rev. David Wilson",
      category: "Youth Event",
      featured: false
    },
    {
      title: "Missions Impact Summit",
      date: "June 12-14, 2024",
      time: "9:00 AM - 6:00 PM EST",
      location: "International Convention Center",
      description: "Learn about global missions opportunities and how to get involved in reaching the nations.",
      speaker: "Missionary Leaders Panel",
      category: "Summit",
      featured: false
    }
  ];

  const pastEvents = [
    {
      title: "Christmas Celebration 2023",
      date: "December 25, 2023",
      attendees: "5,000+",
      highlights: "Special musical performances, inspiring messages, and community outreach"
    },
    {
      title: "Thanksgiving Harvest Festival",
      date: "November 23, 2023",
      attendees: "3,500+",
      highlights: "Gratitude services, community feast, and blessing distribution"
    },
    {
      title: "Summer Camp Revival",
      date: "July 15-22, 2023",
      attendees: "1,200+",
      highlights: "Life-changing testimonies, baptisms, and spiritual breakthrough"
    }
  ];

  const eventCategories = [
    { name: "Conferences", count: 12, color: "bg-red-100 text-red-800" },
    { name: "Crusades", count: 8, color: "bg-blue-100 text-blue-800" },
    { name: "Youth Events", count: 15, color: "bg-green-100 text-green-800" },
    { name: "Seminars", count: 20, color: "bg-purple-100 text-purple-800" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section flex items-center justify-center">
        <div className="hero-content max-w-4xl mx-auto px-4 py-20">
          <h1 className="hero-title font-heading mb-6">
            Ministry Events
          </h1>
          <p className="hero-subtitle max-w-3xl mx-auto leading-relaxed">
            Join us for life-changing events, conferences, and gatherings that will strengthen your faith and connect you with believers worldwide.
          </p>
        </div>
      </section>

      {/* Featured Event */}
      {upcomingEvents.filter(event => event.featured).map((event) => (
        <section key={event.title} className="py-16 bg-gradient-hero text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <span className="text-sm font-medium">FEATURED EVENT</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                {event.title}
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
                {event.description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="flex items-center justify-center space-x-3">
                  <Calendar className="w-6 h-6" />
                  <span className="text-lg">{event.date}</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Clock className="w-6 h-6" />
                  <span className="text-lg">{event.time}</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <MapPin className="w-6 h-6" />
                  <span className="text-lg">{event.location}</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button className="bg-white text-primary hover:bg-white/90 text-lg px-12 py-6">
                  Register Now
                </Button>
                <Button className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary text-lg px-12 py-6">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Upcoming Events */}
      <section className="ministry-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Upcoming <span className="text-gradient">Events</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Don't miss these powerful gatherings designed to inspire, equip, and transform lives.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Events List */}
            <div className="lg:col-span-2 space-y-6">
              {upcomingEvents.filter(event => !event.featured).map((event, index) => (
                <Card 
                  key={event.title} 
                  className={`ministry-card animate-fadeInUp`} 
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            event.category === 'Conference' ? 'bg-red-100 text-red-800' :
                            event.category === 'Crusade' ? 'bg-blue-100 text-blue-800' :
                            event.category === 'Youth Event' ? 'bg-green-100 text-green-800' :
                            'bg-purple-100 text-purple-800'
                          }`}>
                            {event.category}
                          </span>
                        </div>
                        <h3 className="text-2xl font-heading font-semibold text-foreground mb-3">
                          {event.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {event.description}
                        </p>
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4 text-primary" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4 text-primary" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4 text-primary" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Users className="w-4 h-4 text-primary" />
                            <span>Speaker: {event.speaker}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col space-y-3">
                        <Button className="btn-ministry">
                          Register Now
                        </Button>
                        <Button className="btn-outline-ministry">
                          More Details
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Event Categories */}
              <Card className="ministry-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-6">
                    Event Categories
                  </h3>
                  <div className="space-y-3">
                    {eventCategories.map((category) => (
                      <div key={category.name} className="flex items-center justify-between">
                        <span className="text-muted-foreground">{category.name}</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${category.color}`}>
                          {category.count}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Registration */}
              <Card className="ministry-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                    Stay Updated
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    Get notified about upcoming events and special announcements.
                  </p>
                  <Button className="btn-ministry w-full">
                    Subscribe to Updates
                  </Button>
                </CardContent>
              </Card>

              {/* Contact for Events */}
              <Card className="ministry-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                    Event Inquiries
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    Have questions about our events? Contact our events team.
                  </p>
                  <div className="space-y-2 text-sm">
                    <p className="text-muted-foreground">
                      📞 +1 (555) 123-4567
                    </p>
                    <p className="text-muted-foreground">
                      ✉️ events@sendmenworldwide.org
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Past <span className="text-gradient">Events</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Look back at the amazing events God has blessed us with and the lives that have been transformed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <Card 
                key={event.title} 
                className={`ministry-card p-6 animate-fadeInUp`} 
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <CardContent className="text-center space-y-4">
                  <h3 className="text-xl font-heading font-semibold text-foreground">
                    {event.title}
                  </h3>
                  <div className="text-3xl font-bold text-primary">
                    {event.attendees}
                  </div>
                  <p className="text-sm text-muted-foreground">attendees</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {event.highlights}
                  </p>
                  <p className="text-xs text-muted-foreground font-medium">
                    {event.date}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;