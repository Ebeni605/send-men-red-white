import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Programs", path: "/programs" },
    { name: "Events", path: "/events" },
    { name: "Media", path: "/media" },
    { name: "Contact", path: "/contact" }
  ];

  const ministryLinks = [
    { name: "Watch Live", path: "/watch" },
    { name: "Prayer Request", path: "/prayer" },
    { name: "Devotionals", path: "/devotionals" },
    { name: "Donate", path: "/donate" },
    { name: "Ways to Give", path: "/giving" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Ministry Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-16 h-16 relative">
                <img 
                  src="/lovable-uploads/baeb0440-8c5a-4d44-a11b-8a2550e7a0fd.png" 
                  alt="Send Me Worldwide Gospel Ministry Logo" 
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-background">
                  SEND ME WORLDWIDE
                </h3>
                <p className="text-sm text-background/80">GOSPEL MINISTRY</p>
              </div>
            </div>
            <p className="text-background/80 leading-relaxed">
              Dedicated to spreading the Gospel of Jesus Christ worldwide through powerful 
              preaching, teaching, and outreach programs. Isaiah 6:8 - Mark 16:15. 
              Join us in our mission to reach every nation.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-primary/20 hover:bg-primary text-background hover:text-primary-foreground rounded-full flex items-center justify-center transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-background mb-6">
              Quick Links
            </h4>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block text-background/80 hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Ministry Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-background mb-6">
              Ministry
            </h4>
            <nav className="space-y-3">
              {ministryLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block text-background/80 hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-background mb-6">
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-background/80">
                    123 Ministry Lane<br />
                    Gospel City, GC 12345<br />
                    United States
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a 
                  href="tel:+1-555-PRAY-NOW" 
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  +1 (555) PRAY-NOW
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a 
                  href="mailto:info@sendmeworldwide.org" 
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  info@sendmeworldwide.org
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/60 text-sm">
              © {currentYear} Send Me Worldwide Gospel Ministry. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-background/60 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-background/60 hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-background/60 hover:text-primary transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;