import { Phone, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Founders = () => {
  const founders = [
    {
      name: "Ruben Wadmane",
      role: "Founder",
      bio: "Visionary leader passionate about transforming how students interact with technology.",
      phone: "+91 80971 25129",
      linkedin: "https://www.linkedin.com/in/ruben-wadmane", // Yahan apna asli username dalein
    },
    {
      name: "Atharva Deokar",
      role: "Co-Founder",
      bio: "Tech wizard who turned frustration into innovation with smart printing solutions.",
      phone: "+91 89764 31046",
      linkedin: "https://www.linkedin.com/in/atharva-deokar-3993a01ba", // Yahan apna asli username dalein
    },
    {
      name: "Khushali Singala",
      role: "Co-Founder",
      bio: "Operations expert ensuring seamless printing experiences for every user.",
      phone: "+91 7972396229",
      linkedin: "https://www.linkedin.com/in/khushali-singala-2066a1331", // Yahan apna asli username dalein
    },
  ];

  return (
    <div className="min-h-screen py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-gradient-primary">
            Meet Our Founders
          </h1>
          <div className="h-1 w-32 bg-gradient-primary mx-auto mb-8 rounded-full" />
          <p className="text-xl text-foreground/90 leading-relaxed">
            The minds behind PX - students who transformed their frustration into India's first instant smart printing system.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="glass rounded-3xl p-8 smooth-transition hover:scale-105 animate-fade-in"
              style={{
                animationDelay: `${index * 0.2}s`,
                border: "2px solid transparent",
                backgroundImage:
                  "linear-gradient(hsl(222 47% 11%), hsl(222 47% 11%)), linear-gradient(135deg, hsl(272 68% 50%), hsl(187 95% 43%))",
                backgroundOrigin: "border-box",
                backgroundClip: "padding-box, border-box",
              }}
            >
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-primary glow-primary flex items-center justify-center">
                <span className="text-5xl font-heading font-bold text-primary-foreground">
                  {founder.name.charAt(0)}
                </span>
              </div>

              <h3 className="text-2xl font-heading font-bold mb-2 text-gradient-primary">
                {founder.name}
              </h3>
              
              <p className="text-accent font-semibold mb-4">{founder.role}</p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                {founder.bio}
              </p>

              <div className="flex flex-col gap-3">
                {/* --- PHONE CALL BUTTON --- */}
                <a href={`tel:${founder.phone.replace(/[^0-9+]/g, "")}`} className="w-full block">
                <Button
                 variant="outline"
                  className="w-full glass border-primary text-primary glow-primary smooth-transition hover:scale-105"
                  >
                 <Phone className="w-4 h-4 mr-2" />
                    {founder.phone}
                   </Button>
                   </a>
                
                {/* --- LINKEDIN BUTTON --- */}
                <a 
                  href={founder.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full"
                >
                  <Button
                    variant="outline"
                    className="w-full glass border-secondary text-secondary glow-secondary smooth-transition hover:scale-105"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    Connect on LinkedIn
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