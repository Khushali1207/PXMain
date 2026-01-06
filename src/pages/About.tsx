import { Zap, Clock, Smartphone } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Instant Printing",
      description: "No more waiting in long queues. Upload your document and collect your print in under 30 seconds.",
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Time Efficient",
      description: "Save hours every week. PX eliminates the frustration of traditional printing systems.",
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Smart & Connected",
      description: "Control everything from your phone. Upload, pay, and track your prints seamlessly.",
    },
  ];

  return (
    <div className="min-h-screen py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-gradient-primary">
            About PX
          </h1>
          <div className="h-1 w-32 bg-gradient-primary mx-auto mb-8 rounded-full" />
          <p className="text-xl text-foreground/90 leading-relaxed">
            PX is India's first instant smart printing system designed to eliminate the pain of long print queues and make printing as effortless as tapping your phone.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass rounded-3xl p-8 smooth-transition hover:scale-105 glow-primary animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-primary mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-heading font-bold mb-4 text-gradient-primary">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="glass rounded-3xl p-12 max-w-4xl mx-auto glow-secondary">
          <h2 className="text-4xl font-heading font-bold mb-6 text-center text-gradient-primary">
            Our Mission
          </h2>
          <p className="text-xl text-foreground/90 text-center mb-8">
            "To make printing as seamless as tapping your phone."
          </p>
          
          <div className="h-px bg-gradient-primary my-8" />
          
          <h2 className="text-4xl font-heading font-bold mb-6 text-center text-gradient-primary">
            Our Vision
          </h2>
          <p className="text-xl text-foreground/90 text-center">
            "A world where printing is instant, connected, and stress-free."
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
