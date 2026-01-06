import pxLogo from "../assets/px-logo.png";

import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-background border-t border-primary/30 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          <img src={pxLogo} alt="PX Logo" className="w-20 h-20 glow-primary" />
          
          <h3 className="text-2xl font-heading font-bold text-gradient-primary">
            Print Instantly. Think Differently.
          </h3>
          
          <p className="text-muted-foreground text-center max-w-md">
            India's first instant smart printing system. Making printing as seamless as tapping your phone.
          </p>
          
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} PX. All rights reserved.
          </div>
          
          <button
            onClick={scrollToTop}
            className="glass rounded-full p-3 glow-primary smooth-transition hover:scale-110"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6 text-primary" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
