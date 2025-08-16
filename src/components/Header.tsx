import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActivePath = (path: string) => location.pathname === path;

  const navigationItems = [
    { name: "Home", path: "/" },
    { 
      name: "Watch", 
      path: "/watch",
      dropdown: [
        { name: "Watch Live", path: "/watch" },
        { name: "Our Programs", path: "/programs" },
        { name: "Broadcast Schedule", path: "/schedule" }
      ]
    },
    { name: "Prayer", path: "/prayer" },
    { 
      name: "Giving", 
      path: "/donate",
      dropdown: [
        { name: "Donate Now", path: "/donate" },
        { name: "Ways to Give", path: "/giving" }
      ]
    },
    { name: "About", path: "/about" },
    { name: "Events", path: "/events" },
    { name: "Media", path: "/media" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-16 h-16 relative">
              <img 
                src="/lovable-uploads/baeb0440-8c5a-4d44-a11b-8a2550e7a0fd.png" 
                alt="Send Me Worldwide Gospel Ministry Logo" 
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <div className="hidden md:block">
              <h1 className="text-xl font-heading font-bold text-foreground">
                SEND ME WORLDWIDE
              </h1>
              <p className="text-sm text-muted-foreground -mt-1">GOSPEL MINISTRY</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger className="nav-link flex items-center space-x-1 text-foreground hover:text-primary">
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {item.dropdown.map((subItem) => (
                        <DropdownMenuItem key={subItem.name} asChild>
                          <Link to={subItem.path} className="w-full">
                            {subItem.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    to={item.path}
                    className={`nav-link text-foreground hover:text-primary ${
                      isActivePath(item.path) ? "active" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Donate Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/donate">
              <Button className="btn-ministry animate-pulseGlow">
                DONATE
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.path}
                    className={`block px-4 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors ${
                      isActivePath(item.path) ? "text-primary bg-muted" : ""
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block px-4 py-1 text-sm text-muted-foreground hover:text-primary"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="px-4 pt-4">
                <Link to="/donate" onClick={() => setIsMenuOpen(false)}>
                  <Button className="btn-ministry w-full">
                    DONATE
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;