import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Play, Clock, Calendar, Users } from "lucide-react";
import Layout from "@/components/Layout";

const Watch = () => {
  const livePrograms = [
    {
      title: "Sunday Service Live",
      time: "10:00 AM EST",
      description: "Join us for powerful worship and life-changing messages every Sunday.",
      status: "live",
      viewers: "2.3K"
    },
    {
      title: "Wednesday Bible Study",
      time: "7:00 PM EST",
      description: "Deep dive into God's Word with practical applications for daily living.",
      status: "upcoming",
      viewers: "1.8K"
    },
    {
      title: "Friday Prayer Meeting",
      time: "8:00 PM EST",
      description: "Come together in prayer for breakthrough and spiritual revival.",
      status: "upcoming",
      viewers: "1.2K"
    }
  ];

  const onDemandShows = [
    {
      title: "Word of Faith",
      description: "Daily teachings on faith, hope, and God's promises for your life.",
      episodes: "500+",
      category: "Teaching"
    },
    {
      title: "Healing Hour",
      description: "Testimonies of God's healing power and prayers for divine health.",
      episodes: "200+",
      category: "Healing"
    },
    {
      title: "Youth Revival",
      description: "Inspiring messages and worship designed for the next generation.",
      episodes: "150+",
      category: "Youth"
    },
    {
      title: "Marriage & Family",
      description: "Biblical principles for strong marriages and godly families.",
      episodes: "100+",
      category: "Family"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section flex items-center justify-center">
        <div className="hero-content max-w-4xl mx-auto px-4 py-20">
          <h1 className="hero-title font-heading mb-6">
            Watch Live & On Demand
          </h1>
          <p className="hero-subtitle max-w-3xl mx-auto leading-relaxed">
            Experience the presence of God through our live broadcasts and on-demand programming available 24/7.
          </p>
        </div>
      </section>

      {/* Live Stream Section */}
      <section className="ministry-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              <span className="text-gradient">Live</span> Broadcasting
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join thousands of viewers worldwide as we broadcast live from our ministry center.
            </p>
          </div>

          {/* Main Live Player */}
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="ministry-card overflow-hidden">
              <div className="aspect-video bg-foreground relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                      <Play className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-2">Sunday Service</h3>
                    <p className="text-lg opacity-80">LIVE NOW</p>
                    <div className="flex items-center justify-center space-x-2 mt-4">
                      <Users className="w-5 h-5" />
                      <span>2,347 viewers</span>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium animate-pulse">
                    LIVE
                  </span>
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
                  "Walking in Divine Purpose" - Pastor John Smith
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Discover God's amazing plan for your life and learn how to walk confidently 
                  in His divine purpose. This powerful message will inspire and equip you for 
                  your God-given destiny.
                </p>
                <Button className="btn-ministry">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Live
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Live Schedule */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {livePrograms.map((program, index) => (
              <Card 
                key={program.title} 
                className={`ministry-card p-6 animate-fadeInUp`} 
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="font-medium">{program.time}</span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      program.status === 'live' 
                        ? 'bg-red-100 text-red-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {program.status === 'live' ? 'LIVE' : 'UPCOMING'}
                    </span>
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground">
                    {program.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {program.description}
                  </p>
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{program.viewers} viewers</span>
                    </div>
                    <Button size="sm" className="btn-outline-ministry">
                      {program.status === 'live' ? 'Watch' : 'Set Reminder'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* On Demand Section */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              On Demand <span className="text-gradient">Programs</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Access our complete library of teachings, sermons, and special programs anytime, anywhere.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {onDemandShows.map((show, index) => (
              <Card 
                key={show.title} 
                className={`ministry-card p-6 animate-fadeInUp`} 
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardContent className="space-y-4">
                  <div className="aspect-video bg-gradient-hero rounded-lg flex items-center justify-center">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                      {show.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{show.episodes} episodes</span>
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-foreground">
                    {show.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {show.description}
                  </p>
                  <Button size="sm" className="btn-outline-ministry w-full">
                    Watch Episodes
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Broadcast Schedule */}
      <section className="ministry-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Weekly <span className="text-gradient">Schedule</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Plan your week with our comprehensive broadcast schedule.
            </p>
          </div>

          <Card className="ministry-card max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="space-y-6">
                {[
                  { day: "Sunday", programs: ["10:00 AM - Sunday Service", "6:00 PM - Evening Worship"] },
                  { day: "Monday", programs: ["7:00 PM - Faith Building Hour"] },
                  { day: "Tuesday", programs: ["12:00 PM - Noon Prayer", "7:00 PM - Youth Revival"] },
                  { day: "Wednesday", programs: ["7:00 PM - Bible Study"] },
                  { day: "Thursday", programs: ["7:00 PM - Healing Hour"] },
                  { day: "Friday", programs: ["8:00 PM - Prayer Meeting"] },
                  { day: "Saturday", programs: ["10:00 AM - Children's Hour", "7:00 PM - Praise & Worship"] }
                ].map((schedule, index) => (
                  <div key={schedule.day} className="border-b border-border last:border-b-0 pb-4 last:pb-0">
                    <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0">
                      <div className="w-full md:w-32">
                        <h4 className="font-heading font-semibold text-foreground">{schedule.day}</h4>
                      </div>
                      <div className="flex-1">
                        <div className="space-y-1">
                          {schedule.programs.map((program, idx) => (
                            <div key={idx} className="text-muted-foreground">
                              {program}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Watch;