import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Download, Share2, Eye, Calendar } from "lucide-react";
import Layout from "@/components/Layout";

const Media = () => {
  const videos = [
    {
      title: "Walking in Divine Purpose - Sunday Service",
      description: "Pastor John Smith delivers a powerful message about discovering and walking in God's purpose for your life.",
      duration: "45:32",
      views: "12.5K",
      date: "March 10, 2024",
      category: "Sermon"
    },
    {
      title: "Prayer Changes Everything - Wednesday Study",
      description: "Learn the power of prayer and how it can transform every aspect of your life and ministry.",
      duration: "38:15",
      views: "8.7K",
      date: "March 6, 2024",
      category: "Teaching"
    },
    {
      title: "Youth Revival Night - Highlights",
      description: "Experience the highlights from our powerful youth revival night with worship and testimonies.",
      duration: "25:20",
      views: "15.2K",
      date: "February 28, 2024",
      category: "Event"
    },
    {
      title: "Healing Testimonies Compilation",
      description: "Witness amazing testimonies of God's healing power in the lives of our ministry partners.",
      duration: "32:45",
      views: "20.1K",
      date: "February 25, 2024",
      category: "Testimonies"
    },
    {
      title: "Missions Report - Africa Outreach",
      description: "See how God is moving in our African missions and the lives being transformed through the Gospel.",
      duration: "28:10",
      views: "6.8K",
      date: "February 20, 2024",
      category: "Missions"
    },
    {
      title: "Worship Night - Live Recording",
      description: "Join us in powerful worship with our ministry team and special guest musicians.",
      duration: "52:30",
      views: "18.3K",
      date: "February 15, 2024",
      category: "Worship"
    }
  ];

  const photoGalleries = [
    {
      title: "Global Revival Conference 2024",
      description: "Photos from our recent international conference with speakers and attendees from around the world.",
      imageCount: 85,
      date: "March 15-17, 2024"
    },
    {
      title: "Community Outreach - Food Distribution",
      description: "Our ministry team serving the community through food distribution and prayer.",
      imageCount: 42,
      date: "March 8, 2024"
    },
    {
      title: "Church Dedication - Nigeria",
      description: "Celebrating the dedication of a new church plant in Lagos, Nigeria.",
      imageCount: 67,
      date: "February 22, 2024"
    },
    {
      title: "Youth Camp 2024",
      description: "Young people experiencing God's presence at our annual youth camp.",
      imageCount: 125,
      date: "January 15-20, 2024"
    }
  ];

  const categories = [
    { name: "All Videos", count: 156, active: true },
    { name: "Sermons", count: 89, active: false },
    { name: "Teaching", count: 34, active: false },
    { name: "Testimonies", count: 23, active: false },
    { name: "Worship", count: 18, active: false },
    { name: "Events", count: 45, active: false },
    { name: "Missions", count: 12, active: false }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section flex items-center justify-center">
        <div className="hero-content max-w-4xl mx-auto px-4 py-20">
          <h1 className="hero-title font-heading mb-6">
            Media Gallery
          </h1>
          <p className="hero-subtitle max-w-3xl mx-auto leading-relaxed">
            Explore our collection of inspiring videos, powerful testimonies, and ministry moments captured from around the world.
          </p>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="ministry-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Video <span className="text-gradient">Library</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Watch our latest sermons, teachings, and ministry highlights from around the globe.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.name}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                  category.active
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <Card 
                key={video.title} 
                className={`ministry-card overflow-hidden animate-fadeInUp`} 
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Video Thumbnail */}
                <div className="aspect-video bg-gradient-hero relative group cursor-pointer">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/60 text-white px-2 py-1 rounded text-xs">
                    {video.duration}
                  </div>
                  <div className="absolute top-2 left-2">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      video.category === 'Sermon' ? 'bg-red-100 text-red-800' :
                      video.category === 'Teaching' ? 'bg-blue-100 text-blue-800' :
                      video.category === 'Event' ? 'bg-green-100 text-green-800' :
                      video.category === 'Testimonies' ? 'bg-yellow-100 text-yellow-800' :
                      video.category === 'Missions' ? 'bg-purple-100 text-purple-800' :
                      'bg-pink-100 text-pink-800'
                    }`}>
                      {video.category}
                    </span>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-2 line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2">
                    {video.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <Eye className="w-3 h-3" />
                      <span>{video.views} views</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{video.date}</span>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button size="sm" className="btn-ministry flex-1">
                      <Play className="w-4 h-4 mr-1" />
                      Watch
                    </Button>
                    <Button size="sm" variant="outline" className="px-3">
                      <Share2 className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="px-3">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Galleries */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Photo <span className="text-gradient">Galleries</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Browse through moments captured from our ministry events, outreach programs, and global missions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {photoGalleries.map((gallery, index) => (
              <Card 
                key={gallery.title} 
                className={`ministry-card overflow-hidden animate-fadeInUp cursor-pointer group`} 
                style={{animationDelay: `${index * 0.2}s`}}
              >
                {/* Gallery Thumbnail */}
                <div className="aspect-square bg-gradient-hero relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-3xl font-bold mb-2">{gallery.imageCount}</div>
                      <div className="text-sm opacity-90">Photos</div>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                    {gallery.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {gallery.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{gallery.date}</span>
                    <Button size="sm" className="btn-outline-ministry">
                      View Gallery
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-24 bg-gradient-hero text-white text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Never Miss a Moment
            </h2>
            <p className="text-xl mb-12 opacity-90 leading-relaxed">
              Subscribe to our media channels to stay updated with the latest sermons, teachings, and ministry highlights.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="bg-white text-primary hover:bg-white/90 text-lg px-12 py-6">
                Subscribe on YouTube
              </Button>
              <Button className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary text-lg px-12 py-6">
                Download Our App
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Media;