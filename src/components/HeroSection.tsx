import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-ministry.jpg";

const HeroSection = () => {
  return (
    <section className="hero-section flex items-center justify-center relative">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Ministry outreach worldwide" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-primary/80"></div>
      </div>
      
      {/* Content */}
      <div className="hero-content max-w-6xl mx-auto px-4 py-20">
        <div className="animate-fadeInUp">
          <h1 className="hero-title font-heading mb-6">
            SEND ME WORLDWIDE
            <span className="block text-4xl md:text-5xl font-light opacity-90">
              GOSPEL MINISTRY
            </span>
            <span className="block text-2xl md:text-3xl font-light opacity-80 mt-4">
              Isaiah 6:8 • Mark 16:15
            </span>
          </h1>
          
          <p className="hero-subtitle max-w-3xl mx-auto mb-12 leading-relaxed">
            Spreading the Gospel of Jesus Christ to every nation, tribe, and tongue. 
            Join us in our mission to reach the world with the transforming power of God's love.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/watch">
              <Button className="btn-ministry text-lg px-12 py-6 animate-pulseGlow">
                WATCH LIVE
              </Button>
            </Link>
            <Link to="/about">
              <Button className="btn-outline-ministry text-lg px-12 py-6 border-white text-white hover:bg-white hover:text-primary">
                LEARN MORE
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;