import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import neonPrinter from "@/assets/neon-printer.png";

const Home = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Neon Printer Background */}
      <div className="fixed inset-0 flex items-center justify-center opacity-35 p-8 -z-10">
        <img 
          src={neonPrinter} 
          alt="Neon printer background" 
          className="w-full h-full object-contain animate-pulse-glow border-[20px] border-primary/90 rounded-2xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        <h1 className="text-6xl md:text-8xl font-heading font-bold mb-6 text-gradient-primary animate-fade-in">
          Print Instantly.
          <br />
          Think Differently.
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground/90 mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Smart printing. In less than 30 seconds.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Link to="/about">
            <Button
              size="lg"
              className="glass glow-primary smooth-transition hover:scale-105 bg-gradient-primary text-primary-foreground font-heading font-semibold text-lg px-8 py-6"
            >
              Know More
              <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>

        {/* Floating Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 max-w-4xl mx-auto">
          {[
            { value: "< 30s", label: "Print Time" },
            { value: "100%", label: "Smart & Automated" },
            { value: "24/7", label: "Always Available" },
          ].map((stat, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-8 glow-primary smooth-transition hover:scale-105 animate-float"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="text-4xl font-heading font-bold text-gradient-secondary mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
