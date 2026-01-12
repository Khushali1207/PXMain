import { Phone, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Founders = () => {
  const founders = [
    {
      name: "Ruben Wadmane",
      role: "CEO ",
      bio: "The strategist driving PX's mission to revolutionize self-service infrastructure across India.",
      phone: "+91 80971 25129",
      linkedin: "https://www.linkedin.com/in/ruben-wadmane",
    },
    {
      name: "Atharva Deokar",
      role: "CTO ",
      bio: "The engineering brain building the high-speed software matrix that powers every PX machine.",
      phone: "+91 89764 31046",
      linkedin: "https://www.linkedin.com/in/atharva-deokar-3993a01ba",
    },
    {
      name: "Khushali Singala",
      role: "CFO ",
      bio: "Managing the financial engine and ensuring sustainable growth for the smartest printing network.",
      phone: "+91 7972396229",
      linkedin: "https://www.linkedin.com/in/khushali-singala-2066a1331",
    },
    {
      name: "Kaushik Sudagare",
      role: "COO ",
      bio: "The logistics expert optimizing operations to deliver a flawless 'One-Tap' experience everywhere.",
      phone: "+91 91366 21435",
      linkedin: "https://www.linkedin.com/in/kaushik-sugadare-55b105338",
    },
  ];

  return (
    <div className="min-h-screen py-32 bg-black">
      <div className="container mx-auto px-4">
        
        {/* --- HEADER --- */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-gradient-primary">
            Meet Our Founders
          </h1>
          <div className="h-1 w-32 bg-gradient-primary mx-auto mb-8 rounded-full" />
          <p className="text-xl text-foreground/90 leading-relaxed italic">
            The minds behind PX - students who transformed their frustration into India's first instant smart printing system.
          </p>
        </div>

        {/* --- 4 COLUMN GRID (SAB EK LINE MEIN) --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[90rem] mx-auto">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="glass rounded-3xl p-8 smooth-transition hover:scale-105 animate-fade-in flex flex-col h-full"
              style={{
                animationDelay: `${index * 0.2}s`,
                border: "2px solid transparent",
                backgroundImage:
                  "linear-gradient(hsl(222 47% 11%), hsl(222 47% 11%)), linear-gradient(135deg, hsl(272 68% 50%), hsl(187 95% 43%))",
                backgroundOrigin: "border-box",
                backgroundClip: "padding-box, border-box",
              }}
            >
              {/* Profile Avatar */}
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-primary glow-primary flex items-center justify-center shrink-0">
                <span className="text-4xl font-heading font-bold text-primary-foreground">
                  {founder.name.charAt(0)}
                </span>
              </div>

              {/* Content Section */}
              <div className="flex-1 text-center">
                <h3 className="text-xl font-heading font-bold mb-1 text-gradient-primary uppercase tracking-tight">
                  {founder.name}
                </h3>
                <p className="text-accent font-black text-xs mb-4 uppercase tracking-widest">{founder.role}</p>
                <p className="text-muted-foreground leading-relaxed mb-6 text-sm italic">
                  {founder.bio}
                </p>
              </div>

              {/* Buttons Section */}
              <div className="flex flex-col gap-3 mt-auto">
                <a href={`tel:${founder.phone.replace(/[^0-9+]/g, "")}`} className="w-full">
                  <Button
                    variant="outline"
                    className="w-full glass border-primary text-primary glow-primary smooth-transition hover:scale-105 text-[10px] font-black uppercase"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    {founder.phone}
                  </Button>
                </a>
                
                <a 
                  href={founder.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full"
                >
                  <Button
                    variant="outline"
                    className="w-full glass border-secondary text-secondary glow-secondary smooth-transition hover:scale-105 text-[10px] font-black uppercase"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    Connect
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Founders;